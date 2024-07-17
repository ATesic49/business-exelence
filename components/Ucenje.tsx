"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Ucenje = ({ srb }: { srb: null | boolean }) => {
  const ref = useRef<HTMLImageElement>(null);
  ref.current;
  const [state, setState] = useState<null | number>(null);
  const list = [
    "Potpuno prilagođavanje specifičnim potrebama klijenata",
    "Trajno zadržavanje u memoriji onog što je doživljeno i naučeno",
    "Maksimalan efekat obuke, njenu trenutnu primenljivost i siguran povraćaj investicije u obuku",
    "Usredsređenost na rezultate timskog rada, u okviru pojedinačnih projekata, tj. biznis zadataka",
    "Usredsređenost na rezultate timskog rada, u okviru pojedinačnih projekata, tj. biznis zadataka",
    "Unapređenje timskog rada",
    "Razmenjivanje pojedinačnih iskustava u timu i timskih iskustava različitih timova, kroz rešavanje zajedničkih, tipskih zadataka",
    "Izgradnju kompaktnog tima sa jedinstvenim razumevanjem kompanijskih: ciljeva, uloge, liderstva, procesa, međuljudskih odnosa i komunikacije",
  ];
  return (
    <section id={"poslovneObuke"} className="flex flex-col items-center gap-16">
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
          {srb ? "Učenje Kroz Iskustvo" : "Experiential Learning"}
        </h2>
        <p className="mx-auto w-10/12 max-w-[25em] text-center text-gray-500">
          {srb ? (
            <>
              Primenjujući metodu &quot;Učenje kroz iskustvo&quot;, naši
              programi poslovnih obuka omogućavaju:
            </>
          ) : (
            "Learning Excellence Club will help organizations achieve the results they want by more effectively harnessing human potential within the organization"
          )}
        </p>
      </div>
      <div className="grid w-full justify-center gap-16 md:grid-cols-2">
        <div className="flex max-w-[28em] flex-col gap-8 text-gray-500 md:gap-4">
          {srb ? (
            <>
              {" "}
              {list.map((li, i) => {
                return (
                  <li key={i} className="text-left">
                    {" "}
                    {li}
                  </li>
                );
              })}
            </>
          ) : (
            <>
              <p>
                We use an experiential framework to foster an environment of
                accelerated learning through self‐discovery and participation.
              </p>
              <p>
                Using structured experiences designed to accurately reflect
                situations in the workplace, participants learn by doing, and
                then further their understanding by examining ways they could
                have been more effective.
              </p>
              <p>
                Powerful learning emerges in the debrief when their experiences
                are linked to their real‐world situations.
              </p>
              <p>
                People see, understand and experience how their own behavior can
                change to significantly and positively impact their performance
                back on their job.
              </p>
            </>
          )}
        </div>
        {srb ? (
          <img
            ref={ref}
            className="row-start-1 my-auto md:row-start-auto"
            onLoad={() => setState(ref.current!.clientHeight)}
            src={"/imgs/ucenje.jpg"}
            alt="Zadržavanje naučene materije u memoriji i praktična primena obuke, na osnovu različitih metoda obuke
(Dr William Glasser)"
          ></img>
        ) : (
          <img
            ref={ref}
            className="row-start-1 my-auto md:row-start-auto"
            onLoad={() => setState(ref.current!.clientHeight)}
            src={"/imgs/learning.png"}
            alt="Zadržavanje naučene materije u memoriji i praktična primena obuke, na osnovu različitih metoda obuke
(Dr William Glasser)"
          ></img>
        )}
      </div>
    </section>
  );
};

export default Ucenje;
//
//
//
//
//
//
{
  /* {state && state !== 0 && (
          <AnimatePresence>
            <motion.ul
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              style={{ height: state }}
              className="scrollbar relative grid w-full max-w-[30em] list-disc grid-cols-1 gap-x-8 gap-y-8 overflow-y-scroll rounded-lg border border-gray-700 p-4 pl-8 text-gray-500"
            >
              <li>Potpuno prilagođavanje specifičnim potrebama klijenata</li>
              <li>
                Trajno zadržavanje u memoriji onog što je doživljeno i naučeno
              </li>
              <li>
                Maksimalan efekat obuke, njenu trenutnu primenljivost i siguran
                povraćaj investicije u obuku
              </li>

              <li>
                Usredsređenost na rezultate timskog rada, u okviru pojedinačnih
                projekata, tj. biznis zadataka
              </li>
              <li>Poboljšanje klime i međuljudskih odnosa unutar tima</li>
              <li>Unapređenje timskog rada</li>
              <li>
                Razmenjivanje pojedinačnih iskustava u timu i timskih iskustava
                različitih timova, kroz rešavanje zajedničkih, tipskih zadataka
              </li>
              <li>
                Izgradnju kompaktnog tima sa jedinstvenim razumevanjem
                kompanijskih: ciljeva, uloge, liderstva, procesa, međuljudskih
                odnosa i komunikacije
              </li>
            </motion.ul>
          </AnimatePresence>
        )} */
}
