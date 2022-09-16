import { useState, useEffect } from "react";
import Square from "./Square";
import GameInfo from "./gameInfo";
import WinnerMessage from "./winnerMessage";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [turns, setTurns] = useState<number>(0);
  const [gameboard, setGameboard] = useState<string[]>([]);
  const [winner, setWinner] = useState<boolean>(false);

  const takeTurn: (index: number) => void = (index: number) => {
    const gameboardCopy: string[] = [...gameboard];
    gameboardCopy[index] = currentPlayer;
    setGameboard(gameboardCopy);
    changeCurrentPlayer();
    changeTurns();
    checkForWinner(gameboard);
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

  const checkForWinner = (gameboard: string[]) => {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameboard[a] !== "" &&
        gameboard[a] === gameboard[b] &&
        gameboard[a] === gameboard[c]
      ) {
        setWinner(true);
        return gameboard[a];
      }
    }
    return null;
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
                winner={winner}
              />
            );
          })}
        </div>
        {winner && <WinnerMessage currentPlayer={currentPlayer} />}
      </div>
    </>
  );
};

export default Game;
