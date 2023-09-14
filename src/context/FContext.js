import React,{createContext,useEffect,useState} from 'react'

export const FContext=createContext(null);   // Context

export const FContextProvider=(props)=>{

    const [favorites,setFavorites]= useState([]);     // after add from localStorage   // array of object

    useEffect(()=>{
        let favs=localStorage.getItem("favourites");
        favs=JSON.parse(favs);
        if(favs) setFavorites(favs);
        console.log(favs)
    },[])

    const add=(itemObj)=>{
        const newFavorites=[...favorites,itemObj];
        setFavorites([...favorites,itemObj]);   // after setState the state does not immediately change.
        localStorage.setItem("favourites",JSON.stringify(newFavorites));
    }

    const remove=(itemObj)=>{
        const newFavorites=favorites.filter(a =>a.id !== itemObj.id);
        setFavorites(favorites.filter(a =>a.id !== itemObj.id));
        localStorage.setItem("favourites",JSON.stringify(newFavorites));
    }

    const contextValue={favorites,add,remove}
    // console.log(favorites)

    return  <FContext.Provider value={contextValue}>
                {props.children}
            </FContext.Provider>   // provider with value.
}