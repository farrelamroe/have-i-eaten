export function Text(props: any) {
  const { children, size, className } = props;
  let fontSize;
  if (size === "sm") {
    fontSize = "text-[10px] lg:text-[12px] leading-[15px] lg:leading-[18px]";
  } else if (size === "md") {
    fontSize = "text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px]";
  } else if (size === "lg") {
    fontSize = "text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px]";
  }
  return <p className={`${fontSize} ${className}`}>{children}</p>;
}

export default Text;
