// create your App component here
import React, { useEffect, useState} from "react";

const App = () => {
    const [isloaded, setIsLoaded] = useState(false)
    const [randomDogUrl, setRandomDogUrl] = useState(<></>)
    useEffect(() => { 
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r => r.json())
        .then(doggo => {
            setIsLoaded(true)
            setRandomDogUrl(doggo.message)
        })
    },[])

    if (!isloaded) return <p>Loading...</p>;
    return <img src={randomDogUrl} alt ='A Random Dog'></img>
    
}


export default App