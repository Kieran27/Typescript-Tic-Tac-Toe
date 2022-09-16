import React, { useEffect } from "react";

interface Props {
  index: number;
  square: string;
  takeTurn(index: number): any;
  winner: boolean;
}

const Square = ({ index, square, takeTurn, winner }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (winner) return;
    if ((event.target as HTMLElement).textContent === "") {
      return takeTurn(index);
    }
    return null;
  };

  return (
    <div
      className="w-24 h-24 bg-black cursor-pointer flex items-center justify-center font-normal text-white text-5xl"
      onClick={handleClick}
    >
      {square}
    </div>
  );
};

export default Square;
