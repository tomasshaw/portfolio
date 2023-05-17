"use client";
import {
  createContext,
  useState,
  MutableRefObject,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type TMutableRefObject = MutableRefObject<HTMLDivElement> | null;

type TDispatchSetStateAction<T> = Dispatch<SetStateAction<T>>;

type TBGContext = {
  onMouseOver: (index: string) => void;
  show: boolean;
  setShow: TDispatchSetStateAction<boolean>;
  image: string | null;
  setImage: TDispatchSetStateAction<string | null>;
  blur: number;
  setBlur: TDispatchSetStateAction<number>;
  bgRef: TMutableRefObject;
  setBgRef: TDispatchSetStateAction<TMutableRefObject>;
};

export const BackgroundContext = createContext<TBGContext>(undefined as any);

export const BackgroundContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bgRef, setBgRef] = useState<TMutableRefObject>(null);
  const [show, setShow] = useState<boolean>(true);
  const [image, setImage] = useState<string | null>(null);
  const [blur, setBlur] = useState<number>(0);

  useEffect(() => {
    if (bgRef?.current) {
      bgRef.current.style.filter = `blur(${blur}px)`;
    }
  }, [blur, bgRef]);

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
        blur,
        setBlur,
        bgRef,
        setBgRef,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
