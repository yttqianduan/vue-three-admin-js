<template>
    <div class="account">
        <div class="form-wrap">
            <a-form
                name="custom-validation"
                ref="formRef"
                :label-col="labelColW"
                :model="register_form"
                :rules="rules_form"
                @finish="handleFinish"
            >
                <a-form-item name="username">
                    <!-- <label>用户名</label> -->
                    <a-input placeholder="请输入用户名" v-model:value="register_form.username" type="text" autocomplete="off"/>
                </a-form-item>

                <a-form-item name="password">
                    <!-- <label>密码</label> -->
                    <a-input v-model:value="register_form.password" placeholder="请输入密码" type="password" autocomplete="off" />
                </a-form-item>

                <a-form-item name="passwords">
                    <!-- <label>确认密码</label> -->
                    <a-input v-model:value="register_form.passwords" placeholder="确认密码" type="password"  autocomplete="off" />
                </a-form-item>

                <a-form-item name="code">
                    <!-- <label>验证码</label> -->
                    <a-row :gutter="12">
                        <a-col :span="14"><a-input v-model:value="register_form.code" maxlength="6" type="text" placeholder="验证码" autocomplete="off" /></a-col>
                        <a-col :span="10">
                            <a-button 
                                type="primary" 
                                block 
                                danger 
                                :disabled="button_disabled" 
                                :loading="button_loading"
                                @click="getCode"
                            >
                                {{button_text}}
                            </a-button>
                        </a-col>
                    </a-row>
                </a-form-item>
                 
                <!-- 滑动验证组件 -->
                <a-form-item>
                    <Captcha />
                </a-form-item>

                <a-form-item>
                    <a-button type="primary" html-type="submit" block >
                        重置密码
                    </a-button>
                </a-form-item>
            </a-form>

            <div class="text-center fs-12">
                <router-link to="/" class="color-white">登录</router-link> |
                <!-- <a href="" class="color-white">登录</a> -->
                <router-link to="/register" class="color-white">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// 导入校验规则方法
// import { checkPhone,checkPassword } from "../../utils/verification";
import * as vers from "../../utils/verification";

import { reactive, toRefs } from '@vue/reactivity';
import Captcha from "../../components/Captcha/index.vue";

import { message } from 'ant-design-vue';
export default {
    name:"Forget",
    components:{
        Captcha
    },
    setup(props){
        // 用户名校验
        const checkUsername = async (rule, value,callback) => {
            let regPhone = /^1[3456789]\d{9}$/;
            if (!value) {//未输入内容
                return Promise.reject('请输入用户名');
            }else if(!vers.checkPhone(value)){//手机号错误
                return Promise.reject('请输入11位数字的手机号');
            }else{ 
                return Promise.resolve();
            }
        };

        // 密码校验
        const checkPassword = async (rule, value,callback) => {
            const passwords = formConfig.register_form.passwords;
            if (!value) {//未输入内容
                return Promise.reject('请输入密码');
            }else if(!vers.checkPassword(value)){
                return Promise.reject('请输入6-20位字母加数字的密码');
            }else if(passwords && value && (passwords != value)){//二次检验密码
                return Promise.reject('两次密码不一致');
            }else{ 
                return Promise.resolve();
            }
        };
         
        // 密码再次校验
        const checkPasswords = async (rule, value,callback) => {
            const password = formConfig.register_form.password;
            if (!value) {//未输入内容
                return Promise.reject('请确认密码');
            }else if(!vers.checkPassword(value)){
                return Promise.reject('请输入6-20位字母加数字的密码');
            }else if(password && value){//二次检验密码
                if(password != value){
                    return Promise.reject('两次密码不一致');
                }
            }else{ 
                return Promise.resolve();
            }
        };

        // 验证码校验
        const checkCode = async (rule, value,callback) => {
            if (!value) {//未输入内容
                return Promise.reject('请输入验证码');
            }else if(!vers.checkCode(value)){
                return Promise.reject('请输入6位字符串(字母+数字)验证码');
            }else{ 
                return Promise.resolve();
            }
        };

        const formConfig = reactive({
            layout:{//表单的宽度配置项
                labelCol: { span: 10 },
                wrapperCol: { span: 14 },
            },
            register_form:{//表单字段
                username:"",
                password:"",
                passwords:"",
                code:""
            },
            rules_form:{
                username:[ 
                    { required: true,validator: checkUsername, trigger: 'change' }
                ],
                password:[
                    { required: true,validator: checkPassword, trigger: 'change' }
                ],
                passwords:[
                    { required: true,validator: checkPasswords, trigger: 'change' }
                ],
                code:[
                    { required: true,validator: checkCode, trigger: 'change' }
                ],
            },
            
        })

        const dataItem = reactive({
            // 获取验证码按钮状态
            button_text:"获取验证码",
            button_loading:false,
            button_disabled:false,
            sec:6,
            timers:null,
        })

        const formData = toRefs(formConfig);
        const data = toRefs(dataItem)

        // 表单验证方法
        const handleFinish = (value) => {
            // console.log(value,"-------------------");
        }

        // 获取验证码
        const getCode = () => {
            if(!formConfig.username){
                message.warning('用户名不能为空');
                return false;
            }

            // 存在定时器时先清除
            dataItem.timers && clearInterval(dataItem.timers)
            
            // 开启新的定时器
            dataItem.timers = setInterval(()=>{
                const s = dataItem.sec--;
                dataItem.button_text = `${s}秒`;
                if(s <= 0){
                    clearInterval(dataItem.timers)
                    dataItem.button_text =  `重新获取`;
                    dataItem.sec = 6
                }
            },1000)
        }   

        return { 
            ...formData,
            ...data,
            labelColW: { span: 5 },
            handleFinish,
            getCode
        }
    }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>