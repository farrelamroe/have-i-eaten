export function Button(props: any) {
  const { href, text } = props;
  return (
    <button
      className="outline-secondary-400 hover:text-primary-400 hover:outline-secondary-400 relative h-fit w-fit rounded-full bg-primary-400 px-[28px] py-[10px] font-urbanist font-bold leading-[24px] text-white outline outline-2 -outline-offset-1 duration-300 hover:bg-white"
      onClick={() => window.open(href, "blank")}
    >
      {text}
    </button>
  );
}

export default Button;
