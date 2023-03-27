import React, {useState, useEffect} from 'react';
import "./Row.scss"
import sample from '../../assets/sample.json';
import BoxArt from '../BoxArt/BoxArt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Row = ({rowLength}) => {
    const input = sample.results;
    const [listStart, setListStart] = useState(0);
    const [listContent, setListContent] = useState([]);
    const [shallowList, setShallowList] = useState([]);

    useEffect(() => {
        if(input.length > rowLength){
            if(listStart + rowLength < input.length){
                setListContent(input.slice(listStart, listStart + rowLength));
            } else {
                setListContent(input.slice(listStart).concat(input.slice(0, listStart - (input.length - rowLength))));
            }
        } else {
            setListContent(input);
        }
    }, [listStart, rowLength])

    const scrollListBackward = () => {
        setShallowList(listContent);
        if(listStart - rowLength > 0){
            setListStart(listStart - rowLength);
        } else {
            setListStart(0);
        }
    }

    const scrollListForward = () => {
        setShallowList(listContent);
        if(listStart + rowLength < input.length){
            setListStart(listStart + rowLength);
        } else {
            setListStart(0 + (input.length - listStart));
        }
    }


    if(listContent.length <= 0){
        return (<>Loading....</>)
    }
    return (
        <div className="row">
            <div className="hoverContainer">
                {listStart !== 0 && <button onClick={scrollListBackward} className="hoverNav Backward">
                    <FontAwesomeIcon className="hoverIcon" icon={faChevronLeft}/>
                </button>}
            </div>
            {listContent.map((title, i)=> (
                <BoxArt key={i} title={title.title} image={title.poster_path} overview={title.overview}/>
            ))}
            <div className="hoverContainer">
                <button onClick={scrollListForward} className="hoverNav Forward">
                    <FontAwesomeIcon className="hoverIcon" icon={faChevronRight}/>
                </button>
            </div>
        </div>
    )
};

export default Row;