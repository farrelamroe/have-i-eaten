import {
  Button,
  Container,
  dataBeranda,
  Footer,
  H1,
  H2,
  H3,
  H4,
  ListCard,
  Qna,
  Text,
} from "@/components";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Beranda() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (windowWidth === null) {
    return null;
  }

  let HeadingTag: any;
  if (windowWidth >= 768) {
    HeadingTag = H2;
  } else {
    HeadingTag = H4;
  }
  return (
    <>
      <Container
        className="h-screen bg-white"
       background="/hero.png"
      >
        <div className="relative top-[50%] z-0 lg:pl-[64px]">
          <H1 className="font-crimson font-bold text-secondary-200">
            Have I Eaten
          </H1>
          <H3 className="font-crimson text-primary-200">
            Nutrition Hub for Gen Z
          </H3>
          <Text
            size="lg"
            className="max-w-[240px] py-[20px] font-urbanist md:max-w-[360px] xl:max-w-[540px] text-white"
          >
            Have I Eaten merupakan platform literasi gizi digital yang
            menyajikan informasi berbasis ilmiah terkait personalized nutrition.
          </Text>
          <Button text="Daftar Jadi Member" size="xs" color="primary-400" href="/404" />
        </div>
      </Container>
      <div className="bg-secondary-300 p-[24px]">
        <Container className="rounded-[20px] bg-white">
          <div className="flex flex-row items-center justify-center gap-x-5 xl:gap-x-[128px]">
            <Image
              src="/logo.png"
              alt=""
              width={1000}
              height={1000}
              className="h-full max-h-[200px] w-full max-w-[100px] object-cover sm:max-w-[400px] md:max-h-[300px]"
            />
            <div className="flex flex-col items-center justify-center lg:items-start">
              <HeadingTag className="font-semiboldlg:max-w-[505.3px] font-urbanist">
                Yuk Jadi Member Have I Eaten!
              </HeadingTag>
              <Text
                size="md"
                className="py-[8px] font-urbanist xs:py-[16px] lg:max-w-[485.5px]"
              >
                Dengan menjadi member Have I Eaten, kamu akan mendapatkan
                benefit:
              </Text>
              <ul className="list-disc pl-5 font-urbanist text-[12px] leading-[18px] lg:text-[14px] lg:leading-[21px]">
                <li>
                  Akses penuh pada fitur QnA di website Have I Eaten, selamanya!
                </li>
                <li>
                  Free e-book Guided Diet Journal Lite version senilai Rp49.000
                </li>
                <li>
                  Kesempatan mengikuti kelas online Have I Eaten senilai
                  Rp79.000
                </li>
                <li>
                  Kesempatan ekslusif mengajukan pertanyaan dan mendapatkan
                  jawaban dari ahli
                </li>
                <li>
                  Tergabung dalan komunitas ekslusif Have I Eaten di Whatsapp
                  Group
                </li>
              </ul>
              <Button
                text="Daftar Member"
                size="xs"
                color="primary-400"
                className="mt-[16px]"
                href="/404"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-grey p-[24px]">
        <Container className="rounded-[20px] bg-white">
          <H1 className="text-center font-urbanist font-bold text-secondary-300">
            Personalized Nutrition
          </H1>
          <Text
            size="lg"
            className="text mx-auto mt-[45px] block max-w-[664.4px] text-center font-urbanist"
          >
            Personalized nutrition merupakan konsep yang menunjukkan bahwa
            setiap individu memiliki respons yang berbeda terhadap zat gizi dan
            makanan sebab dipengaruhi oleh berbagai hal yang bersifat personal.
            Dengan pendekatan ini, seseorang dapat memiliki pola makan yang baik
            dengan cara yang paling sesuai bagi dirinya.
          </Text>
          <Button
            text="Baca Selengkapnya"
            size="lg"
            color="secondary-300"
            className="mx-auto mt-[64px] block"
            href="/personalized-nutrition"
          />
        </Container>
        <Container className="mt-[24px] rounded-[20px] bg-white">
          <div>
            <H1 className="text-center font-urbanist font-bold text-secondary-300">
              Gizi Untuk Gen Z
            </H1>
            <Text
              size="lg"
              className="mx-auto mt-[45px] block max-w-[664.4px] text-center font-urbanist lg:mt-[11px] lg:max-w-[489.9px]"
            >
              Kenali diri lebih dalam dengan mengetahui status gizi, kebutuhan
              gizi, hingga body image
            </Text>
          </div>
          <Container className="gap-x-[24px] rounded-[20px] sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {dataBeranda.map(({ title, text, image, buttonText, href }) => {
              return (
                <ListCard
                  key={title}
                  title={title}
                  text={text}
                  image={image}
                  buttonText={buttonText}
                  href={href}
                  className="bg-primary-300 text-white"
                />
              );
            })}
          </Container>
        </Container>
      </div>
      <Qna />
      <Footer />
    </>
  );
}
