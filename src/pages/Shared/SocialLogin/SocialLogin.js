import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);


    if (user || githubUser) {
        navigate('/')
    }
    const handleGoogleLogIn = () => {
        signInWithGoogle()
    }
    const handleFacebookLogIn = () => {

    }
    const handleGithubLogIn = () => {
        signInWithGithub()
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2  px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            <p className='text-danger'>{error?.message} {githubError?.message}</p>
            <button onClick={handleGoogleLogIn} className='btn btn-primary w-50 d-block mx-auto'>
                <img style={{ width: '60px' }} src={google} className="px-3" alt="" />
                Google Sign In
            </button>
            <button onClick={handleFacebookLogIn} className='btn btn-primary w-50 d-block mx-auto mt-2'>
                <img style={{ width: '60px' }} src={facebook} className="px-3" alt="" />
                Facebook Sign In
            </button>
            <button onClick={handleGithubLogIn} className='btn btn-primary w-50 d-block mx-auto mt-2'>
                <img style={{ width: '60px' }} src={github} className="px-3" alt="" />
                Github Sign In
            </button>
        </div >
    );
};

export default SocialLogin;