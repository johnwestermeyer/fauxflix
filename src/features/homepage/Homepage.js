import React, {useEffect, useState} from "react";
import Row from '../../components/Row/Row'
import VideoPreview from "../../components/VideoPreview/VideoPreview";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

const Homepage = () => {    
    const {height, width} = useWindowDimensions();    
    const [rowLength, setRowLength] = useState(8);
    const [showPreview, setShowPreview] = useState(false);
    const [genreList, setGenresList] = useState(null);
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

    const getGenres = async () => {
      const gr = await fetch(genreURL);
      const results = await gr.json();
      setGenresList(results.genres);
    }

    useEffect(() => {
        const returnValue = Math.round((width * 0.80) / 80);
        if(returnValue <= 8){          
          setRowLength(returnValue);
        }
    },[width])

    useEffect(() => {
      genreList === null && getGenres();
    },[]);

    const retrieveGenre = (genres) => {
      if(genreList !== null){
        const genreNames = [];
        genres.forEach(genre => {genreNames.push(genreList.filter(title => title.id === genre).map(item => item.name))});
        return genreNames;
      } else {
        return null;
      }
    }

    if(genreList === null){
      return (
        <>Loading...</>
      )
    }
    return (
        <>
        <p style={{color: "white"}}>PlaceHolder</p>
            <VideoPreview 
              title={showPreview.title} 
              trailer={showPreview.trailer} 
              overview={showPreview.overview} 
              setShowPreview={setShowPreview} 
              showPreview={showPreview}
              height={height} 
              width={width}/>
            {genreList.map((genre, i) => 
              <Row key={i} rowLength={rowLength} genre={genre.id} name={genre.name} setShowPreview={setShowPreview} retrieveGenre={retrieveGenre}/>)}
        </>
    )
};

export default Homepage;