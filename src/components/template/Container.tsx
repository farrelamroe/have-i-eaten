export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative overflow-hidden rounded-[20px] p-[24px] ${className}`}
    >
      {children}
    </main>
  );
}
