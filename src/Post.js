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

        const toPost=this.props.post;
        const toPostt=toPost?(<div className="container">
        <p className="collection-header"> ID : {toPost.userId} </p>
        <p className="collection-item">Title : {toPost.title}</p>
        <p className="collection-item">Content : { toPost.body }</p>
        <button onClick={() =>  this.props.deletePost(toPost.userId) }>DELETE BUTTON</button>
    </div>) : (<p>SORRY DELETED THAT</p>)
        return(
            toPostt
        )
    }
}

//subscribing
const mapStateToProps = (state,ownProps) => {
   
    const id = ownProps.match.params.postId
    const post=state.doctorPosts.find((post) => {return post.userId==id})
    console.log(post)
    return {post}
}


//store.dispatch(action) here, dispatch is a callback function passed by connect
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (ids) => dispatch({type:'DELETE_POST',id:ids})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post); // wrapping functions