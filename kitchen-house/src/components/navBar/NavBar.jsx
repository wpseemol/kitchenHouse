import { Link, NavLink } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { CgLogIn } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import useWindowPosition from '../../hooks/useWindowPosition/usewindowPosition';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UserInfo from '../userInfo/UserInfo';
import useCardItems from '../../hooks/useCardItems/useCardItems';

const NavBar = () => {
    const { cardData } = useCardItems();

    const loginRegInfo = useContext(AuthContext);
    const { user, logOut } = loginRegInfo || {};

    const windowPosition = useWindowPosition();
    const [showMenuBar, setShowMenuBar] = useState(false);

    const siteIcon = (
        <>
            <Link to="/">
                <div className="flex items-center">
                    <div className="w-16">
                        <img
                            src="https://i.ibb.co/WxDF0nC/kitchen-house-logo-1.png"
                            alt="Kitchen House Icon"
                        />
                    </div>
                    <div className=" font-semibold sm:ml-3 hidden sm:block">
                        <h2 className="font-iconFont">KitchenHouse</h2>
                    </div>
                </div>
            </Link>
        </>
    );

    const menus = (
        <>
            <li className="border-y border-white/10 lg:py-0 py-5">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'active'
                            : 'hover:active pl-7 lg:pl-0 py-3 lg:py-0'
                    }>
                    Home
                </NavLink>
            </li>
            <li className="border-y border-white/10 lg:py-0 py-5">
                <NavLink
                    to="/food-items"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'active'
                            : 'hover:active pl-7 lg:pl-0 py-3 lg:py-0'
                    }>
                    Food
                </NavLink>
            </li>
            <li className="border-y border-white/10 lg:py-0 py-5">
                <NavLink
                    to="/card"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'active'
                            : 'hover:active pl-7 lg:pl-0 py-3 lg:py-0'
                    }>
                    Card {user && <span>({cardData?.length || 0})</span>}
                </NavLink>
            </li>
            <li className="border-y border-white/10 lg:py-0 py-5">
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'active'
                            : 'hover:active pl-7 lg:pl-0 py-3 lg:py-0'
                    }>
                    Blog
                </NavLink>
            </li>

            <li className="border-y border-white/10 lg:py-0 py-5">
                <a
                    href="/#pre-order"
                    className="hover:active pl-7 lg:pl-0 py-3 lg:py-0">
                    Pre Order
                </a>
            </li>
        </>
    );

    return (
        <section
            className={`${
                windowPosition.y > 80
                    ? 'fixed top-1 left-0 bg-white/95 duration-75 w-full shadow-lg z-50'
                    : 'shadow-sm'
            }`}>
            <nav className="container mx-auto flex items-center justify-between text-[#141417] py-5 sm:px-0 px-4">
                <div>
                    <div className="flex items-center w-fit text-[#212226] sm:text-4xl text-xl">
                        {siteIcon}
                    </div>
                </div>

                {/* nav menu section */}

                <ul className="lg:flex hidden items-center gap-6 text-xl">
                    {menus}
                </ul>

                {/* manu icon  */}
                <div className="text-3xl lg:hidden ">
                    <button onClick={() => setShowMenuBar(!showMenuBar)}>
                        {' '}
                        <FiMenu />
                    </button>
                    {/* popup section show */}
                    <div
                        onClick={() => {
                            setShowMenuBar(false);
                        }}
                        className={`${
                            showMenuBar ? 'block' : 'hidden'
                        } fixed top-0 left-0 w-full h-full bg-black/60 z-[2] `}></div>
                    <div
                        onClick={() => {
                            setShowMenuBar(false);
                        }}
                        className={`${
                            showMenuBar
                                ? 'rotate-180 opacity-100'
                                : ' rotate-0 opacity-0 '
                        } fixed top-4 right-4 z-[6] text-white duration-700
                           
                            `}>
                        <IoMdClose />
                    </div>
                    {/* menu droarw */}
                    <div
                        className={`${
                            showMenuBar
                                ? 'right-0'
                                : 'sm:-right-[20rem] -right-[40.5rem]'
                        } fixed top-0 w-full sm:w-80 h-full bg-[#141417] shadow-2xl z-[4] duration-700
                        
                        `}>
                        {/* site icon  */}
                        <div className="text-white w-fit   mt-20  text-4xl ml-7">
                            <div className="flex flex-col  items-center justify-center gap-4">
                                {siteIcon}
                            </div>
                        </div>
                        {/* mane section  */}
                        <ul className="text-white mt-10">{menus}</ul>
                        {/* footer */}
                        <div></div>
                    </div>
                </div>
                {/* manu icon  */}

                <div className="flex items-center gap-5">
                    <div
                        style={{ boxShadow: '0 0 12px 0px #d1d1d1' }}
                        className=" p-3 rounded-full hover:bg-primaryColor hover:text-white duration-200 ">
                        <div className="text-2xl">
                            <GoSearch />
                        </div>
                    </div>

                    {user ? (
                        <div
                            style={{ boxShadow: '0 0 12px 0px #d1d1d1' }}
                            className=" rounded-full hover:bg-primaryColor hover:text-white duration-200 relative group">
                            <figure className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                    src={
                                        user?.photoURL
                                            ? user?.photoURL
                                            : 'https://i.ibb.co/wBfQjTy/user-Image.png'
                                    }
                                    alt="Profile Picture"
                                />
                            </figure>

                            <UserInfo user={user} logOut={logOut} />
                        </div>
                    ) : (
                        <div
                            style={{ boxShadow: '0 0 12px 0px #d1d1d1' }}
                            className=" rounded-full hover:bg-primaryColor hover:text-white duration-200 ">
                            <Link to="/login" className="">
                                <div className="text-2xl font-extrabold p-3">
                                    <CgLogIn />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
