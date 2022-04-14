import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <>
    <footer className="flex gap-8 items-center justify-center bg-white text-black p-20">
      <Link href="/">Terminos</Link>
      <Image src="/assets/logo.svg" width={100} height={100} alt="logo" />
      <Link href="/">Politicas</Link>
      <hr />
    </footer>
    <p className="flex items-center justify-center bg-white text-black py-2">
      &copy; {new Date().getFullYear()} Agencia Web. Todos los derechos
      reservados.
    </p>
  </>
);

export default Footer;
