<template>
    <Head title="Users Management" />
    <div class="flex items-center w-full mb-5">
        <Breadcrumb icon="mdi mdi-account-group" label="Users">
            <BreadcrumbItem label="Lists" />
        </Breadcrumb>
    </div>
    <div class="space-y-5 bg-white rounded-lg">
        <TableContainer
            :data-count="users?.data?.length"
            :paginate="users"
            :href="userListRoute"
        >
            <template #actions>
                <div
                    class="flex justify-end"
                >
                    <!-- <DashboardTableDataSearchBox class="w-full mt-5 md:mt-0" placeholder="Search users" :href="userListRoute" /> -->
                        <!-- <InertiaLinkButton v-if="can('customers.create')" :href="route('admin.customers.create')" class="items-start !rounded-md bg-primary text-white !text-sm !px-3 ">
                                    <i class="mdi mdi-plus"></i>
                                    Add Customer
                                </InertiaLinkButton> -->
                        <InertiaLinkButton
                            v-if="can('user_create')"
                            :href="route('admin.users-management.create')"
                            class="items-start !rounded-md bg-primary text-white !text-sm !px-3"
                        >
                            <i class="mdi mdi-plus"></i> Add User
                        </InertiaLinkButton>
                        <!-- <div class="sm:ml-32">
                                    <UserFilter :roles="roles" />
                                </div> -->
                </div>
            </template>

            <template #table>
                <div class="overflow-x-auto w-full">
                    <Table :items="users.data">
                        <!-- Table Headers -->
                        <template #table-header>
                            <SortableTableHeaderCell
                                label="Name"
                                sort="name"
                                :url="userListRoute"
                            />
                            <SortableTableHeaderCell
                                label="Email"
                                sort="email"
                                :url="userListRoute"
                            />
                            <TableHeaderCell label="Roles" />
                            <TableHeaderCell label="Actions" />
                        </template>

                        <!-- Table Rows -->
                        <template #table-data="{ item }">
                            <TableDataCell>
                                <div class="flex items-center space-x-3">
                                    <div class="flex flex-col items-start">
                                        <span>
                                            {{ item.name }}
                                        </span>
                                        <span class="text-primary">
                                            {{ item.email }}
                                        </span>
                                    </div>
                                </div>
                            </TableDataCell>
                            <TableDataCell>{{ item.email }}</TableDataCell>
                            <TableDataCell>{{ item.roles[0].title }}</TableDataCell>
                            <!-- <TableDataCell class="min-w-[150px]">{{
                                item.phone_number
                            }}</TableDataCell> -->
                            <!-- <TableDataCell>{{ item.user_profile?.date_of_birth || '-' }}</TableDataCell> -->

                            <!-- Actions: Edit and Delete -->
                            <TableActionCell
                               
                            >
                                <InertiaLinkButton
                                   
                                    :href="
                                        route('admin.users-management.edit', {
                                            user: item?.id,
                                        })
                                    "
                                    tooltip="Edit"
                                    class="bg-primary !shadow-none !px-3 !py-2 text-white rounded-md"
                                >
                                    <i class="mdi mdi-file-edit"></i>
                                </InertiaLinkButton>
                                <NormalButton
                                    v-if="can('users.delete')"
                                    @click="deleteCustomer(item)"
                                    tooltip="Delete"
                                    class="bg-red-600 !shadow-none !px-3 !py-2 text-white rounded-md"
                                >
                                    <i class="mdi mdi-delete"></i>
                                </NormalButton>
                            </TableActionCell>
                        </template>
                    </Table>
                </div>
            </template>
        </TableContainer>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import Breadcrumb from "@/Components/Molecules/Breadcrumb.vue";
import BreadcrumbItem from "@/Components/Atoms/BreadcrumbItem.vue";
import TableContainer from "@/Components/Molecules/TableContainer.vue";
import TableActionCell from "@/Components/Molecules/TableActionCell.vue";
import SortableTableHeaderCell from "@/Components/Molecules/SortableTableHeaderCell.vue";
import Pagination from "@/Components/Commons/Pagination.vue";
import TableDataCell from "@/Components/Molecules/TableDataCell.vue";
import TableHeaderCell from "@/Components/Molecules/TableHeaderCell.vue";
import Table from "@/Components/Commons/Table.vue";
import can from "@/Helpers/Can";
import InertiaLinkButton from "@/Components/Atoms/InertiaLinkButton.vue";

defineProps({
    users: {
        type: Object,
        required: true,
    },
});

const userListRoute = route("admin.users-management.index");
</script>

<style scoped></style>
