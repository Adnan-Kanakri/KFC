import { Col, Input, Row, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import classes from './style.module.css';
type OptionsProps = {};

const Options: FunctionComponent<OptionsProps> = () => {

    const [active, setActive] = useState<string>('Deals')
    const data = [
        "Deals", "For One", "For Sharing", "Sides & desserts", "Beverages", "Sandwiches", 'My Favorites'
    ]

    const handleSetActive = (item: string) => {
        setActive(item)
    }

    return (
        <Row className={classes.container} justify={"space-between"}>
            <Col span={18}>
                <Row className={classes.menuContainer} justify={"space-between"} gutter={[0, 15]}>
                    {
                        data.map((item, index) => {
                            return (
                                <Col key={index} onClick={() => handleSetActive(item)}>
                                    <Typography.Text className={active === item ? classes.active : classes.menu}>
                                        {item}
                                    </Typography.Text>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col >
            <Col span={4}>
                <Input.Search placeholder='Search' className={classes.inputSearch} />
            </Col>
        </Row >
    );
}

export default Options;