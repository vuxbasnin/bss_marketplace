import Home from '../pages/Home';
import Sell from '../pages/Sell';
import HeaderOnly from '../components/Layout/HeaderOnly/HeaderOnly';
//Use layout not login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/sell', component: Sell, layout: null },
    { path: '/header-only', component: Sell, layout: HeaderOnly },
];

//Dung cho cac layout da login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
