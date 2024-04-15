import styled from "styled-components";

export const Link = styled.a<{ size?: "S" | "M" }>`
  cursor: pointer;
  font-weight: 600;
  font-size: ${(props) => (props.size === "S" ? "13px" : "24px")};
  color: #032700;
  text-decoration: none;
  &:hover {
    color: #74a795;
  }
`;
