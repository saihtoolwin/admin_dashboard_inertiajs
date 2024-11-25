<script setup>
import { ref, onMounted, computed } from 'vue';
import { emitter } from '@/Helpers/emitter';

const props = defineProps({
    close: {
        type: Boolean,
        default: false,
    },
    processing: {
        type: Boolean,
        default: false
    },
    containerClass: String,
    contentClass: String
});

const isOpen = ref(false);

const computedContainerClasses = computed(() => props.containerClass);

const computedContentClass = computed(() => props.contentClass);

const closeModal = () => {
    isOpen.value = false;
};

onMounted(() => {
    emitter.on('open-modal', () => {
        isOpen.value = true;
    });
});

emitter.on('close-modal', () => {
    closeModal();
});
</script>

<template>
    <div ref="modal"
         class="modal z-[4000] fixed inset-0 w-full flex justify-center transition-all duration-300 overflow-y-hidden px-5"
         :class="[isOpen ? 'opacity-100' : 'invisible opacity-0', computedContainerClasses]">
        <!-- Background overlay -->
        <div class="w-full h-full z-50 absolute backdrop-blur-sm" :class="'bg-[rgba(0,0,0,0.5)]'" @click="closeModal" />

        <!-- Modal Content -->
        <div class="flex items-center justify-center w-full h-full">
            <div class="relative w-full bg-white py-5 px-4 md:p-10 rounded-md  transition-all duration-300 z-[1000] text-black overflow-auto border border-gray-300"
                 :class="[isOpen ? 'translate-y-0' : 'invisible translate-y-40', computedContentClass]">
                <slot />
            </div>
        </div>
    </div>
</template>
