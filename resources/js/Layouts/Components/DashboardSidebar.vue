<template>
    <div class="h-screen flex">
        <aside class="w-[280px] bg-white">
            <h1
                class="text-lg font-extrabold text-center text-primary p-5 mb-3"
            >
                Admin Dashboard
            </h1>
            <div>
                <ul class="space-y-5 text-gray-600">
                    <li
                        v-for="(group, groupIndex) in getSidebarItems()"
                        :key="groupIndex"
                    >
                        <div
                            v-if="group.title && group.allow"
                            class="w-full h-[30px]"
                        >
                            <p class="text-sm text-gray-400 font-bold px-4">
                                {{ group.title }}
                            </p>
                        </div>
                        <ul>
                            <template
                                v-for="(item, itemIndex) in group.items"
                                :key="itemIndex"
                            >
                                <Link :href="item.route">
                                    <li
                                        v-if="item.allow"
                                        class="text-sm py-4 font-bold flex items-center w-full px-4 hover:bg-primary hover:text-white transition duration-300"
                                        :class="{ 'text-primary bg-blue-100 border-r-4 border-x-primary font-semibold': item.active, 'hover:text-primary-light': !item.active }"
                                    >
                                        <i
                                            :class="`mdi ${item.icon} text-xl mr-2`"
                                        ></i>
                                        {{ item.name }}
                                    </li>
                                </Link>
                            </template>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script setup>
import getSidebarItems from "@/Data/SidebarItems";
import { Link } from "@inertiajs/vue3";
// const sidebarItems = getSidebarItems();
</script>

<style scoped></style>
