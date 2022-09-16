const WinnerMessage = ({ currentPlayer }: { currentPlayer: string }) => {
  return (
    <div className="mt-3 text-center">
      <span>{`Winner: ${currentPlayer}`}</span>
    </div>
  );
};

export default WinnerMessage;
