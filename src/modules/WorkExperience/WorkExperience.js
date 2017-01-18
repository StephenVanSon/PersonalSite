/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import data from '../../data/data';
import IndivWorkExComponent from './IndivWorkExComponent'


var IndivComponents = [];
var workData = data.work;

for(let i =0; i < workData.length; i++){
    IndivComponents.push(<IndivWorkExComponent key={"work_" + i} title={workData[i].title} src={workData[i].src} dateRange={workData[i].dateRange} position={workData[i].position} description={workData[i].description}/>)
}


class WorkExperience extends React.Component{
    render(){
        return (
                <div>
                    {IndivComponents}
                </div>

        );
    }
}

export default WorkExperience;