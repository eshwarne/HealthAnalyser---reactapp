const initState = {
    doctorPosts:[
        {userId:"EshwarNE", title:"Water and its importance", body : "Water consumption on a hourly basis is a vital activity to do! "},
        {userId:"Rohit Sharma", title : "Cricket and life", body : "Cricket is just another sport which makes my life so good"},
        {userId:"Ricky kaka", title : "Football made me a man", body : "Soccer and RM brought me here to who I am"}
    ]
}
const rootReducer = (state = initState, action) =>{

    if(action.type==='DELETE_POST'){
        let newPosts = state.doctorPosts.filter((post) => post.userId!==action.id);
       return ({
            doctorPosts:newPosts
        })
    }
    return state
}
export default rootReducer;