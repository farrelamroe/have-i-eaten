import { Beranda } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Have I Eaten</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <main>
        <Beranda />
      </main>
    </>
  );
}
