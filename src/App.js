import "./App.scss";
import "./components/button/styles/Button.scss";
import Input from "./components/input/Input";
import { evaluate } from "mathjs";
import { useState } from "react";
import Button from "./components/button/Button";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [last, setLast] = useState("");

  const operators = ["/", "+", "-", ".", "*"];
  const clear = () => {
    setCalc("");
    setResult("");
    setLast("");
  };
  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value) && value !== "+/-") {
      setResult(evaluate(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(evaluate(calc).toString());
  };
  const changeSign = () => {
    setCalc((parseFloat(result) * -1).toString());
  };
  return (
    <>
      <div className="calculator_wrapper">
        <div className="calculator_display">
          <Input operations>{calc || "0"}</Input>
          <Input>{result ? result : "0"}</Input>
        </div>
        <div className="calculator_container">
          <Button
            onClick={() => {
              updateCalc("%");
              evaluate(calc);
            }}
          >
            %
          </Button>
          <Button
            onClick={() => {
              calculate();
              changeSign();
            }}
            className="button"
          >
            +/-
          </Button>
          <Button
            onClick={() => {
              clear();
            }}
          >
            C
          </Button>
          <Button onClick={() => updateCalc("/")}>/</Button>
          <Button onClick={() => updateCalc("7")}>7</Button>
          <Button onClick={() => updateCalc("8")}>8</Button>
          <Button onClick={() => updateCalc("9")}>9</Button>
          <Button onClick={() => updateCalc("*")}>*</Button>
          <Button onClick={() => updateCalc("4")}>4</Button>
          <Button onClick={() => updateCalc("5")}>5</Button>
          <Button onClick={() => updateCalc("6")}>6</Button>
          <Button onClick={() => updateCalc("+")}>+</Button>
          <Button onClick={() => updateCalc("1")}>1</Button>
          <Button onClick={() => updateCalc("2")}>2</Button>
          <Button onClick={() => updateCalc("3")}>3</Button>
          <Button onClick={() => updateCalc("-")}>-</Button>
          <Button onClick={() => updateCalc("0")}>0</Button>
          <Button onClick={() => updateCalc(".")}>,</Button>
          <Button onClick={() => calculate()}>=</Button>
        </div>
      </div>
    </>
  );
};
export default App;
