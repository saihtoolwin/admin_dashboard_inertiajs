<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li>
        <div class="flex items-center">
            <!-- <i class="fa-solid fa-angle-right text-darkGray"></i> -->
            <span class="mdi mdi-chevron-right text-darkGray text-lg"></span>
            <div class="ml-1 text-sm font-semibold text-darkGray  md:ml-2">
                {{ label }}
            </div>
        </div>
    </li>
</template>
