import React from 'react'
const Criterions = ({health,strikeThrough}) => {
    const healthList=health.length? (
        health.map(healthObj=>{ 
             return (<div className='collection-item' key={ healthObj.id }>
                        <h4 className={healthObj.isDone?'collection-header isDone':'collection-header notDone'} id={healthObj.id} >{ healthObj.name } </h4>
                        <p>Criterion: { healthObj.crit } </p>
                        <button className="btn-floating btn-medium waves-effect waves-light red" onClick={()=>{ strikeThrough(healthObj.id)}}><i className="material-icons">done</i></button>
                        <button className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">add</i></button>
                    </div>)
    })): (<p>HEY! U ARE DONE FOR THE DAY!</p>)
    console.log(healthList)
    return(
        <div className="collection">
        { healthList }
        </div>
    )
}
export default Criterions