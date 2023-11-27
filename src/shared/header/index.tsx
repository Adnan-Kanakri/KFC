import React, { FunctionComponent } from 'react';
import { Row, Col, Grid } from "antd"
import { Logo, Options } from '../icons';
import classes from "./style.module.css"
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = () => {
    const { useBreakpoint } = Grid
    const { xs } = useBreakpoint()

    const navigate = useNavigate()


    const handleGoTo = (id: string) => {
        navigate(`/homePage`)
    }


    return (
        <Row className={`${classes.headerContainer} fullContent`} justify={"center"} gutter={[0, 15]}>
            <Col lg={12} md={12} sm={12} xs={24}>
                <Row className='fullContent' gutter={10} justify={xs ? 'center' : 'start'}>
                    <Col>
                        <Options className={classes.iconStyle} />
                    </Col>
                    <Col>
                        <div>
                            <Logo onClick={handleGoTo} className={classes.icon} />
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24} className={xs ? 'centerPosition' : 'endPosition'}>
                <Button
                    className='headerButton'
                    name='عربي'
                    titleStyle='headerFontStyle'
                />
            </Col>
        </Row>
    );
}

export default Header;