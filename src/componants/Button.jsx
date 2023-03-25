import { FaMinus, FaPlus } from "react-icons/fa";

export default function Button({ id, type, label, handleClick }) {
  return (
    <button id={id} onClick={handleClick}>
      {type === "plus" && <FaPlus name="plus" size={16} color="#555" />}
      {type === "minus" && <FaMinus name="minus" size={16} color="#555" />}
      {!type && label && <span>{label}</span>}
    </button>
  );
}
