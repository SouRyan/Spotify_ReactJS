import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./itemList";
const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Item list de artistas */}
      {type === 'artists' || type === undefined  ? (
        <ItemList
          title="Artistas"
          items={8}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Item list de Musicas */}
      {type === 'songs' || type === undefined  ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
     
    </div>
  );
};

export default Main;
