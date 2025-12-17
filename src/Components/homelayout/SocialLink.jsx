import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLink = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FaGoogle size={24}/> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLink;