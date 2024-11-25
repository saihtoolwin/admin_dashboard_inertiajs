<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'password', 'number', 'email'].includes(value),
    },
    placeholder: {
        type: String,
        required: false,
    },
    class: {
        type: String,
        default: '',
    },
    autofocus: {
        type: Boolean,
        default: false,
    },
    autocomplete: {
        type: String,
        default: 'off',
        validator: (value) => ['on', 'off'].includes(value),
    },
    readOnly: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    maxLength: {
        type: String,
        required: false,
    },
    minLength: {
        type: String,
        required: false,
    },
    pattern: {
        type: String,
        required: false,
    },
    defaultValue: {
        type: String,
        required: false,
    },
    modelValue: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: false,
    },
    prefix: {
        type: String,
        required: false,
    },
    suffix: {
        type: String,
        required: false,
    },
});
const emit = defineEmits(['update:modelValue']);
const input = ref(null);
const showPassword = ref(false);

const inputClasses = computed(() => ({
    'block w-full p-3.5 rounded-md font-semibold text-sm text-darkGray bg-gray-50 outline-none disabled:cursor-not-allowed transition-all focus:ring-2 focus:ring-slate-300 border border-gray-300 focus:border-slate-400': true,
    'pl-12': props.icon || props.prefix,
    'pr-12': props.suffix,
    [props.class]: !!props.class,
}));

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleInput = (event) => {
    const target = event.target;
    if (target && target.value !== undefined) emit('update:modelValue', target.value);
};
</script>

<template>
    <div class="relative w-full  rounded-md">
        <div class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-neutral-600 h-full text-sm flex items-center font-semibold justify-center px-2.5 rounded-l-md" v-if="prefix">
            {{ prefix }}
        </div>

        <input
            ref="input"
            :id="id"
            :name="name"
            :type="type === 'password' && showPassword ? 'text' : type"
            :placeholder="placeholder"
            :class="inputClasses"
            :value="modelValue"
            :readonly="readOnly"
            :disabled="disabled"
            :required="required"
            :pattern="pattern"
            :maxlength="maxLength"
            :minlength="minLength"
            :defaultValue="defaultValue"
            :autofocus="autofocus"
            :autocomplete="autocomplete"
            @blur="$emit('blur')"
            @input="handleInput"
        />

        <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" v-if="suffix">
            {{ suffix }}
        </div>

        <button
            v-if="type === 'password'"
            type="button"
            class="absolute right-3 top-3.5 text-gray-500"
            @click="togglePasswordVisibility"
        >
            <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
        </button>
    </div>
</template>
