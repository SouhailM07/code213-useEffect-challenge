"use client";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/app/redux/slices/coinSlice";
import "./overview.css";
import Link from "next/link";
//
import { useState, useEffect } from "react";
import axios from "axios";
//
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

export default function Overview() {
  let [coin, setCoin] = useState("");
  let dispatch = useDispatch();
  let reduxCoin = useSelector((state) => state.coinId.coinId);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${
      reduxCoin || "Qwsogvtv82FCd"
    }`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.request(options).then((res) => setCoin(res.data.data.coin));
  }, [reduxCoin]);
  return (
    <>
      <div className="text-white max-w-[60rem] m-auto">
        <Link
          onClick={() => dispatch(reset())}
          href="/"
          className="bg-bgComponent mb-[1rem] inline-block px-[1rem] rounded-md text-[1.2rem] py-1 "
        >
          Back
        </Link>
        <Icon_title title={coin.name} />
        {/* <Icon_charts /> */}
        <Icon_s2 c={coin} />
        <Icon_table c={coin} />
        <Icon_description c={coin} />
      </div>
    </>
  );
}

const Icon_charts = () => {
  return (
    <>
      <h1 className="text-center font-bold py-[1rem] mb-[1rem] text-[2rem] bg-bgComponent">
        sb
      </h1>
    </>
  );
};

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
        <div className="bg-green-400 py-1 rounded-lg text-center px-[1.5rem] inline-block mb-[1rem] mt-[8px]">
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
      info: c.supply?.circulating,
    },
  ];
  return (
    <>
      <ul className="grid grid-cols-2 gap-y-[1rem] py-[2rem] px-[1rem] gap-x-[2rem] bg-bgComponent mb-[1rem]">
        {arrOfTable.map((e, i) => {
          return (
            <li
              key={i}
              className="flex justify-between pb-3 border-b-white border-b-[1px]"
            >
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
