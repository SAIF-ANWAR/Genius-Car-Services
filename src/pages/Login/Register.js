import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = async event => {
        event.preventDefault()
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        // const agree = event.target.terms.checked

        await createUserWithEmailAndPassword(email, password)

        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }


    return (
        <div className='register-form'>
            <h1 className='text-center'>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='your email' />
                <input type="password" name="password" id="" placeholder='pasword' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accept Terms and Conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;