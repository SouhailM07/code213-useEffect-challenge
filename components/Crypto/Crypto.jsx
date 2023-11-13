import "./crypto.css";
//
import axios from "axios";
//
import { Coin } from "@/components";
export default async function Crypto() {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "75bd216ca3msh386ce21a600d499p1894c5jsnb06a873ab366",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  let coins = await axios.request(options).then((res) => {
    return res.data.data.coins;
  });
  return (
    <>
      <div>
        {coins.map((e, i) => {
          return (
            <Coin
              key={i}
              rank={e.rank}
              img={e.iconUrl}
              name={e.name}
              price={"$" + Number(e.price).toFixed(3)}
              change={e.change + "%"}
              volume={"$" + e["24hVolume"]}
              marketCap={"$" + e.marketCap}
              uuid={e.uuid}
            />
          );
        })}
      </div>
    </>
  );
}
