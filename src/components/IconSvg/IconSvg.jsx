import sprite from "../../img/sprite.svg";

export const IconSvg = ({ tag }) => {
  return (
    <svg>
      <use href={`${sprite}#${tag}`}></use>
    </svg>
  );
};
