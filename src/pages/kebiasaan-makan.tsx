import { KebiasaanMakan, Navbar } from "@/components";
import Head from "next/head";

export default function kebiasaanMakan() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Gaya Hidup</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <Navbar />
      <KebiasaanMakan />
    </>
  );
}
