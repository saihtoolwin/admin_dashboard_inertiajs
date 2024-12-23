<script setup>
import Label from '@/Components/Atoms/Label.vue';
import InputField from '@/Components/Atoms/InputField.vue';
import ValidationError from '@/Components/Atoms/ValidationError.vue';
// import FormButton from '@/Components/Atoms/FormButton.vue';
// import SelectBox from '@/Components/Atoms/SelectBox.vue';
import { useForm } from '@inertiajs/vue3';
import { emitter } from '@/Helpers/emitter';
import { onMounted, watch } from 'vue';
import SelectBox from '@/Components/Atoms/SelectBox.vue';
import FormButton from '@/Components/Atoms/FormButton.vue';
import InertiaLinkButton from '@/Components/Atoms/InertiaLinkButton.vue';
// import CountryPhoneInput from '@/Components/Atoms/CountryPhoneInput.vue';
// import SearchableSelectBox from '@/Components/Atoms/SearchableSelectBox.vue';
// import {useMyanmarCities} from '@/Composables/useMyanmarCities';
import { computed } from 'vue';

const props = defineProps({
    isEditMode: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Object,
        required: false,
        default: null
    }
});

const form = useForm({
    name: '',
    email: '',
    password: '',
});

const resetForm = () => {
    form.reset();
};



const handleUserAction = () => {
    if (props.isEditMode) {
        form.post(route('admin.users-management.update', { user: props.user.id }), {
            onSuccess: () => {
                form.reset();
                emitter.emit('close-modal');
            }
        });
    } else {
        form.post(route('admin.users-management.store'), {
            onSuccess: () => {
                form.reset();
                emitter.emit('close-modal');
            },
        });
    }
};


watch(
    () => props.user,
    (newUser) => {
        if (props.isEditMode && newUser) {
            form.role = newUser.roles?.[0]?.name; 
            form.name = newUser.name;
            form.email = newUser.email;
        } else {
            resetForm();
        }
    },
    { immediate: true }
);

</script>

<template>

    <div class="bg-white rounded-md border border-gray-200 p-8">
        <div>
            <form @submit.prevent="handleUserAction" class="space-y-6" enctype="multipart/form-data">


                <div class="grid grid-cols-2 gap-5">
                    <div>
                        <Label label="Full Name" required />
                        <InputField v-model="form.name" type="text" name="user-name"
                                    placeholder="Enter  full name" />
                        <ValidationError :message="form.errors?.name" />
                    </div>
                    <div>
                        <Label label="Email Address" required />
                        <InputField v-model="form.email" type="text" name="user-email"
                                    placeholder="Enter  email address" />
                        <ValidationError :message="form.errors?.email" />
                    </div>
                </div>             

                <div v-if="!isEditMode">
                    <Label label="Password" required />

                    <InputField v-model="form.password" type="password" name="customer-password"
                                placeholder="Enter  password" />

                    <ValidationError :message="form.errors?.password" />
                </div>


                <div class="flex items-center justify-end space-x-5">
                    <InertiaLinkButton :href="route('admin.users-management.index')"
                                       class="bg-gray-500 hover:bg-gray-600 text-white rounded-md">
                        Cancel
                    </InertiaLinkButton>

                    <FormButton :processing="form.processing"  class="bg-primary hover:bg-blue-700 text-white">
                        {{ isEditMode ? 'Save Changes' : 'Create User' }}
                    </FormButton>
                </div>
            </form>
        </div>
    </div>

</template>
