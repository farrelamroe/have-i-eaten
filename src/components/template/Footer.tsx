import { Container, dataFooter, H2 } from "@/components";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Image src="/logo.png" alt="image" width={379} height={379} />
          <H2 className="mt-[64px] font-crimson font-bold text-primary-300">
            Nutrition Hub for Gen Z
          </H2>
          <div className="mt-[40px] flex flex-row gap-x-[8px]">
            {dataFooter.map(({ image, href }, i) => {
              return (
                <a href={href} key={i}>
                  <Image src={image} alt="image" width={40} height={40} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
