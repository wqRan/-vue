<template lang="html">
<div class="loginPage">
	<!-- head -->
	<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn" >返回</router-link>
	    </div>
	    <h1 class="head-m">会员登录</h1>
	    
	</div>
	<!-- input -->
	<div class="usr-box">
	    <input name="loginname" type="text" class="con-ipt icon icon1" placeholder="手机号 / 邮箱地址" tabindex="1" v-model="username">
	    <input name="loginpwd" type="password" class="con-ipt icon icon2" placeholder="密码" tabindex="2" v-model="password">
	    <span class="showBtn">
	    	<input id="showpwd" type="checkbox" value="1">
	    	<font class="showFont" value="1">显示密码</font>
	    </span>
	    <h2 class="loginBtn" @click="dologin">登录</h2>
		<div class="user-box1">
		    <span><input name="freeloginbtn" type="checkbox" value="1" checked="checked"> 两周内免登录</span>
		    <router-link to="/resgiter" class="resgiter">免费注册</router-link>
		    <a href="javascript:;">忘记密码？</a>
		</div>
		<!-- 使用合作账号登录 -->
		    <div class="lg-ft-box">
		        <dl>
		            <dt>使用合作账号登录</dt>
		            <dd>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		            </dd>
		        </dl>
		    </div>
		</div>
</div>
</template>
<script>
import Vue from 'vue'
import wsCache from 'web-storage-cache'
import axios from 'axios'
	export default {
		
		data: ()=>{
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			dologin(){
				axios({
					method:'post',
					url:'/api/users/signin',
					data:{
						username:this.username,
						password:this.password,
					}
				})
				.then((result)=>{
					const d = result.data
					if(d.data.success){

						Vue.prototype.$wsCache = new wsCache();                             
						this.$wsCache.set("username", d.data.username, { exp: 60 * 60 });
        				this.$wsCache.set('token', d.data.token, {exp : 3600 * 24})
						this.$router.push({
							path:'/mine',
							name:'mine',
							query:{
								dataObj:this.username
							}
						})
						
						// console.log('登录成功',this.username)
					}else{
						// console.log("登录失败")
					}
				})
			}
		}
	}
</script>