
import { useEffect, useState } from "react";
import Card from "../comps/Card";
import fetchRandomPokemon from '../api/api'
import Nav from "../comps/Nav";
function Home(){


    const [pokemons,setPokemons]=useState([])

    useEffect(()=>{

        try{
        const loadPokemon = async()=>{
        const getPoke= await fetchRandomPokemon(2);
        setPokemons(getPoke);
       }

       loadPokemon()
      
        }catch(err){
            console.err(err)
        }
     
    },[]
    )

    function handleInput(e){

    }



    return (
       <>
       
       <div className="home">
            <input 
            className="home-input"
            type="text"
            
            onChange={handleInput()}
            />
            <button className="home-search">search</button>
            
                {/* {pokemons.map((poke)=><Card  card={poke}></Card>)} */}
            
            <Card card={pokemons}></Card>
            

            
        </div>
       </>
        
    );
}

export default Home;