<template>
	<div>
		<Header />
		<div class="container">
			<p>这是界面首页</p>
			
			<el-row>
				<el-col :span="12">
					<h3>内部集成element-ui</h3>
					<i class="el-icon-menu"></i>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import Logo from '~/components/logo';
import Header from '~/components/common/header';
export default {
    name:'Home',
    components: {
        Logo,
        Header
    }
};
</script>
<style>
.container {
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	background: #dfdfdf;
	text-align: center;
}
.container p{
	line-height: 300px;
}
</style>
