<template>
	<div class="aboutContent">
		{{text}}
	</div>
</template>
<script>
export default {
    name:'AboutContent',
    data(){
        return {
            text:'hellow world,this is aboutContent Page'
        };
    }
};
</script>
<style lang="scss" scoped>
.aboutContent{
	text-align:center;
	line-height:32px;
	background: #ddccdd;
}
</style>



