//Route tag sends props by itself with a few parameters
import React, { Component } from 'react';

//connect makes the component into a HOC, but connect is a function, so make it a wrap () ()
import { connect } from 'react-redux'
// import axios from 'axios'
class Post extends Component{
    // state={
    //     post:null
    // }
    // componentDidMount(){
    //     // const id= this.props.match.params.postId
    //     // const url="https://jsonplaceholder.typicode.com/posts/"+id;
    //     // axios.get(url).then((response)=>{
    //     //     console.log(response)
    //     //     this.setState(
                
    //     //         {post : response.data}
                
    //     //     )
            
    //     // })
    // }

    render(){

        const toPost=this.props.posts.find((post) => {return post.userId=this.props.match.params.postId})
        return(
            <div className="container">
        <p className="collection-header"> ID : {toPost.userId} </p>
        <p className="collection-item">Title : {toPost.title}</p>
        <p className="collection-item">Content : { toPost.body }</p>
    </div>
        )
    }
}

//subscribing
const mapStateToProps = (state) => {
    return {
        posts:state.doctorPosts
    } //return js object
}
export default connect(mapStateToProps)(Post); // wrapping functions