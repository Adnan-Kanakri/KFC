import { Card, Col, Row, Image, Typography, Divider } from 'antd';
import React, { Fragment, FunctionComponent } from 'react';
import { IGetAllExploreDate } from '../../service/explore/dtos';
import classes from "./style.module.css"
import Button from '../button';
import { IGetTopDetailsData } from '../../service/top-details/dtos';
import { IMAGE_PATH } from '../../constant';
import { CiHeart } from "react-icons/ci";



type ExploreCardProps = {
    data: IGetTopDetailsData | undefined,
    handleGoTo?: (id: string) => void

};

const ExploreCard: FunctionComponent<ExploreCardProps> = ({ data, handleGoTo }) => {


    return (
        <Row className={`${classes.cardContainer} fullContent`}>
            <Col span={24}>
                <Card
                    className='topDetailsCard'
                    bordered={false}
                    onClick={() => handleGoTo?.(data?.id)}

                    extra={
                        <Fragment>
                            <Row className={`${classes.setHeight} fullContent`} justify={"center"}>
                                <Col span={24} className='centerPosition'>
                                    <div className={classes.imageContainer}>
                                        <img width={220} className={classes.imageStyle} src={`${IMAGE_PATH}/${data?.imageUrl}.png`} />
                                    </div>
                                </Col>
                                <Col span={24} className={classes.position}>
                                    <Row>
                                        <Col span={24} className='centerPosition'>
                                            <div className={`fullContent`}>
                                                <Row className='fullContent' align={"middle"} justify={"space-between"}>
                                                    <Typography className={classes.title}>
                                                        {data?.name ?? ''}
                                                    </Typography>
                                                    <CiHeart size={24} className={classes.icon} />
                                                </Row>
                                            </div>
                                        </Col>
                                        <Divider className={classes.changeMargin} />
                                        <Col span={24} >
                                            <div>
                                                <Typography className={classes.description}>
                                                    {data?.description ?? ''}
                                                </Typography>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Fragment>
                    }
                >
                    <Row className='fullContent'>
                        <Col span={24} className='centerPosition'>
                            <Button
                                className="cardButton"
                                name={`${data?.price ?? 0} QAR`}
                                titleStyle="title"
                            />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

export default ExploreCard;