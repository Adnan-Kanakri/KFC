import React, { FunctionComponent } from 'react';
import { IMAGE_PATH } from '../../../shared/constant';
import { Col, Row } from 'antd';
import classes from "./style.module.css"



type BannerProps = {};

const Banner: FunctionComponent<BannerProps> = () => {


    const data: Array<any> = [
        `${IMAGE_PATH}banner1.png`, `${IMAGE_PATH}banner2.png`, `${IMAGE_PATH}banner3.png`, `${IMAGE_PATH}banner4.png`
    ]

    return (
        <Row className='fullContent' justify={"center"} >
            <Col span={20}>
                <Row className='fullContent' justify={"center"} gutter={[35, 80]}>
                    {
                        data.map((item, index) => {
                            return (
                                <Col lg={12} md={12} sm={24} xs={24} key={index} className={classes.imageContainer}>
                                    <img className={classes.imageStyle} src={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default Banner;