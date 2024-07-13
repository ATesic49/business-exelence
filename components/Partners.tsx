"use client";
import React from "react";
import partner1 from "@/public/imgs/partneri/ackopaonik.png";
import partner2 from "@/public/imgs/partneri/ef.jpg";
import partner3 from "@/public/imgs/partneri/inyourhands.jpg";
import partner4 from "@/public/imgs/partneri/most.jpg";
import partner5 from "@/public/imgs/partneri/stata.jpg";
import Image from "next/image";
const Partners = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="relative -mx-8 grid w-full grid-cols-5 items-center justify-center gap-4 border-t-2 py-8 md:gap-16 md:px-16">
        <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-gray-500">
          {" "}
          Naši Partneri
        </p>
        {partners.map((partner, i) => {
          return <Image src={partner} key={i} alt="" className="" />;
        })}
      </div>
    </section>
  );
};

export default Partners;
