import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { KEY_LOGIN } from './preference';

function App() {
    useEffect(() => {
        const handleLogout = () => {
            localStorage.setItem(KEY_LOGIN, false);
        };

        window.addEventListener('beforeunload', handleLogout);

        return () => {
            window.removeEventListener('beforeunload', handleLogout);
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
