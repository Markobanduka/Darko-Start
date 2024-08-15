import { useNavigate } from "react-router-dom";
import AboutMePage from "../aboutMe/AboutMePage";

const HomePage = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate("/programi");
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Individualni treninzi</h2>
            <p>
              Individualno prilagođeni treninzi koji su osmišljeni prema tvojim
              ciljevima i potrebama. Svaki trening uključuje kombinaciju vežbi
              snage, kardio treninga, fleksibilnosti i core vežbi, sve uz
              stručnu podršku i motivaciju. U zavisnosti od programa, cilj je da
              svaki trening bude korak bliže ka boljoj formi, većoj snazi, i
              zdravijem načinu života.
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleScroll("scroll-target-individualni")}
                className="btn btn-primary text-white"
              >
                Pročitaj više
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Poluindividualni treninzi</h2>
            <p>
              Trenirajte zajedno sa prijateljem ili partnerom uz program koji je
              osmišljen da vas oboje vodi ka vašim ciljevima. Ovi treninzi
              obuhvataju raznovrsne vežbe koje će vam pomoći da izgradite snagu,
              poboljšate kondiciju i fleksibilnost, dok se fokusiramo na timski
              rad i međusobnu motivaciju. Idealno za one koji žele da podele
              iskustvo treninga i dodatno se motivišu.
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleScroll("scroll-target-poluindividualni")}
                className="btn btn-primary text-white"
              >
                Procitaj vise
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text text-center p-6">O meni</h1>
      <AboutMePage />
    </div>
  );
};

export default HomePage;
