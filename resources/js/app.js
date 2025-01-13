import '../css/app.css';
import './bootstrap';
import '@mdi/font/css/materialdesignicons.min.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import DashboardLayout from '../Layouts/DashboardLayout.vue'
import Toaster from "@meforma/vue-toaster";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) =>{
        let page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        );

        page = page.default;
        if (name === '503') {
            page.layout = null;
        } else {
            let defaultLayout;
            defaultLayout = name.startsWith('Dashboard')
                ? DashboardLayout
                : AppLayout;

            if (name === 'Dashboard/Login') {
                defaultLayout = null;
            }

            if (name === 'Error') {
                defaultLayout = null;
            }

            if (page.layout === undefined) {
                page.layout = defaultLayout;
            }
        }

        return page;
    },
        

    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(Toaster,{
                position: 'bottom-right',
                useDefaultCss: true,
                maxToasts: 3,
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
