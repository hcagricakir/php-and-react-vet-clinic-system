import React, {useContext,useState} from 'react'
import {MyContext} from '../components/MyContext'

function Register(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div className="container">
            <h1 className="text-center">Sign Up</h1>
            <form onSubmit={submitForm} noValidate>
                <div className="form-group">
                    <label>Full Name</label>
                    <input className='form-control' name="name" required type="text" value={state.userInfo.name} onChange={onChangeValue} placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className='form-control' name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className='form-control' name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="Enter your password"/>
                </div>
                {errorMsg}
                {successMsg}
                <div className="_navBtnLogin">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div className="_navBtn">
                <button  onClick={toggleNav}>Login</button>
            </div>
        </div>
    );
}

export default Register