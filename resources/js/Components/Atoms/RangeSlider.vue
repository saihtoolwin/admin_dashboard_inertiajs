<template >
    <div>
        <Slider v-model="value" />
    </div>
</template>
<script>
import Slider from '@vueform/slider';

export default {
    components: {
        Slider,
    },
    data() {
        return {
            value: [1000,100000]
        };
    }
};
</script>

<style src="@vueform/slider/themes/default.css">
</style>

<style>
.slider-connect {
  background-color: #E55322 !important; /* Set your desired active range color */
}
.slider-tooltip{
    --slider-tooltip-bg: #E54322;
}
</style>
