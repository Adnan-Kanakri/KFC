import { Col, Modal, Row, Typography } from 'antd';
import React, { FunctionComponent, useEffect } from 'react';
import classes from './style.module.css'
import { IMAGE_PATH } from '../../../shared/constant';
import Button from '../../../shared/components/button';
import { IoClose } from "react-icons/io5";



type BestSellerModalProps = {
    open: boolean,
    handleCloseModal: () => void
};

const BestSellerModal: FunctionComponent<BestSellerModalProps> = ({ open, handleCloseModal }) => {

    // useEffect(() => {
    //     if (open) {
    //         window.scrollTo(0, 0)
    //     }
    // }, [open])







    return (
        <Modal
            open={open}
            destroyOnClose
            className={'modal'}
            closeIcon={false}
            footer={false}
            title={
                <Row className='fullContent' justify={"center"} gutter={25}>
                    <div className={classes.shape}></div>
                    <div className={classes.shape}></div>
                    <div className={classes.shape}></div>
                </Row>
            }
            onCancel={handleCloseModal}
            centered
            maskClosable={false}
            width={584}
        >
            <Row className={classes.container} justify={"center"}>
                <Col span={16} className={`${classes.card}`}>
                    <Row className='fullContent' justify={"center"}>
                        <Col span={24} className='centerPosition'>
                            <div className={classes.imageContainer}>
                                <img width={220} className={classes.imageStyle} src={`${IMAGE_PATH}/KFC.png`} />
                            </div>
                        </Col>
                        <Col span={24}>
                            <Row className={classes.position} gutter={[0, 25]}>
                                <Col span={24} className='centerPosition'>
                                    <Typography.Text className={classes.title}>
                                        Super Meal
                                    </Typography.Text>
                                </Col>
                                <Col span={24} className='centerPosition'>
                                    <Typography.Text className={classes.desc}>
                                        12 pcs chicken + family fries + 4 buns
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Col span={24} className='centerPosition'>
                                <Button
                                    className="modalButton"
                                    name={`57 QAR`}
                                    type='primary'
                                    titleStyle="modalButtonTitle"
                                />
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <div onClick={handleCloseModal} className={classes.closeButton}>
                    <IoClose size={25} />
                </div>
            </Row>
        </Modal>
    );
}

export default BestSellerModal;