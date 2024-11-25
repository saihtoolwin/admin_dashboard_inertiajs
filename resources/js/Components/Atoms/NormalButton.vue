<script setup>
import { computed } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: 'text-white bg-thaiFlagRed hover:bg-darkRed'
    },
    type: {
        type: String,
        default: 'button'
    },
    tooltip: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: 'top',
        validator: value => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    disabled : {
        type : Boolean,
        default  : false
    },
    widthFull:{
        type:Boolean,
        required:false
    }
});

const computedClasses = computed(() => props.class);
</script>

<template>
    <div class="relative" :class="{'w-full':widthFull}">
        <button
            :type="type"
            class="text-sm px-4 shadow-md py-3 font-semibold rounded-md disabled:opacity-80  disabled:cursor-not-allowed duration-150 active:animate-press"
            :class="computedClasses"
            :disabled="disabled"
        >
            <slot />
        </button>

        <!-- Tooltip -->
        <span
            v-if="tooltip"
            class="absolute px-2 py-1 text-xs text-white bg-gray-600 font-semibold  left-1/2 transform -translate-x-1/2 -translate-y-full rounded opacity-0 transition-opacity duration-150 tooltip -top-3.5"
        >
            {{ tooltip }}
        </span>
    </div>
</template>

<style scoped>
.tooltip {
    opacity: 0;
    white-space: nowrap;
    transform: translate(-50%, -50%);
}

button:hover + .tooltip {
    opacity: 1;
}

.tooltip-top {
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    margin-bottom: 8px;
}

.tooltip-bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    margin-top: 8px;
}

.tooltip-left {
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    margin-right: 8px;
}

.tooltip-right {
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    margin-left: 8px;
}
</style>
