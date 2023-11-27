import React, { FunctionComponent } from "react";
import Slider, { Settings } from 'react-slick'


type SliderProps = {
    children: any,
    className: string
    settings: Settings,
    ref?: any
};

const GlobalSlider: FunctionComponent<SliderProps> = ({ children, className, settings, ref }) => {
    return (
        <Slider ref={ref} {...settings} className={className}>
            {children}
        </Slider>
    );
};

export default GlobalSlider;
