import React from "react";

interface Props {
  index: number;
  square: string;
  takeTurn(index: number): any;
}

const Square = ({ index, square, takeTurn }: Props) => {
  return (
    <div
      className="w-24 h-24 bg-black cursor-pointer flex items-center justify-center"
      onClick={() => takeTurn(index)}
    >
      <span className="font-normal text-white text-5xl"> {square} </span>
    </div>
  );
};

export default Square;
