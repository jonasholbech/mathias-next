import Head from "next/head";
import Image from "next/image";
import Anchor from "@/components/Anchor";
export default function Dogs({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div style={{ background: content.text.split(" ").at(-1).split(".")[0] }}>
        <h1>{content.heading}</h1>
        <p>{content.text}</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <Image {...content.image} sizes="(max-width: 768px) 100vw, 750px " />
        <Anchor href="/">Back home</Anchor>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://bucolic-bombolone-857476.netlify.app/api/dogs/"
  );
  const data = await res.json();
  console.log(data);
  const pages = data.map((dog) => ({ params: { slug: dog.slug } }));
  return {
    paths: pages,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
