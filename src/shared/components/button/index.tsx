import React, { FunctionComponent } from "react";
import { Button as ButtonComponents, ButtonProps, Typography } from "antd"
import classes from "./style.module.css"


interface ButtonComponentsProps extends ButtonProps {
    action?: () => void,
    className?: string,
    name?: string,
    titleStyle?: string,
    loading?: boolean,
    htmlType?: "submit" | "button" | "reset"

};

const Button: FunctionComponent<ButtonComponentsProps> = ({ htmlType, action, className, name, type, danger, icon, titleStyle, loading, disabled }) => {

    return <ButtonComponents htmlType={htmlType} disabled={disabled} loading={loading} icon={icon} danger={danger} type={type} className={classes[className ?? '']} onClick={() => action?.()}>
        {name && <Typography.Text className={classes[titleStyle ?? '']}>
            {name}
        </Typography.Text>}
    </ButtonComponents>;
};

export default Button
