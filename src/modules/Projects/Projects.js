/**
 * Created by Stephen-PC on 1/12/2017.
 */

import React from 'react';
import {Grid, Row, PageHeader, Well} from 'react-bootstrap';
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
            <Well bsSize="small">
                <div className="grid">
                    <PageHeader>Projects</PageHeader>

                    <Grid>
                        <Row>
                            {IndivComponents}
                        </Row>
                    </Grid>
                </div>
            </Well>
        )
    }


}