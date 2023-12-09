import { useEffect, useState } from 'react';

const useWindowPosition = () => {
    const [windowPosition, setWindowPosition] = useState({
        x: window.scrollX,
        y: window.scrollY,
    });

    const handleWindowPosition = () => {
        setWindowPosition({
            x: window.scrollX,
            y: window.scrollY,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleWindowPosition);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleWindowPosition);
        };
    }, []);

    return windowPosition;
};

export default useWindowPosition;
