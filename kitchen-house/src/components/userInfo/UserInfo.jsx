import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';

const UserInfo = ({ user, logOut }) => {
    const axiosBasUrl = useAxiosBasUrl();
    const handelLogOut = () => {
        axiosBasUrl.post('/logout').then(() => {});

        logOut().then(() => {
            Swal.fire({
                title: 'Successful',
                text: 'Log Out Successful',
                icon: 'success',
                confirmButtonText: 'Okay',
            });
        });
    };

    return (
        <div className="absolute group-hover:sm:w-[20rem] group-hover:w-screen group-hover:top-12  group-hover:h-fit w-0 h-0  duration-300 -right-4 sm:right-0 bg-white border origin-top-right shadow-2xl rounded-md z-20">
            <div className=" hidden group-hover:block text-neutral-800 p-8">
                <div className="text-center mb-4">
                    <figure className="mx-auto w-20 h-20 overflow-hidden">
                        <img
                            src={
                                user?.photoURL
                                    ? user?.photoURL
                                    : 'https://i.ibb.co/wBfQjTy/user-Image.png'
                            }
                            alt=""
                        />
                    </figure>
                    <div>
                        <h2>
                            {user?.displayName
                                ? user?.displayName
                                : user?.email}
                        </h2>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/upload-item">
                            <p className="mb-2 hover:text-primaryColor duration-200">
                                Upload food item
                            </p>
                        </Link>

                        <p className="hover:text-primaryColor duration-200">
                            Setting
                        </p>
                    </div>
                    <hr className="my-4" />
                    <div
                        onClick={handelLogOut}
                        className="hover:text-primaryColor duration-200">
                        <p>Sing out</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;

UserInfo.propTypes = {
    user: PropTypes.object,
    logOut: PropTypes.func,
};
