<template>
	<div >
		<div class="message">{{ displayText }}</div>
	</div>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue';

const message = ref('岂不闻天无绝人之路 只要我想走 路就在脚下');
const displayText = ref('');
const currentIndex = ref(0);

const startDisplaying = () => {
	setInterval(() => {
		displayText.value = message.value.slice(0, currentIndex.value);
		currentIndex.value++;
	}, 150);
};

onMounted(() => {
	startDisplaying();
});
</script>
<style>

.message {
	font-size: 62px;
	font-family: Arial, sans-serif; /* 指定字体样式 */
	text-align: center;
	color: transparent;
	background: linear-gradient(45deg, #ff00ff, #00ffff);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
