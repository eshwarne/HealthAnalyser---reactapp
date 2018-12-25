import React, { Component } from 'react';
import Criterions from './Criterions'


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
      <div className="App center collection">
        <h1>Meet All Criterion</h1>
        <Criterions health={ this.state.health } strikeThrough={this.strikeThrough}/>
      </div>
    );
  }
}

export default App;
