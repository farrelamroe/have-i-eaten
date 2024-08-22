export function P(props: any) {
  const { className, children } = props;
  return (
    <>
      <p className={`${className}`}>{children}</p>
    </>
  );
}
