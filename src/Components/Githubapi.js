import React, { Component } from 'react';

// Tell Githubapi to take a prop
class Githubapi extends Component {
    state = {
        practice : " ",
        load : true
    }

    //api = ()=> {
    // componentDidMount(){
    //     console.log("I've been called");
    //     const url = `https://api.github.com/users/${this.props.userName}/repos`;
    //     //const response = fetch(url);
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))
    //     .then(data => this.setState({ practice : data, loading : false }))
    //     //const data = response.json();
    //     //console.log(data);
    //     //this.setState({practice: data, load : false})

    // }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.userName}/repos`;
        // const url = `https://api.github.com/users/bhuma08/repos`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({practice: data, load: false})
        console.log(data[1]);
    }

    render(){
        return(
            <div>
                { this.state.load || !this.state.practice ? (
                <div>loading...</div>
                ) : (
                <div>
                    No of Repo: {this.state.practice.length}<br></br>
                    Name of Repo 1: {this.state.practice[0].name}<br></br>
                    Name of Repo 2: {this.state.practice[1].name}<br></br>
                    Name of Repo 3: {this.state.practice[2].name}<br></br>
                    Name of Repo 4: {this.state.practice[3].name}<br></br>
                    
                </div>
                )} 
            </div>
          
        )
    }
}


export default Githubapi;