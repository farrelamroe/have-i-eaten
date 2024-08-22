import { Beranda, Navbar } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Beranda</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <main>
        <Navbar />
        <Beranda />
      </main>
    </>
  );
}
