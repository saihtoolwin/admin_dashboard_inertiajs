import can from "@/Helpers/Can";
import { usePage } from "@inertiajs/vue3";

export default function getSidebarItems(){
    console.log(usePage().url);
    return [
        {
            title : 'Dashboard ',
            allow : true,
            items: [
                {
                    name: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    route: route('admin.dashboard'),
                    active: usePage().url.startsWith('/admin/dashboard'),
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
                    active: usePage().url.startsWith('/admin/users-management'),
                    allow : can('user_access'),
                    subitems: []
                },
                {
                    name: 'Roles Management',
                    icon: 'mdi-account-reactivate-outline',
                    route: route('admin.roles.index'),
                    active: usePage().url.startsWith('/admin/roles'),
                    allow : can('role_access'),
                    subitems: []
                },
            ]
        },
    ]
}


//  getSidebarItems;