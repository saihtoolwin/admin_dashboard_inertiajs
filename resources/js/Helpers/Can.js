import { usePage } from "@inertiajs/vue3";

export default function can(permission)
{
    return usePage().props.auth?.permissions?.includes(permission);
}