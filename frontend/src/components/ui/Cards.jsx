import { CardStack } from "./card-stack";
import { cn } from "../../utils/cn";

export default function Cards() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Pera Mirkovic",
    designation: "-20kg",
    content: (
      <p>
        Darko je najbolji trener, pomogao mi je da{" "}
        <Highlight>izgubim 20kg</Highlight>, i sada se osecam mnogo bolje.
        Svakom bi preporucio da dodje ovde da vezba 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Bojana  Novkovic",
    designation: "-15kg",
    content: (
      <p>
        Svaki novi trening predsavlja izazov za mene. Sa Darkovom{" "}
        <Highlight>izbalansiranom ishranu</Highlight> nikad ne osecam da sam
        gladna. Na tebi je da uradis prvi korak.
      </p>
    ),
  },
  {
    id: 2,
    name: "Stefan Markovic",
    designation: "+5kg",
    content: (
      <p>
        Treninzi sa Darkom su neverovatni uspeo sam da promenim svoje telo.
        Izgubio sam masti i dobio misice,
        <Highlight> prezadovoljan sam</Highlight>.
      </p>
    ),
  },
];
