import { Navbar, Pengetahuan } from "@/components";
import Head from "next/head";

export default function pengetahuan() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Gaya Hidup</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <Navbar />
      <Pengetahuan />
    </>
  );
}
