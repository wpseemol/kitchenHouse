import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Kitchen House | 404 error </title>
            </Helmet>
            <header></header>
            <main className="bg-[#f1f5f9] h-screen flex justify-center items-center">
                <section className="relative overflow-hidden w-[20rem] sm:w-[40rem] md:w-fit">
                    <img
                        src="https://i.ibb.co/sv7VPgJ/404page.gif"
                        alt="errore page Image"
                        className="w-full"
                    />
                    <button
                        className="px-4 py-1 text-sm sm:text-base absolute bottom-1 right-0 sm:bottom-7 md:bottom-9 sm:right-7 z-10 uppercase bg-primaryColor md:px-8 rounded-2xl 
                    sm:py-2 text-white md:font-medium font-Assistant">
                        <Link to="/">back to home page</Link>
                    </button>
                </section>
            </main>
            <footer></footer>
        </>
    );
};

export default ErrorPage;
