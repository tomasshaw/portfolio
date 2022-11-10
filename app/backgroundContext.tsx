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
  setShow: Dispatch<SetStateAction<boolean>>;
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
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
  const [show, setShow] = useState<boolean>(true);
  const [image, setImage] = useState<string | null>(null);

  const handleOnLinkMouseOver = (index: string) => {
    if (bgRef) {
      bgRef.current.style.setProperty("--active-index", index);
    }
  };

  return (
    <BackgroundContext.Provider
      value={{
        onMouseOver: handleOnLinkMouseOver,
        show,
        setShow,
        image,
        setImage,
        bgRef,
        setBgRef,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
