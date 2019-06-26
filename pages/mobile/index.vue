<template>
	<div>
		<Header />
		<div class="container">
			这是手机界面首页
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
	margin: 0 auto;
	min-height: 100vh;
	line-height: 480px;
	background: #dfdfdf;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
