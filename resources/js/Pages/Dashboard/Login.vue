<script setup>
import AuthFormContainer from '@/Components/Molecules/AuthFormContainer.vue';
import Label from '@/Components/Atoms/Label.vue';
import InputField from '@/Components/Atoms/InputField.vue';
import ValidationError from '@/Components/Atoms/ValidationError.vue';
import FormButton from '@/Components/Atoms/FormButton.vue';
import { useForm, Head, Link } from '@inertiajs/vue3';
import Checkbox from '@/Components/Atoms/Checkbox.vue';

defineProps({ canResetPassword: Boolean, status: String });

const form = useForm({
    email: '',
    password: '',
    remember: false,
});
</script>

<template>

    <Head :title="$page.url.startsWith('/admin') ? 'Admin Login' : 'Merchant Login'" />
    <section class="container mx-auto  flex items-center justify-center font-roboto">
        <AuthFormContainer>
            <form @submit.prevent="form.post(route('login'))" class="w-full space-y-6">
                <h1 class="text-center text-2xl text-dark mb-5 font-bold">
                    {{ $page.url.startsWith('/admin') ? "Admin" : "Merchant" }} Dashboard Login
                </h1>

                <div v-if="status"
                     class="mb-4 font-medium text-sm text-green-600 bg-green-100 p-3 w-full rounded-md text-center border border-green-400">
                    {{ status }}
                </div>

                <div>
                    <Label label="Email" required />

                    <InputField v-model="form.email" type="email" name="email-address"
                                placeholder="Enter email address" />

                    <ValidationError :message="form.errors?.email" />
                </div>

                <div>
                    <Label label="Password" required />

                    <InputField v-model="form.password" type="password" name="password" placeholder="Enter password" />

                    <ValidationError :message="form.errors?.password" />
                </div>

                <!-- Remember me and Forgot Password -->
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember" />
                            <span class="ml-2 text-sm text-gray-600"> Remember me</span>
                        </label>
                    </div>

                    <div v-if="$page.url==='/merchant/login'">
                        <Link v-if="canResetPassword" :href="route('password.request')"
                              class="underline text-sm text-primary font-medium rounded-md hover:text-orange-700">
                            Forgot Password ?
                        </Link>
                    </div>
                </div>

                <FormButton :processing="form.processing" class="w-full !shadow-none !bg-primary !text-white">
                    <!-- <span class="flex items-center justify-center"> -->
                    <!-- <i class="mdi mdi-login text-xl mr-1.5"></i> -->
                    <!-- </span> -->
                    Login To Dashboard
                </FormButton>
            </form>
        </AuthFormContainer>
    </section>
</template>
