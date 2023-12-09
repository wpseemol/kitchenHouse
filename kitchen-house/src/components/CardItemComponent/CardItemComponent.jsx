import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import useAllFoodItem from '../../hooks/useAllFoodItem/useAllFoodItem';

const CardItemComponent = ({ data, refetch }) => {
    const axiosBasUrl = useAxiosBasUrl();

    const { data: allFoodItems } = useAllFoodItem();

    const cardItemFind = allFoodItems.find(
        (item) => item?._id === data?.cardItemResult?._id
    );

    const [productQuantity, setProductQuantity] = useState(data?.itemQuantity);

    const handelRemoveFromCard = (removeId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosBasUrl
                    .delete(`/card-item-remove/${removeId}`)
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Card Item has been remove.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire('Deleted!', error, 'success');
                    });
            }
        });
    };

    return (
        <tr className="transition-colors duration-300 hover:bg-primaryColor/20 ">
            <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                <div className="w-20 h-20 mx-auto">
                    <img
                        src={data?.cardItemResult?.itemImage?.url1}
                        alt={data?.cardItemResult?.itemName}
                        className="w-full object-cover"
                    />
                </div>
            </td>
            <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                <div className="">
                    <h2> {data?.cardItemResult?.itemName} </h2>
                </div>
            </td>

            <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                <div className="">
                    <h2 className="border border-black flex justify-center items-center w-fit">
                        <button
                            className="  p-2 rounded-sm border-r border-black text-lg font-bold"
                            onClick={() =>
                                productQuantity > 1 &&
                                setProductQuantity(productQuantity - 1)
                            }>
                            -
                        </button>
                        <span className="  px-3 py-2 text-lg text-black ">
                            {productQuantity}
                        </span>

                        <button
                            title={`${
                                cardItemFind?.itemQuantity >= productQuantity ||
                                cardItemFind?.itemQuantity === 0
                                    ? ''
                                    : 'Out Of Stock'
                            }`}
                            className="  p-2 rounded-sm border-l border-black text-lg font-bold"
                            onClick={() =>
                                cardItemFind?.itemQuantity >= productQuantity &&
                                setProductQuantity(productQuantity + 1)
                            }>
                            +
                        </button>
                    </h2>
                </div>
            </td>
            <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                <div className="">
                    <p>
                        $<span>{data?.cardItemResult?.itemPrice}</span>
                        .00
                    </p>
                </div>
            </td>
            <td className="h-12 px-6 text-2xl transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-neutral-800">
                <div className="flex items-center gap-3">
                    <p className="">
                        ${productQuantity * data?.cardItemResult?.itemPrice}
                        <span>.00</span>
                    </p>
                    {' || '}
                    <div
                        onClick={() => handelRemoveFromCard(data?._id)}
                        className="w-fit hover:scale-150 hover:text-red-600 duration-200 text-red-500">
                        <FaTrashCan />
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default CardItemComponent;

CardItemComponent.propTypes = {
    data: PropTypes.object,
    refetch: PropTypes.func,
};
