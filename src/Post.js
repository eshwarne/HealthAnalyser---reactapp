//Route tag sends props by itself with a few parameters
import React, { Component } from 'react';
// import axios from 'axios'
class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        // const id= this.props.match.params.postId
        // const url="https://jsonplaceholder.typicode.com/posts/"+id;
        // axios.get(url).then((response)=>{
        //     console.log(response)
        //     this.setState(
                
        //         {post : response.data}
                
        //     )
            
        // })
    }
    render(){
        const toPost=(this.state.post)? (<div className="container">
        <p className="collection-header"> ID : {this.state.post.userId} </p>
        <p className="collection-item">Title : {this.state.post.title}</p>
        <p className="collection-item">Content : { this.state.post.body }</p>
    </div>) : (<p> LOADING POST....</p>)
        return(
            toPost
        )
    }
}
export default Post