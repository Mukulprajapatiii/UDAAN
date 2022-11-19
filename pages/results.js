import React, { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Table from "../components/Table";

const Results = () => {
  const [buySpace, setBuySpace] = useState(1);
  const router = useRouter();
  const query = router.query;

  return (
    <><><Navbar />
      <div className="result-main">

        <div className="mt-5 flex flex-col md:flex-row justify-center h-full w-full md:justify-start">
          <Stats
            dateTime={query.dateTime}
            query={query}
            buySpace={buySpace}
            setBuySpace={setBuySpace} />
          <div className="divider md:divider-horizontal" />
          <div className="flex flex-col items-center flex-1 space-y-5">
            <h1 className="font-bold text-5xl">Results</h1>
            <Table buySpace={buySpace} />
          </div>
        </div>
      </div>
    </><Footer /></>
  
 
  );
};

export default Results;
