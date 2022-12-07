// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../Context/MediaStore';
export default function People() {
  let{trendingPersonss}=useContext(MediaContext)
  return (
  <>
<div className='row py-4 gy-3'>
<Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
            </Helmet>
      <div className='col-md-4'>
        <div className='welcome'>
          <div className='border w-25 text-secondary mb-3'>

          </div>
<h3>trending<br/>People<br/>To watch now</h3>
<p className='text-muted mb-3'>most watched People by day</p>
<div className='border'>
            
            </div>
        </div>
      </div>
      {trendingPersonss.slice(0,10).map((item,index)=><div key={index} className='col-md-2'>
      <Link className='nav-link' to={`/Details/${item.id}/${item.media_type}`}>
<div className='item position-relative'>
  <img className='w-100' src={`https://image.tmdb.org/t/p/original`+item.profile_path}alt=''/>
  <h2 className='h6'>{item.name}</h2>

</div>
</Link>
      </div>)}
    </div>
  </>
  )
}
