import React, { useContext, useState } from 'react'
import { MyContext } from '../components/MyContext'

function Login() {

    const { toggleNav, loginUser, isLoggedIn } = useContext(MyContext);

    const initialState = {
        userInfo: {
            email: '',
            password: '',
        },
        errorMsg: '',
        successMsg: '',
    }

    const [state, setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        await loginUser(state.userInfo);
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if (state.errorMsg) {
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }



    return (
        <div className="container">
            <h1 className="text-center">Login</h1>
            <form onSubmit={submitForm} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input className='form-control' name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onChangeValue} />
                </div>
                <div className="form-group">
                    <label>PassWord</label>
                    <input className='form-control' name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
                </div>
                {errorMsg}
                {successMsg}
                <div className="_navBtnLogin">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="_navBtn">
                <button onClick={toggleNav}>Register</button>
            </div>
        </div>


    );
}

export default Login;