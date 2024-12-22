<script setup>
defineProps({
    items: {
        type: Object,
        required: true
    },
    tableRowClass : {
        type : String,
        default : ''
    }
});
</script>

<template>
    <div class="w-full overflow-x-scroll overflow-y-hidden">
        <table class="w-full text-sm text-left">
            <thead class="text-gray-800 bg-gray-100">
                <tr>
                    <slot name="table-header"></slot>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in items"
                    :key="index"
                    :class="{
                        'border-b': index !== items.length - 1,tableRowClass,
                    }"
                    class="hover:bg-gray-50 transition-all duration-150"
                >
                    <slot name="table-data" :item="item" :index="index" />
                </tr>
            </tbody>
        </table>
    </div>
</template>
