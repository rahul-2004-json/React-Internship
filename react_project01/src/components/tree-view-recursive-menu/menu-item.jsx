import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleCurrentChild(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      /* If the key does not exist, it will be undefined, and negating undefined results in true, effectively showing the children on the first click. 
      If the key exists and is true, negating it will make it false, hiding the children, and vice versa */
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleCurrentChild(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={24} />
            ) : (
              <FaPlus color="#fff" size={24} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
