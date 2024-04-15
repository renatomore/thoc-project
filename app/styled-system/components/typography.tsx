import styled from "styled-components";

const defineColor = (color: string | undefined) => (color ? color : "#032700");

export const BannerText = styled.span`
  font-weight: 700;
  font-size: 48px;
  color: #fafafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #03270080;
`;

export const DisplayLarge = styled.span<{ color?: string }>`
  color: ${(props) => defineColor(props.color)};
  font-weight: 700;
  font-size: 48px;
`;

export const Title = styled.h1<{ color?: string }>`
  color: ${(props) => defineColor(props.color)};
  font-weight: 600;
  font-size: 18px;
`;

const headingSizeMap = {
  M: "20px",
  L: "26px",
};

export const Heading = styled.span<{
  color?: string;
  size?: keyof typeof headingSizeMap;
}>`
  font-weight: 700;
  color: ${(props) => defineColor(props.color)};
  font-size: ${(props) => headingSizeMap[props.size || "M"]};
`;

const priceTextSizeMap = {
  S: "14px",
  L: "20px",
};

export const PriceText = styled.span<{
  color?: string;
  size?: keyof typeof priceTextSizeMap;
}>`
  font-weight: 700;
  color: ${(props) => defineColor(props.color)};
  font-size: ${(props) => priceTextSizeMap[props.size || "S"]};
`;

const textSizeMap = {
  S: "13px",
  M: "14px",
  L: "24px",
};

export const Text = styled.span<{
  color?: string;
  size?: keyof typeof textSizeMap;
}>`
  color: ${(props) => defineColor(props.color)};
  font-weight: ${(props) => (props.size === "S" ? "400" : "600")};
  font-size: ${(props) => textSizeMap[props.size || "M"]};
`;
