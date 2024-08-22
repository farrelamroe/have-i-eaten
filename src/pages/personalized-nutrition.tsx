import { Navbar, PersonalizedNutrition } from "@/components";
import Head from "next/head";

export default function personalizedNutrition() {
  return (
    <>
      <Head>
        <title>Have I Eaten - Personalized Nutrition</title>
        <link rel="icon" href="/image.png" />
      </Head>
      <main>
        <Navbar />
        <PersonalizedNutrition />
      </main>
    </>
  );
}
