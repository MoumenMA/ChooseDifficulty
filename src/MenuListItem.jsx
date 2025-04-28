import "./MenuListItem.css";

const MenuListItem = ({ level, setLevel }) => {
  return (
    <button
      className="containerItems"
      onClick={() => {
        setLevel(level);
        setClicked(true);
      }}
    >
      Set to: {level}
    </button>
  );
};

export default MenuListItem;
