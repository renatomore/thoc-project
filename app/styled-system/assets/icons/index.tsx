type SVGIconProps = {
  className?: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
};

export const Bars = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "79"}
        height={height ? height : "53"}
        viewBox="0 0 79 53"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.875 52.25V43.6667H78.125V52.25H0.875ZM0.875 30.7917V22.2083H78.125V30.7917H0.875ZM0.875 9.33333V0.75H78.125V9.33333H0.875Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Bell = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "69"}
        height={height ? height : "87"}
        viewBox="0 0 69 87"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.166748 73.5417V64.9583H8.75008V34.9167C8.75008 28.9799 10.5383 23.7047 14.1147 19.0912C17.6911 14.4776 22.3404 11.4556 28.0626 10.025V7.02084C28.0626 5.23265 28.6885 3.71268 29.9402 2.46095C31.1919 1.20921 32.7119 0.583344 34.5001 0.583344C36.2883 0.583344 37.8082 1.20921 39.06 2.46095C40.3117 3.71268 40.9376 5.23265 40.9376 7.02084V10.025C46.6598 11.4556 51.3091 14.4776 54.8855 19.0912C58.4619 23.7047 60.2501 28.9799 60.2501 34.9167V64.9583H68.8334V73.5417H0.166748ZM34.5001 86.4167C32.1397 86.4167 30.119 85.5762 28.4381 83.8953C26.7572 82.2144 25.9167 80.1938 25.9167 77.8333H43.0834C43.0834 80.1938 42.243 82.2144 40.5621 83.8953C38.8812 85.5762 36.8605 86.4167 34.5001 86.4167ZM17.3334 64.9583H51.6668V34.9167C51.6668 30.1958 49.9859 26.1545 46.624 22.7927C43.2622 19.4309 39.2209 17.75 34.5001 17.75C29.7793 17.75 25.7379 19.4309 22.3761 22.7927C19.0143 26.1545 17.3334 30.1958 17.3334 34.9167V64.9583Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Bookmark = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "61"}
        height={height ? height : "83"}
        viewBox="0 0 61 83"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.4498 50.0675L54 68.3795V8.73684C54 7.76054 53.2154 7 52.2857 7H8.71429C7.78456 7 7 7.76054 7 8.73684V68.7294L30.4498 50.0675ZM0.309554 83H0V8.73684C0 3.91162 3.90152 0 8.71429 0H52.2857C57.0985 0 61 3.91162 61 8.73684V82.6896L30.5 58.9737L0.309554 83Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Close = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "61"}
        height={height ? height : "61"}
        viewBox="0 0 61 61"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.46659 60.5417L0.458252 54.5333L24.4916 30.5L0.458252 6.46666L6.46659 0.458328L30.4999 24.4917L54.5332 0.458328L60.5416 6.46666L36.5083 30.5L60.5416 54.5333L54.5332 60.5417L30.4999 36.5083L6.46659 60.5417Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Exit = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "79"}
        height={height ? height : "79"}
        viewBox="0 0 79 79"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5 78.125V69.5417H69.5417V9.45833H39.5V0.875H69.5417C71.9021 0.875 73.9227 1.71545 75.6036 3.39635C77.2846 5.07726 78.125 7.09792 78.125 9.45833V69.5417C78.125 71.9021 77.2846 73.9227 75.6036 75.6036C73.9227 77.2846 71.9021 78.125 69.5417 78.125H39.5ZM30.9167 60.9583L25.0156 54.7354L35.9594 43.7917H0.875V35.2083H35.9594L25.0156 24.2646L30.9167 18.0417L52.375 39.5L30.9167 60.9583Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Heart = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "87"}
        height={height ? height : "80"}
        viewBox="0 0 87 80"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.4999 79.125L37.277 73.5458C30.0527 67.0368 24.0801 61.4219 19.3593 56.701C14.6385 51.9802 10.8833 47.7422 8.09367 43.987C5.30409 40.2318 3.35495 36.7806 2.24627 33.6333C1.13759 30.4861 0.583252 27.2674 0.583252 23.9771C0.583252 17.2535 2.83638 11.6385 7.34263 7.13229C11.8489 2.62603 17.4638 0.37291 24.1874 0.37291C27.9069 0.37291 31.4475 1.15972 34.8093 2.73333C38.1711 4.30694 41.068 6.5243 43.4999 9.38541C45.9319 6.5243 48.8287 4.30694 52.1905 2.73333C55.5523 1.15972 59.093 0.37291 62.8124 0.37291C69.536 0.37291 75.151 2.62603 79.6572 7.13229C84.1635 11.6385 86.4166 17.2535 86.4166 23.9771C86.4166 27.2674 85.8622 30.4861 84.7536 33.6333C83.6449 36.7806 81.6957 40.2318 78.9062 43.987C76.1166 47.7422 72.3614 51.9802 67.6405 56.701C62.9197 61.4219 56.9471 67.0368 49.7228 73.5458L43.4999 79.125ZM43.4999 67.5375C50.3666 61.3861 56.0173 56.1109 60.452 51.712C64.8867 47.313 68.3916 43.4863 70.9666 40.2318C73.5416 36.9773 75.3298 34.0804 76.3312 31.5411C77.3326 29.0019 77.8332 26.4806 77.8332 23.9771C77.8332 19.6854 76.4027 16.109 73.5416 13.2479C70.6805 10.3868 67.1041 8.95624 62.8124 8.95624C59.4506 8.95624 56.3392 9.90399 53.478 11.7995C50.6169 13.695 48.6499 16.109 47.577 19.0417H39.4228C38.3499 16.109 36.3829 13.695 33.5218 11.7995C30.6607 9.90399 27.5492 8.95624 24.1874 8.95624C19.8958 8.95624 16.3194 10.3868 13.4583 13.2479C10.5971 16.109 9.16658 19.6854 9.16658 23.9771C9.16658 26.4806 9.66728 29.0019 10.6687 31.5411C11.6701 34.0804 13.4583 36.9773 16.0333 40.2318C18.6083 43.4863 22.1131 47.313 26.5478 51.712C30.9826 56.1109 36.6333 61.3861 43.4999 67.5375Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Image = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "103"}
        height={height ? height : "103"}
        viewBox="0 0 103 103"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4583 90.125C19.0979 90.125 17.0773 89.2846 15.3964 87.6036C13.7155 85.9227 12.875 83.9021 12.875 81.5417V21.4583C12.875 19.0979 13.7155 17.0773 15.3964 15.3964C17.0773 13.7155 19.0979 12.875 21.4583 12.875H81.5417C83.9021 12.875 85.9227 13.7155 87.6036 15.3964C89.2846 17.0773 90.125 19.0979 90.125 21.4583V81.5417C90.125 83.9021 89.2846 85.9227 87.6036 87.6036C85.9227 89.2846 83.9021 90.125 81.5417 90.125H21.4583ZM21.4583 81.5417H81.5417V21.4583H21.4583V81.5417ZM25.75 72.9583H77.25L61.1562 51.5L48.2812 68.6667L38.625 55.7917L25.75 72.9583Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Money = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "95"}
        height={height ? height : "69"}
        viewBox="0 0 95 69"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.0834 38.7917C52.507 38.7917 49.4671 37.5399 46.9636 35.0365C44.4602 32.533 43.2084 29.4931 43.2084 25.9167C43.2084 22.3403 44.4602 19.3004 46.9636 16.7969C49.4671 14.2934 52.507 13.0417 56.0834 13.0417C59.6598 13.0417 62.6997 14.2934 65.2032 16.7969C67.7067 19.3004 68.9584 22.3403 68.9584 25.9167C68.9584 29.4931 67.7067 32.533 65.2032 35.0365C62.6997 37.5399 59.6598 38.7917 56.0834 38.7917ZM26.0417 51.6667C23.6813 51.6667 21.6607 50.8262 19.9798 49.1453C18.2989 47.4644 17.4584 45.4438 17.4584 43.0833V8.75C17.4584 6.38959 18.2989 4.36893 19.9798 2.68802C21.6607 1.00712 23.6813 0.166668 26.0417 0.166668H86.1251C88.4855 0.166668 90.5062 1.00712 92.1871 2.68802C93.868 4.36893 94.7084 6.38959 94.7084 8.75V43.0833C94.7084 45.4438 93.868 47.4644 92.1871 49.1453C90.5062 50.8262 88.4855 51.6667 86.1251 51.6667H26.0417ZM34.6251 43.0833H77.5418C77.5418 40.7229 78.3822 38.7023 80.0631 37.0214C81.744 35.3405 83.7647 34.5 86.1251 34.5V17.3333C83.7647 17.3333 81.744 16.4929 80.0631 14.812C78.3822 13.1311 77.5418 11.1104 77.5418 8.75H34.6251C34.6251 11.1104 33.7846 13.1311 32.1037 14.812C30.4228 16.4929 28.4022 17.3333 26.0417 17.3333V34.5C28.4022 34.5 30.4228 35.3405 32.1037 37.0214C33.7846 38.7023 34.6251 40.7229 34.6251 43.0833ZM81.8334 68.8333H8.87508C6.51467 68.8333 4.49401 67.9929 2.8131 66.312C1.1322 64.6311 0.291748 62.6104 0.291748 60.25V13.0417H8.87508V60.25H81.8334V68.8333Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Pause = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "61"}
        height={height ? height : "61"}
        viewBox="0 0 61 61"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.7916 60.5417V0.458332H60.5416V60.5417H34.7916ZM0.458252 60.5417V0.458332H26.2083V60.5417H0.458252ZM43.3749 51.9583H51.9582V9.04167H43.3749V51.9583ZM9.04158 51.9583H17.6249V9.04167H9.04158V51.9583Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Pencil = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "79"}
        height={height ? height : "79"}
        viewBox="0 0 79 79"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.45833 69.5417H15.574L57.525 27.5906L51.4094 21.475L9.45833 63.426V69.5417ZM0.875 78.125V59.8854L57.525 3.34271C58.3833 2.5559 59.3311 1.94792 60.3682 1.51875C61.4054 1.08958 62.4962 0.875 63.6406 0.875C64.7851 0.875 65.8938 1.08958 66.9667 1.51875C68.0396 1.94792 68.9694 2.59167 69.7562 3.45L75.6573 9.45833C76.5156 10.2451 77.1415 11.175 77.5349 12.2479C77.9283 13.3208 78.125 14.3938 78.125 15.4667C78.125 16.6111 77.9283 17.7019 77.5349 18.7391C77.1415 19.7762 76.5156 20.724 75.6573 21.5823L19.1146 78.125H0.875ZM54.4135 24.5865L51.4094 21.475L57.525 27.5906L54.4135 24.5865Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const PlayPause = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "61"}
        height={height ? height : "37"}
        viewBox="0 0 61 37"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.458252 36.525V0.475006L26.2083 18.5L0.458252 36.525ZM34.7916 35.6667V1.33334H43.3749V35.6667H34.7916ZM51.9582 35.6667V1.33334H60.5416V35.6667H51.9582Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Play = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "48"}
        height={height ? height : "61"}
        viewBox="0 0 48 61"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.333252 60.5417V0.458332L47.5416 30.5L0.333252 60.5417ZM8.91659 44.8771L31.4478 30.5L8.91659 16.1229V44.8771Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Plus = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "61"}
        height={height ? height : "61"}
        viewBox="0 0 61 61"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2083 34.7917H0.458252V26.2083H26.2083V0.458344H34.7916V26.2083H60.5416V34.7917H34.7916V60.5417H26.2083V34.7917Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const Search = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "99"}
        height={height ? height : "80"}
        viewBox="0 0 99 80"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.4584 57.7201C54.1186 64.8357 44.8905 69.3161 34.6172 69.3161C15.4987 69.3161 0 53.7991 0 34.658C0 15.5169 15.4987 0 34.6172 0C53.7358 0 69.2344 15.5169 69.2344 34.658C69.2344 40.6702 67.7054 46.3247 65.0154 51.2533L99 73.3691L94.695 80L60.4584 57.7201ZM61.3352 34.658C61.3352 49.4314 49.3731 61.4075 34.6172 61.4075C19.8613 61.4075 7.89923 49.4314 7.89923 34.658C7.89923 19.8847 19.8613 7.90855 34.6172 7.90855C49.3731 7.90855 61.3352 19.8847 61.3352 34.658Z"
          fill={color ? color : "#1E1E1E"}
        />
      </svg>
    </div>
  );
};

export const ShoppingCart = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "87"}
        height={height ? height : "87"}
        viewBox="0 0 87 87"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0417 86.4167C23.6813 86.4167 21.6607 85.5762 19.9798 83.8953C18.2989 82.2144 17.4584 80.1937 17.4584 77.8333C17.4584 75.4729 18.2989 73.4523 19.9798 71.7714C21.6607 70.0905 23.6813 69.25 26.0417 69.25C28.4022 69.25 30.4228 70.0905 32.1037 71.7714C33.7846 73.4523 34.6251 75.4729 34.6251 77.8333C34.6251 80.1937 33.7846 82.2144 32.1037 83.8953C30.4228 85.5762 28.4022 86.4167 26.0417 86.4167ZM68.9584 86.4167C66.598 86.4167 64.5773 85.5762 62.8964 83.8953C61.2155 82.2144 60.3751 80.1937 60.3751 77.8333C60.3751 75.4729 61.2155 73.4523 62.8964 71.7714C64.5773 70.0905 66.598 69.25 68.9584 69.25C71.3188 69.25 73.3395 70.0905 75.0204 71.7714C76.7013 73.4523 77.5417 75.4729 77.5417 77.8333C77.5417 80.1937 76.7013 82.2144 75.0204 83.8953C73.3395 85.5762 71.3188 86.4167 68.9584 86.4167ZM22.3938 17.75L32.6938 39.2083H62.7355L74.5376 17.75H22.3938ZM18.3167 9.16667H81.6188C83.264 9.16667 84.5157 9.89983 85.374 11.3661C86.2324 12.8325 86.2681 14.3167 85.4813 15.8187L70.2459 43.2854C69.4591 44.716 68.4041 45.8247 67.0808 46.6115C65.7575 47.3983 64.3091 47.7917 62.7355 47.7917H30.7626L26.0417 56.375H77.5417V64.9583H26.0417C22.823 64.9583 20.3911 63.5457 18.7459 60.7203C17.1008 57.895 17.0292 55.0875 18.5313 52.2979L24.3251 41.7833L8.87508 9.16667H0.291748V0.583333H14.2397L18.3167 9.16667Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const ShoppingCartPlus = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "90"}
        height={height ? height : "91"}
        viewBox="0 0 90 91"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2084 34.625V21.75H30.3334V13.1667H43.2084V0.291672H51.7917V13.1667H64.6667V21.75H51.7917V34.625H43.2084ZM26.0417 90.4167C23.6813 90.4167 21.6607 89.5762 19.9798 87.8953C18.2989 86.2144 17.4584 84.1938 17.4584 81.8333C17.4584 79.4729 18.2989 77.4523 19.9798 75.7714C21.6607 74.0905 23.6813 73.25 26.0417 73.25C28.4022 73.25 30.4228 74.0905 32.1037 75.7714C33.7846 77.4523 34.6251 79.4729 34.6251 81.8333C34.6251 84.1938 33.7846 86.2144 32.1037 87.8953C30.4228 89.5762 28.4022 90.4167 26.0417 90.4167ZM68.9584 90.4167C66.598 90.4167 64.5773 89.5762 62.8964 87.8953C61.2155 86.2144 60.3751 84.1938 60.3751 81.8333C60.3751 79.4729 61.2155 77.4523 62.8964 75.7714C64.5773 74.0905 66.598 73.25 68.9584 73.25C71.3188 73.25 73.3395 74.0905 75.0204 75.7714C76.7013 77.4523 77.5417 79.4729 77.5417 81.8333C77.5417 84.1938 76.7013 86.2144 75.0204 87.8953C73.3395 89.5762 71.3188 90.4167 68.9584 90.4167ZM0.291748 13.1667V4.58334H14.347L32.5865 43.2083H62.6282L79.3657 13.1667H89.1292L70.2459 47.2854C69.4591 48.716 68.4041 49.8247 67.0808 50.6115C65.7575 51.3983 64.3091 51.7917 62.7355 51.7917H30.7626L26.0417 60.375H77.5417V68.9583H26.0417C22.823 68.9583 20.3732 67.5635 18.6923 64.774C17.0114 61.9844 16.9577 59.159 18.5313 56.2979L24.3251 45.7833L8.87508 13.1667H0.291748Z"
          fill={color ? color : "black"}
        />
      </svg>
    </div>
  );
};

export const StarNegative = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "36"}
        height={height ? height : "33"}
        viewBox="0 0 36 33"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0L22.0413 12.4377H35.119L24.5389 20.1246L28.5801 32.5623L18 24.8754L7.41987 32.5623L11.4611 20.1246L0.880983 12.4377H13.9587L18 0Z"
          fill={color ? color : "#92A093"}
        />
      </svg>
    </div>
  );
};

export const StarPositive = ({
  className,
  backgroundColor,
  color,
  width,
  height,
}: SVGIconProps) => {
  return (
    <div className={className}>
      <svg
        width={width ? width : "36"}
        height={height ? height : "33"}
        viewBox="0 0 36 33"
        fill={backgroundColor ? backgroundColor : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0L22.0413 12.4377H35.119L24.5389 20.1246L28.5801 32.5623L18 24.8754L7.41987 32.5623L11.4611 20.1246L0.880983 12.4377H13.9587L18 0Z"
          fill={color ? color : "#032700"}
        />
      </svg>
    </div>
  );
};
