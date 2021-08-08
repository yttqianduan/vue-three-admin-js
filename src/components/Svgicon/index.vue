<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"  :fill="color" />
        <!-- <use  :href="'#icon-'+className" :fill="color" /> -->
    </svg>
</template>

<script>
import {computed, defineComponent} from 'vue'
export default {
    naem:"SvgIcom",
    props: {
        iconClass: {
            type: String,
            default: '',
        },
        className:{
            type: String,
            default: '',
        },
        iconName: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '#889aa4',
        },
    },
    setup(props){
        return {
            iconName: computed(() => `#icon-${props.iconName}`),
            svgClass: computed(() => {
                if (props.className) {
                    return `svg-icon ${props.className}`
                }
                return 'svg-icon'
            }),
        }
    },
}
</script>

<style lang="scss" scoped> 
.svg-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  vertical-align: middle;
  margin-top: -3px;
}

</style>