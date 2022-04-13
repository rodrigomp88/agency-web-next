import React, { useState, useCallback } from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6"></div>
      <div className="pb-10">
        <Image src="/assets/logo.svg" width={30} height={35} alt="logo" />
      </div>
      <h2 className="text-4xl font-bold">Contactenos</h2>
      <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
        <input
          id="companyName"
          name="companyName"
          required
          maxLength={128}
          type="text"
          placeholder="Nombre"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
        />
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={128}
          placeholder="Tu correo"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
        />
        <textarea
          id="message"
          name="message"
          required
          maxLength={1029394}
          placeholder="Informacion adicional"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
        ></textarea>
        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-white text-black rounded-3xl px-8 py-2"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
