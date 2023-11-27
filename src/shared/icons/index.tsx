import { FunctionComponent } from "react";
import { Image } from 'antd';
import { NO_IMAGE_FOUND } from "../constant";
interface IconProps {
    className?: string;
    width?: string | number | undefined;
    height?: string | number | undefined;
    onClick?: Function;
}

const Logo: FunctionComponent<IconProps> = ({
    className,
    height,
    width,
    onClick,
}) => {
    return (
        <Image
            className={className}
            src="/images/logo.png"
            alt={NO_IMAGE_FOUND}
            width={width}
            preview={false}
            height={height}
            onClick={() => onClick?.()}
        />
    );
};


const Options: FunctionComponent<IconProps> = ({
    className,
    height,
    width,
    onClick,
}) => {
    return (
        <Image
            className={className}
            src="/images/icons/options.svg"
            alt={NO_IMAGE_FOUND}
            width={width}
            preview={false}
            height={height}
            onClick={() => onClick?.()}
        />
    );
};

const ExploreMenuIcon: FunctionComponent<IconProps> = ({
    className,
    height,
    width,
    onClick,
}) => {
    return (
        <Image
            className={className}
            src="/images/icons/explore-menu.svg"
            alt={NO_IMAGE_FOUND}
            width={width}
            preview={false}
            height={height}
            onClick={() => onClick?.()}
        />
    );
};



const TopDetail: FunctionComponent<IconProps> = ({
    className,
    height,
    width,
    onClick,
}) => {
    return (
        <Image
            className={className}
            src="/images/icons/top-deals.svg"
            alt={NO_IMAGE_FOUND}
            width={width}
            preview={false}
            height={height}
            onClick={() => onClick?.()}
        />
    );
};




export { Logo, Options, ExploreMenuIcon, TopDetail };
