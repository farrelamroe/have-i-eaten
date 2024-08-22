export function H2(props: any) {
  const { className, children } = props;
  return (
    <p
      className={`text-[32px] leading-[44.8px] lg:text-[36px] lg:leading-[43.2px] ${className}`}
    >
      {children}
    </p>
  );
}

export default H2;
