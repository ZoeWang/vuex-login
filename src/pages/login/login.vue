<template>
	<div id="wlogin">
		<h1 class="wtitle">登录</h1>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm"
            label-width="0px" class="" >
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" auto-complete="off"
                placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="密码" v-model="ruleForm.password" auto-complete="off" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <div class="login-btn">
                <el-button type="primary" v-on:click="submitForm('ruleForm')">登录</el-button>
                <el-button  v-on:click="logout">退出</el-button>
            </div>
            
        </el-form>

	</div>
</template>
<script>
	import model from 'model/login/login'
	import { mapState,mapActions,mapMutations } from 'vuex'


	export default {
		data() {
			return {
				ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                    { required: true, message: '请输入用户名', trigger:'blur' }
                    ],
                    password: [
                    { required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
			}
		},
		created() {
			console.log("mapState=login=token=",this.token);
		},
		computed: {
			...mapState({
	            token: ({ login }) => login.token
	        }),
		},
		methods: {
			// ...mapMutations({
			// 	logout: 'LOGOUT_USER'
			// }),
			...mapActions([
				'login',
				'logout'
			]),
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.doLogin()
					} else {
						console.log('error submit');
						return false;
					}
				});
			},

			doLogin() {
				
				let data = {
					'username': this.ruleForm.username,
                    'password': this.ruleForm.password
				}

				model.login(data, (res => {
					console.log("登录信息",res);
					if(res.status === 205){
	                    this.$message.error(res.message);
	                } else if (res.status === 505){
	                    this.$message.error(res.message);
	                } else if (res.status === 200) {
	                	this.login(res)
	                	this.$router.replace('/')
	                }
				}))
			} 
		}
	}
</script>
<style scoped>
@custom-selector :--heading h1, h2, h3, h4, h5, h6;
:root {
    --text-color: red;
}
:--heading {
   font-weight: 400;
}

#wlogin {
	.wtitle {
		color: green;
	}
}
</style>