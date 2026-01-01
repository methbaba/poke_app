import { prominent } from 'color.js'
import { useEffect, useState } from "react";
import { usePokeContext } from '../context/PokeContext';
function Card({card}){

    const {removeFromFav,addToFavs,isFav} =usePokeContext()
    const fav=isFav(card.id)
   
  function handleHeart(e){
        e.preventDefault()
        if(isFav){
            removeFromFav(card.id)
        }else{
            addToFavs(card)
        }
  }
    
    return(
        <div className="card" >
            <button className={`card-heart${ isFav?"active":""}` }onClick={()=>handleHeart(e)}
                
                
                >
                    💗
                    
                    
                    </button>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`} className="card-image"
            alt="poke image"></img>
            <h3 className="card-name">{card.name} </h3>
            
        </div>
    );
}

export default Card;