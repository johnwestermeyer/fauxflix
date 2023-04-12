import React, {useState, useEffect} from 'react';
import "./Row.scss"
import BoxArt from '../BoxArt/BoxArt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Row = ({rowLength, genre, name, setShowPreview, retrieveGenre, showPreview}) => {
    const discoverURL = "https://api.themoviedb.org/3/discover/movie?api_key="+process.env.REACT_APP_TMDB_API_KEY+
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres="+genre+"&with_watch_monetization_types=flatrate";
    const [input, setInput] = useState([]);
    const [listStart, setListStart] = useState(0);
    const [listContent, setListContent] = useState(null);
    const [shallowList, setShallowList] = useState([]);

    const discoverFetch = async () => {
        const r = await fetch(discoverURL);
        const results = await r.json();
        results.results.forEach((result) => {
            videoFetch(result)
        });
    };

    const videoFetch = async (result) => {
        const url = "https://api.themoviedb.org/3/movie/"+result.id+"/videos?api_key="+process.env.REACT_APP_TMDB_API_KEY+"&language=en-US"
        const vr = await fetch(url);
        const results = await vr.json();
        const trailer = results.results.find(v => v.type === "Trailer");
        const newInput = result;
        const genreNames = retrieveGenre(result.genre_ids);
        if(trailer === undefined) {
            newInput.trailer = null;
            newInput.genreNames = genreNames;
        } else {
            newInput.trailer = trailer.key;
            newInput.genreNames = genreNames;
        }
        setInput(input => [...input, newInput]);
    };

    useEffect(() =>{
        discoverFetch();
    },[]);

    useEffect(() => {
        if(input !== null){
            if(input.length > rowLength){
                if(listStart + rowLength < input.length){
                    setListContent(input.slice(listStart, listStart + rowLength));
                } else {
                    setListContent(input.slice(listStart).concat(input.slice(0, listStart - (input.length - rowLength))));
                }
            } else {
                setListContent(input);
            }
        }
    }, [listStart, rowLength, input]);

    const scrollListBackward = () => {
        setShallowList(listContent);
        if(listStart - rowLength > 0){
            setListStart(listStart - rowLength);
        } else {
            setListStart(0);
        }
    };

    const scrollListForward = () => {
        setShallowList(listContent);
        if(listStart + rowLength < input.length){
            setListStart(listStart + rowLength);
        } else if (listStart + rowLength == input.length) {
            setListStart(0);
        } else {
            setListStart(input.length - listStart);
        }
    };


    if(listContent === null){
        return (<>Loading....</>)
    }
    return (
        <>
        <span className="heading">{name}</span>
        <div className="row">
            <div className="hoverContainer">
                {listStart !== 0 && <button onClick={scrollListBackward} className="hoverNav Backward">
                    <FontAwesomeIcon className="hoverIcon" icon={faChevronLeft}/>
                </button>}
            </div>
            {listContent.map((title, i)=> (
                <BoxArt key={i} title={title} image={title.poster_path} setShowPreview={setShowPreview} id={title.id} trailer={title.trailer} overview={title.overview} showPreview={showPreview}/>
            ))}
            <div className="hoverContainer">
                <button onClick={scrollListForward} className="hoverNav Forward">
                    <FontAwesomeIcon className="hoverIcon" icon={faChevronRight}/>
                </button>
            </div>
        </div>
        </>
    )
};

export default Row;