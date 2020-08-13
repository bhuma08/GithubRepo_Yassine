import React, { Component } from 'react';

// Tell Githubapi to take a prop
class Githubapi extends Component {
    state = {
        practice : " ",
        load : true
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.userName}/repos`;
        // const url = `https://api.github.com/users/bhuma08/repos`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({practice: data, load: false})
        this.setState({practice: data})
        console.log(data[1]);
        // console.log(this.state.load)
    }

    // api=()=> {
    //     this.setState({load: true})
    //     console.log("load is true")
    // }

    // componentDidUpdate(){
    //     if(!this.state.load){
    //         this.api()
    //     }
    // }

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

    // componentDidUpdate(){
    //     if(this.state.load){
    //         console.log('true')
    //     } if (!this.state.load) {
    //             this.setState({
    //                 load: true
    //             })
    //             console.log("false")
    //         }
    // }
}
export default Githubapi;