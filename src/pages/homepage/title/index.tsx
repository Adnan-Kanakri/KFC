import { Col, Image, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import classes from "./style.module.css"
type TitleProps = {};

const Title: FunctionComponent<TitleProps> = () => {
    return (
        <Row className='fullContent'>
            <Col span={24} >
                <div className={classes.imageContainer}>
                    <img className={classes.imageTitle} src='/images/title.png' />
                </div>
            </Col>
        </Row>
    );
}

export default Title;