import React from "react";
import Member from "./member";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-3xl lg:text-4xl tracking-tight">
          <strong>Te ayudaremos a hacer WebApps mas rapido y mejores.</strong>{" "}
          Nuestro equipo de expertos e ingenieros ha creado la mejor experiencia
          de usuario de algunas de las WebApps mas populares de todo internet
        </p>
      </div>
      <div className="container mx-auto px-21 text-center mt-28">
        <h2>Nuestro Equipo</h2>
        <div className="mt-2">Los &ldquo;operaciones especiales&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-2">
          <Member
            id="rodrigo"
            name="rodrigo"
            socialId="@rodrigomp88"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="david"
            name="david"
            socialId="@david"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="daniel"
            name="daniel"
            socialId="@daniel"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="raul"
            name="raul"
            socialId="@raul"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="pablo"
            name="pablo"
            socialId="@pablo"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="francisco"
            name="francisco"
            socialId="@francisco"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="diego"
            name="diego"
            socialId="@diego"
            link="https://github.com/rodrigomp88"
          />
          <Member
            id="egberto"
            name="egberto"
            socialId="@egberto"
            link="https://github.com/rodrigomp88"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
