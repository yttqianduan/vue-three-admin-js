<template>
    <div class="account">
        <div class="form-wrap">
            <a-form
                name="custom-validation"
                ref="formRef"
            >
                <a-form-item>
                    <label>用户名</label>
                    <a-input  type="text" autocomplete="off" />
                </a-form-item>

                <a-form-item>
                    <label>密码</label>
                    <a-input  type="text" autocomplete="off" />
                </a-form-item>
                
                <!-- 滑动验证组件 -->
                <a-form-item>
                    <Captcha />
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit" block>
                        登录
                    </a-button>
                </a-form-item>
            </a-form>

            <div class="text-center fs-12">
                <a href="" class="color-white">忘记密码</a> |
                <!-- <a href="" class="color-white">注册</a> -->
                <router-link class="color-white" to="/register">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import Captcha from "../../components/Captcha/index.vue"
export default {
    name:"Login",
    components:{
        Captcha
    },
    setup(props){
        const formConfig = reactive({
            layout:{//表单的宽度配置项
                labelCol: { span: 10 },
                wrapperCol: { span: 14 },
            }
        })

        const data = toRefs(formConfig)


        return {
            formConfig,
            ...data,
        }
    }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>