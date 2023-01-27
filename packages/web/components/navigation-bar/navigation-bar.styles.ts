import { css } from "@emotion/css";

export const containerClassName = css`
  align-items: center;
  display: flex;
  height: 8rem;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0;
`;

export const brandClassName = css`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const brandDefaultTextClassName = css`
  color: #ffffff;
`;

export const brandRedTextClassName = css`
  color: #f71735;
`;

export const linksClassName = css`
  margin-left: auto;
`;

export const linkClassName = css`
  color: #ffffff;
  cursor: pointer;
  font-size: 1.125rem;
  margin-left: 3rem;

  :hover {
    opacity: 0.5;
  }
`;
