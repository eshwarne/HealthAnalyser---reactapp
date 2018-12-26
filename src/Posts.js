import React, { Component } from 'react'
import axios from 'axios'
class Posts extends Component{
    state = {
        Doctorsposts:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const Doctorsposts=response.data.slice(0,5)
            this.setState(
                {Doctorsposts}
            )
        })
    }
    render(){
        const doctorPostsMapped=this.state.Doctorsposts.length?(
            this.state.Doctorsposts.map(
                doctorPost =>{
                    return(
                <div className="collection" key={doctorPost.id}>
                <p className="collection-item"> {doctorPost.title}</p>
                </div>
                   )
                }
            )
            
        ):(
            <div>NO POSTS BY THE DOCS</div>
        )
        return(
            <div className="container">
                {doctorPostsMapped}
            </div>
        )
    }
}
export default Posts