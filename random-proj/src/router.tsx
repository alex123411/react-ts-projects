import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Wheel from './components/pages/wheelPage/wheel'
import SignInForm from './components/signInForm'
import RandomNumber from './components/pages/randNumberPage/randomNumber'
import CoinFlip from "./components/pages/coinFlipPage/coinFlip"
import RandomPassword from "./components/pages/randPasswordPage/randomPassword"
import App from './App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Wheel />
            },
            {
                path: "/login",
                element: <SignInForm />,
            },
            {
                path: "/coinflip",
                element: <CoinFlip />,
            },
            {
                path: "/randpassword",
                element: <RandomPassword />,
            },
            {
                path: "/randnumber",
                element: <RandomNumber />,
            },
        ]
    }
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router