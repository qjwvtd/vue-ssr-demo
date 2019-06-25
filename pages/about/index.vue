<template>
	<div class="about">
		<Header />
		<h1>this is about page</h1>
		<AboutContent />
	</div>
</template>
<script>
import Header from '~/components/common/header';
import AboutContent from './aboutContent';

export default {
	name:'About',
	components:{
		Header,AboutContent
	}
}
</script>
<style lang="scss" scoped>
.about h1{
	text-align:center;
	line-height:320px;
	background:#ccc;
}
</style>


