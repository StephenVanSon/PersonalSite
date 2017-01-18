/**
 * Created by Stephen-PC on 1/12/2017.
 */
import React from 'react';
import {Col, Image} from 'react-bootstrap';
import '../../css/Project.css';


export default class IndividualProjectComponent extends React.Component
{
    render() {
        return(
            <Col xs={12} md={4} sm={8} key={this.key}>
                <a href={this.props.link}>
                    <figure className="effect-dexter">
                        <Image src={this.props.src} responsive/>
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

