import { Outlet } from 'react-router-dom';
import Header from './Header';
function Root() {
    return (
      <div className="Wrapper">
        <h1 className='container'>Formik app</h1>
       <Header />
        <div ><Outlet /></div>
      </div>
    );
  }
  
  export default Root;
  