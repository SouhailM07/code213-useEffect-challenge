import "./coin.css";
export default function Coin({
  rank,
  img,
  name,
  price,
  change,
  volume,
  marketCap,
}) {
  let ARR_OF_COIN_DETAILS = [price, change, volume, marketCap];
  return (
    <>
      <ul className="px-[1.5rem] items-center grid grid-cols-6 my-[1.7rem] py-[1rem] border-2 border-black shadow-xl">
        <li>{rank}</li>
        <li className="flex items-center">
          <img src={img} alt="coin" className="h-[3rem] mr-[1rem]" />
          <span>{name}</span>
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
