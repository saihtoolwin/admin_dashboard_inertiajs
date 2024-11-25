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
                    subitems: []
                },
            ]
        },
        {
            title : 'User & Role Management',
            items: [
                {
                    name: 'User Management',
                    icon: 'mdi-account-group',
                    route: route('admin.dashboard'),
                    active: false,
                    subitems: []
                },
            ]
        }
    ]
}


export default getSidebarItems;