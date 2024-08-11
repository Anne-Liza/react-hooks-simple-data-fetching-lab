import { useEffect, useState } from "react";

function App(){
const [data,setData]=useState(null);
const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then ((response) =>response.json())
        .then ((json)=>{
            setData(json);
            setLoading(false);
        });
    }, []);
    if(loading){
        return <p>Loading ...</p>
        
    }
    return(
        <div>
            <img src={data.message} alt="A Random Dog" />
        </div>
    );
}

export default App;