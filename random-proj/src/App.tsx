import {
  Route,
  Routes
} from "react-router-dom"

import Sidebar from './components/sidebar'
import Wheel from './components/wheel'
import SignInForm from './components/signInForm'
import RandomNumber from './components/randomNumber'


import 'bootstrap/dist/js/bootstrap.bundle.min'
import CoinFlip from "./components/coinFlip"
import RandomPassword from "./components/randomPassword"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

const App = () => {

  const users: any[] = [

  ]

  const AddUser = (user: any) => {
    console.log("FROM PARENT COMPONENT", user)
    users.push(user)
    console.log(users)
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     children: [
  //       {
  //         path: "wheel",
  //         element: <Wheel />,
  //       },
  //       {
  //         path: "login",
  //         element: <SignInForm AddUser={AddUser} />,
  //       },
  //       {
  //         path: "rand",
  //         element: <RandomNumber />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
    

    <div className="App">
      <Sidebar />

      <div className="main">
        <Routes>
          <Route path='/' element={<Wheel />} />
          <Route path='/login' element={<SignInForm AddUser={AddUser} />} />
          <Route path='/coinflip' element={<CoinFlip />} />
          <Route path='/randpassword' element={<RandomPassword />} />
          <Route path='/randnumber' element={<RandomNumber />} />
        </Routes>


      </div>

    </div>

    </>
  );
};

export default App;

