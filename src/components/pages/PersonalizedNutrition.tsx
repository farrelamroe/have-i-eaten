import {
  Container,
  H2,
  H3,
  Button,
  Text,
  H1,
  H4,
  ListCard,
  dataKebutuhanEnergi,
  Footer,
  Qna,
  H5,
} from "@/components";
import Image from "next/image";

export function PersonalizedNutrition() {
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
            Personalized Nutrition
          </H2>
          <Text
            size="regular"
            className="max-w-[240px] py-[20px] font-urbanist md:max-w-[360px] xl:max-w-[540px] text-justify"
          >
            Personalized nutrition merupakan konsep yang menunjukkan bahwa
            setiap individu memiliki respons yang berbeda terhadap zat gizi dan
            makanan sebab dipengaruhi oleh berbagai hal yang bersifat personal.
            Dengan pendekatan ini, seseorang dapat memiliki pola makan yang baik
            dengan cara yang paling sesuai bagi dirinya.Personalized nutrition
            merupakan konsep yang menunjukkan bahwa setiap individu memiliki
            respons yang berbeda terhadap zat gizi dan makanan sebab dipengaruhi
            oleh berbagai hal yang bersifat personal. Dengan pendekatan ini,
            seseorang dapat memiliki pola makan yang baik dengan cara yang
            paling sesuai bagi dirinya.
          </Text>
        </div>
      </Container>
      <div className="bg-grey p-[24px]">
        <Container className="bg-white">
          <Image
            src="/image.png"
            alt=""
            width={500}
            height={500}
            className="mx-auto block"
          />
          <H2 className="mx-auto block max-w-[736px] text-center font-urbanist">
            Apa saja yang membuat kebutuhan energi dan zat gizi setiap individu
            berbeda?
          </H2>
          <div className="gap-x-[24px] sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {dataKebutuhanEnergi.map(({ title, text, image, buttonText }) => {
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
        </Container>
      </div>
      <div className="bg-grey p-[24px]">
        <Container className="bg-white">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <Image
              src="/image.png"
              alt=""
              width={500}
              height={500}
              className="mx-auto block"
            />
            <H5 className="font-urbanist">
              Dalam konsep Personalized Nutrition, <strong>Gen</strong> memiliki
              peran penting dalam menentukan kebutuhan akan zat gizi.
            </H5>
          </div>
        </Container>
      </div>
      <Qna />
      <Footer />
    </>
  );
}
