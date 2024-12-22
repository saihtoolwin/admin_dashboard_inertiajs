export function useQueryParams() {
    const getActiveFilterQueryCount = () => {
        const query = new URLSearchParams(window.location.search);
        let filterCount = 0;
        const uniqueKeys = new Set();

        query.forEach((value, key) => {
            const baseKey = key.split('[')[0];
            if (baseKey !== 'sort' && baseKey !== 'direction' && baseKey !== 'page' && baseKey !== 'search') {
                uniqueKeys.add(baseKey);
            }
        });

        filterCount = uniqueKeys.size;
        return filterCount;
    };

    return {
        getActiveFilterQueryCount
    };
}
