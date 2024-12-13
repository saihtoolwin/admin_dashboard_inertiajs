<template>
    <header class="bg-white  mx-3 my-1 rounded-lg sticky top-0 z-50">
        <!-- Header Content -->
        <div class="flex justify-between h-full py-3">
            <div class="items-center flex  ml-5">
                <span class="mdi mdi-backburger text-2xl text-gray-500"></span>
            </div>
            <!-- Dropdown Wrapper -->
            <div class="flex items-center">
                <!-- Dropdown Menu -->
                <div  class="relative">
                    <div
                        ref="dropDownMenu"
                        v-if="openUserDropDown"
                        class="absolute bg-white shadow-md min-w-[200px] right-[-200px] overflow-hidden top-10 rounded-lg cursor-pointer"
                    >
                        <ul class="w-full">
                            <li @click="logOut" class="w-full min-h-8 hover:bg-gray-300 p-3">
                                
                                <span class="mdi mdi-logout text-red-500 text-xl mx-3"></span>
                                Logout
                            </li>
                            <li class="w-full min-h-8 hover:bg-gray-300 p-3">
                                <span class="mdi mdi-cog text-xl text-gray-500 mx-3"></span>
                                Setting
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Toggle Dropdown -->
                <div 
                    ref="toggleBtn"
                    @click="toggleDropDown" 
                    class="flex items-center cursor-pointer mr-4"
                >
                    <span class="mdi mdi-cog text-2xl text-gray-500"></span>
                    <img src="/spidercold.jpg" class="w-14 h-14 mx-4 rounded-xl" alt="">
                    <div>
                        <p class="text-base">Sai Htoo Lwin</p>
                        <p class="text-sm text-gray-400">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { router } from '@inertiajs/vue3';
const openUserDropDown = ref(false);
const dropDownMenu = ref(null);
const toggleBtn = ref(null);

const toggleDropDown = () => {
    openUserDropDown.value = !openUserDropDown.value;
};

const handleClickOutside = (event) => {
    if (
        dropDownMenu.value &&
        toggleBtn.value &&
        openUserDropDown.value &&
        !dropDownMenu.value.contains(event.target) &&
        !toggleBtn.value.contains(event.target)
    ) {
        openUserDropDown.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

const logOut = () =>{
    router.post(route('logout'));
}
</script>

<style scoped>
</style>
