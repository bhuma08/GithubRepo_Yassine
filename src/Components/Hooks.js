import React, {useState} from 'react';

function Hooks(){

    const [thing, setThing] = useState("Happy")
    const [age, setAge] = useState("")

    const handleClick = () =>{
        setThing("extra happy");
    }
    const handleChange = e =>{
        setAge(e.target.value);
 
    }
    const handleClickOne = () =>{
        setAge(prevAge => prevAge - 8);
    }

    return(
        <>
        <h1>Practice using Hooks!</h1> <br></br>
        <h2>useState</h2>
        {thing}<br></br>
        <input type="submit" value="Change" onClick = {handleClick}></input><hr></hr>
        <input  value={age} onChange = {handleChange} placeholder="Enter your age" type="text"></input><br></br>
        <input type="submit" value="Age Minus 8" onClick={handleClickOne}></input><br></br>
        {age}<br></br>
        <h2>useEffect</h2>
        </>
    )
}


export default Hooks 