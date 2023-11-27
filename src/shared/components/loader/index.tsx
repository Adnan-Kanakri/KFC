import { Suspense } from "react"
import { Spin } from "antd"

const AppSuspense = (props: any) => {
    return (
        <Suspense fallback={<Spin {...props.loadingProps} />}>
            {props.children}
        </Suspense>
    );
};

export default AppSuspense