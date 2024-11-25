<script setup>
defineProps({ rating: [Number, String] });
</script>

<template>
    <div class="flex items-center">
        <template v-for="starIndex in 5" :key="starIndex">
            <svg
                :class="{
                    'text-yellow-400': rating >= starIndex,
                    'text-gray-300': rating < starIndex,
                }"
                class="w-5 h-5 transition-transform duration-200 transform hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
            </svg>
        </template>
    </div>
</template>

