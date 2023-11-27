import { Card, Col, Row, Image, Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import { IGetAllExploreDate } from '../../service/explore/dtos';
import classes from "./style.module.css"
import { IMAGE_PATH } from '../../constant';



type ExploreCardProps = {
    data: IGetAllExploreDate | undefined,
    handleGoTo: (id: string) => void
};

const ExploreCard: FunctionComponent<ExploreCardProps> = ({ data, handleGoTo }) => {
    return (
        <Row className={`${classes.cardContainer} fullContent`}>
            <Col span={24}>
                <Card
                    className='cardExplore'
                    bordered={false}
                    onClick={() => handleGoTo(data?.id)}
                    extra={
                        <Row className='fullContent' justify={"center"}>
                            <Col>
                                <div className={classes.imageContainer}>
                                    <img width={220} className={classes.imageStyle} src={`${IMAGE_PATH}${data?.imageUrl}.png`} />
                                </div>
                            </Col>
                            <Col span={24} className={`centerPosition`}>
                                <div className={`fullContent ${classes.after}`}>
                                    <Typography className={classes.title}>
                                        {data?.name ?? ''}
                                    </Typography>
                                </div>
                                <div className={classes.divCard}></div>
                            </Col>
                        </Row>
                    }
                />
            </Col>
        </Row>
    );
}

export default ExploreCard;