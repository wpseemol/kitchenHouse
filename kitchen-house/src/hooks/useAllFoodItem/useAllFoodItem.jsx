import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../useAxiosBasUrl';
import Swal from 'sweetalert2';

const useAllFoodItem = () => {
    const axiosBasUrl = useAxiosBasUrl();

    const {
        data = [],
        isLoading,
        refetch: allItemRefetch,
    } = useQuery({
        queryKey: ['food-items'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get('/food-items');
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

    return { data, isLoading, allItemRefetch };
};

export default useAllFoodItem;
