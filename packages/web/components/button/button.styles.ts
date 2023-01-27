import { css } from "@emotion/css";

export const buttonClassName = css`
  background: transparent;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  height: 3rem;
  padding: 0 2rem;

  :hover {
    background: #ffffff;
    color: #000000;
    opacity: 0.5;
  }
`;
