import { createRouter, createWebHashHistory } from 'vue-router'

import QRCode from '@/build/QRCode.vue'
import RobotBuilder from '@/build/RobotBuilder.vue'
import HomePage from '@/home/HomePage.vue'
import PartInfo from '@/parts/PartInfo.vue'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'ГЛАВНАЯ',
			component: HomePage,
		},
		{
			path: '/build',
			name: 'ПОСТРОЙ РОБОТА',
			component: RobotBuilder,
		},
		{
			path: '/qrcode',
			name: 'QR КОД',
			component: QRCode,
		},
		{
			path: '/parts/partType/:id',
			name: '',
			component: PartInfo,
		},
	],
})
