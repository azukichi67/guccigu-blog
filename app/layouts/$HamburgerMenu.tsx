type Props = {
  onClick: () => void;
  isMenuOpen: boolean;
};

export const HamburgerMenu = ({ isMenuOpen, onClick }: Props) => {
  // TODO className は props で渡せるようにする
  return (
    <button className="ml-3 md:hidden" onClick={onClick}>
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMenuOpen ? (
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        ) : (
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        )}
      </svg>
    </button>
  );
};
