// components
import { Overview } from "@/components";
// import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <div>
        <Overview />
      </div>
    </>
  );
}

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
