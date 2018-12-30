import React, { Component } from 'react'
import { Link } from'react-router-dom'
import { connect } from 'react-redux'
// import axios from 'axios'
class Posts extends Component{
    // componentDidMount(){
    //     // axios.get("https://jsonplaceholder.typicode.com/posts")
    //     // .then(response => {
    //     //     const Doctorsposts=response.data.slice(0,5)
    //     //     this.setState(
    //     //         {Doctorsposts}
    //     //     )
    //     // })
    // }
    render(){
        const doctorPostsMapped=this.props.Doctorsposts.length?(
            this.props.Doctorsposts.map(
                doctorPost =>{
                    return(
                <div className="collection" key={doctorPost.userId}>
                <Link to={"/" + doctorPost.userId}>
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
const mapStateToPropss = (statePassedByConnectFunctionOfReactRedux) => {
    return {
        Doctorsposts :statePassedByConnectFunctionOfReactRedux.doctorPosts
    }

}
export default connect(mapStateToPropss)(Posts)