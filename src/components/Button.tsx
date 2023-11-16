/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  flex: 1;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
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
