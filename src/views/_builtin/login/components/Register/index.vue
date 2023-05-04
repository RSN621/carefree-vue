<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" placeholder="手机号码" />
    </n-form-item>
<!--    <n-form-item path="code">
      <div class="flex-y-center w-full">
        <n-input v-model:value="model.code" placeholder="验证码" />
        <div class="w-18px"></div>
        <n-button size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">
          {{ label }}
        </n-button>
      </div>
    </n-form-item>-->
		<n-form-item path="name">
			<n-input v-model:value="model.name" placeholder="用户名" />
		</n-form-item>
		<n-form-item path="email">
			<n-input v-model:value="model.email" placeholder="邮箱" />
		</n-form-item>
    <n-form-item path="pwd">
      <n-input v-model:value="model.pwd" type="password" show-password-on="click" placeholder="密码" />
    </n-form-item>
    <n-form-item path="confirmPwd">
      <n-input v-model:value="model.confirmPwd" type="password" show-password-on="click" placeholder="确认密码" />
    </n-form-item>
    <n-space :vertical="true" :size="18">
      <login-agreement v-model:value="agreement" />
      <n-button type="primary" size="large" :block="true" :round="true" @click="register">确定</n-button>
      <n-button size="large" :block="true" :round="true" @click="toLoginModule('pwd-login')">返回</n-button>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue';
import type { FormInst, FormRules } from 'naive-ui';
import { useRouterPush } from '@/composables';
import { useSmsCode } from '@/hooks';
import { formRules, getConfirmPwdRule } from '@/utils';
//import {axiosRequest} from "@/service/request";
import axios from "axios";
import {router} from "@/router";
import route from "~/mock/api/route";
const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, start } = useSmsCode();

const formRef = ref<HTMLElement & FormInst>();

const model = reactive({
  phone: '',
/*  code: '',*/
  pwd: '',
  confirmPwd: '',
	name:'',
	email:'',
});

const rules: FormRules = {
  phone: formRules.phone,
  //code: formRules.code,
  pwd: formRules.pwd,
	name: formRules.name,
	email: formRules.email,
  confirmPwd: getConfirmPwdRule(toRefs(model).pwd)
};

const agreement = ref(false);

function handleSmsCode() {
  start();
}


async function handleSubmit() {
  await formRef.value?.validate();
  window.$message?.success('验证成功!');
}

async function register(){
	const data={
		"phone":model.phone,
		"name":model.name,
		"password":model.pwd,
		"email":model.email
	}
	let result:any=""
	 await axios.post("/api/user/register",data).then(resp=>{
		 result=resp.data
	 })
	if(result){
		toLoginModule('pwd-login')
		window.$message?.success('注册成功!');
	}else {
		toLoginModule('register')
		window.$message?.success('注册失败!');
	}
}
</script>

<style scoped></style>
