import '../../public/styles/adminlogin.css'
import '../global.css'
import Logo from '../../public/images/audiophile-black.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function AdminLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
;
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/admin/login', {
                username,
                password,
            });

            setErrorMessage('');
            localStorage.setItem('token', response.data.token)
            navigate('/admin')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Handle Axios errors
                setErrorMessage(error.response?.data?.message || 'Invalid username or password');
            } else {
                // Handle non-Axios errors
                setErrorMessage('An unexpected error occurred');
        }
    }
}

  return (
    <>
        <div className="login-container">

            <div className="login-logo">
                <img src={Logo} alt="audiophile logo" />
            </div>
            
            <div className="login-content">

                <form className="login-form">

                    <div className="login-form-tittle">
                        <h2>Log In</h2>
                        <hr className='login-hr'/>
                    </div>

                    <div className="login-form-field">
                        <label htmlFor="username">User name</label>
                        <input 
                        id='username' 
                        value={username}  
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" />
                    </div>

                    <div className="login-form-field">
                        <label htmlFor="login-password">Password</label>
                        <input 
                        id='login-password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button type='submit' className='login-btn' onClick={handleLogin}>Log in</button>
                </form>
            </div>

        </div>
    </>
  )
}

export default AdminLogin
