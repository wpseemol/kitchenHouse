import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgLogVideo from '../../assets/videos/loginVideobg.mp4';
import BtnCustom from '../../components/btnCustom/BtnCustom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const loginRegInfo = useContext(AuthContext);
    const axiosBasUrl = useAxiosBasUrl();
    const { singIn, logInGoogle, loading } = loginRegInfo || {};

    const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast('Password less than 6 Character.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast('Password must least one capital letter.');
            return;
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast('Password must have special character');
            return;
        }

        singIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Successful',
                    text: 'Log in Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });

                // get access token
                axiosBasUrl.post('/jwt', { email }).then(() => {});

                location?.state
                    ? navigate(location?.state?.location)
                    : navigate('/');
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    const handelGoogleLogin = () => {
        setGoogleLoginLoading(true);
        logInGoogle()
            .then((result) => {
                Swal.fire({
                    title: 'Successful',
                    text: 'Log in Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });

                const email = result?.user?.email;
                // jwt token set
                axiosBasUrl.post('/jwt', { email }).then(() => {});
                location?.state
                    ? navigate(location?.state?.location)
                    : navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    return (
        <>
            <Helmet>
                <title>Kitchen House | Login </title>
            </Helmet>
            <div className=" grid lg:grid-cols-4 grid-cols-1">
                <div className="lg:col-span-1 lg:block hidden relative">
                    <div className="h-screen w-full bottom-0 left-0 z-[1]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="h-full w-full object-cover"
                            data-background-video="true">
                            <source src={bgLogVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                </div>
                <div className="lg:col-span-3 my-auto lg:ml-20 px-2 sm:px-0">
                    <div className="flex lg:mx-0 mx-auto lg:my-0 my-[5rem] lg:mb-0 mb-28 gap-5 flex-col sm:w-[30rem] ">
                        <div>
                            <h2 className="font-iconFont text-4xl">
                                Sign in to Kitchen House
                            </h2>
                        </div>
                        <div>
                            <div
                                onClick={handelGoogleLogin}
                                className="flex justify-center gap-5 w-full py-3 rounded-full border border-black/30 hover:bg-primaryColor/30 duration-200">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/QN1hrN9/icons8-google-24.png"
                                        alt="icon"
                                    />
                                </figure>
                                <span>
                                    {googleLoginLoading
                                        ? 'Loading...'
                                        : 'Sing in with Google'}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mx-auto ">
                            <div className="w-[5rem] h-1 border-b border-black/30"></div>
                            <div>
                                <p>or sign in with email</p>
                            </div>
                            <div className="w-[5rem] h-1 border-b border-black/30"></div>
                        </div>
                        <div className=" sm:w-[30rem]">
                            <form
                                onSubmit={handelLogin}
                                className="flex flex-col gap-4 w-full">
                                <div>
                                    <label
                                        className="text- text-black font-medium mr-auto"
                                        htmlFor="email">
                                        Username or Email
                                    </label>
                                    <br />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        id="logEmail"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                    />
                                </div>

                                <div>
                                    <label
                                        className="text-left text-black font-medium mr-auto"
                                        htmlFor="password">
                                        Password
                                    </label>
                                    <br />
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        id="logPass"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                    />
                                </div>

                                <div className="">
                                    <BtnCustom>
                                        {' '}
                                        {loading
                                            ? 'Loading...'
                                            : 'Sign in'}{' '}
                                    </BtnCustom>
                                </div>

                                <div>
                                    <p className="font-light text-base">
                                        {" Don't have an account?"}
                                        <span className="underline">
                                            <Link to="/registration">
                                                Sign Up
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;
