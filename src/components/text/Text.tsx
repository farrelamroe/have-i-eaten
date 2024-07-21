export function Text({ children, size, className }: any) {
  let fontSize;
  if (size === "sm") {
    fontSize = "text-[10px] lg:text-[12px] leading-[12px] lg:leading-[14px]";
  } else if (size === "md") {
    fontSize = "text-[12px] lg:text-[14px] leading-[12px] lg:leading-[18px]";
  } else if (size === "lg") {
    fontSize = "text-[14px] lg:text-[16px] leading-[18px] lg:leading-[20px]";
  }
  return <h1 className={`${fontSize} ${className}`}>{children}</h1>;
}

export default Text;
