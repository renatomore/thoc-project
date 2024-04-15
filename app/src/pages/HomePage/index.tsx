import {
  ShopNowBannerButton,
  LearnMoreButton,
  BannerText,
  Text,
} from "../../../styled-system/components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <div className="banner-content">
          <BannerText style={{ margin: "8px" }}>
            Discover the ultimate DIY keyboard experience
          </BannerText>
          <div style={{ width: "334px", margin: "8px" }}>
            <Text color="#FAFAFA">
              Explore our collection of DIY keyboard kits and accessories
              designed to elevate your typing experience.
            </Text>
          </div>
          <div style={{ marginTop: "31px" }}>
            <ShopNowBannerButton>SHOP NOW</ShopNowBannerButton>
            <LearnMoreButton style={{ marginLeft: "16px" }}>
              LEARN MORE
            </LearnMoreButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
