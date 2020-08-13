import React, { Component } from 'react'

// function Result (props){
//     const {repos} = props
//     return (
//         <div>
//         <h3>{repos.length}</h3>
//         </div>
//     )
// }


// function Result (props) {
//     const {repos} =props;
   
//     const listRepos = repos.length !== 0 ? repos.map((item) =>  
//     <li key={item.id}>
//          <p>{item.name}</p>
//          <p> Fork Counts : {item.forks_count}</p>  
//     </li>) :
//     <h2></h2>

//     return (
//         <div>
//            <h2>List of Repos</h2>
//             <ol>
//                 {listRepos}
                
//             </ol>
//         </div>
//     )
// }


class Result extends Component{

    render(){

        const listRepos = this.props.repos.length !== 0 ? this.props.repos.map((item,idx) =>  
            <li key={idx}>
                <p>{item.name}</p>
                <p> Fork Counts : {item.forks_count}</p> 
            </li>) :
            <h2></h2>
   
        return(
        <div>
            <ol>
                {listRepos}
                
            </ol>
        </div>
        )
    }
}


export default Result;
