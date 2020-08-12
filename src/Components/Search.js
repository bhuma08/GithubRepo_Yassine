import React, { Component } from 'react';
import Githubapi from './Githubapi';
class Search extends Component {
    state = { 
        username: "" ,
        loading: true,
        error: true
    }    
    handleChange = e => this.setState({ username: e.target.value }) 
    // Handlesubmit should save userinput in a variable to be passed 
    handleSubmit = e => {
        e.preventDefault();
        this.setState(prevState => ({
            username: prevState.username
        }))
        this.setState({error: false})
        this.setState({loading: false})
        // this.setState({ username: e.target.userInput.value });
        console.log(this.state.username)
    }
    renderResult = () => {this.loading ? <p>loading...</p> : <Githubapi userName={this.state.username}/>}
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userInput" id="userInput" onChange={this.handleChange} placeholder="Enter Github Username" ></input>
                    <input type="submit" name="submitUserInput" ></input>
                </form> 
                <br></br>
                <div>
                Username: {this.state.username}
                { this.state.error ? <p></p> : this.renderResult() }
                </div>
            </div>  
        )
    }
}
export default Search;
    


