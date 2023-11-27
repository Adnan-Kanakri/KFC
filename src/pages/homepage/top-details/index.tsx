import { Col, Row, Spin, Typography, Slider as AntdSlider } from 'antd';
import React, { FunctionComponent, useState, createRef } from 'react';
import classes from "./style.module.css"
import { LuArrowRightSquare } from 'react-icons/lu';
import GlobalSlider from '../../../shared/components/slider';
import { TopDetail } from '../../../shared/icons';
import Slider, { Settings } from 'react-slick';
import { useGetAllTopDetailsData } from '../../../shared/hooks/top-details';
import TopDetailsCard from '../../../shared/components/top-details-card';
import { useNavigate } from 'react-router-dom';



type TopDetailsProps = {};

const TopDetails: FunctionComponent<TopDetailsProps> = () => {

    const { topDetailsData, loading } = useGetAllTopDetailsData()
    const [slideIndex, setSliderIndex] = useState(0)
    const sliderRef = createRef<any>();
    const navigate = useNavigate()

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

    const handleGoTo = (id: string) => {
        navigate(`/product/${id}`)
    }


    return (
        <Row justify={"center"} className='fullContent'>
            <Col span={20}>
                <Row className='fullContent' justify={"space-between"}>
                    <Col className={classes.titlePosition}>
                        <Typography className={classes.title}>TOP DEALS</Typography>
                        <TopDetail width={25} height={25} className={classes.iconTitle} />
                    </Col>
                    <Col className={classes.titlePosition}>
                        <Typography className={classes.titleView}>View All</Typography>
                        <LuArrowRightSquare className={classes.icon} size={22} />
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
                            topDetailsData?.map((item) => {
                                return (
                                    <TopDetailsCard handleGoTo={handleGoTo} key={item.id} data={item} />
                                )
                            })
                        }
                    </Slider>
                </Spin>
            </Col>
            <Col span={20}>
                <AntdSlider dots={false} max={topDetailsData?.length} value={slideIndex} onChange={handleChangeSlider} tooltip={{ open: false }} />
            </Col>
        </Row >
    );
}

export default TopDetails;