"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/imgs/LogoPravi.png";
import { Link as Lidl } from "react-scroll/modules";
import { motion } from "framer-motion";
import Link from "next/link";
const Navb2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setHeight(ref.current?.clientHeight);
  }, [ref]);
  console.log(height);
  return (
    <div
      onLoad={() => console.log(ref.current?.clientHeight)}
      ref={ref}
      className={`fixed left-0 top-0 z-30 flex w-full items-center justify-between gap-8 border-b px-4 py-4 backdrop-blur-lg md:px-16`}
    >
      <Link href="/#home">
        <Image
          className="aspect-square w-8 md:w-12"
          src={logo}
          alt="BusinessExcellence"
        ></Image>
      </Link>
      <nav className="hidden items-center justify-center gap-4 text-gray-600 md:flex md:gap-8">
        <Link className="cursor-pointer" href={"/#teamBuilding"}>
          Team Building{" "}
        </Link>
        <Link className="cursor-pointer" href={"/#offer"}>
          Our offer
        </Link>
        <Link className="cursor-pointer" href={"/#poslovneObuke"}>
          Poslovne obuke
        </Link>
        <Link className="cursor-pointer" href={"/#kontakt"}>
          Kontakt
        </Link>
      </nav>
      <Link
        href={"/clanovi"}
        className="text-md hidden cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-gray-50 shadow-sm shadow-blue-300 md:block"
      >
        Članovi
      </Link>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={
          open ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: -20, x: 20 }
        }
        className="absolute right-0 top-full flex flex-col gap-4 rounded-lg bg-blue-200 bg-opacity-75 p-4 pr-8 text-gray-600 md:hidden"
      >
        <Link className="cursor-pointer" href={"/#teamBuilding"}>
          Team Building{" "}
        </Link>
        <Link className="cursor-pointer" href={"/#offer"}>
          Our offer
        </Link>
        <Link className="cursor-pointer" href={"/#poslovneObuke"}>
          Poslovne obuke
        </Link>
        <Link className="cursor-pointer" href={"/#Kontakt"}>
          Kontakt
        </Link>
        <Link
          href={"/clanovi"}
          className="text-md cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-center text-gray-50 shadow-sm shadow-blue-300 md:block"
        >
          Članovi
        </Link>
      </motion.div>
    </div>
  );
};

export default Navb2;
