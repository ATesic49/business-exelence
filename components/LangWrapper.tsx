"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  createContext,
  createServerContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
export const Context = createContext<
  (string | React.Dispatch<React.SetStateAction<string | null>> | null)[]
>([null, null]);
const LangWrapper = ({ children }: { children: ReactNode }) => {
  const params = useSearchParams().get("lang");
  useEffect(() => {
    setState(params);
    console.log("ovo je params", params);
  }, [params]);
  const [state, setState] = useState(params);

  // const router = useRouter();
  // useEffect(() => {
  //   if (params === null) {
  //     router.push("?lang=en");
  //   }
  // }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default LangWrapper;
