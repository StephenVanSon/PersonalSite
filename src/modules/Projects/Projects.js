/**
 * Created by Stephen-PC on 1/12/2017.
 */

import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import IndividualProjectComponent from './IndividualProjectComponent';
import data from '../../data/data';
import '../../css/Project.css';

var IndivComponents = [];
var projectData = data.projects;
for(var i=0; i < projectData.length; i++)
{
    IndivComponents.push(<IndividualProjectComponent key={"project_" + i} src={projectData[i].src} title={projectData[i].title} description={projectData[i].description} link={projectData[i].link}/>);
}


export default class Projects extends React.Component
{
    render()
    {
        return(
            <div className="grid">
                <Grid>
                    <Row>
                        {IndivComponents}
                    </Row>
                </Grid>
            </div>
        )
    }


}