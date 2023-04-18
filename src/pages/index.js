import Head from "next/head";
import Anchor from "@/components/Anchor";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>HELLOOOOOO</title>
      </Head>
      <h1>Hello next</h1>
      <Anchor href="/dogs/henry">Henry</Anchor>
    </>
  );
}
