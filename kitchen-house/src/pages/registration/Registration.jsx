import { Link, useLocation, useNavigate } from 'react-router-dom';
import BtnCustom from '../../components/btnCustom/BtnCustom';
import regBgImage from '../../assets/videos/regBgimage.mp4';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import useAxiosBasUrl from '../../hook/useAxiosBasUrl';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
    const [profilePicPrevew, setProfilePicPrevew] = useState(
        'https://i.ibb.co/wBfQjTy/user-Image.png'
    );

    const axiosBasUrl = useAxiosBasUrl();
    // const axiosBaseUrl = useAxiosBasUrl();

    const handelProfilePicPrevew = (e) => {
        if (e.target.value) {
            setProfilePicPrevew(e.target.value);
        } else {
            setProfilePicPrevew('https://i.ibb.co/wBfQjTy/user-Image.png');
        }
    };

    const loginRegInfo = useContext(AuthContext);
    const { singUp, loading, userInformationSet, logOut } = loginRegInfo || {};

    const location = useLocation();
    const navigate = useNavigate();

    const handelRegSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fName.value;
        const lName = form.lName.value;
        const pictureUrl = form.pictureUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const fullName = fName + ' ' + lName;

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

        singUp(email, password)
            .then(() => {
                // Signed up Successful
                userInformationSet(fullName, pictureUrl).then(() => {
                    Swal.fire({
                        title: 'Successful!',
                        text: 'Signed up Successful',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then(() => {
                        logOut();
                        navigate('/login');
                        form.reset();
                    });
                });
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
                <title>Kitchen House | Registration </title>
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
                            <source src={regBgImage} type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                </div>
                <div className="lg:col-span-3 my-auto lg:ml-20 px-2 sm:px-0">
                    <div className="flex lg:mx-0 mx-auto lg:my-0 my-[5rem] lg:mb-0 mb-28 gap-10 flex-col sm:w-[30rem] ">
                        <div>
                            <h2 className="font-iconFont text-4xl">
                                Sign up to Kitchen House
                            </h2>
                        </div>

                        <div className=" sm:w-[30rem]">
                            <form
                                onSubmit={handelRegSubmit}
                                className="flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <label
                                            className="text- text-black font-medium mr-auto"
                                            htmlFor="fName">
                                            First ame
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="fName"
                                            id="name"
                                            className="border border-black/50 w-full p-2 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="text- text-black font-medium mr-auto"
                                            htmlFor="lName">
                                            Last name
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="lName"
                                            id="regLName"
                                            className="border border-black/50 w-full p-2 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="relative group">
                                    <label
                                        className="text- text-black font-medium mr-auto"
                                        htmlFor="pictureUrl">
                                        Profile Picture
                                    </label>
                                    <br />
                                    <input
                                        onChange={handelProfilePicPrevew}
                                        type="text"
                                        name="pictureUrl"
                                        id="regPictureUrl"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                        required
                                    />
                                    <figure className="absolute group-hover:scale-100 scale-0 top-2 right-2 w-14 h-14 z-10 duration-150">
                                        <img
                                            src={profilePicPrevew}
                                            alt="Profile Pic Prevew"
                                        />
                                    </figure>
                                </div>
                                <div>
                                    <label
                                        className="text- text-black font-medium mr-auto"
                                        htmlFor="email">
                                        Email
                                    </label>
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        id="regEmail"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                        required
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
                                        type="password"
                                        name="password"
                                        id="regPassword"
                                        placeholder="6+ characters"
                                        className="border border-black/50 w-full p-2 rounded-md"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        name="agreeWith"
                                        id="regConfirm"
                                        className="mr-1"
                                        required
                                    />
                                    <label htmlFor="agreeWith">
                                        I agree with{` Dribbble's `}
                                        <span className="underline">
                                            Terms of Service
                                        </span>
                                        ,
                                        <span className="underline">
                                            Privacy Policy
                                        </span>
                                        , and default Notification Settings.
                                    </label>
                                </div>

                                <div className="">
                                    <BtnCustom>
                                        {loading
                                            ? 'Loading...'
                                            : 'create account'}
                                    </BtnCustom>
                                </div>

                                <div>
                                    <p className="font-light text-base">
                                        {' Already have an account? '}
                                        <span className="underline">
                                            <Link to="/login">Sign In</Link>
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

export default Registration;
