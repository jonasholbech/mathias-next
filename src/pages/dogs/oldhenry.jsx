import Anchor from "@/components/Anchor";
import Image from "next/image";
import Head from "next/head";
export default function Henry({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Image {...content.image} sizes="(max-width: 768px) 100vw, 750px" />
      <Anchor href="/">Back home</Anchor>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "https://bucolic-bombolone-857476.netlify.app/api/dogs/henry"
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
}
