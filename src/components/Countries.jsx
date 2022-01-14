import React, {useState, useEffect} from 'react'

const Countries = () => {
    const [resourceType, setResourseType]=useState('europe')
    const [items, setItems]=useState([])


    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/${resourceType}`)
        .then(response=>response.json())
        .then(json=>setItems(json))
    }, [resourceType])


    return(
        <div>
            <div>
                <button onClick={()=> setResourseType('region/europe')}>europe</button>
                {/* <button onClick={()=> setResourseType('region/Americas')}>Americas</button>
                <button onClick={()=> setResourseType('region/Asia')}>Asia</button>
                <button onClick={()=> setResourseType('region/Africa')}>Africa</button>
                <button onClick={()=> setResourseType('region/Oceania')}>Oceania</button>
                  */}
            </div>
            <h3>{resourceType}</h3>
            {/* Gautu duomenu is api spausdinimas */}
            {items.map(item=>{
                    return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}

export default Countries