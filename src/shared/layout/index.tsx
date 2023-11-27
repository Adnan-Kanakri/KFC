import React, { FunctionComponent, ReactNode } from 'react';
import { Col, Layout, Row } from "antd";
import Header from '../header';
import AppSuspense from '../components/loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { initialUrl } from '../constant';
import {
    authorizedStructure,
} from '../../pages';
type AppLayoutProps = {
    children: ReactNode
};

const AppLayout: FunctionComponent<AppLayoutProps> = () => {
    const { Content } = Layout;

    return (
        <Layout className={'background'}>
            <Row className='fullContent' gutter={[0, 10]}>
                <Col span={24} className='content'>
                    <Header />
                </Col>
                <Col span={24}>
                    <Content >
                        <AppSuspense>
                            <Routes>
                                {
                                    authorizedStructure.routes.map((item) => {
                                        return (
                                            <Route key={item.path} path={item.path} element={<item.element />} />
                                        )
                                    })
                                }
                                <Route path='/' element={<Navigate to={initialUrl} replace />} />
                            </Routes>
                        </AppSuspense>
                    </Content>
                </Col>
            </Row>
        </Layout>
    );
}

export default AppLayout;