<script setup>
</script>

<template>
    <div class="w-full mx-auto p-5 md:p-10 flex items-center justify-center">
        <div
            class="relative flex flex-col items-center md:min-h-[500px] justify-between px-10 py-10 bg-white border rounded-sm shadow-md md:flex-row md:px-5 md:w-[1000px]"
        >
            <img
                v-show="$page.url === '/admin/login'"
                src="/admin-login2.jpg"
                alt="admin-login"
                class="w-full md:w-1/2"
            />
            <div class="flex flex-col items-center bg-white w-full md:px-5 md:w-1/2">
                <slot />
            </div>
        </div>
    </div>
</template>