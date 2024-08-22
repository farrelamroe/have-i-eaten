import { Navbar, SosioEkonomi } from "@/components";
import Head from "next/head";

export default function sosioEkonomi() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Sosio Ekonomi</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <Navbar />
      <SosioEkonomi />
    </>
  );
}
