"use client";
import { useDispatch } from "react-redux";
import { addUuid } from "@/app/redux/slices/coinSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./coin.css";
export default function Coin({
  rank,
  img,
  name,
  price,
  change,
  volume,
  marketCap,
  uuid,
}) {
  let ARR_OF_COIN_DETAILS = [price, change, volume, marketCap];
  let dispatch = useDispatch("");
  let router = useRouter("");
  useEffect(() => {
    let fourthLi = document.querySelectorAll(".notFirstUl li:nth-child(4)");
    fourthLi.forEach((e) => {
      if (e.textContent.includes("-")) {
        e.className = "text-red-600";
      }
    });
  }, []);
  return (
    <>
      <ul
        onClick={() => {
          dispatch(addUuid(uuid));
          router.push("/overview");
        }}
        style={{ gridTemplateColumns: "15% 1fr 16% 16% 15% 15%" }}
        className="notFirstUl cursor-pointer px-[1.5rem] items-center grid  my-[1.7rem] py-[1rem] border-2 border-black shadow-xl"
      >
        {/* <Link id="sb" href="/overview" clas></Link> */}
        <li>{rank}</li>
        <li className="flex items-center">
          <img src={img} alt="coin" className="h-[3rem] mr-[1rem]" />
          <span className="text-[1.2rem] pr-3">{name}</span>
        </li>
        {ARR_OF_COIN_DETAILS.map((e, i) => {
          return (
            <>
              <li key={i}>{e}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}
