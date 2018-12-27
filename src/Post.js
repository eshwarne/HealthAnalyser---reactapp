//Route tag sends props by itself with a few parameters
import React, { Component } from 'react';
class Post extends Component{
    state={
        post:null
    }
    componentDidMount(){
        const id= this.props.match.params.postId
    }
    render(){
        return(
            <div className="container">
                <p>HI</p>
            </div>
        )
    }
}
export default Post