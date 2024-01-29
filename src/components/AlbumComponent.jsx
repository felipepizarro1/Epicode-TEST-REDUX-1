import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function AlbumComponent() {

  const { albumId } = useParams();
  const [albumData, setAlbumData ] = useState();


  useEffect(()=>{
      albumFetch(albumId);
  },[])

  function albumFetch(albumId){
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumId)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAlbumData(data);

    })
    .catch(error=>{
      console.error(error)
    })
  }

  function formatTrackTime(trackData){
    const minutes = Math.floor(parseInt(trackData) / 60);
    const seconds = 
  
    parseInt(trackData) % 60 < 10
      ? '0' + (parseInt(trackData) % 60)
      : parseInt(trackData) % 60
   ;
   return minutes + ":" + seconds;

  }
  
 


  return (
    <>
    {albumData && 
    <div class="col-12 col-md-9 offset-md-3 mainPage">
    <div className="row">
      <div className="col-md-3 pt-5 text-center" id="img-container">
        <img src={albumData.cover} className="card-img img-fluid" alt="Album" />
        <div className="mt-4 text-center">
          <p className="album-title">{albumData.title}</p>
        </div>
        <div className="text-center">
          <p className="artist-name">{albumData.artist.name}</p>
        </div>
        <div className="mt-4 text-center">
          <button id="btnPlay" className="btn btn-success" type="button">
            Play
          </button>
        </div>
      </div>
      <div className="col-md-8 p-5">
        <div className="row">
          <div className="col-md-10 mb-5" id="trackList">
            {albumData.tracks.data.map(track=>(
              
              <div className="py-3 trackHover">
              <a href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
                {track.title}
              </a>
              <small className="duration" style={{ color: 'white' }}>
                {formatTrackTime(track.duration)}
              </small>
          </div>

            ))}
            
          </div>

        </div>
      </div>
    </div>
    </div>
    }
    </>
  )
}
