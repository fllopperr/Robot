<template>
	<div class="qr-wrapper">
		<h2>QR-коде для портфолио</h2>
		<canvas ref="canvas"></canvas>
		<p>Отсканируйте QR-код, что бы открыть сайт</p>
		<button class="visit-btn" @click="visitSite">Перейти по QR-коду</button>
	</div>
</template>
<script>
import QRCode from 'qrcode'

export default {
	name: 'QR КОД',
	data() {
		return {
			url: 'https://github.com/fllopperr', // ссылка на ресурс куда нужно перейти
		}
	},
	mounted() {
		const canvas = this.$refs.canvas
		if (canvas) {
			QRCode.toCanvas(canvas, this.url, { width: 180 }, error => {
				if (error) console.error(error)
			})
		}
	},
	methods: {
		visitSite() {
			window.open(this.url, '_blank')
		},
	},
}
</script>

<style scoped>
.qr-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24px;
	font-family: sans-serif;
}
.qr-wrapper h2 {
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 8px;
}
.qr-wrapper h2 {
	font-size: 0.9rem;
	color: rgb(128, 128, 128);
	margin-bottom: 8px;
}
canvas {
	border: 1px solid #ccc;
	border-radius: 6px;
	padding: 4px;
	background: white;
}
.visit-btn {
	margin-top: 12px;
	padding: 8px 16px;
	background-color: rgb(94, 94, 203);
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background 0.3s ease;
}

.visit-btn:hover {
	background-color: blue;
}
</style>
