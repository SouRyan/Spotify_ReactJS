import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";
// import { artistArray } from "../assets/database/artists";
const itemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title);
const { pathname } = useLocation();
  const isHome = pathname === "/";
  let finalItems;
  // isHome ? (finalItems = items) : (finalItems = Infinity)
  finalItems = isHome ? items : Infinity;
  return (
    <div>
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title} Populares</h2>
          {isHome ? (
            <Link className="main__link" to={path}>
              Mostrar Tudo
            </Link>
          ) : (
            <></>
          )}
        </div>

        <div className="item-list__container">
          {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (
              <SingleItem
                // id={currObj.currObj}
                // name={currObj.name}
                // image={currObj.image}
                // banner={currObj.banner}
                idPath={idPath}
                {...currObj}
                key={`${title}-${index}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default itemList;
// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`}/>
//   ))}
