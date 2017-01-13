/**
 * Created by Stephen-PC on 1/12/2017.
 */

import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import IndividualProjectComponent from './IndividualProjectComponent';
import data from '../data/data.json';
import '../css/Project.css';

var IndivComponents = [];
var projectData = data.projects;
console.log(projectData);
for(var i=0; i < projectData.length; i++)
{
    let imgSrc = projectData[i].src;
    let title = projectData[i].title;
    let description = projectData[i].description;
    let link = projectData[i].link;
    let key = "project_" + i;
    IndivComponents.push(<IndividualProjectComponent key={key} src={imgSrc} title={title} description={description} link={link}/>);
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