import styled from "styled-components";
import { BannerText, ShopNowBannerButton } from "./";

type HoverCardProps = {
  contentText: string;
  backgroundImage: string;
  large?: boolean;
};

type ShopNowCardProps = {
  backgroundImage: string;
  hoverBackgroundImage?: string;
  contentText: string;
  small?: boolean;
};

const CardStyled = styled.div<{
  $bgImg?: string;
  $bgImgHover?: string;
  small?: boolean;
}>`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-image: url(${(props) => props.$bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.2s ease-in-out;
  &:hover {
    background-image: url(${(props) => props.$bgImgHover});
  }
`;

const HoverCardStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const HoverBackgroundImage = styled(BackgroundImage)`
  z-index: 2;
  &:hover {
    z-index: 0;
  }
`;

const Text = styled(BannerText)<{ small?: boolean }>`
  z-index: 1;
  pointer-events: none;
`;

const CardText = styled(Text)<{ small?: boolean }>`
  margin-left: ${(props) => (props.small ? "16px" : "32px")};
  font-size: ${(props) => (props.small ? "20px" : "26px")};
`;

const HoverTextStyled = styled(Text)<{ large?: boolean }>`
  padding: 40px;
  font-size: ${(props) => (props.large ? "48px" : "32px")};
  margin: 0;
`;

const Button = styled(ShopNowBannerButton)<{ small?: boolean }>`
  width: ${(props) => (props.small ? "89px" : "133px")};
  height: ${(props) => (props.small ? "32px" : "48px")};
  margin: ${(props) => (props.small ? "16px" : "24px")};
  padding: ${(props) => (props.small ? "8px" : null)};
  font-size: ${(props) => (props.small ? "12px" : null)};
  z-index: 1;
`;

export const HomeCommunityCards = styled.div<{ $backgroundImage: string }>`
  background: url(${(props) => props.$backgroundImage}) no-repeat center / cover black;
  border-radius: 4px;
  margin: 8px;
  height: 100%;
  width: 100%;
  &:hover {
    box-shadow: 0px 0px 20px 0px #74a795;
  }
`;

export const ShopNowCard = ({
  backgroundImage,
  hoverBackgroundImage,
  contentText,
  small,
}: ShopNowCardProps) => {
  return (
    <CardStyled
      $bgImg={backgroundImage}
      $bgImgHover={hoverBackgroundImage}
      small={small}
    >
      {!hoverBackgroundImage && <BackgroundImage src={backgroundImage} />}
      <Button small={small}>SHOP NOW</Button>
      <CardText small={small}>{contentText}</CardText>
    </CardStyled>
  );
};

export const HoverCard = ({
  contentText,
  backgroundImage,
  large,
}: HoverCardProps) => {
  return (
    <HoverCardStyled>
      <HoverBackgroundImage src={backgroundImage} />
      <HoverTextStyled large={large}>{contentText}</HoverTextStyled>
    </HoverCardStyled>
  );
};
