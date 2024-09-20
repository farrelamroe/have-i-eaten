import { useRouter } from "next/router";

export function Button(props: any) {
  const { href, text, size, color, className } = props;
  const route = useRouter();
  let buttonSize, buttonColor;
  if (size === "xs") {
    buttonSize =
      "px-[16px] py-[7px] outline-2 -outline-offset-1 leading-[10px]";
  } else if (size === "sm") {
    buttonSize =
      "px-[20px] py-[7px] outline-2 -outline-offset-1 leading-[12px]";
  } else if (size === "md") {
    buttonSize =
      "px-[24px] py-[10px] outline-2 -outline-offset-1 leading-[14px]";
  } else if (size === "lg") {
    buttonSize =
      "px-[28px] py-[10px] outline-3 -outline-offset-2 leading-[16px]";
  }

  if (color === "primary-100") {
    buttonColor =
      "outline-primary-100 hover:outline-primary-100 bg-primary-100 hover:text-primary-100";
  } else if (color === "primary-200") {
    buttonColor =
      "outline-primary-200 hover:outline-primary-200 bg-primary-200 hover:text-primary-200";
  } else if (color === "primary-300") {
    buttonColor =
      "outline-primary-300 hover:outline-primary-300 bg-primary-300 hover:text-primary-300";
  } else if (color === "primary-400") {
    buttonColor =
      "outline-primary-400 hover:outline-primary-400 bg-primary-400 hover:text-primary-400";
  } else if (color === "secondary-100") {
    buttonColor =
      "outline-secondary-100 hover:outline-secondary-100 bg-secondary-100 hover:text-secondary-100";
  } else if (color === "secondary-200") {
    buttonColor =
      "outline-secondary-200 hover:outline-secondary-200 bg-secondary-200 hover:text-secondary-200";
  } else if (color === "secondary-300") {
    buttonColor =
      "outline-secondary-300 hover:outline-secondary-300 bg-secondary-300 hover:text-secondary-300";
  }
  return (
    <button
      className={`relative h-fit w-fit rounded-full font-urbanist text-white outline duration-300 hover:bg-white ${buttonSize} ${buttonColor} ${className}`}
      onClick={() => route.push(href)}
    >
      {text}
    </button>
  );
}

export function ButtonSend(props: any) {
  const { href, text, size, color, className } = props;
  let buttonSize, buttonColor;
  if (size === "xs") {
    buttonSize =
      "px-[16px] py-[7px] outline-2 -outline-offset-1 leading-[10px]";
  } else if (size === "sm") {
    buttonSize =
      "px-[20px] py-[7px] outline-2 -outline-offset-1 leading-[12px]";
  } else if (size === "md") {
    buttonSize =
      "px-[24px] py-[10px] outline-2 -outline-offset-1 leading-[14px]";
  } else if (size === "lg") {
    buttonSize =
      "px-[28px] py-[10px] outline-3 -outline-offset-2 leading-[16px]";
  }

  if (color === "primary-100") {
    buttonColor =
      "outline-primary-100 hover:outline-primary-100 bg-primary-100 hover:text-primary-100";
  } else if (color === "primary-200") {
    buttonColor =
      "outline-primary-200 hover:outline-primary-200 bg-primary-200 hover:text-primary-200";
  } else if (color === "primary-300") {
    buttonColor =
      "outline-primary-300 hover:outline-primary-300 bg-primary-300 hover:text-primary-300";
  } else if (color === "primary-400") {
    buttonColor =
      "outline-primary-400 hover:outline-primary-400 bg-primary-400 hover:text-primary-400";
  } else if (color === "secondary-100") {
    buttonColor =
      "outline-secondary-100 hover:outline-secondary-100 bg-secondary-100 hover:text-secondary-100";
  } else if (color === "secondary-200") {
    buttonColor =
      "outline-secondary-200 hover:outline-secondary-200 bg-secondary-200 hover:text-secondary-200";
  } else if (color === "secondary-300") {
    buttonColor =
      "outline-secondary-300 hover:outline-secondary-300 bg-secondary-300 hover:text-secondary-300";
  }
  return (
    <>
      <button
        className={`buttonSend ${className} ${buttonSize} ${buttonColor} relative h-fit w-fit rounded-full font-urbanist text-white outline duration-300 hover:bg-white`}
        type="submit"
      >
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>{text}</span>
      </button>
    </>
  );
}
