import React, { Component } from 'react';
import Githubapi from './Githubapi';

class Search extends Component {
    state = { username: "" }    
    
    // handleChange = e => this.setState({ username: e.target.value }) 

    // Handlesubmit should save userinput in a variable to be passed 
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ username: e.target.value });
    }
    
    render(){

        
        
        return(
            <div>
                <form>
                    <input type="text" name="userInput" placeholder="Enter Github Username"></input>
                    <input type="submit" name="submitUserInput" onSubmit={this.handleSubmit}></input>
                </form> 
                {console.log(this.state.username)}
                <Githubapi userName={this.state.username}/> 
            </div>  
        )
    }
    
}

export default Search;
    


