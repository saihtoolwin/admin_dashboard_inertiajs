import can from "@/Helpers/Can";
import { usePage } from "@inertiajs/vue3";

function getSidebarItems(){
    return [
        {
            items: [
                {
                    name: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    route: route('admin.dashboard'),
                    active: usePage().url==='/admin/dashboard',
                    allow:true,
                    subitems: []
                },
            ]
        },
        {
            title : 'User & Role Management',
            allow : can('user_access'),
            items: [
                {
                    name: 'User Management',
                    icon: 'mdi-account-group',
                    route: route('admin.users-management.index'),
                    active: usePage().url==='/admin/users-management/',
                    allow : can('user_access'),
                    subitems: []
                },
            ]
        }
    ]
}


export default getSidebarItems;