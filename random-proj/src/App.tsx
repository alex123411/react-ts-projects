import 'bootstrap/dist/js/bootstrap.bundle.min'

import {
  Outlet
} from "react-router-dom"

import Sidebar from './components/sidebar'


const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

