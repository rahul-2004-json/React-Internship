import MenuList from "./menu-list";
import "./styles.css";
/*
Main Logic of this component is 
1.TreeView calls the MenuList components and we pass the list as props to it
2. MenuList component maps every item in the list and gives it as prop to MenuItem component
3. In MenuItem component it check if there is any children present then we recursively call the MenuList component again and pass in the children list as props to MenuList
*/
export default function TreeView({ menus = [] }) {
  return (
    <div className="TreeView">
      <MenuList list={menus} />
    </div>
  );
}
