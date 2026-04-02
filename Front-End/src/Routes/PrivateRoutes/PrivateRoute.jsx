import React, { useContext } from 'react'
import { RecipeCon } from '../../context/RecipeContext/RecipeContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(RecipeCon);
    return user?.role === 'admin' ? children : <Navigate to='/login' />
}

export default PrivateRoute