<!-- <script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900">
                        You're logged in!
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> -->
<template>
    <Head title="Dashboard" />
    <div class="bg-background min-h-screen flex font-roboto">
        <!-- SideBar -->
        <DashboardSidebar/>
        <!-- Header -->
        <DashboardHeader/>
        <!-- Page Content -->
         
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import DashboardSidebar from '@/Layouts/Components/DashboardSidebar.vue';
import DashboardHeader from '@/Layouts/Components/DashboardHeader.vue';
</script>

<style scoped>

</style>
