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

			<hr>
			<h3>element-ui 布局</h3>

			<el-row>
				<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
			</el-row>
			<el-row>
				<el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
			<el-row>
				<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<el-row>
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
			<el-row>
				<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
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
<style lan="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	min-height: 100vh;
	background: #dfdfdf;
	text-align: center;
}
.container p{
	line-height: 60px;
}
.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
