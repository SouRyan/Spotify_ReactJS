import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
const song = () => {
  const { id } = useParams();



 
   const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  )[0];
 

   const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
      
  const songsArrayFromArtist = songsArray.filter( (currentSongObj) => currentSongObj.artist === artist)
  // console.log(songsArrayFromArtist)
const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
   const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__bar-names">
          <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Imagem do Artista ${artist}`}
            />
          </Link>
          <div className="song__bar-list">
            <p className="song__name">{name}</p>
            <p>{artist}</p>
          </div>
        </div>
        <Player duration={duration} randomIdFromArtist ={randomIdFromArtist}/>
      </div>
    </div>
  );
};

export default song;
