import { usePage } from "@inertiajs/vue3";

export default function can(permission)
{
    console.log(permission);
    console.log(usePage().props.auth?.permissions?.includes(permission));

    return usePage().props.auth?.permissions?.includes(permission);
}