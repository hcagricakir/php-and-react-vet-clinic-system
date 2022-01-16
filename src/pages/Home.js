import React, { useContext } from 'react'
import { MyContext } from '../components/MyContext'
import ButtonAppBar from '../components/Navbar'
import Login from './Login'
import Register from './Register'
import PetCreate from './PetCreate'
import HomePage from './HomePage'
function Home() {

    const { rootState } = useContext(MyContext);
    const { isAuth, showNewRegisterState, showLogin, showHomePageState } = rootState;

    // If user Logged in
    if (isAuth) {
        if (showNewRegisterState == true) {
            return <PetCreate />;
        }
        else if (showHomePageState) {
            return <ButtonAppBar />
        }
        return (
            <>
                <HomePage />
            </>

        )
    }
    // Showing Login Or Register Page According to the condition

    else if (showLogin) {
        return <Login />;
    }
    else {
        return <Register />;
    }

}

export default Home;