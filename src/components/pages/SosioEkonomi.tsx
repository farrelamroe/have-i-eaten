import {
  Container,
  dataSosioEkonomi,
  Footer,
  H1,
  ListCard,
  Qna,
  Text,
} from "@/components";

export function SosioEkonomi() {
  return (
    <>
      <Container className="h-screen" background='/hero.png'>
        <div className="relative top-[50%] z-0 lg:pl-[64px]">
          <H1 className="font-crimson font-bold text-primary-200">
            Sosio Ekonomi
          </H1>
          <Text
            size="regular"
            className="max-w-[240px] py-[20px] text-justify font-urbanist md:max-w-[360px] xl:max-w-[540px] text-white"
          >
            Pahami bagaiman faktor sosio-ekonomi mempengaruhi akses dan
            kebiasaan makan
          </Text>
        </div>
      </Container>
      <div className="bg-grey p-[24px]">
        <Container className="rounded-[20px] bg-white">
          <div className="flex flex-row flex-wrap justify-center gap-[24px]">
            {dataSosioEkonomi.map(({ title, text, image, buttonText }) => {
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
      <Qna />
      <Footer />
    </>
  );
}
