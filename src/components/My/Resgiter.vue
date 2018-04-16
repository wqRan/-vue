<template lang="html">
	<div class="loginPage">
	
	<!-- head -->
	<div class="loginHead">
		<div class="head-l">
	            <router-link to="/" class="back-btn" >返回</router-link>
	    </div>
	    <h1 class="head-m">会员注册</h1>
	    
	</div>
	<!-- input -->
	<div class="usr-box">
	    <input id="loginname" type="text" class="con-ipt icon icon1" placeholder="请输入注册账号" tabindex="1" v-model="username">
	    <input id="loginpwd" type="password" class="con-ipt icon icon2" placeholder="请输入注册密码" tabindex="2" v-model="password">
	    <span class="showBtn">
	    	<input id="showpwd" type="checkbox" value="1">
	    	<font class="showFont" value="1">显示密码</font>
	    </span>
	    <h2 class="resgiterBtn" @click="dosignup">确认注册</h2>
	</div>
</div>
	
</template>
<script>
import axios from 'axios'
	export default {
		data: ()=>{
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			dosignup(){
				axios({
					method:'post',
					url:'/api/users/signup',
					data:{
						username:this.username,
						password:this.password,
					}
				})
				.then((result)=>{
					if(result.data.data.success){
						this.$router.push("login")
					}else{
						console.log("注册失败")
					}
				})
			}
		}
	}
</script>