import React from "react";

const GameInfo = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Tic Tac Toe</h2>
      <div className="flex justify-between px-9 mb-3">
        <span>Player:</span>
        <span>Turns:</span>
      </div>
    </div>
  );
};

export default GameInfo;
