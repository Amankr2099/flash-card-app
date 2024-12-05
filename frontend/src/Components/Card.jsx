import { useState } from "react";
import axios from "axios"; 

export default function Card({ card }) {
  const [cardAnswer, setCardAnswer] = useState(card.answer);
  const [cardQuestion, setCardQuestion] = useState(card.question);

  const [eye, setEye] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleEdit = async () => {
    if (edit) {
      try {
        const res = await axios.put(`http://localhost:5000/cards/${card._id}`, {
          question: cardQuestion,
          answer: cardAnswer,
        });
        alert("Card updated");
        setEdit(false); 
      } catch (error) {
        alert("Error updating card:", error);
      }
    } else {
      setEdit(true); 
    }
  };

  const removeCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cards/${id}`);
      alert("Card deleted");
    } catch (error) {
      alert("Error deleting card:", error);
    }
  };

  return (
    <>
      <div
        className="card text-white text-center mt-5"
        style={{ width: "280px", height: "240px" }}
      >
        <div className="card-header bg-primary">FlashCard</div>

        {eye ? (
          <textarea
            type="text"
            value={cardQuestion}
            className=" text-center card-body bg-primary form-control"
            readOnly={!edit}
            onChange={(e) => setCardQuestion(e.target.value)}
          />
        ) : (
          <textarea
            type="text"
            value={cardAnswer}
            className=" text-center form-control card-body bg-primary"
            readOnly={!edit}
            onChange={(e) => setCardAnswer(e.target.value)}
          />
        )}

        <div className="card-footer d-flex justify-content-around bg-primary">
          <i
            className="fa-solid fa-trash p-2"
            onClick={() => removeCard(card._id)}
          />

          <i
            className={`fa-solid fa${edit ? "-check" : "-pen"} p-2`}
            onClick={handleEdit}
          />

          <i
            className={`fa-solid fa-eye${eye ? "" : "-slash"} p-2`}
            onClick={() => setEye((prevState) => !prevState)}
          />
        </div>
      </div>
    </>
  );
}
