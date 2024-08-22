export function H5(props: any) {
  const { className, children } = props;
  return (
    <p
      className={`text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28.8px] ${className}`}
    >
      {children}
    </p>
  );
}

export default H5;
