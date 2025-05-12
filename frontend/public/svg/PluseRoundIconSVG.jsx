const PluseRoundIconSVG = ({ className, iconHeight, iconWidth }) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      fill="none"
      className={className}
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default PluseRoundIconSVG;
