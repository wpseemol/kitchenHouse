import { Outlet } from 'react-router-dom';
import TopBarContactInfo from '../components/topBarContactInfo/TopBarContactInfo';
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <>
            <header className="font-myPoppinsFont">
                <TopBarContactInfo />
                <NavBar />
            </header>
            <main className="font-myPoppinsFont sm:min-h-[20.4rem]">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Root;
