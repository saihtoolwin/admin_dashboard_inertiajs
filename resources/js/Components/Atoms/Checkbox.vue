<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: false
    },
    checked: {
        type: Boolean,
        default: false
    },
    value: {
        type: [String, Number, Boolean]
    }
});

const emit = defineEmits(['update:checked']);

// Computed property to proxy checked status
const proxyChecked = computed({
    get() {
        return props.checked;
    },
    set(val) {
        emit('update:checked', val);
    }
});
</script>

<template>
    <label class="flex items-center cursor-pointer select-none text-light-text dark:text-dark-text">
        <div class="relative">
            <!-- Change input type to radio -->
            <input
                type="checkbox"
                :value="value"
                v-model="proxyChecked"
                class="rounded border-gray-300 text-primary shadow-sm mr-2"
            />
        </div>

        <span v-if="label" class="label flex mt-1 items-center font-semibold text-sm text-gray-800 capitalize">
            {{ label }}
        </span>
    </label>
</template>
