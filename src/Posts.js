import React, { Component } from 'react'
import { Link } from'react-router-dom'
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
                <Link to={"/" + doctorPost.id}>
                <p className="collection-header"> {doctorPost.title}</p>
                </Link>
                <p className="collection-item"> {doctorPost.body}</p>
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