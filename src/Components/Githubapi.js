import React, { Component } from 'react';

// Tell Githubapi to take a prop
class Githubapi extends Component {
    state = {
        practice : " ",
        load : true
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.userName}/repos`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({practice: data, load: false})
        this.setState({practice: data})
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

// import React, {useState} from 'react';
// import axios from 'axios'

// function Githubapi (props){
//     const [ info, setInfo ] = useState([])
//     const {userName} = props

//     axios.get(`https://api.github.com/users/${userName}/repos`)
//             .then(function (response) {
//             setInfo(response.data)
//         })

//     const listRepos = info.length !== 0 ? info.map((item) =>  
//     <li key={item.id}>
//          <p>{item.name}</p>
//          <p> Fork Counts : {item.forks_count}</p>  
//     </li>) :
//     <h2></h2>

//     return (
//         <div>
//             <ol>
//                {listRepos} 
//             </ol>
//         </div>
//     )
// }
//  export default Githubapi;