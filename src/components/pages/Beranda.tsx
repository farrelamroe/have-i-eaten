import {
  Button,
  Container,
  H1,
  H2,
  H3,
  H4,
  Footer,
  Text,
  ListCard,
  Qna,
  dataBeranda,
} from "@/components";
import Image from "next/image";

export function Beranda() {
  return (
    <>
      <Container className="bg-white">
        <Image
          src="/image.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 h-[400px] w-[100px]"
        />
        <div className="relative z-0 lg:pl-[64px]">
          <H2 className="font-crimson font-bold text-secondary-300">
            Have I Eaten
          </H2>
          <H3 className="font-crimson text-primary-400">
            Nutrition Hub for Gen Z
          </H3>
          <Text
            size="regular"
            className="max-w-[240px] py-[20px] font-urbanist md:max-w-[360px] xl:max-w-[540px]"
          >
            Website ini menyajikan informasi yang bersifat evidence-based
            terkait personalized nutrition dengan fokus utama gizi pada usia
            remaja dan dewasa awal.
          </Text>
          <Button text="Daftar Jadi Member" size="xs" color="primary-400" />
        </div>
      </Container>
      <div className="bg-secondary-300 p-[24px]">
        <Container className="bg-white">
          <div className="flex flex-row items-center justify-center gap-x-5 xl:gap-x-[128px]">
            <Image
              src="/image.png"
              alt=""
              width={1000}
              height={1000}
              className="max-h-[200px] max-w-[100px] object-cover sm:max-w-[400px] md:max-h-[300px]"
            />
            <div className="flex flex-col items-center justify-center lg:items-start">
              <H4 className="font-urbanist font-semibold md:hidden">
                Sudahkah kamu makan dengan baik?
              </H4>
              <H2 className="hidden font-urbanist font-semibold md:block lg:max-w-[505.3px]">
                Sudahkah kamu makan dengan baik?
              </H2>
              <Text
                size="lg"
                className="py-[8px] font-urbanist xs:py-[16px] md:py-[40px] lg:max-w-[485.5px]"
              >
                Ikuti tur ini dan cari tahu bagaimana Have I Eaten akan
                membantumu memahami pola makan yang paling sesuai untukmu
              </Text>
              <Button text="Ikuti Tur" size="xs" color="primary-400" />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-grey p-[24px]">
        <Container className="bg-white">
          <H1 className="text-center font-urbanist font-bold">
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
            blank={false}
          />
        </Container>
        <Container className="mt-[24px] bg-white lg:flex lg:flex-row lg:px-[137px] lg:py-[79px]">
          <div>
            <H1 className="text-center font-urbanist font-bold lg:text-start">
              Gizi Untuk Gen Z
            </H1>
            <Text
              size="lg"
              className="mx-auto mt-[45px] block max-w-[664.4px] text-start font-urbanist lg:mt-[11px] lg:max-w-[489.9px]"
            >
              Kenali diri lebih dalam dengan mengetahui status gizi, kebutuhan
              gizi, hingga body image
            </Text>
          </div>
          <Button
            text="Pelajari"
            size="lg"
            color="secondary-300"
            className="mx-auto mt-[64px] block"
          />
        </Container>
        <div className="gap-x-[24px] sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {dataBeranda.map(({ title, text, image, buttonText }) => {
            return (
              <Container className="mt-[24px] bg-white" key={title}>
                <ListCard
                  title={title}
                  text={text}
                  image={image}
                  buttonText={buttonText}
                />
              </Container>
            );
          })}
        </div>
      </div>
      <Qna />
      <Footer />
    </>
  );
}
