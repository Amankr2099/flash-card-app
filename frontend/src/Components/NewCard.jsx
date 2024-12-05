import { useState } from "react";
import axios from "axios"; 

export default function NewCard() {
  const [card, setCard] = useState({
    question: "",
    answer: "",
  });

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setCard({
      question: "",
      answer: "",
    });
  };

  const addCard = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/cards/add", card);
      alert("Card added !");

      resetForm();
    } catch (error) {
      alert("Error adding card:", error);
    }
  };

  return (
    <div className="modal fade rounded" tabIndex={-1} id="inputCard">
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "18rem", marginInline: "auto" }}
      >
        <div className="modal-content text-center p-2">
          <div className="modal-header">
            <h5 className="modal-title">New Card</h5>
          </div>

          <div className="modal-body d-flex flex-column">
            <input
              className="mt-3 text-center"
              autoComplete="off"
              type="text"
              placeholder="Type your question here"
              name="question"
              value={card.question}
              onChange={handleUpdate}
            />
            <input
              className="mt-3 text-center"
              autoComplete="off"
              type="text"
              placeholder="Type your answer here"
              name="answer"
              value={card.answer}
              onChange={handleUpdate}
            />
          </div>
          <div className="modal-footer d-flex justify-content-around">
            <button onClick={addCard} type="submit" className="btn">
              <i
                className="fa-solid fa-check"
                style={{ color: "#2068bb" }}
                data-bs-dismiss="modal"
              ></i>
            </button>

            <button onClick={resetForm} type="reset" className="btn">
              <i
                className="fa-solid fa-arrows-rotate"
                style={{ color: "#2068bb" }}
              ></i>
            </button>

            <button type="button" className="btn">
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#2068bb" }}
                data-bs-dismiss="modal"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
