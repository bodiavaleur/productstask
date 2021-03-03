import styled, { css } from "styled-components";

const textDefaults = css`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #333;
`;

const titleDefaults = css`
  font-family: "Lora", serif;
  font-weight: 400;
  color: #333;
`;

export const PageTitle = styled.h1`
  ${titleDefaults};
  font-size: 2rem;
  color: rgb(255, 204, 0);
`;

export const Price = styled.h4`
  ${titleDefaults};
  font-size: 1rem;
`;

export const Description = styled.p`
  ${textDefaults};
  width: 90%;
  text-align: center;
  font-size: 0.9rem;
`;
