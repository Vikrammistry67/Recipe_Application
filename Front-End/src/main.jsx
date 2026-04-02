import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainRoutes from './AllRoutes/MainRoutes.jsx'
import RecipeContext from './context/RecipeContext/RecipeContext.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <RecipeContext>
    <MainRoutes>
      <App />
    </MainRoutes>
    <Toaster />
  </RecipeContext>
)
