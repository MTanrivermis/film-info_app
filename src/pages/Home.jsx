import { useState } from "react";
import Card from "../components/Card";
import Year from "../components/Year";
import { data } from "../helper/data";

const Home = () => {
  const [index, setIndex] = useState(0);
  return (
    <main className="container my-5 p-5 shadow bg-body-tertiary rounded w-50">
      <Year data={data} index={index} setIndex={setIndex} />
      <Card data={data} index={index} />
    </main>
  );
};

export default Home;
