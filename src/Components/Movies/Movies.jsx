import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaStore';
export default function Movies() {

let{trendingMovies}=useContext(MediaContext)
  // useEffect(() => {
  //   document.title='Movies'
  // }, [])
  
  return (
    <div className='row py-4 gy-3'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
            </Helmet>
      <div className='col-md-4'>
        <div className='welcome'>
          <div className='border w-25 text-secondary mb-3'>

          </div>
<h3>trending<br/>Movies<br/>To watch now</h3>
<p className='text-muted mb-3'>most watched movies by day</p>
<div className='border'>
            
            </div>
        </div>
      </div>
      {trendingMovies.slice(0,10).map((item,index)=><div key={index} className='col-md-2'>
<Link className='nav-link' to={`/Details/${item.id}/${item.media_type}`}>
<div className='item position-relative'>
  <img className='w-100' src={`https://image.tmdb.org/t/p/original`+item.poster_path}alt=''/>
  <h2 className='h6'>{item.title}</h2>
  <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
</div>
</Link>
      </div>)}
    </div>
  )
}
