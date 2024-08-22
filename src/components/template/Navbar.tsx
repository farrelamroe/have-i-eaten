"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { H2, P, dataNavbar } from "@/components";

export function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive((prev) => !prev);
  };

  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setHidden(currentScrollPos > prevScrollPos && currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        className={`fixed z-[110] h-[82px] w-[100%] transform rounded-b-[8px] text-center font-urbanist text-white duration-[2000ms] ${hidden ? "-top-full" : "top-0"}`}
      >
        <div className="relative flex h-full flex-row items-center justify-between rounded-b-[8px] bg-primary-300 px-5 shadow-md">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src="/image.png"
                width={50}
                height={40}
                alt=""
                className="relative items-center"
              />
            </Link>
            <P className="font-jakarta gap-x-[9px] text-start text-[18px] font-bold">
              Have I<br />
              Eaten
            </P>
          </div>
          <div className="relative z-40 hidden flex-row items-center justify-center gap-x-5 text-xl lg:flex lg:pr-20">
            {dataNavbar.map(({ title, href }) => {
              return (
                <>
                  <a href={href} key={title}>
                    <p className="underline-animation duration-300 hover:cursor-pointer hover:font-bold">
                      {title}
                    </p>
                  </a>
                </>
              );
            })}
          </div>
          <div className="flex flex-row items-center gap-x-[10px] lg:hidden">
            <label className="burger lg:hidden" htmlFor="burger">
              <input type="checkbox" id="burger" onClick={toggle} />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </div>

      <div
        className={`font-jakarta fixed top-0 z-[110] flex h-screen w-screen flex-col items-start justify-start gap-x-5 gap-y-[50px] overflow-hidden bg-[var(--color-bg)] pt-24 text-xl duration-1000 lg:hidden ${
          active ? "max-w-[70vw]" : "max-w-0"
        } ${hidden ? "-left-full" : "-left-0"}`}
      >
        {dataNavbar.map(({ title, href }) => {
          return (
            <>
              <a href={href} key={title}>
                <H2 className="underline-animation whitespace-nowrap pl-[50px] duration-300 hover:cursor-pointer hover:font-bold">
                  {title}
                </H2>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}
