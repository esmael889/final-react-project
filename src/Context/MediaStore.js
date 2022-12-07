import axios from "axios";
import { createContext, useEffect, useState } from "react";
 export let MediaContext= createContext(0);
 export default function MediaContextprovider(props){
    const [trendingMovies, settrendingMovies] = useState([]);
    const [trendingTvs, settrendingTvs] = useState([]);
    const [trendingPersonss, settrendingPersons] = useState([]);

    let gettrendingItems=async(mediaType,callback)=>{
        let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`);
        callback(data.results);
      }
      useEffect(() => {
        gettrendingItems ('movie',settrendingMovies);
        gettrendingItems ('tv',settrendingTvs);
        gettrendingItems ('person',settrendingPersons);
          }, [])
    return <MediaContext.Provider value={{trendingMovies,trendingTvs,trendingPersonss}}>
        {props.children}
    </MediaContext.Provider>
  
 }