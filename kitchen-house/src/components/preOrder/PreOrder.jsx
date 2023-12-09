import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BtnCustom from '../btnCustom/BtnCustom';
import { BiCalendar } from 'react-icons/bi';

const PreOrder = () => {
    const [startDate, setStartDate] = useState(null);
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const [selectedOccasion, setSelectedOccasion] = useState('');
    const handleSelectOccasion = (event) => {
        setSelectedOccasion(event.target.value);
    };

    const [selectedPreferredFood, setSelectedPreferredFood] = useState('');
    const handleSelectPreferredFood = (event) => {
        setSelectedPreferredFood(event.target.value);
    };

    const [selectedPersons, setSelectedPersons] = useState('');
    const handleSelectPersons = (event) => {
        setSelectedPersons(event.target.value);
    };

    return (
        <div className="bg-[#f5f2ed] relative pt-20 overflow-hidden">
            {/* background Design */}
            <div className="absolute top-0 left z-[1] w-fit h-fit overflow-hidden ">
                <figure className="">
                    <img
                        src="https://i.ibb.co/BHJ1fbs/shape-15.png"
                        alt="Animation design shape"
                    />
                </figure>
            </div>
            <div className="absolute top-60 right-0 z-[1] w-fit h-fit overflow-hidden ">
                <figure className="">
                    <img
                        src="https://i.ibb.co/9Hxp9Vg/shape-18.png"
                        alt="Animation design shape"
                    />
                </figure>
            </div>
            <div className="absolute top-0 lg:right-60 md:right-5 -right-28 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto w-fit">
                    <img
                        src="https://i.ibb.co/2yYpqLM/shape-17.png"
                        alt="Animation design right"
                    />
                </figure>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-60 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto mt-10 w-fit">
                    <img
                        src="https://i.ibb.co/j5jMQPX/shape-16.png.png"
                        alt="Animation design left"
                    />
                </figure>
            </div>
            {/* background Design */}
            {/* pre order section start */}
            <div className="relative z-[2] container  mx-auto">
                <div className="text-center text-white">
                    <div className="">
                        <h3 className="font-iconFont text-3xl text-primaryColor">
                            Table Booking
                        </h3>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold my-5 text-neutral-800 ">
                            Pre-Order to Make a <br /> Reservation
                        </h2>
                    </div>
                </div>
                <div className="">
                    <div className="w-fit mx-auto bg-white text-[#797979] font-medium p-16 pb-32">
                        <form className="grid md:grid-cols-2 grid-cols-1 gap-4  text-xl font-thin">
                            <div className="w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    id="preFullName"
                                    placeholder="Full Name"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                />
                            </div>
                            <div className="w-[22rem] mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    id="preEmail"
                                    placeholder="Email address"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                />
                            </div>
                            <div className="w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="phone"
                                    id="prePhone"
                                    placeholder="Phone number"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                />
                            </div>
                            <div className="w-[22rem] mb-4">
                                <div className="border-b border-[#e5e5e5] w-full text-[#797979] pb-3 relative">
                                    <DatePicker
                                        style={{ width: '20rem' }}
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        filterDate={isWeekday}
                                        placeholderText="Booking date"
                                        className="focus:outline-none relative z-[3] w-[21.5rem] bg-white/0 "
                                    />
                                    <div className="absolute top-1 right-2 z-[1]">
                                        <BiCalendar />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[22rem] mb-4">
                                <select
                                    onChange={handleSelectOccasion}
                                    value={selectedOccasion}
                                    className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                    name="occasion"
                                    id="occasion">
                                    <option value="">
                                        Occasion no selected
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                </select>
                            </div>
                            <div className="w-[22rem] mb-4">
                                <select
                                    value={selectedPreferredFood}
                                    onChange={handleSelectPreferredFood}
                                    className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                    name="occasion"
                                    id="preferred-food">
                                    <option value="">Preferred food</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="w-[22rem] mb-4">
                                <select
                                    value={selectedPersons}
                                    onChange={handleSelectPersons}
                                    className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                    name="occasion"
                                    id="occasion">
                                    <option value="">Number of persons</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="w-[22rem] mb-4">
                                <select
                                    defaultValue="option1"
                                    className="border-b border-[#e5e5e5] w-full text-[#797979] focus:outline-none pb-3"
                                    name="occasion"
                                    id="occasion">
                                    <option value="option1">
                                        Booking type
                                    </option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <textarea
                                    name=""
                                    id=""
                                    cols=""
                                    rows="3"
                                    placeholder="Special request"
                                    className="border-b border-[#e5e5e5] w-full focus:outline-none pb-3 resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-3">
                                <div className="w-fit mx-auto ">
                                    <BtnCustom>Make A Reservation</BtnCustom>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* pre order section end */}
        </div>
    );
};

export default PreOrder;
