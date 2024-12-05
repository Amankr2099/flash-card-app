import Card from "../Components/Card";
import axios from "axios";
import NewCard from "../Components/NewCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const res = await axios.get("http://localhost:5000/cards");
      setCards(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getCards();
  }, [cards]);

  return (
    <>
      <div className="container ">
      <div className="d-flex align-items-center my-5 p-3 bg-info rounded">
          <i
            className="fa-solid fa-circle-plus p-2"
            style={{ color: "#0905fd", fontSize: "30px" }}
            data-bs-toggle="modal"
            data-bs-target="#inputCard"
          />
          <h3 className="p-2">Click to Add Card</h3>
          <NewCard />
        </div>
        


        <div className="d-flex flex-wrap justify-content-around mb-5">
          {cards &&
            cards.map((card, index) => {
              // console.log(card);
              return <Card card={card} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}
