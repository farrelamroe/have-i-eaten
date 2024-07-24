export function Button(props: any) {
  const { href, text, size, color, className, blank } = props;
  let buttonSize, buttonColor;
  if (size === "xs") {
    buttonSize =
      "px-[16px] py-[7px] outline-2 -outline-offset-1 leading-[10px]";
  } else if (size === "sm") {
    buttonSize =
      "px-[20px] py-[7px] outline-2 -outline-offset-1 leading-[12px]";
  } else if (size === "md") {
    buttonSize =
      "px-[24px] py-[10px] outline-2 -outline-offset-1 leading-[14px]";
  } else if (size === "lg") {
    buttonSize =
      "px-[28px] py-[10px] outline-3 -outline-offset-2 leading-[16px]";
  }

  if (color === "primary-100") {
    buttonColor =
      "outline-primary-100 hover:outline-primary-100 bg-primary-100 hover:text-primary-100";
  } else if (color === "primary-200") {
    buttonColor =
      "outline-primary-200 hover:outline-primary-200 bg-primary-200 hover:text-primary-200";
  } else if (color === "primary-300") {
    buttonColor =
      "outline-primary-300 hover:outline-primary-300 bg-primary-300 hover:text-primary-300";
  } else if (color === "primary-400") {
    buttonColor =
      "outline-primary-400 hover:outline-primary-400 bg-primary-400 hover:text-primary-400";
  } else if (color === "secondary-100") {
    buttonColor =
      "outline-secondary-100 hover:outline-secondary-100 bg-secondary-100 hover:text-secondary-100";
  } else if (color === "secondary-200") {
    buttonColor =
      "outline-secondary-200 hover:outline-secondary-200 bg-secondary-200 hover:text-secondary-200";
  } else if (color === "secondary-300") {
    buttonColor =
      "outline-secondary-300 hover:outline-secondary-300 bg-secondary-300 hover:text-secondary-300";
  }
  return (
    <button
      className={`relative h-fit w-fit rounded-full font-urbanist text-white outline duration-300 hover:bg-white ${buttonSize} ${buttonColor} ${className}`}
      onClick={() => window.open(href)}
    >
      {text}
    </button>
  );
}
