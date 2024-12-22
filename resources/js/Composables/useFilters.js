import { router, usePage } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

export function useFilters(routePath) {
    const selectedFilters = ref({});
    const minPrice = ref('');
    const maxPrice = ref('');
    const selectedMinPrice = ref(minPrice.value);
    const selectedMaxPrice = ref(maxPrice.value);
    const query = usePage().props.ziggy?.query || {};
    let debounceTimeout = null;

    // Initialize filters from the route query
    watch(
        () => query,
        (newQuery) => {
            for (const [filterType, options] of Object.entries(newQuery)) {
                if(options){
                    if (filterType === 'price_range') {
                        // Extract min and max from query if they exist
                        const [min, max] = options.split('--');
                        selectedMinPrice.value = parseInt(min) || minPrice.value;
                        selectedMaxPrice.value = parseInt(max) || maxPrice.value;
                    } else {
                        selectedFilters.value[filterType] = options.split('--');
                    }
                }
            }
        },
        { immediate: true }
    );

    // Watch for changes in selected min and max prices
    watch([selectedMinPrice, selectedMaxPrice], () => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            updateQueryString(routePath);
        }, 1000);
    });

    // Update filters when checkboxes are selected/deselected
    const updateFilters = (filterType, optionName) => {
        if (!selectedFilters.value[filterType]) {
            selectedFilters.value[filterType] = [];
        }
        const index = selectedFilters.value[filterType].indexOf(optionName);
        if (index > -1) {
            selectedFilters.value[filterType].splice(index, 1);
        } else {
            selectedFilters.value[filterType].push(optionName);
        }
        updateQueryString(routePath);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Build query string based on selected filters and price
    const updateQueryString = (routePath) => {
        const query = {};

        for (const [filterType, options] of Object.entries(selectedFilters.value)) {
            if (options.length) {
                query[filterType] = options.join('--');
            }
        }

        // Add price range to query if it's set
        if (selectedMinPrice.value !== minPrice.value || selectedMaxPrice.value !== maxPrice.value) {
            query.price_range = `${selectedMinPrice.value}--${selectedMaxPrice.value}`;
        }

        router.get(routePath, { ...query },{
            preserveScroll:true
        });
    };

    // Reset All Active Filters
    const resetFilters=(routePath)=> router.get(routePath);

    // Get Current Active Filter Count
    const getActiveFilterCount = (countBy = 'value') => {
        let count = 0;

        for (const [options] of Object.entries(selectedFilters.value)) {
            if (countBy === 'key') {
                if (options.length > 0) {
                    count += 1;
                }
            } else if (countBy === 'value') {
                count += options.length;
            }
        }

        if (selectedMinPrice.value !== minPrice.value || selectedMaxPrice.value !== maxPrice.value) {
            count += 1;
        }

        return count;
    };


    return {
        selectedFilters,
        minPrice,
        maxPrice,
        selectedMinPrice,
        selectedMaxPrice,
        query,
        updateFilters,
        updateQueryString,
        resetFilters,
        getActiveFilterCount
    };
}
