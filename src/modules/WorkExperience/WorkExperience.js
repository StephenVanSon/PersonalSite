/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import data from '../../data/data';
import {Well, PageHeader} from 'react-bootstrap';
import IndivWorkExComponent from './IndivWorkExComponent'
import "../../css/WorkExperience.css";


var IndivComponents = [];
var workData = data.work;

for(let i =0; i < workData.length; i++){
    IndivComponents.push(<IndivWorkExComponent key={"work_" + i} title={workData[i].title} src={workData[i].src} dateRange={workData[i].dateRange} position={workData[i].position} description={workData[i].description}/>)
}


class WorkExperience extends React.Component{
    render(){
        return (
            <Well bsSize="small">

                <div className="container">
                    <PageHeader>Work Experience</PageHeader>
                    {IndivComponents}
                </div>
            </Well>

        );
    }
}

export default WorkExperience;