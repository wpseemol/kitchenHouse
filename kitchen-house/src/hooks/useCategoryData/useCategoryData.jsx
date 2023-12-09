import useAllFoodItem from '../useAllFoodItem/useAllFoodItem';

const useCategoryData = () => {
    const { data, allItemRefetch } = useAllFoodItem();
    const allCategory = data?.map((item) => item?.category);

    const uniqCategory = allCategory.reduce((accumulator, currentValue) => {
        const findData = accumulator.find((item) => {
            return item?.catId === currentValue?.catId;
        });

        if (!findData) {
            accumulator.push(currentValue);
        }

        return accumulator;
    }, []);

    return { uniqCategory, allItemRefetch };
};

export default useCategoryData;
