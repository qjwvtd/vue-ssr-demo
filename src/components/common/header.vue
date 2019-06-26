<template>
	<div>
		<div>
			<ul class="nav">
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><nuxt-link to="/about">About</nuxt-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
    name:'Header'
};
</script>
<style lang="scss" scoped>
.nav{
	overflow: hidden;
}
.nav li{
	line-height: 40px;
	width: 120px;
	text-align: center;
}
</style>


