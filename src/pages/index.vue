<template>
	<div>
		<Header />
		<div class="container">
			this is home
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
<style lang="scss" scoped>
.container {
	margin: 0 auto;
	min-height: 100vh;
	line-height: 480px;
	background: #aaaaaa;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>

