import NavContainer from '../NavContainerComponent/NavContainer';
import Footer from '../FooterComponent/Footer';
import { Outlet } from 'react-router-dom';
const layout = () => {
  return (
    <div>
      <NavContainer />
      <div className='flex grow w-full items-center text-7xl justify-center min-h-[80vh] '>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default layout