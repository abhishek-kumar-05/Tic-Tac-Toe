// import { useState } from "react";

const Box = ({ value, onSquareClick }) => {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("X");
  // }
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};



export default Box;
