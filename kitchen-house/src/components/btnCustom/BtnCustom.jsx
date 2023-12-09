import PropTypes from 'prop-types';
const BtnCustom = ({ children }) => {
    return (
        <button
            className="group bg-black text-white rounded-full px-10 py-4 text-xl z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
            <span className="z-10 relative">{children}</span>
            <div className="absolute -top-1 group-hover:left-80 -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
        </button>
    );
};

export default BtnCustom;

BtnCustom.propTypes = {
    children: PropTypes.node,
};
