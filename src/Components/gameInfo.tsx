import React from "react";

interface Props {
  currentPlayer: string;
  turns: number;
}

const GameInfo = ({ currentPlayer, turns }: Props) => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Tic Tac Toe</h2>
      <div className="flex justify-between px-9 mb-3">
        <span>{`Player: ${currentPlayer}`}</span>
        <span>{`Turns: ${turns}`}</span>
      </div>
    </div>
  );
};

export default GameInfo;
