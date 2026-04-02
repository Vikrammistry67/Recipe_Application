import React, { useContext } from 'react'
import { RecipeCon } from '../../context/RecipeContext/RecipeContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(RecipeCon);
  return user ? children : <Navigate to='/login' />
}

export default ProtectedRoute