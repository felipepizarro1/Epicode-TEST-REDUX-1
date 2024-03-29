import React from 'react'
import { Link } from 'react-router-dom'

export default function CardResultsComponent({result}) {
  return (
    <>
    <div className="col text-center" id={result.id}>
      <Link to={`/album_page/${result.album.id}`} >
            <img className="img-fluid" src={result.album.cover_medium} alt="1" />
      </Link>
        <p>
            <a href={`/album_page/${result.album.id}`}>
            Album: {result.album.title.length < 16
                ? `${result.album.title}`
                : `${result.album.title.substring(0, 16)}...`}
            <br />
            </a>
            <a href={`/album_page/${result.artist.id}`}>
            Artist: {result.artist.name}
            </a>
        </p>
    </div>
    </>
  )
}
