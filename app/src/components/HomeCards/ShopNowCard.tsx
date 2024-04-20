import {
  BannerText,
  ShopNowBannerButton,
} from "../../../styled-system/components";

type LargeShopNowCardProps = {
  backgroundImageUrl: string;
};

export const LargeShopNowCard = ({
  backgroundImageUrl,
}: LargeShopNowCardProps) => {
  return (
    <div style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
      <div>
        <BannerText style={{ fontSize: "26px" }}>Tac-T3</BannerText>
        <ShopNowBannerButton>SHOP NOW</ShopNowBannerButton>
      </div>
    </div>
  );
};

export const SmallShopNowCard = () => {};

export const ShopNowCard = () => {};

export default ShopNowCard;
