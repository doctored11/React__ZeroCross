import * as React from "react";
// пример компонента
export function Component() {
  const S_X = "X";
  const S_O = "o";
  let currentStep = S_X;

  const getClass = (symbol) => {
    return symbol == S_X ? "symbol-red" : "symbol-blue";
  };
  const cells = [S_O, null, null, S_X, S_X, null, S_X, S_O, null];

  const renderSymbol = (symbol,id) => {
    return (
      <div
        key={id}
        className={`cell ${getClass(symbol)} `}
        data-index={`${cells.id}`}
      >
        {symbol == S_X || symbol == S_O ? symbol : ""}
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className={`step ${getClass(currentStep)} `}>
        Ход: {renderSymbol(currentStep, -1)}
      </h2>
      <div id="board">
        {cells.map((symbol, id) => {
          return renderSymbol(symbol, id);
        })}
      </div>
    </div>
  );
}
