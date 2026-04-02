import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/LayoutComponent/layout';
import Recipes from '../Pages/Recipes';
import Cart from '../Pages/Cart';
import CreateRecipe from '../Pages/CreateRecipe';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddRecipe from '../Pages/AddRecipe';
import PrivateRoute from '../Routes/PrivateRoutes/PrivateRoute';
import ProtectedRoute from '../Routes/ProtectedRoutes/ProtectedRoute';
import UpdateRecipe from '../Pages/updateRecipe';
import RecipeDetails from '../Pages/RecipeDetails';

const MainRoutes = () => {
    const myRoutes = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <ProtectedRoute><Recipes /></ProtectedRoute>
                    },
                    {
                        path: '/addRecipe',
                        element: <PrivateRoute><AddRecipe /></PrivateRoute>
                    },
                    {
                        path: '/login',
                        element: <Login />
                    },
                    {
                        path: '/updateRecipe/:id',
                        element: <UpdateRecipe />
                    },
                    {
                        path: '/recipeDetails/:id',
                        element: <RecipeDetails />
                    },
                    {
                        path: '/register',
                        element: <Register />
                    },
                    {
                        path: '/cart',
                        element: <ProtectedRoute><Cart /></ProtectedRoute>
                    },
                ]
            },
        ]
    );
    return (
        <RouterProvider router={myRoutes}>
            <Layout />
        </RouterProvider>
    )
}

export default MainRoutes