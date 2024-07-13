"use client";
import React, { useEffect, useRef, useState } from "react";
const list = [
  "Potpuno prilagođavanje specifičnim potrebama klijenata",
  "Trajno zadržavanje u memoriji onog što je doživljeno i naučeno",
  "Maksimalan efekat obuke, njenu trenutnu primenljivost i siguran povraćaj investicije u obuku",
  "Usredsređenost na rezultate timskog rada, u okviru pojedinačnih projekata, tj. biznis zadataka",
  "Poboljšanje klime i međuljudskih odnosa unutar tima",
  "Unapređenje timskog rada",
  "Razmenjivanje pojedinačnih iskustava u timu i timskih iskustava različitih timova, kroz rešavanje zajedničkih, tipskih zadataka",
  "Izgradnju kompaktnog tima sa jedinstvenim razumevanjem kompanijskih: ciljeva, uloge, liderstva, procesa, međuljudskih odnosa i komunikacije",
];
const Nabrajanje = () => {
  function indexAdjuster(list: string[], index: number) {
    if (index < 0) {
      console.log(list.length + index, "rezulttaa");
      return list.length + index;
    } else if (index > list.length - 1) {
      return index - list.length;
    } else return index;
  }
  const [index, setIndex] = useState(0);
  // Stvari Potrebne za nabrajanje
  // 1. Element sa onwheel
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.nativeEvent.deltaY > 0) {
      //This needs an increase code
      console.log("UP");
    } else {
      //This needs a decrease code
      console.log("DOWN");
    }
  };
  // 2. Framer motion za sve ove li gluposti
  // 3. UseState koji ce da ima glavni broj
  // 4. Funkcija za setGlavniBroj gore i dole
  // 5. Funkcija da po njemu ovo sve funkcionise tj pomeranje svega

  return (
    <>
      <div
        onWheel={(e) => handleWheel(e)}
        className="mx-auto flex max-w-[28em] list-none flex-col justify-center text-gray-300"
      >
        <li className="opacity-0">{list[indexAdjuster(list, index - 2)]}</li>
        <li className="">{list[indexAdjuster(list, index - 1)]}</li>
        <li className="my-4 text-gray-700">
          {list[indexAdjuster(list, index)]}
        </li>
        <li className="">{list[indexAdjuster(list, index + 1)]}</li>
        <li className="h-0 opacity-0">
          {list[indexAdjuster(list, index + 2)]}
        </li>
      </div>
    </>
  );
};

export default Nabrajanje;
