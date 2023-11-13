import "./mycontainer.css";
// components
import { Crypto } from "@/components";
export default function MyContainer() {
  return (
    <>
      <div className="text-white text-[1.2rem] max-w-[95rem] m-auto">
        <HeadInfo />
        <Crypto />
      </div>
    </>
  );
}

let HeadInfo = () => {
  let arrOfInfo = ["#", "Coin", "Price", "24h", "Volume", "Market Cap"];

  return (
    <>
      <ul className="text-[1.3rem] shadow-xl border-2 px-[1.5rem] border-black grid grid-cols-6 py-[1rem]">
        {arrOfInfo.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </>
  );
};
