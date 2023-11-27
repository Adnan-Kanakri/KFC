import { Col, List, Row, Typography, Grid } from 'antd';
import React, { FunctionComponent } from 'react';
import Options from './options';
import classes from "./style.module.css"
import { useGetExploreDetailsData } from '../../shared/hooks/explore';
import TopDetailsCard from "../../shared/components/top-details-card"
import { IMAGE_PATH } from '../../shared/constant';


type ProductDetailsProps = {};

const ProductDetails: FunctionComponent<ProductDetailsProps> = () => {

    const { exploreData, loading } = useGetExploreDetailsData('1')
    const { useBreakpoint } = Grid
    const { sm } = useBreakpoint()

    return (
        <Row className={classes.backGround} justify={"center"}>
            <Col span={15}>
                <Options />
            </Col>
            <Col span={24} >
                <Row className={classes.backGround} justify={"center"}>
                    <Col lg={18} md={18} sm={24} xs={24} className={`${classes.listContainer} centerPosition`}>
                        <List
                            dataSource={exploreData?.[0].details ?? []}
                            loading={loading}
                            className='centerPosition'
                            grid={{
                                gutter: 15,
                                column: 3,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl: 3,
                                xxl: 3,
                            }}
                            renderItem={(item) => {
                                return (
                                    <List.Item className='centerPosition'>
                                        <TopDetailsCard key={item.id} data={item} />
                                    </List.Item>
                                )
                            }}
                        />

                    </Col>
                    <Col lg={6} md={6} sm={24} xs={24}>
                        <Row className='fullContent'>
                            <Col span={24} className={classes.colContainer}>
                                <Row className='fullContent' justify={"end"}>
                                    <div className={classes.shape}></div>
                                    <div className={classes.shape}></div>
                                    <div className={classes.shape}></div>
                                </Row>
                                <Typography.Text className={classes.title}>
                                    Choose Your Meal
                                </Typography.Text>
                            </Col>
                            <Col span={24} className={`${classes.ground} centerPosition`}>
                                <div className={classes.imageContainer}>
                                    <img width={196} className={classes.imageStyle} src={`${IMAGE_PATH}/details.png`} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col >
        </Row >
    );
}

export default ProductDetails;