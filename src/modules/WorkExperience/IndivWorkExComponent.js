/**
 * Created by Stephen-PC on 1/17/2017.
 */
import React from 'react';
import {Panel, Image, Col, Row, Grid, Media} from 'react-bootstrap';
import '../../css/WorkExperience.css';






export default class IndivWorkExComponent extends React.Component{


    render(){
        let title = <Media.Left><h>{this.props.title}</h></Media.Left>;
        let Bullets = [];
        for(let i =0; i < this.props.description.length; i++){
            Bullets.push(<li key={"liWorkEx_" + i}>{this.props.description[i]}</li>);
        }

        return (
            <Panel header={title} className="panelPad">
                <Grid fluid={true} className="alignLeft">
                    <Row>
                            <Col xs={6} md={4}>
                                <Image src={this.props.src} responsive/>
                            </Col>


                        <Col xs={12} md={8}>

                            <Grid fluid={true}>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <h2>{this.props.position}</h2>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <h3>{this.props.dateRange}</h3>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} md={12} lg={12}>
                                        <ul className="alignLeft">
                                            {Bullets}
                                        </ul>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>


                    </Row>
                </Grid>

            </Panel>

        );
    }

}