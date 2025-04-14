import { Link } from 'react-router-dom';
import { backendimageofLogin }  from '../data/image.js';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../data/constants.js';

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            if (!credentialResponse || !credentialResponse.credential) {
                toast.error("Google login failed. Please try again.");
                return;
            }

            if (credentialResponse?.credential) {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Google user email:", decoded.email);

                const response = await axios.post(BACKEND_URL + "api/v1/students/login", {
                    email: decoded.email,
                }, { withCredentials: true });

                Cookies.set('token', response.data.token, { expires: 2, sameSite: 'Strict' });  
                // Handle successful login
                toast.success(response.data.message);
                navigate('/'); 
            }
        } catch (error) {
            console.error("Google login error:", error);
            toast.error(error?.response?.data?.error || error.message || "Google Login Failed");
        }
    };


    return (
        <div className="vh-100"
            style={{ background: `url(${backendimageofLogin})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", minHeight: "500px" }}>
            <div className="container">
                <div className="row justify-content-center align-items-center height-self-center vh-100">
                    <div className="col-lg-5 col-md-12 align-self-center">
                        <div className="user-login-card bg-body">
                            <div className="text-center">
                                <div className="logo-default">
                                    <Link className="navbar-brand text-primary" to="/">
                                        <img className="img-fluid logo" src={Logo} loading="lazy" alt="Envision logo" />
                                    </Link>
                                </div>
                            </div>
                            <GoogleLogin
                                onSuccess={handleGoogleLogin}
                                onError={() => {
                                    console.log('Google Login Failed');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
