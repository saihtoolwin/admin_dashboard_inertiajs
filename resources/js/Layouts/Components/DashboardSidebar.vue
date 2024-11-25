<template>
    <div class="h-screen flex ">
        <aside class="w-[280px] bg-white">
            <h1 class="text-lg font-extrabold text-center text-primary p-5 mb-3">Admin Dashboard</h1>
            <div>
                <ul class="space-y-5 text-gray-600">
                    <li v-for="(group, groupIndex) in sidebarItems" :key="groupIndex">
                        <div v-if="group.title" class="w-full  h-[30px] ">
                            <p class="text-sm text-gray-400 font-bold px-4 ">{{ group.title }}</p>
                        </div>
                        <ul>
                            <li
                                v-for="(item, itemIndex) in group.items"
                                :key="itemIndex"
                                class="text-sm py-4 font-bold flex items-center  w-full  px-4"
                                :class="{ 'border-r-4 border-x-primary text-primary bg-blue-100' : item.active }"
                            >
                            <i :class="`mdi ${item.icon} text-xl mr-2`"></i>
                                {{ item.name }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script setup>
import getSidebarItems from '@/Data/SidebarItems';

const sidebarItems = getSidebarItems();
</script>

<style scoped>
</style>
