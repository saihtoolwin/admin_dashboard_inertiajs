<template>
    <div class="flex gap-2 items-center">
        <label
            v-if="leftLabel"
            class="text-sm text-gray-500 dark:text-gray-200"
        >{{ leftLabel }}</label>
        <div
            v-bind="$attrs"
            class="flex items-center bg-gray-300 w-[45px] h-[25px] rounded-full p-1 cursor-pointer duration-300"
            :class="{ '!bg-primary': open, 'cursor-not-allowed': disabled }"
            @click="clickHandler"
        >
            <div
                class="flex w-[19px] h-[19px] rounded-full bg-white shadow-md transform duration-300"
                :class="{ 'translate-x-4': open }"
            />
        </div>
        <label class="text-sm text-gray-500 dark:text-gray-200">{{ rightLabel }}</label>
    </div>
</template>

<script>
export default {
    props: {
        open: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        leftLabel: { type: String, default: '' },
        rightLabel: { type: String, default: '' }
    },
    methods: {
        clickHandler() {
            if (this.disabled) return;
            this.$emit('update:open', !this.open);
            this.$emit('valueChange', !this.open);
        }
    }
};
</script>
