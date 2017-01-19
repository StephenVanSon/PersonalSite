/**
 * Created by Stephen-PC on 1/12/2017.
 */
import React from 'react';

import {Jumbotron} from 'react-bootstrap';
export default class About extends React.Component
{
    render()
    {
        return(
            <Jumbotron>
                <h1>{this.props.title}</h1>
                    <p>
                    {this.props.description}
                    </p>
            </Jumbotron>

        );
    }

}
