<script setup>
import Breadcrumb from '@/Components/Molecules/Breadcrumb.vue';
import BreadcrumbItem from '@/Components/Atoms/BreadcrumbItem.vue';
import { Head } from '@inertiajs/vue3';
import UserManagementForm from './Components/Form.vue';

defineProps({
    roles : {
        type : Object,
        required : true
    }
})

</script>


<template>
    <Head title="Add User" />

    <div>
        <div class="space-y-5">
            <div class="flex items-center w-full">
                <Breadcrumb icon="mdi-account-group" label="Users" :href="route('admin.users-management.index')">
                    <BreadcrumbItem label="Create" />
                </Breadcrumb>
            </div>

            <UserManagementForm :roles="roles" />
        </div>
    </div>
</template>