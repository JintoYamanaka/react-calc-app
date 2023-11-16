/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { evaluate } from "mathjs";
import Button from "./components/Button"; // Button コンポーネントをインポート

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const screenStyle = css`
  width: 300px;
  background: #eee;
  margin-bottom: 10px;
  text-align: right;
  padding: 10px;
  box-sizing: border-box;
`;

const buttonRowStyle = css`
  display: flex;
`;

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (val: string) => {
    setInput((prev) => prev + val);
  };

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setResult(result.toString());
      setInput("");
    } catch (error) {
      setResult("Error");
      setInput("");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div css={containerStyle}>
      <div css={screenStyle}>{input || result || "0"}</div>
      <div css={buttonRowStyle}>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("+")}>+</Button>
      </div>
      <div css={buttonRowStyle}>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("-")}>-</Button>
      </div>
      <div css={buttonRowStyle}>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <Button onClick={() => handleButtonClick("*")}>*</Button>
      </div>
      <div css={buttonRowStyle}>
        <Button onClick={clearInput}>C</Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick(".")}>.</Button>
        <Button onClick={() => handleButtonClick("/")}>/</Button>
      </div>
      <Button onClick={calculateResult}>=</Button>
    </div>
  );
};

export default App;
