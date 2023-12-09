import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosBasUrl from '../useAxiosBasUrl';

const useSingleItem = (productId = '') => {
    const axiosBasUrl = useAxiosBasUrl();
    const {
        data: singleItem = {},
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get(
                    `/food-items/${productId}`
                );
                return response.data;
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            }
        },
    });

    return { singleItem, isLoading, refetch };
};

export default useSingleItem;
