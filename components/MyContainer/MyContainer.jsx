import "./mycontainer.css";
// components
import { Crypto } from "@/components";
export default function MyContainer() {
  return (
    <>
      <div className="text-white text-[1.2rem] max-w-[85rem] m-auto">
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
      <ul
        style={{ gridTemplateColumns: "15% 1fr 16% 16% 15% 15%" }}
        className="text-[1.3rem] shadow-xl bg-gray-900 px-[1.5rem]  grid py-[1rem] font-bold"
      >
        {arrOfInfo.map((e, i) => {
          return (
            <li key={i} className="place-self-start">
              {e}
            </li>
          );
        })}
      </ul>
    </>
  );
};
