import { Col, Row, Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import classes from "./style.module.css"
import { IMAGE_PATH } from '../../constant';
import { ImFacebook } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { TiSocialInstagram } from "react-icons/ti";



type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = () => {



    const footerMenu = ['Menu', 'Store Locations', 'Privacy Policy', 'Terms & Conditions', 'Contact']




    return (
        <Row className={classes.footer} gutter={[0, 25]} justify={"center"}>
            <Col span={24} className='centerPosition'>
                <div className={classes.imageContainer}>
                    <img className={classes.imageStyle} src={`${IMAGE_PATH}footer.png`} />
                </div>
            </Col>
            <Col span={24} className='centerPosition'>
                <Typography.Text className={classes.description}>
                    Items availability, prices, participation, delivery areas and charges, purchase
                    requirements for delivery may vary.
                </Typography.Text>
            </Col>
            <Col span={14} className='centerPosition'>
                <Row className='fullContent' justify={"space-between"}>
                    {
                        footerMenu.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <Typography.Text className={classes.fontMenu}>
                                        {item}
                                    </Typography.Text>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
            <Col span={14} className={classes.icons}>
                <ImFacebook size={16} className={classes.iconStyle} />
                <SiTwitter size={16} className={classes.iconStyle} />
                <TiSocialInstagram size={16} className={classes.iconStyle} />
            </Col>
            <Col span={24} className={'centerPosition'}>
                <Typography.Text className={classes.copyRightFont}>
                    &copy;KFC, Inc. All rights reserved.
                </Typography.Text>
            </Col>
        </Row>
    );
}

export default Footer;