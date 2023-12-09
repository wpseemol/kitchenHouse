import { useContext, useState } from 'react';
import BtnCustom from '../../components/btnCustom/BtnCustom';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { FcAddImage, FcRemoveImage } from 'react-icons/fc';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCategoryData from '../../hooks/useCategoryData/useCategoryData';

const UploadItem = () => {
    const axiosBasUrl = useAxiosBasUrl();
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const { uniqCategory, allItemRefetch } = useCategoryData();

    const [catAdd, setCatAdd] = useState(false);

    const [selectedCatOption, setSelectedCatOption] = useState('');
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [itemImageCounter, setItemImageCounter] = useState(2);
    const [imageAddCounter, setImageAddCounter] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    const handelRemoveImage = (rmItem) => {
        const finderAfterRemove = imageAddCounter?.filter(
            (item) => item !== rmItem
        );
        setImageAddCounter(finderAfterRemove);
        const {
            [rmItem]: {},
            ...rest
        } = imageUrls;
        setImageUrls(rest);
    };

    const handelImageUrl = (e, item) => {
        const { value } = e.target;
        setImageUrls((prev) => ({ ...prev, [item]: value }));
    };

    const handelImageUrl1 = (e) => {
        const { value } = e.target;
        setImageUrls({ url1: value });
    };

    const handleSelectChange = (event) => {
        setSelectedCatOption(event.target.value);
    };

    const getDateTime = () => {
        const currentDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Dhaka',
        });
        return currentDate;
    };

    const handalUploadItme = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const itemQuantity = form.itemQuantity.value;
        const addCat = form.addCat.value;
        const description = form.description.value;

        if (!catAdd) {
            if (selectedCatOption) {
                setIsCategorySelected(true);
            } else {
                toast('Category is not selected');
            }
        }

        if (isCategorySelected) {
            axiosBasUrl
                .post('/item', {
                    itemName,
                    itemPrice,
                    itemQuantity,
                    buyCount: 0,
                    description,
                    itemImage: imageUrls,
                    postBy: {
                        uid: user?.uid,
                        email: user?.email,
                        name: user?.displayName,
                    },
                    postTime: getDateTime(),
                    category: {
                        catName: catAdd ? addCat : selectedCatOption,
                        catId: catAdd
                            ? addCat.replace(/\s/g, '').toLowerCase() + 'id'
                            : selectedCatOption
                                  .replace(/\s/g, '')
                                  .toLowerCase() + 'id',
                    },
                })
                .then(function () {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Product Upload is Done',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    });
                    form.reset();
                    allItemRefetch();
                })
                .catch(function (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Cool',
                    });
                });
        }
    };

    return (
        <div className="bg-[#f5f2ed] relative py-20 pb-24 overflow-hidden">
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
            <div
                onSubmit={handalUploadItme}
                className="relative z-[2] container  mx-auto">
                <div className="">
                    <div className="w-fit mx-auto bg-white text-[#797979] font-medium sm:p-16 px-2 py-6 ">
                        <div className="text-white mb-14">
                            <div className="">
                                <h3 className="font-iconFont text-5xl text-primaryColor">
                                    Item Upload
                                </h3>
                            </div>
                        </div>

                        <form className="grid md:grid-cols-2 grid-cols-1 gap-4  text-xl font-thin">
                            {/* itemName  */}
                            <div className="sm:w-[22rem] mb-4">
                                <input
                                    type="text"
                                    name="itemName"
                                    placeholder="Food item name"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                    id="upItemName"
                                />
                            </div>
                            {/* price */}
                            <div className="sm:w-[22rem] mb-4 flex items-center gap-3">
                                <div className=" ">
                                    <input
                                        type="number"
                                        name="itemPrice"
                                        placeholder="Item Price"
                                        className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemPrice"
                                    />
                                </div>
                                <div className=" ">
                                    <input
                                        type="number"
                                        name="itemQuantity"
                                        placeholder="Quantity"
                                        className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemQuantity"
                                    />
                                </div>
                            </div>

                            {/* item picture start */}
                            <div className="relative sm:w-[22rem] mb-4 flex items-center gap-5 group">
                                <input
                                    required
                                    onChange={handelImageUrl1}
                                    type="text"
                                    name="url1"
                                    placeholder="Item Image Url1"
                                    className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                    id="upUrl1"
                                />
                                <div
                                    onClick={() => {
                                        setItemImageCounter(
                                            itemImageCounter + 1
                                        );
                                        const newItem = `url${itemImageCounter}`;
                                        setImageAddCounter([
                                            ...imageAddCounter,
                                            newItem,
                                        ]);
                                    }}
                                    className="text-4xl "
                                    title="Image add">
                                    <FcAddImage />
                                </div>
                                {imageUrls?.url1 && (
                                    <div className="absolute group-hover:scale-100 scale-0 group-hover:-top-12 group-hover:left-[10rem] duration-200 w-12 h-12 bg-slate-500 border shadow-2xl z-20">
                                        <figure className="w-full h-full">
                                            <img
                                                src={imageUrls?.url1}
                                                alt="Image Preview"
                                            />
                                        </figure>
                                    </div>
                                )}
                            </div>
                            {/* image add button click input create */}
                            {imageAddCounter?.map((item, inx) => {
                                return (
                                    <div
                                        key={inx}
                                        className="sm:w-[22rem] mb-4 flex items-center gap-5 relative group">
                                        <input
                                            required={imageUrls[item]}
                                            onChange={(e) =>
                                                handelImageUrl(e, item)
                                            }
                                            type="text"
                                            name={item}
                                            placeholder={`Item Image ${item}`}
                                            className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                            id={item}
                                        />
                                        <div
                                            onClick={() => {
                                                handelRemoveImage(item);
                                            }}
                                            className="text-4xl "
                                            title="Remove">
                                            <FcRemoveImage />
                                        </div>

                                        {imageUrls[item] && (
                                            <div className="absolute group-hover:scale-100 scale-0 group-hover:-top-16 group-hover:left-[10rem] duration-200 w-16 h-16  border bg-white shadow-2xl z-20">
                                                <figure className="w-full h-full flex items-center justify-center">
                                                    <img
                                                        src={imageUrls[item]}
                                                        alt="Image Preview"
                                                    />
                                                </figure>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            {/* image add button click input create */}
                            {/* item picture end */}

                            {/* this is Category section */}

                            <div className="w-full mb-4 md:col-span-2">
                                <div className="flex sm:flex-row flex-col items-center gap-5">
                                    <div className="sm:w-1/2 w-full flex items-center gap-5">
                                        <select
                                            className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                            name="occasion"
                                            id="occasion"
                                            value={selectedCatOption}
                                            onChange={handleSelectChange}>
                                            <option value="" disabled>
                                                No category select
                                            </option>
                                            {uniqCategory?.map((category) => {
                                                return (
                                                    <option
                                                        key={category?.catId}
                                                        value="">
                                                        {category?.catName}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        <div
                                            onClick={() => {
                                                setCatAdd(!catAdd);
                                                setIsCategorySelected(
                                                    !isCategorySelected
                                                );
                                            }}
                                            className="text-4xl ">
                                            {catAdd ? (
                                                <IoMdRemoveCircle />
                                            ) : (
                                                <IoMdAddCircle />
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className={`sm:w-1/2 w-full ${
                                            catAdd ? 'block' : 'hidden'
                                        }`}>
                                        <input
                                            required={catAdd}
                                            type="text"
                                            name="addCat"
                                            placeholder="Category name add"
                                            className=" border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                            id="upAddCat"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <textarea
                                    name="description"
                                    id=""
                                    cols=""
                                    rows="3"
                                    placeholder="Item description"
                                    className="border-b border-[#e5e5e5] w-full focus:outline-none pb-3 resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-3">
                                <div className="w-fit mx-auto ">
                                    <BtnCustom>Add Item</BtnCustom>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* pre order section end */}
            <ToastContainer />
        </div>
    );
};

export default UploadItem;
