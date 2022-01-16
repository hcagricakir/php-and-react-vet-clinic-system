import React, { createContext, Component } from "react";
import axios from 'axios'
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: '',
});

class MyContextProvider extends Component {
    constructor() {
        super();
    }

    state = {
        showLogin: true,
        showNewRegisterState: false,
        showHomePageState: false,
        isAuth: false,
        theUser: null,
    }

    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }
    showNewRegister = () => {
        this.setState({
            ...this.state,
            showNewRegisterState: true
        })
    }
    showHomePage = () => {
        this.setState({
            ...this.state,
            showHomePageState: true
        })
    }


    logoutUser = () => {
        this.setState({
            ...this.state,
            isAuth: false
        })
    }

    registerUser = async (user) => {
        const showLogin = !this.state.showLogin;
        const register = await Axios.post('http://localhost:3000/backend-web-services/login-registration-api/insert.php', {
            name: user.name,
            email: user.email,
            password: user.password
        });
        if (register.status === 201)
            this.setState({
                ...this.state,
                showLogin
            });

        return register.data;
    }
    loginUser = async (user) => {

        const login = await Axios.post('http://localhost:3000/backend-web-services/login-registration-api/login.php', {
            email: user.email,
            password: user.password
        });
        if (login.status === 202)
            this.setState({
                ...this.state,
                isAuth: true,
            });

        return login.data;
    }
    getPetList = async () => {
        const petData = await Axios.get('http://localhost:3000/backend-web-services/owners/getPetList.php')
        return petData.data;
    }
    createPet = async (pet) => {

        const create = await Axios.post('http://localhost:3000/backend-web-services/owners/petCreate.php', {
            owner_name: pet.owner_name,
            pet_name: pet.pet_name,
            pet_yas: pet.pet_yas
        });

        return create.data;
    }


    render() {
        const contextValue = {
            rootState: this.state,
            toggleNav: this.toggleNav,
            registerUser: this.registerUser,
            getPetList: this.getPetList,
            showNewRegister: this.showNewRegister,
            showHomePage: this.showHomePage,
            createPet: this.createPet,
            loginUser: this.loginUser,
            logoutUser: this.logoutUser
        }
        return (
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;