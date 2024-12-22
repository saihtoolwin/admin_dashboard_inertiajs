import myanmarCity from '@bilions/myanmar-cities';
import { ref } from 'vue';

export function useMyanmarCities() {
    const regions = ref([]);
    const cities = ref([]);
    const error = ref(null);

    const getAllRegions = () => {
        regions.value = myanmarCity.getRegions().map((region) => ({
            id: region.id,
            name: `${region.name_en} (${region.name_mm})`,
        }));
    };

    const getRegionById = (regionId) => {
        return myanmarCity.getRegions().find((region) => region.id === regionId) || null;
    };

    const getAllCitiesByRegionId = (regionId) => {
        cities.value = myanmarCity.getCities(regionId).map((city) => ({
            id: city.id,
            name: `${city.name_en} (${city.name_mm})`,
        }));
    };

    const getCityById = (regionId, cityId) => {
        const cityList = myanmarCity.getCities(regionId);
        return cityList.find((city) => city.id === cityId) || null;
    };

    const getCityByName = (name) => {
        const matches = name.match(/^(.*) \((.*)\)$/);
        if (!matches) return null;

        const [nameEn, nameMm] = matches;

        const allRegions = myanmarCity.getRegions();
        for (const region of allRegions) {
            const cities = myanmarCity.getCities(region.id);
            const foundCity = cities.find(
                (city) => city.name_en === nameEn.trim() && city.name_mm === nameMm.trim()
            );
            if (foundCity) return foundCity;
        }
        return null;
    };

    return {
        regions,
        cities,
        error,
        getAllRegions,
        getAllCitiesByRegionId,
        getRegionById,
        getCityById,
        getCityByName
    };
}
