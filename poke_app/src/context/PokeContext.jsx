
import { useContext ,createContext,useEffect,useState } from "react";

const PokeContext =createContext();

export const usePokeContext=()=>useContext(PokeContext)

export const pokeProvider= ({children})=>{


    const [favs,setFavs]=useState([])

useEffect(()=>{
    const storeFavs= localStorage.getItem('favs')
    if(storeFavs){
        setFavs(JSON.parse(storeFavs))
    }
},[])

useEffect(()=>{
localStorage.setItem('favs',JSON.stringify(favs))

},[favs])

const addToFavs = (favPoke)=>{
    setFavs(prev => [...prev, favPoke])
}

const removeFromFav = (pokeId)=>{
    setFavs(prev=> prev.filter(pok=>pok.id!==pokeId))
}

const isFav=(pokeId)=>{
    return favs.some(poke=>poke.id===pokeId)
}



const value={
    isFav,
    addToFavs,
    removeFromFav,
    favs
}



    return <PokeContext.Provider value={value}>
        {children}
    </PokeContext.Provider>
}



