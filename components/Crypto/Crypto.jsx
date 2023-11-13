"use client";
import "./crypto.css";
//
import { useEffect, useState } from "react";
import axios from "axios";
//
import { Coin } from "@/components";
export default function Crypto() {
  let [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins();
  }, []);
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "20",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "75bd216ca3msh386ce21a600d499p1894c5jsnb06a873ab366",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  let getCoins = () => {
    axios.request(options).then((res) => {
      setCoins([...res.data.data.coins]);
    });
  };
  return (
    <>
      <div>
        {coins.map((e, i) => {
          return (
            <Coin
              rank={e.rank}
              img={e.iconUrl}
              name={e.name}
              price={"$" + Number(e.price).toFixed(3)}
              change={e.change + "%"}
              volume={"$" + e["24hVolume"]}
              marketCap={"$" + e.marketCap}
            />
          );
        })}
      </div>
    </>
  );
}
