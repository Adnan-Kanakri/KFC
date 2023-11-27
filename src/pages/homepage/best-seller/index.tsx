import { Col, Row, Spin, Typography, Slider as AntdSlider } from 'antd';
import React, { FunctionComponent, useState, createRef, Dispatch, SetStateAction } from 'react';
import classes from "./style.module.css"
import Slider, { Settings } from 'react-slick';
import { useGetAllSellerData } from '../../../shared/hooks/top-details';
import SellerCArd from '../../../shared/components/best-seller-card';
import BestSellerModal from '../best-seller-modal';
type BestSellerProps = {
};

const BestSeller: FunctionComponent<BestSellerProps> = () => {
    const { sellerData, loading } = useGetAllSellerData('3')
    const [slideIndex, setSliderIndex] = useState(0)
    const sliderRef = createRef<any>();
    const [open, setOpen] = useState<boolean>(false)

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        beforeChange: (current, next) => setSliderIndex(next),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const handleChangeSlider = (e: any) => {
        sliderRef?.current?.slickGoTo?.(e)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <Row justify={"center"} className='fullContent'>
            <Col span={20}>
                <Row className='fullContent' justify={"space-between"}>
                    <Col className={classes.titlePosition}>
                        <Typography className={classes.title}>Bestsellers</Typography>
                    </Col>
                </Row>
            </Col>
            <Col span={20}>
                <Spin spinning={loading}>
                    <Slider
                        ref={sliderRef}
                        {...settings}
                        className={`topDetailsSlider  ${classes.commentSliderDisplay}`}
                    >
                        {
                            sellerData?.[0]?.bestSeller?.map((item) => {
                                return (
                                    <SellerCArd action={handleOpenModal} key={item.id} data={item} />
                                )
                            })
                        }
                    </Slider>
                </Spin>
            </Col>
            <Col span={20}>
                <AntdSlider dots={false} max={sellerData?.[0]?.bestSeller?.length} value={slideIndex} onChange={handleChangeSlider} tooltip={{ open: false }} />
            </Col>
            <BestSellerModal open={open} handleCloseModal={handleCloseModal} />

        </Row>
    );

}

export default BestSeller;