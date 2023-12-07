import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets/svgs': path.resolve(__dirname, 'src/assets/svgs/'),
		},
	},
})
