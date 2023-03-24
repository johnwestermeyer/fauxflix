import React, {useState, useEffect, useReducer} from 'react';
import "./Row.scss"
import sample from '../../assets/sample.json';
import BoxArt from '../BoxArt/BoxArt';

const Row = () => {
    const input = sample.results;
    const [listStart, setListStart] = useState(0);
    const [listContent, setListContent] = useState([]);
    const [shallowList, setShallowList] = useState([]);

    useEffect(() => {
        if(input.length > 9){
            if(listStart + 9 < input.length){    
                setListContent(input.slice(listStart, listStart + 9));
            } else {
                setListContent(input.slice(listStart).concat(input.slice(0, input.length - listStart)))
            }
        } else {
            setListContent(input);
        }
    }, [listStart])

    const scrollList = (direction) => {
        setShallowList(listContent);
        if(direction === "forward"){
            listStart += 9;
        } else {
            listStart -= 9;
        }
    }

    if(listContent.length <= 0){
        return (<>Loading....</>)
    }
    return (
        <div className="row">
            <div className="hoverContainer">
                <div className="hoverNav Backward">test</div>
            </div>
            {listContent.map((title, i)=> (
                <BoxArt key={i} title={title.title} image={title.poster_path} overview={title.overview}/>
            ))}
            <div className="hoverContainer">
                <div className="hoverNav Forward">test</div>
            </div>
        </div>
    )
};

export default Row;