import { Card, Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import { IGetAllSeller } from '../../service/top-details/dtos';
import { IMAGE_PATH } from '../../constant';
import classes from "./style.module.css"


type SellerCArdProps = {
    data: IGetAllSeller,
    action: () => void
};

const SellerCArd: FunctionComponent<SellerCArdProps> = ({ data, action }) => {

    return (
        <Row className={`${classes.cardContainer} fullContent`}>
            <Col span={24}>
                <Card
                    onClick={action}
                    className='sellerCard'
                    bordered={false}
                    extra={
                        <Row className='fullContent' justify={"center"}>
                            <Col>
                                <div className={classes.imageContainer}>
                                    <img width={220} className={classes.imageStyle} src={`${IMAGE_PATH}${data?.imageUrl}.png`} />
                                </div>
                            </Col>
                        </Row>
                    }
                />
            </Col>
        </Row>
    );
}

export default SellerCArd;