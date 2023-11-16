/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  flex: 1;
  padding: 15px;
  margin: 5px;
  font-size: 18px;
  border-radius: 8px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #51cfeb;
  }
`;

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button css={buttonStyle} onClick={onClick}>
    {children}
  </button>
);

export default Button;
