import React, { FunctionComponent } from 'react';
import { useGetAllExploreData } from '../../../shared/hooks/explore';
import { Col, Grid, Row, Spin, Typography } from 'antd';
import ExploreCard from '../../../shared/components/explore-card';
import GlobalSlider from '../../../shared/components/slider';
import { CustomArrowProps, Settings } from 'react-slick';
import classes from "./style.module.css"
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { ExploreMenuIcon } from '../../../shared/icons';
import { LuArrowRightSquare } from "react-icons/lu";
import { useNavigate } from "react-router-dom"

type ExploreMenuProps = {};

const ExploreMenu: FunctionComponent<ExploreMenuProps> = () => {
    const { exploreData, loading } = useGetAllExploreData()

    const navigate = useNavigate()





    const NextArrow = (props: CustomArrowProps) => {
        const { className, onClick } = props;
        return (
            <IoArrowForwardCircleOutline width={25} height={25} className={className} onClick={onClick} />
        );
    }

    const PervArrow = (props: CustomArrowProps) => {
        const { className, onClick } = props;
        return (
            <IoArrowBackCircleOutline width={25} height={25} className={className} onClick={onClick} />
        );
    }

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PervArrow />,
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


    const handleGoTo = (id: string) => {
        navigate(`/product/${id}`)
    }



    return (
        <Row justify={"center"} className='fullContent'>
            <Col span={20}>
                <Row className='fullContent' justify={"space-between"}>
                    <Col className={classes.titlePosition}>
                        <Typography className={classes.title}>EXPLORE MENU</Typography>
                        <ExploreMenuIcon width={25} height={25} className={classes.iconTitle} />
                    </Col>
                    <Col className={classes.titlePosition}>
                        <Typography className={classes.titleView}>View All</Typography>
                        <LuArrowRightSquare className={classes.icon} size={22} />
                    </Col>
                </Row>
            </Col>
            <Col span={20}>
                <Spin spinning={loading}>
                    <GlobalSlider
                        settings={settings}
                        className={`homepageCommentSlider  ${classes.commentSliderDisplay}`}
                    >
                        {
                            exploreData?.map((item, index) => {
                                return (
                                    <ExploreCard handleGoTo={handleGoTo} key={index} data={item} />
                                )
                            })
                        }
                    </GlobalSlider>
                </Spin>
            </Col>

        </Row >
    );
}

export default ExploreMenu;