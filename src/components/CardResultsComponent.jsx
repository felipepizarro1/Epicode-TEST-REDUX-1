import React from 'react'

export default function CardResultsComponent({result}) {
  return (
    <>
    <div className="col text-center" id={result.id}>
        <a href={`/album_page.html?id=${result.album.id}`}>
            <img className="img-fluid" src={result.album.cover_medium} alt="1" />
        </a>
        <p>
            <a href={`/album_page.html?id=${result.album.id}`}>
            Album: {result.album.title.length < 16
                ? `${result.album.title}`
                : `${result.album.title.substring(0, 16)}...`}
            <br />
            </a>
            <a href={`/artist_page.html?id=${result.artist.id}`}>
            Artist: {result.artist.name}
            </a>
        </p>
    </div>
    </>
  )
}
