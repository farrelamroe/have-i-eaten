import {
  Container,
  dataKebutuhanEnergi,
  Footer,
  H2,
  H5,
  ListCard,
  Qna,
  Text,
} from "@/components";
import Image from "next/image";

export function PersonalizedNutrition() {
  return (
    <>
      <Container className="h-screen bg-white">
        <Image
          src="/image.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 h-[400px] w-[100px]"
        />
        <div className="relative top-[40%] z-0 lg:pl-[64px]">
          <H2 className="font-crimson font-bold text-secondary-300">
            Personalized Nutrition
          </H2>
          <Text
            size="regular"
            className="max-w-[240px] py-[20px] text-justify font-urbanist md:max-w-[360px] xl:max-w-[540px]"
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
        <Container className="rounded-[20px] bg-white">
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
          <div className="mt-[24px] flex flex-row flex-wrap justify-center gap-[24px]">
            {dataKebutuhanEnergi.map(({ title, text, image, buttonText }) => {
              return (
                <ListCard
                  key={title}
                  title={title}
                  text={text}
                  image={image}
                  buttonText={buttonText}
                  className="max-w-[300px] rounded-[16px] bg-primary-300 p-[16px] text-white shadow-2xl"
                />
              );
            })}
          </div>
        </Container>
      </div>
      <div className="bg-grey p-[24px]">
        <Container className="rounded-[20px] bg-white">
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
              peran penting dalam menentukan kebutuhan akan zat gizi. Gen adalah
              unit dasar pewarisan genetik yang diturunkan dari orang tua pada
              anaknya. Gen tersusun atas rangkaian DNA yang berfungsi untuk
              menyimpan informasi genetik. <br />
              Hubungan antara gen dan gizi dinamakan “Nutrigenomik” dan
              “Nutrigenetik” <br />
              Nutrigenomik: Bagaimana diet dan status gizi dapat mempengaruhi
              profil genetik individu <br />
              Nutrigenetik: Bagaimana variasi gen dapat mempengaruhi respon kita
              terhadap makanan
            </H5>
          </div>
        </Container>
      </div>
      <Qna />
      <Footer />
    </>
  );
}
