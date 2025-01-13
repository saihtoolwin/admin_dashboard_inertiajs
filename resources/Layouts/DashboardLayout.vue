<template>
    <Head title="Dashboard" />
    <div class="bg-background min-h-screen flex overflow-hidden">
        <!-- SideBar -->
        <DashboardSidebar/>

        <main class="flex-1">
            <!-- Header -->
            <DashboardHeader/>
            <!-- Page Content -->
            <section class="p-3 h-[83vh] overflow-x-scroll">
                <!-- <div class=" p-4 rounded-lg "> -->
                    <slot />
                <!-- </div> -->
            </section>
        </main>
        
    </div>
    <FlashMessages/>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import DashboardSidebar from '@/Layouts/Components/DashboardSidebar.vue';
import DashboardHeader from '@/Layouts/Components/DashboardHeader.vue';
import FlashMessages from '@/Components/Global/FlashMessages.vue';
</script>

<style scoped>

</style>
