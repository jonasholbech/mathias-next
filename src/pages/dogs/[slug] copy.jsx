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
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Image {...content.image} sizes="(max-width: 768px) 100vw, 750px " />
      <Anchor href="/">Back home</Anchor>
    </>
  );
}

export async function getServerSideProps(context) {
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
