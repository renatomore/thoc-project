import {
  ShopNowBannerButton,
  LearnMoreButton,
  BannerText,
  Text,
  ShopNowCard,
  HoverCard,
  Heading,
  CommunityHomeButton,
  HomeCommunityCards,
} from "../../../styled-system/components";
import "./HomePage.css";

const HomePage = () => {
  const mediumCardsData = [
    {
      contentText: "Tac T3",
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Tac-T3-1.png",
      hoverBackgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Tac-T3-2.png",
    },
    {
      contentText: "Feker Galaxy 80",
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Feker-Galaxy-80-1.png",
      hoverBackgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Feker-Galaxy-80-2.png",
    },
    {
      contentText: "Rainy 75",
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Rainy-75-1.png",
      hoverBackgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Rainy-75-2.png",
    },
    {
      contentText: "Keyduos NJ98",
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Keyduos-NJ98-1.png",
      hoverBackgroundImage:
        "src/assets/images/Homepage/Cards/MediumCards/Keyduos-NJ98-2.png",
    },
  ];

  const largeCardData = {
    contentText: "Wuke Studios Freya",
    backgroundImage:
      "src/assets/images/Homepage/Cards/LargeCards/wuke-studios-freya.jpeg",
  };

  const smallCardsData = [
    {
      contentText: "Equals Tangerine",
      backgroundImage:
        "src/assets/images/Homepage/Cards/SmallCards/Equals-Tangerine.png",
    },
    {
      contentText: "Tecses Bocchi",
      backgroundImage:
        "src/assets/images/Homepage/Cards/SmallCards/Tecses-Bocchi.png",
    },
    {
      contentText: "Bsun Aniya",
      backgroundImage:
        "src/assets/images/Homepage/Cards/SmallCards/Bsun-Aniya.png",
    },
    {
      contentText: "WS Morandi",
      backgroundImage:
        "src/assets/images/Homepage/Cards/SmallCards/WS-Morandi.png",
    },
  ];

  const largeHoverCardData = {
    contentText: "PBTFANS KABUKI-CHO",
    backgroundImage:
      "src/assets/images/Homepage/Cards/LargeHoverCards/PBTFANS-KABUKI-CHO.png",
  };

  const mediumHoverCardData = [
    {
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumHoverCards/GMK-ZEN-POND.png",
      contentText: "GMK ZEN POND",
    },
    {
      backgroundImage:
        "src/assets/images/Homepage/Cards/MediumHoverCards/PBTFANS-SYNTHBLAZE.png",
      contentText: "PBTFANS SYNTHBLAZE",
    },
  ];

  const communityCards = [
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/1.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/2.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/3.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/4.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/5.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/6.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/7.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/8.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/9.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/10.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/11.png",
    },
    {
      image: "src/assets/images/Homepage/Cards/CommunityCards/12.png",
    },
  ];

  const mediumCardsRows = [];
  for (let i = 0; i < mediumCardsData.length; i += 2) {
    const row = mediumCardsData.slice(i, i + 2);
    mediumCardsRows.push(row);
  }

  const communityCardsRows = [];
  for (let i = 0; i < communityCards.length; i += 4) {
    const row = communityCards.slice(i, i + 4);
    communityCardsRows.push(row);
  }

  return (
    <div className="home-container">
      <div className="banner-container">
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

      <div className="home-cards-container">
        <div className="medium-cards-container">
          {mediumCardsRows.map((row, index) => (
            <div className="row" key={index}>
              {row.map((cardData, cardIndex) => (
                <div className="medium-card" key={cardIndex}>
                  <ShopNowCard {...cardData} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="large-card-container">
          <ShopNowCard {...largeCardData} />
        </div>

        <div className="small-card-container">
          <div className="row">
            {smallCardsData.map((cardData, index) => (
              <div className="small-card" key={index}>
                <ShopNowCard small {...cardData} />
              </div>
            ))}
          </div>
        </div>

        <div className="large-hover-card">
          <HoverCard
            backgroundImage={largeHoverCardData.backgroundImage}
            contentText={largeHoverCardData.contentText}
            large
          />
        </div>

        <div className="medium-hover-card-container">
          {mediumHoverCardData.map((cardData, index) => (
            <div className="medium-hover-card" key={index}>
              <HoverCard
                backgroundImage={cardData.backgroundImage}
                contentText={cardData.contentText}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="community-container">
        <div className="community-content">
          <div className="community-heading">
            <Heading color="#FAFAFA" size="L">
              COMMUNITY
            </Heading>
          </div>
          <div className="community-buttons">
            <CommunityHomeButton>HOT NOW</CommunityHomeButton>
            <CommunityHomeButton style={{ marginLeft: "16px" }}>
              NEW ACTIVITY
            </CommunityHomeButton>
            <CommunityHomeButton style={{ marginLeft: "16px" }}>
              LIKED
            </CommunityHomeButton>
            <CommunityHomeButton style={{ marginLeft: "16px" }}>
              FAVORITES
            </CommunityHomeButton>
          </div>
          <div className="community-cards">
            {communityCardsRows.map((row, index) => (
              <div className="community-row" key={index}>
                {row.map((cardData, cardIndex) => (
                  <div className="community-card" key={cardIndex}>
                    <HomeCommunityCards $backgroundImage={cardData.image} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <img
          className="community-container-background"
          src="src/assets/images/Homepage/Comunity.jpeg"
        />
      </div>
    </div>
  );
};

export default HomePage;
