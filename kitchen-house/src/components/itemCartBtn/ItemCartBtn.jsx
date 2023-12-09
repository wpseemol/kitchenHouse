import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

import useCardItems from '../../hooks/useCardItems/useCardItems';
import { toast } from 'react-toastify';

const ItemCartBtn = ({ itemId, itemQuantity, buyCount, uid }) => {
    const { cardData, refetch } = useCardItems();

    const location = useLocation();
    const navigate = useNavigate();

    const axiosBasUrl = useAxiosBasUrl();
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    const cardDataItemId = cardData.map((item) => {
        return item.cardItemResult._id;
    });

    const cardItemId = cardData.find((item) => {
        return item?.cardItemResult?._id === itemId;
    });

    const handelAddCart = () => {
        if (!user) {
            navigate('/login', { state: { location: location.pathname } });
            return;
        }

        if (uid === user?.uid) {
            toast("Item is posted by you, You Can'n Add Card");
            console.log('you are ');
            return;
        }

        if (cardDataItemId.includes(itemId)) {
            axiosBasUrl
                .put(`/card-quantity/${cardItemId?._id}`, {
                    itemQuantity: cardItemId?.itemQuantity + 1,
                })
                .then(() => {
                    axiosBasUrl
                        .put(`/quantity/${itemId}`, {
                            itemQuantity: itemQuantity - 1,
                            buyCount: buyCount + 1,
                        })
                        .then(() => {
                            refetch();
                            Swal.fire({
                                title: 'Done!',
                                text: `Item Is already Card,so Update 1`,
                                icon: 'success',
                                confirmButtonText: 'Okay',
                            });
                        });
                });

            return;
        }

        axiosBasUrl
            .post('/card', {
                productId: itemId,
                itemQuantity: 1,
                autherBy: {
                    email: user?.email,
                    uid: user?.uid,
                },
            })
            .then(() => {
                axiosBasUrl
                    .put(`/quantity/${itemId}`, {
                        itemQuantity: itemQuantity - 1,
                        buyCount: buyCount + 1,
                    })
                    .then(() => {
                        Swal.fire({
                            title: 'Done!',
                            text: 'Product Card Add is Done',
                            icon: 'success',
                            confirmButtonText: 'Okay',
                        });

                        refetch();
                    })
                    .catch(() => {});
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            });
    };

    return (
        <>
            <div title={itemQuantity <= 0 ? 'Item Out Of Stock' : ''}>
                <button
                    onClick={() => itemQuantity <= 0 || handelAddCart()}
                    className={`${
                        itemQuantity <= 0 ? 'bg-white' : 'bg-black'
                    } btnContainer  text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        `}>
                    <span className="z-10 relative">Add to cart</span>
                    <div
                        className={`${
                            itemQuantity <= 0
                                ? 'bg-primaryColor/50'
                                : 'hoverContent bg-primaryColor'
                        } absolute -top-1  -left-1  duration-500 w-[25rem] h-[10rem]  `}></div>
                </button>
            </div>
            <div>
                <Link to={`/food-items/${itemId}`}>
                    <button
                        className="btnContainer bg-black text-white rounded-full px-4 py-2 text-sm z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                        <span className="z-10 relative">See details</span>
                        <div className="absolute -top-1 hoverContent -left-1  duration-500 w-[25rem] h-[10rem] bg-primaryColor "></div>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default ItemCartBtn;

ItemCartBtn.propTypes = {
    itemId: PropTypes.string,
    itemQuantity: PropTypes.number,
    buyCount: PropTypes.number,
    uid: PropTypes.string,
};
