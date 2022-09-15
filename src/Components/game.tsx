import { useState, useEffect } from "react";
import Square from "./Square";
import GameInfo from "./gameInfo";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [gameboard, setGameboard] = useState<string[]>([]);

  useEffect(() => {
    // Fill gameboard array on first render
    const array: string[] = [];
    array.length = 9;
    const filledArray: string[] = array.fill("", 0);
    setGameboard(filledArray);
  }, []);

  return (
    <>
      <div className="max-w-sm">
        <GameInfo />
        <div className="flex flex-wrap justify-center gap-3">
          {gameboard.map((square: string) => {
            return <Square />;
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
