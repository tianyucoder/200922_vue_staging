<template>
	<div>
		<h2>当前求和为：{{$store.state.sum}}</h2>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>&nbsp;
		<button @click="increment">+</button>&nbsp;
		<button >-</button>&nbsp;
		<button >奇数再加</button>&nbsp;
		<button >异步加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data(){
			return {
				n:1 //n是用户选择的数字
			}
		},
		methods:{
			increment(){
				this.$store.dispatch('jia',this.n)
			},
		}
	}
</script>
