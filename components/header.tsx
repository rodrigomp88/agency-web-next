import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

import style from "../styles/header.module.css";

const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    // Calcula el progreso basado en la posicion de scroll
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/header-bg.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/header-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div
        className={`flex-grow-0 pt-2 drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] transition-opacity duration-1000`}
      >
        <Image
          className={style.logo}
          src="/assets/logo.svg"
          width={754 / 3}
          height={754 / 3}
          alt="logo"
        />
      </div>
      <div className="p-8 font-bold z-10 text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-8 text-4xl xl:text-5xl">Agencia Web.</h1>
        <h2 className="mb-2 text-lg xl:text-3xl tracking-tight">
          <span>
            Desarrollo de paginas y aplicaciones web, lleva un control de tu
            negocio en todo momento y lugar, o simplemente promociona tu
            producto/servicio.
          </span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)] pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          className={style.arrow}
          src="/assets/arrow-down.svg"
          width={210 / 3}
          height={90 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Header;
