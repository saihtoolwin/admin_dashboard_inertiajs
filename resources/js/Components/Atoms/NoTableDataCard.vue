<script setup>
// import InertiaLinkButton from '@/Components/Atoms/InertiaLinkButton.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-gray-100 rounded-md border border-gray-200 p-6 font-roboto">
        <span class="text-3xl text-primary mb-4">
            <i class="fa-solid fa-exclamation-triangle"></i>
        </span>

        <p class="text-center font-bold text-lg text-gray-800 capitalize">
            No records found!
        </p>

        <p class="text-center text-md font-medium text-gray-600 mt-2 mb-5">
            It seems there are currently no entries to display in this table. Please check back later or try adding new data.
        </p>

        <!-- <InertiaLinkButton href="#" class="!rounded-md bg-primary text-white !text-sm !px-3 !shadow-none">
            <i class="mdi mdi-plus"></i>
            Add New Data
        </InertiaLinkButton> -->
    </div>
</template>
