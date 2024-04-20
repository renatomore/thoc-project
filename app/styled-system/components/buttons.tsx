import styled, { css } from "styled-components";

const sharedButtonStyles = css`
  font-family: "Amiko";
  padding: 16px 24px;
  border: 1px solid #032700;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  transition: 0.5s ease;
  &:hover {
    background: #032700;
    border: 1px solid #74a795;
    color: #fafafa;
  }
  &.selected {
    background: #222e21;
    border: 2px solid #74a795;
    color: #fafafa;
  }
`;

export const MainButton = styled.button`
  ${sharedButtonStyles}
  &:hover {
    border-color: #74a795;
  }
  &.sold-out {
    border: none;
    background: #969696;
    color: #fafafa;
  }
`;

export const MiniButton = styled.button`
  ${sharedButtonStyles}
  padding: 8px !important;
`;

export const ShopNowBannerButton = styled.button`
  ${sharedButtonStyles}
  color: #fafafa;
  border-color: #fafafa;
  background: #03270080;
  &:hover {
    background: #03270080;
  }
`;

export const CommunityHomeButton = styled(ShopNowBannerButton)`
  padding: 8px !important;
  font-weight: 400;
`;

export const LearnMoreButton = styled.button`
  ${sharedButtonStyles}
  border-color: #FAFAFA;
  color: #fafafa;
  background: #adc3b2;
`;
