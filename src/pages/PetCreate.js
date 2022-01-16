import React, { useContext, useState } from 'react'
import { MyContext } from '../components/MyContext'
import ButtonAppBar from '../components/Navbar'
function PetCreate() {
    const { toggleNav, createPet } = useContext(MyContext);
    const initialState = {
        userInfo: {
            owner_name: '',
            pet_name: '',
            pet_yas: '',
        },
        errorMsg: '',
        successMsg: '',
    }
    const [state, setState] = useState(initialState);

    const submitForm = async (event) => {
        event.preventDefault();
        const data = await createPet(state.userInfo);
        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
            });
        }
        else {
            setState({
                ...state,
                successMsg: '',
                errorMsg: data.message
            });
        }
    }

    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    let successMsg = '';
    let errorMsg = '';
    if (state.errorMsg) {
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }
    return (
        <div>
            <ButtonAppBar />


            <div className="container">

                <h1 className="text-center">Pet Create</h1>
                <form onSubmit={submitForm} noValidate>
                    <div className="form-group">
                        <label>Owner Name</label>
                        <input className='form-control' name="owner_name" required type="text" value={state.userInfo.owner_name} onChange={onChangeValue} placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label>Pet Name</label>
                        <input className='form-control' name="pet_name" required type="text" value={state.userInfo.pet_name} onChange={onChangeValue} placeholder="Enter your pet name" />
                    </div>
                    <div className="form-group">
                        <label>Pet Age</label>
                        <input className='form-control' name="pet_yas" required type="text" value={state.userInfo.pet_yas} onChange={onChangeValue} placeholder="Enter your pet age" />
                    </div>
                    {errorMsg}
                    {successMsg}
                    <div className="_navBtnLogin">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div></div>
    );
}

export default PetCreate