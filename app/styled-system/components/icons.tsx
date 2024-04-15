import { Youtube, Instagram, X, Facebook } from "../assets/socialIcons";
import {
  Bars,
  Bell,
  Bookmark,
  Close,
  Exit,
  Heart,
  Image,
  Money,
  Pause,
  Pencil,
  PlayPause,
  Play,
  Plus,
  Search,
  ShoppingCart,
  ShoppingCartPlus,
  StarNegative,
  StarPositive,
} from "../assets/icons";

type IconName =
  | "Bars"
  | "Bell"
  | "Bookmark"
  | "Close"
  | "Exit"
  | "Heart"
  | "Image"
  | "Money"
  | "Pause"
  | "Pencil"
  | "PlayPause"
  | "Play"
  | "Plus"
  | "Search"
  | "ShoppingCart"
  | "ShoppingCartPlus";

type SocialIconName = "Facebook" | "Instagram" | "X" | "Youtube";

type IconProps = {
  className?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  icon: IconName;
};

type SocialIconProps = {
  className?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  icon: SocialIconName;
};

const ratingStarSizeMap = {
  S: "18px",
  M: "26px",
  L: "36px",
};

type RatingStartSize = keyof typeof ratingStarSizeMap;

type RatingStarProps = {
  className?: string;
  positive?: boolean;
  size?: RatingStartSize;
};

export const Icon = ({
  className,
  backgroundColor,
  color,
  width,
  height,
  icon,
}: IconProps) => {
  const IconComponent = {
    Bars: Bars,
    Bell: Bell,
    Bookmark: Bookmark,
    Close: Close,
    Exit: Exit,
    Heart: Heart,
    Image: Image,
    Money: Money,
    Pause: Pause,
    Pencil: Pencil,
    PlayPause: PlayPause,
    Play: Play,
    Plus: Plus,
    Search: Search,
    ShoppingCart: ShoppingCart,
    ShoppingCartPlus: ShoppingCartPlus,
  }[icon];

  return (
    <IconComponent
      className={className}
      backgroundColor={backgroundColor}
      color={color || "#032700"}
      width={width}
      height={height}
    />
  );
};

export const SocialIcon = ({
  className,
  icon,
  color,
  backgroundColor,
  width,
  height,
}: SocialIconProps) => {
  const SocialIconComponent = {
    Youtube: Youtube,
    Instagram: Instagram,
    X: X,
    Facebook: Facebook,
  }[icon];

  return (
    <SocialIconComponent
      className={className}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
    />
  );
};

export const RatingStar = ({ positive, size, className }: RatingStarProps) => {
  return positive ? (
    <StarPositive
      className={className}
      width={ratingStarSizeMap[size || "M"]}
    />
  ) : (
    <StarNegative
      className={className}
      width={ratingStarSizeMap[size || "M"]}
    />
  );
};
