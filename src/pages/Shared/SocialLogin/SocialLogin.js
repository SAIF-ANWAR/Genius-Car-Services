import React from 'react';
import google from '../../../images/social/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2  px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            <button className='btn btn-primary w-50'>
                <img src={google} className="px-3" alt="" />
                Google Sign In</button>
        </div>
    );
};

export default SocialLogin;