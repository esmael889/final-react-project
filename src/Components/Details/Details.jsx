import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Details() {
  const [ItemDetails, setItemDetails] = useState({})
  let params=useParams();
  let getItemDetails=async()=>{
let {data}=await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-Us`);
setItemDetails(data);
console.log(data);
  }
  useEffect(() => {
getItemDetails();
  }, [])


  return (
  <>
  <div className='row py-4'>
    <div className='col-md-3'>
{params.mediaType==='person'?<img className='w-100' src={"https://image.tmdb.org/t/p/original" + ItemDetails.profile_path} alt="" />:
      <img className='w-100' src={"https://image.tmdb.org/t/p/original" + ItemDetails.poster_path} alt="" />
}
    </div>
    <div className='col-md-9'>
      <h2>{ItemDetails.title} {ItemDetails.name}</h2>
      <p className='text-muted my-3'>{ItemDetails.overview} {ItemDetails.biography}</p>
{/* 
      <table className="table  text-white">
  <thead >
    <td>category</td>
    <td>Watch/Download</td>
    <td>Quality</td>
  </thead>
  <tbody>
    <tr>
      <td width={'30%'}>
        <p>The 2016 troll troll is set in a context of comedies and adventures,
        where the plot of the film revolves around a doomie who is loved and friendly and plays around One day,
        a group of Bergen occupying their hillside, and Bobby is on an adventure to save her friends</p>
      </td>
      <td width={'50%'}><button className='btn btn-success'>Watch</button><button className='btn btn-danger'>Download</button></td>
      <td width={'20%'}>
        <p>360P</p>
        <p>480P</p>
        <p>720P</p>
        <p>1080P</p>
        </td>
    </tr>
  </tbody>
</table> */}

    </div>
  </div>
  </>
  )
}
