import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import AppLayout from './shared/layout';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#E4002B",
      },
    }}
  >
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppLayout>
            <App />
          </AppLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </ConfigProvider>
);

reportWebVitals();
