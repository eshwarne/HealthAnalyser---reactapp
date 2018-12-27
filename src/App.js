import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Criterions from './Criterions'
import Navbar from './Navbar'
import Doctors from './Doctors'
import HealthTips from './HealthTips'
import Posts from './Posts'
import Post from './Post'

class App extends Component {
  state={
    health:[
      {id:'1', name:'Water', crit:10,isDone:false},
      {id:'2', name:'BPM', crit:76,isDone:false},
      {id:'3', name:'Calories',crit:500,isDone:false}
    ]
  }
  strikeThrough=(id)=>{
    const health=this.state.health.map((healthObj)=>{
      if(healthObj.id===id){
        healthObj['isDone']=true
        healthObj['crit']=0
      }
      return healthObj
    })
    this.setState(
      health
    )
  }
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar />
      <Switch>
      <Route path="/someDoctors" component={Doctors}></Route>
      <Route path="/healthTips" component={HealthTips}></Route>
      <Route path="/doctorsPosts" component={Posts}></Route>
      <Route path="/:postId" component={Post}></Route>
      </Switch>
      <div className="App center collection">
        <h1>Meet All Criterion</h1>
        <Criterions health={ this.state.health } strikeThrough={this.strikeThrough}/>
      </div>
      </div>
      </BrowserRouter>
     
      
    )
  }
}

export default App;
