import { createContext, useState } from "react"

export const RecipeCon = createContext();
const RecipeContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('User');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const login = (data) => {
    setUser(data);
    localStorage.setItem('User', JSON.stringify(data));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('User');
  };
  console.log('USER : ', user);
  return (
    <RecipeCon.Provider value={{ user, setUser, login, logout }}>
      {children}
    </RecipeCon.Provider>
  )
}

export default RecipeContext