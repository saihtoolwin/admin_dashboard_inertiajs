<script setup>
import Pagination from '@/Components/Commons/Pagination.vue';
import NoTableDataCard from '@/Components/Atoms/NoTableDataCard.vue';
import { computed,watch,ref } from 'vue';
import { usePage,router } from '@inertiajs/vue3';

const props=defineProps({
    dataCount: {
        type: Number,
        default: 0,
        required: true,
    },
    href: {
        type: String,
        required:true
    },
    paginate: {
        type: Object,
        default: () => {},
    },
});

const perPage = ref(usePage().props.ziggy.query?.per_page ?? 10);

const paginateLinks=computed(()=>props.paginate?.links);

watch(
    () => perPage.value,
    () => {
        router.get(
            props.href,
            {
                ...usePage().props.ziggy?.query,
                per_page:perPage.value
            },
            {
                replace: true,
                preserveState: true
            }
        );
    }
);
</script>

<template>
    <div class="bg-white p-5 rounded-md border">
        <div class="pb-5">
            <slot name="actions" />
        </div>
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-md overflow-hidden border">
            <slot name="table" />
        </div>
        <!-- Pagination -->
        <div v-if="paginateLinks?.length && dataCount > 0" class="flex flex-col items-center justify-center pb-5">
            <div v-if="paginateLinks?.length> 3" class="flex items-center font-bold text-gray-800 text-sm mb-5">
                <p> Showing {{ paginate?.from }} - {{ paginate?.to }} of {{ paginate.total }} <span class="text-primary mx-4"> | </span> Rows Per Page - </p>
                    &nbsp;
                <select
                    v-model="perPage"
                    class="block p-1 pl-2 w-16 rounded-md border-none font-semibold text-sm text-darkGray bg-transparent outline-none disabled:cursor-not-allowed transition-all focus:ring-0 focus:outline-none cursor-pointer focus:border-transparent">
                    <option>5</option>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>75</option>
                    <option>100</option>
                </select>
            </div>

            <Pagination :links="paginateLinks" />
        </div>
        <div v-else>
            <NoTableDataCard />
        </div>
    </div>
</template>


