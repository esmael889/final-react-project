import React from 'react';
import { Helmet } from 'react-helmet';
import Movies from '../Movies/Movies';
import People from '../People/People';
import TvShows from '../TvShows/TvShows';
// import style from './Home.module.scss';
export default function Home() {
// const [TrendingItems, setTrendingItems] = useState([])
//   useEffect(() => {
//     getTrendingItems();

//   }, [])
  
//  let getTrendingItems=async()=>{
// let {data}=await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8');
// setTrendingItems(data.results);
//   }
  return (
 <>

<Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>









 {/* <div className='row my-3 py-5'>
  <div className='col-md-4'>
    <div>
      <div className={`${style.border} mb-4 w-25`}></div>
    <h3>Trending</h3>
    <h3>Movies</h3>
    <h3>To Watch now</h3>
    <span className='text-muted fs-5' >most watched movies by day</span>
      <div className={`${style.border} mt-4 w-100`}></div>
    </div>
  </div>
{TrendingItems.map((item,index)=>(
  <div key={index} className='col-md-2'>
  <div className='item'>
    <img className='w-100' src={`https://image.tmdb.org/t/p/original${item.poster_path}`}alt=''/>
<h6>{item.title}{item.name}</h6>
  </div>
</div>
))}
 </div> */}

 <Movies/>
 <TvShows/>
 <People/>
 </>
  )
}
