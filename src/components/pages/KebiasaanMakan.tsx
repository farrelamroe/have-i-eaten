import {
  Container,
  dataKebiasaanMakan,
  dataManajemenPolaMakan,
  Footer,
  H1,
  H4,
  ListCard,
  Qna,
  Text,
} from "@/components";
import Image from "next/image";

export function KebiasaanMakan() {
  return (
    <>
      <Container className="h-screen bg-white">
        <Image
          src="/image.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute right-0 top-0 h-full max-h-[300px] w-full max-w-[200px]"
        />
        <div className="relative top-[50%] z-0 lg:pl-[64px]">
          <H1 className="font-crimson font-bold text-secondary-300">
            Kebiasaan Makan
          </H1>
          <Text
            size="regular"
            className="max-w-[240px] py-[20px] text-justify font-urbanist md:max-w-[360px] xl:max-w-[540px]"
          >
            Cari tahu bagaimana asupan zat gizi, frekuensi, persiapan, porsi,
            dan pemilihan jenis makanan
          </Text>
        </div>
      </Container>
      <div className="bg-grey p-[24px]">
        <Container className="rounded-[20px] bg-white">
          <div className="flex flex-row flex-wrap justify-center gap-[24px]">
            {dataKebiasaanMakan.map(({ title, text, image, buttonText }) => {
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
        <Container className="rounded-[20px] bg-primary-300">
          <H1 className="text-center font-crimson text-secondary-300">
            Manajemen Pola Makan
          </H1>
          <H4 className="text-center font-urbanist">
            Apapun aktivitas harianmu, mengatur pola makan merupakan hal yang
            sangat penting.
          </H4>
          <div className="mt-[24px] flex flex-row flex-wrap justify-center gap-[24px]">
            {dataManajemenPolaMakan.map(
              ({ title, text, image, buttonText }) => {
                return (
                  <ListCard
                    key={title}
                    title={title}
                    text={text}
                    image={image}
                    buttonText={buttonText}
                    className="max-w-[300px] rounded-[16px] bg-white p-[16px] shadow-2xl"
                  />
                );
              },
            )}
          </div>
        </Container>
      </div>
      <Qna />
      <Footer />
    </>
  );
}
