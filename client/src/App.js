import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { KEY_LOGIN } from './preference';

function App() {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            localStorage.setItem(KEY_LOGIN, "false");
        };

        const handleUnload = (event) => {
            // Kiểm tra sự kiện có chứa dữ liệu về việc làm mới hay không
            const isReload =
                event.currentTarget.performance.navigation.type === 1;

            if (isReload) {
                console.log('Tab đang được làm mới');
                // Thực hiện các hành động cần thiết khi tab được làm mới
            } else {
                console.log('Tab đang được đóng');
                // Thực hiện các hành động cần thiết khi tab đóng
                localStorage.setItem(KEY_LOGIN, "false");
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('unload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
