import React, { Component } from 'react';

// Tell Githubapi to take a prop
class Githubapi extends Component {
    state = {
        practice : " ",
        // load : false
    }

    //api = ()=> {
    componentDidMount(){
        console.log("I've been called");
        const url = `https://api.github.com/users/${this.props.userName}/repos`;
        //const response = fetch(url);
        fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(data => this.setState({ practice : data, loading : false }))
        //const data = response.json();
        //console.log(data);
        //this.setState({practice: data, load : false})

    }

    render(){
        return(
            <div>
                {/* { this.api() } */}
                {/* { this.state.load || !this.state.practice ? (
                <div>loading...</div>
                ) : ( */}
                <div>
                    No of Repo: {this.state.practice.length}<br></br>
                    Name of Repo: {this.state.practice[0].name}
                </div>
                )} 
            </div>
          
        )
    }
}






export default Githubapi;