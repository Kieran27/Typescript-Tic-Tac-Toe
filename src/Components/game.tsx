import { useState, useEffect } from "react";
import Square from "./Square";
import GameInfo from "./gameInfo";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [turns, setTurns] = useState<number>(0);
  const [gameboard, setGameboard] = useState<string[]>([]);

  const takeTurn: (index: number) => void = (index: number) => {
    const gameboardCopy: string[] = [...gameboard];
    gameboardCopy[index] = currentPlayer;
    setGameboard(gameboardCopy);
    changeCurrentPlayer();
    changeTurns();
  };

  const changeTurns: () => void = () => {
    setTurns((turns) => turns + 1);
  };

  const changeCurrentPlayer: () => void = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

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
        <GameInfo currentPlayer={currentPlayer} turns={turns} />
        <div className="flex flex-wrap justify-center gap-3">
          {gameboard.map((square: string, index: number) => {
            return (
              <Square
                key={index}
                index={index}
                square={gameboard[index]}
                takeTurn={takeTurn}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
