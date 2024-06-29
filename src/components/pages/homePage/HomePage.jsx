import React from "react";

const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2  gap-10 p-4 ">
      <div>
        <img
          src="/darko1.jpg"
          alt="Darko in black t-shirt"
          className="w-full h-auto max-w-md mx-auto lg:max-w-sm"
        />
      </div>
      <div>
        Darko Maksimovic, rođen 07.04.1995. u Požegi, diplomirao na akademskim
        studijama Fakulteta sporta i fizičkog vaspitanja, Univerziteta u
        Beogradu, gde je stekao zvanje profesor sporta. Postdiplomske studije
        nastavio na Fakultetu sporta i fizičkog vaspitanja u Novom Sadu,
        stekavši zvanje master profesor sporta i fizičkog vaspitanja odbranivši
        master rad na temu: “FIZIČKA AKTIVNOST I KONTROLISANA ISHRANA U
        PREVENCIJI I REDUKCIJI GOJAZNOSTI” čime se specijalizovao za programe
        redukcije telesne mase, odnosno mršavljenja. Od 2005. godine radi kao
        trener u više fitnes klubova u gradu gde je u praktičnom radu sa
        rekreativcima i sportistima stekao iskustvo u programiranju i praćenju
        treninga. Stručni saradnik časopisa Lepota&Zdravlje, Mens Health kao i
        internet portala B92 za tekstove iz oblasti fitness-a. Po odluci
        nacionalnog Saveza za rekreaciju i fitness Srbije proglašen za najboljeg
        fitness trenera u Srbiji za 2014. godinu. Autor knjige Fitnes
        preduzetnik
      </div>
      <div>
        {" "}
        <img
          src="/teretana-3.webp"
          alt="gym"
          className="w-full h-auto max-w-md mx-auto lg:max-w-md"
        />
      </div>
      <div>
        Online trening se započinje na sledeći način: Prvi korak je popunjavanje
        anamnestičkog upitnika uz pomoć koga dobijam konkretne informacije o
        vama, istorija bolesti, stila zivota, istoriji bavljenja fizičkom
        aktivnošću i definisanje cilja treniranja. Kada popunite upitnik
        prelazimo na sledeći korak. Slanje smernica za ishranu, to je dvadesetak
        saveta koji su dobra polazna osnova za definisanje programa ishrane koju
        definišemo u tri koraka. Na osnovu prvih konsultacija i upitnika pravim
        vam uvodni program treninga koji je ujedno i test vaših fizičkih
        sposobnosti. U odnosu na rezultate nastavljamo dalje. Sledeći korak je
        izrada 3 programa treninga za prve dve nedelje ili za prvih 30 dana. Sve
        treninge dobijate u pisanoj formi sa video klipom gde je objašnjen ceo
        trening. Važno je napomenuti da se program treninga pravi individualno
        za svakog klijenta pa se i za svakog klijenta posebno snima trening koji
        je za njega napravljen. Na kraju svakog treninga mi šaljete detaljne
        utiske i zapažanja koja su mi veoma važna zbog narednih treninga. Takođe
        na kraju svakog dana mi šaljete sta ste prethodnog dana jeli što nam je
        ujedno i dnevnik vaše ishrane.
      </div>
    </div>
  );
};

export default HomePage;
