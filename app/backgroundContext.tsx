"use client";
import {
  createContext,
  useState,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";

type TBGContext = {
  onMouseOver: (index: string) => void;
  show: boolean;
  bgRef: MutableRefObject<HTMLDivElement> | null;
  setBgRef: Dispatch<SetStateAction<MutableRefObject<HTMLDivElement>>>;
};

export const BackgroundContext = createContext<TBGContext>(undefined as any);

export const BackgroundContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bgRef, setBgRef] = useState<MutableRefObject<HTMLDivElement> | null>(
    null
  );

  const handleOnLinkMouseOver = (index: string) => {
    if (bgRef) {
      bgRef.current.style.setProperty("--active-index", index);
    }
  };

  return (
    <BackgroundContext.Provider
      value={{
        onMouseOver: handleOnLinkMouseOver,
        show: true,
        bgRef,
        setBgRef,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
