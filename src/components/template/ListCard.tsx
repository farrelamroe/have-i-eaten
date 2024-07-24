import Image from "next/image";
import { Button, Container, H2, Text } from "@/components";

export function ListCard(props: any) {
  const { title, text, image, buttonText } = props;

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div>
        <Image
          src={image}
          alt={image}
          height={200}
          width={200}
          className="mx-auto block aspect-square object-cover object-center"
        />
        <H2 className="mt-[21px] text-center font-urbanist font-bold">
          {title}
        </H2>
        <Text size="lg" className="mb-[37px] mt-[5px] font-urbanist">
          {text}
        </Text>
      </div>
      {buttonText != null ? (
        <Button
          text={buttonText}
          size="lg"
          color="secondary-300"
          className="mx-auto block"
        />
      ) : (
        <></>
      )}
    </div>
  );
}
