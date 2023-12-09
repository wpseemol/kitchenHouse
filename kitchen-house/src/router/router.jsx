import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import Root from '../root/Root';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import UploadItem from '../pages/uploadItem/UploadItem';
import PrivetRoute from '../privetRoute/PrivetRoute';

import ErrorPage from '../pages/error/ErrorPage';
import FoodItems from '../pages/foodItems/FoodItems';
import SingleItem from '../pages/singleItem/SingleItem';
import CardItem from '../pages/cardItem/CardItem';
import EditItem from '../pages/editItem/EditItem';
import BlogPage from '../pages/blogPage/BlogPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/food-items',
                element: <FoodItems />,
            },
            {
                path: '/blog',
                element: <BlogPage />,
            },
            {
                path: '/food-items/:product',
                element: <SingleItem />,
            },
            {
                path: '/card',
                element: (
                    <PrivetRoute>
                        <CardItem />
                    </PrivetRoute>
                ),
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            {
                path: '/upload-item',
                element: (
                    <PrivetRoute>
                        <UploadItem />
                    </PrivetRoute>
                ),
            },
            {
                path: '/upload-item/:id',
                element: (
                    <PrivetRoute>
                        <EditItem />
                    </PrivetRoute>
                ),
            },
        ],
    },
]);

export default router;
