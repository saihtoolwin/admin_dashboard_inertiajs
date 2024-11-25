<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
    data:{
        type:Object,
        required:false,
        default:()=>{}
    }
});
</script>

<template>
    <Link as="button" :href="href" :data="data" class="font-roboto cursor-pointer py-2 px-5 text-sm w-full flex items-center text-left font-semibold text-gray-800 hover:bg-gray-100 rounded-md transition-all">
        <slot />
    </Link>
</template>
