<template>
    <select
        :name="props.name"
        v-model="selectedStatus"
        @change="handleStatusChange"
        class="block w-full p-2.5 rounded-md font-semibold text-sm text-darkGray bg-gray-50 outline-none disabled:cursor-not-allowed transition-all focus:ring-2 focus:ring-slate-300 border border-gray-300 focus:border-slate-400"
        :disabled="disabled"
    >
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="currentStatus === option.value"
        >
            {{ option.label }}
        </option>
    </select>
</template>

<script setup>
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    currentStatus: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        required: false,
    },
    name: {
        type: String,
        required: false,
        default: 'status',
    },
    title:{
        type: String,
        required: false,
        default: 'Status',
    }
});

const selectedStatus = ref(props.currentStatus);

watch(
    () => props.currentStatus,
    (newStatus) => {
        selectedStatus.value = newStatus;
    },
    { immediate: true }
);

const handleStatusChange = () => {
    submitForm(selectedStatus.value);
};

const submitForm = (status) => {
    const payload = {
        [props.name]: status, 
    };

    router.put(props.href, payload, {
        onSuccess: () => {
            toast.success( props.title + ' updated successfully.');
        },
        onError: (error) => {
            toast.error(error?.status);
        },
    });
};
</script>

