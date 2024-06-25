export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative m-[16px] overflow-hidden rounded-[20px] p-[24px] ${className}`}
    >
      {children}
    </main>
  );
}

export default Container;
