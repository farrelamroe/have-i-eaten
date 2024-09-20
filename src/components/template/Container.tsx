export function Container(props: any) {
  const { children, className, background } = props;
  return (
    <main
      className={`relative overflow-hidden p-[24px] ${className}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </main>
  );
}
