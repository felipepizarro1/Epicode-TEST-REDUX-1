import React from 'react'
import CardResultsComponent from './CardResultsComponent'

export default function MainComponent({results, rockResults, popResults, hipHopResults}) {
  return (
    <>
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="searchResults" style={{ display: results.length > 0 ? 'block' : 'none' }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {results.length > 0 && results.map(result =>(
                    <CardResultsComponent result={result}/>
                ))  }

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                 {rockResults.length > 0 && rockResults.map(result =>(
                    <CardResultsComponent result={result}/>
                ))  }
                
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                    {popResults.length > 0 && popResults.map(result =>(
                            <CardResultsComponent result={result}/>
                        ))  }

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                        {hipHopResults.length > 0 && hipHopResults.map(result =>(
                            <CardResultsComponent result={result}/>
                        ))  }

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
