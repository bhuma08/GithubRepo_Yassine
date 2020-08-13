import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';

//tried to use class component but useState cannot be used in class components.
//useState is used because I was unable to get access to api data outside fetch...
//and change the state using this.setSate...
//here, rows and username are like state objects and setRows and setUsername are used to set the value to those states

function SearchBar2 () {

    const [rows, setRows] = useState([])
    const [username, setUsername] = useState("")
   
    const handleChange = e => {
        setUsername( e.target.value ) 
    }

    const handleSubmit = e =>{

        e.preventDefault()

        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(function (response) {
            setRows(response.data)
            console.log(rows);
        })

    }
        return(
            <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={username}></input>
                    <input type="submit"></input>
                </form>
                
            </div>
            <Result repos={rows}/>
            </>
        )
}

export default SearchBar2;
