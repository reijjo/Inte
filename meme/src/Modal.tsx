import { useState } from "react";
import { Meme } from "./types";

type ModalMeme = Pick<Meme, "id" | "name" | "blank" | "lines">;

type ModalProps = ModalMeme & {
  handleCloseModal: () => void;
};

type TextInput = {
  [key: number]: string;
};

const Modal = ({ id, name, blank, lines, handleCloseModal }: ModalProps) => {
  const [text, setText] = useState<TextInput>({});
  const [isLoading, setIsLoading] = useState(false);
  const [newImg, setNewImg] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput =
      event.target.attributes.getNamedItem("data-index")?.value;

    if (currentInput) {
      setText((prevState) => ({
        ...prevState,
        [currentInput]: event.target.value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const layers = Object.values(text);
    let newImg = `https://api.memegen.link/images/${id}/`;

    layers.forEach((value, i) => {
      const isLast = layers.length - 1 === i;
      if (isLast) {
        newImg = newImg + `${value}.png`;
        return;
      }
      newImg = newImg + `${value}/`;
    });
    setNewImg(newImg);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const arrayOfLines = Array.from(Array(lines).keys());

  return (
    <div className="modal">
      <div className="inner">
        <form onSubmit={handleSubmit}>
          {arrayOfLines.map((line, i) => {
            return (
              <input
                key={line}
                type="text"
                placeholder="Add text"
                data-index={i}
                onChange={handleChange}
                title="generate new text"
                name="mememe"
              />
            );
          })}
          <button className="btn btn-secondary" type="submit">
            Generate
          </button>
        </form>
        {isLoading && (
          <strong className="loading-statement primary-gradient">
            Please wait, Generating new text...
          </strong>
        )}
        <img src={newImg || blank} alt={name} onLoad={handleImageLoaded} />
        <button
          className="btn btn-primary modal-btn"
          onClick={handleCloseModal}
        >
          Change template
        </button>
      </div>
    </div>
  );
};

export default Modal;
