/**
 * Created by Stephen-PC on 1/12/2017.
 */
import React from 'react';
import {Col} from 'react-bootstrap';
import '../../css/Project.css';


export default class IndividualProjectComponent extends React.Component
{
    render() {
        return(
            <Col xs={12} md={4} sm={8} key={this.key}>
                <a href={this.props.link}>
                    <figure className="effect-dexter">
                        <img src={this.props.src} role="presentation"/>
                        <figcaption>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.description}</p>
                        </figcaption>
                    </figure>
                </a>
            </Col>

        );
    }
}

