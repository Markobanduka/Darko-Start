import AboutMePage from "../aboutMe/AboutMePage";

const HomePage = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Personalni treninzi</h2>
          <p>
            Individualno prilagođeni treninzi koji su osmišljeni prema tvojim
            ciljevima i potrebama. Svaki trening uključuje kombinaciju vežbi
            snage, kardio treninga, fleksibilnosti i core vežbi, sve uz stručnu
            podršku i motivaciju. U zavisnosti od programa, cilj je da svaki
            trening bude korak bliže ka boljoj formi, većoj snazi, i zdravijem
            načinu života.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Procitaj vise</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Polupersonalni treninzi</h2>
          <p>
            Trenirajte zajedno sa prijateljem ili partnerom uz program koji je
            osmišljen da vas oboje vodi ka vašim ciljevima. Ovi treninzi
            obuhvataju raznovrsne vežbe koje će vam pomoći da izgradite snagu,
            poboljšate kondiciju i fleksibilnost, dok se fokusiramo na timski
            rad i međusobnu motivaciju. Idealno za one koji žele da podele
            iskustvo treninga i dodatno se motivišu.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Procitaj vise</button>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text text-center">O meni</h1>
      <AboutMePage />
    </>
  );
};

export default HomePage;
