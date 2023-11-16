/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { evaluate } from "mathjs";
import Button from "./components/Button"; // Button コンポーネントをインポート

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const screenStyle = css`
  width: 300px;
  background: #fff;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: right;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const buttonRowStyle = css`
  display: flex;
  justify-content: space-between;
  width: 300px;
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
      setInput(result.toString()); // 計算結果を input にセット
      setResult("");
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
      <div css={screenStyle}>{input || "0"}</div>
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
      <div css={buttonRowStyle}>
        <Button onClick={calculateResult}>=</Button>
      </div>
    </div>
  );
};

export default App;
