import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
	state: () => ({
		username: '',
		age: ''
	}),
	getters: {
		usernameFirst: (state) => {
			if (state.username.length === 0) return ''
			return state.username[0]
		}
	},
	actions: {
		updateUsername (newUsername) {
			this.username = newUsername
		}
	}

})