import "./overview.css";
//
import axios from "axios";

export default async function Overview() {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd",
    // url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
    headers: {
      "X-RapidAPI-Key": "75bd216ca3msh386ce21a600d499p1894c5jsnb06a873ab366",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  let coin = await axios.request(options).then((res) => res.data.data.coin);
  // console.log(coin);
  return (
    <>
      <div className="text-white max-w-[60rem] m-auto">
        <Icon_title title={coin.name} />
        <Icon_s2 c={coin} />
        <Icon_table c={coin} />
        <Icon_description c={coin} />
      </div>
    </>
  );
}

const Icon_title = ({ title }) => {
  return (
    <>
      <h1 className="text-center font-bold py-[1rem] mb-[1rem] text-[2rem] bg-bgComponent">
        {title}
      </h1>
    </>
  );
};

const Icon_s2 = ({ c }) => {
  return (
    <>
      <div className="bg-bgComponent pb-[1.5rem] pt-[1rem] px-[1rem] mb-[1rem]">
        <div className="bg-green-400 px-1 py-1 rounded-lg text-center w-[4.6rem] mb-[1rem] mt-[8px]">
          Rank #{c.rank}
        </div>
        <div className="grid grid-cols-2 items-center">
          <ul className="flex justify-between  text-[1.2rem] w-[17rem] text-gray-400">
            <li>
              <img src={c.iconUrl} alt="coin logo" className="h-[2rem]" />
            </li>
            <li>{c.name}</li>
            <li>{`(${c.symbol}/USD)`}</li>
          </ul>
          <div className="text-center text-[2rem] font-bold">
            ${Number(c.price).toFixed(3)}
          </div>
        </div>
      </div>
    </>
  );
};

const Icon_table = ({ c }) => {
  let arrOfTable = [
    {
      label: "24Volume",
      info: "$" + c["24hVolume"],
    },
    { label: "Market Cap", info: "$" + c.marketCap },
    {
      label: "change",
      info: c.change,
    },
    {
      label: "Circulating Supply",
      info: c.supply.circulating,
    },
  ];
  return (
    <>
      <ul className="grid grid-cols-2 gap-y-[1rem] py-[2rem] px-[1rem] gap-x-[2rem] bg-bgComponent mb-[1rem]">
        {arrOfTable.map((e, i) => {
          return (
            <li className="flex justify-between pb-3 border-b-white border-b-[1px]">
              <div className="font-bold">{e.label}</div>
              <div className="text-[1.2rem] text-gray-400">{e.info}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Icon_description = ({ c }) => {
  return (
    <>
      <div className="bg-bgComponent py-[1rem] px-[1rem]">
        <h2 className="text-[1.7rem] my-[1rem] font-bold">About</h2>
        <p className="text-[1.2rem]">{c.description}</p>
      </div>
    </>
  );
};
