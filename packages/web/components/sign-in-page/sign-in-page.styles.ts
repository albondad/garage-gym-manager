import { css } from "@emotion/css";

export const signInPageClassName = css`
  padding-top: 8rem;
`;

export const containerClassName = css`
  background-color: #111111;
  border-radius: 0.25rem;
  border: 1px solid #333333;
  margin: 0 auto;
  max-width: 40rem;
  padding: 2rem;
`;

export const formClassName = css`
  display: flex;
  flex-direction: column;
`;

export const inputContainerClassName = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const buttonContainerClassName = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

export const headingClassName = css`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0 0 3rem 0;
`;
