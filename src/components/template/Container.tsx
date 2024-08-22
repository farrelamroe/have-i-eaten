export function Container(props: any) {
  const { children, className } = props;
  return (
    <main className={`relative overflow-hidden p-[24px] ${className}`}>
      {children}
    </main>
  );
}
