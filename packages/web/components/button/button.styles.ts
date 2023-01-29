import { css } from "@emotion/css";

export const buttonClassName = css`
  background: transparent;
  border-radius: 0.25rem;
  border: 0.0625rem solid #ffffff;
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
