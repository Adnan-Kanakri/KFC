import { Col, Row } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import Title from './title';
import ExploreMenu from './explore-menu';
import classes from "./style.module.css"
import TopDetails from './top-details';
import BestSeller from './best-seller';
import Banner from './banner';
import Footer from '../../shared/components/footer';
import BestSellerModal from './best-seller-modal';


type HomePageProps = {};

const HomePage: FunctionComponent<HomePageProps> = () => {

    return (
        <Row className={classes.background} gutter={[0, 30]}>
            <Col span={24}>
                <Title />
            </Col>
            <Col span={24}>
                <ExploreMenu />
            </Col>
            <Col span={24}>
                <TopDetails />
            </Col>
            <Col span={24}>
                <BestSeller />
            </Col>
            <Col span={24}>
                <Banner />
            </Col>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    );
}

export default HomePage;