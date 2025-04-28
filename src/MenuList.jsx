import "./MenuList.css";
import MenuListItem from "./MenuListItem";
const MenuList = ({ setLevel }) => {
  return (
    <div className="containerList">
      <MenuListItem
        level="Low"
        setLevel={setLevel}
        
      />
      <MenuListItem
        level="Meduim"
        setLevel={setLevel}
       
      />
      <MenuListItem
        level="Hard"
        setLevel={setLevel}
      
      />
      <MenuListItem
        level="Insane"
        setLevel={setLevel}
       
      />
    </div>
  );
};
export default MenuList;
