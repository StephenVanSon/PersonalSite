/**
 * Created by Stephen-PC on 1/12/2017.
 */
import React from 'react';

import {Jumbotron, Well} from 'react-bootstrap';
export default class About extends React.Component
{
    render()
    {
        return(
        <Well bsSize="small">
            <Jumbotron>
                <h1>About myself</h1>
                    <p>
                    {this.props.description}
                    </p>
            </Jumbotron>
        </Well>
        );
    }

}