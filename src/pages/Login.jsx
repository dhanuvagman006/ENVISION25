import { Link } from 'react-router-dom';
import { backendimageofLogin }  from '../data/image.js';
import Logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../data/constant.js';

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

                console.log(response);

                Cookies.set('token', response.data.token, { expires: 2, sameSite: 'Strict' });  
                // Handle successful login
                toast.success(response.data.message);
                navigate('/setprofile'); 
            }
        } catch (error) {
            console.error("Google login error:", error);
            toast.error(error?.response?.data?.error || error.message || "Google Login Failed");
        }
    };


  
    return (
        <div className="min-h-screen w-full bg-cover bg-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${heroimg})` }}
          />
          <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 z-10" />
      
          <div className="relative min-h-screen flex items-center justify-center px-4 py-8 z-20">
            <div className="bg-white/20 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl text-center text-white max-w-md w-full border border-white/30">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
                Welcome Back
              </h1>
      

              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log("Google Login Failed");
                  toast.error("Google Login Failed");
                }}
                useOneTap
              />
            </div>
          </div>
        </div>
      );
    }      