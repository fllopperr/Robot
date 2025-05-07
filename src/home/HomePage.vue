<template>
	<div class="home">
		<div>
			<img class="robot" alt="" src="../assets/robot-home.png" />
		</div>
		<div><router-link to="/build"> НАЧНИ </router-link>Cобирать робота</div>
	</div>
</template>

<script setup></script>

<style scoped>
.home {
	text-align: center;
}
.robot {
	height: 300px;
}
</style>
