import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../useAxiosBasUrl';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { useEffect } from 'react';

const useCardItems = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};
    const axiosBasUrl = useAxiosBasUrl();

    const { data: cardData = [], refetch } = useQuery({
        queryKey: ['card-items', user?.email],
        queryFn: async () => {
            if (user) {
                const response = await axiosBasUrl.get('/card-data');

                return response.data;
            } else {
                return [];
            }
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch, user]);

    return { cardData, refetch };
};

export default useCardItems;
