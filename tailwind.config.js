import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/Layouts/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors:{
                primary:{
                    DEFAULT:'#007DFE',
                },
                secondary:{
                    DEFAULT:'#F1EDED',
                },
                background:{
                    DEFAULT:'#E8EBED',
                },
                brand :{
                    DEFAULT:'#B5C2C9'
                }
            }
        },
    },

    plugins: [forms],
};
