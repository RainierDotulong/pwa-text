const installButton = document.getElementById('buttonInstall')
window.addEventListener('beforeinstallprompt', (e) => {
	window.deferredPrompt = e
	installButton.classList.toggle('hidden', false)
})

installButton.addEventListener('click', async () => {
	console.log('Click registered')
	const eventStart = window.deferredPrompt
	if (!eventStart) {
		return
	}

	eventStart.prompt()

	window.deferredPrompt = null

	installButton.classList.toggle('hidden', true)
})

window.addEventListener('appinstalled', (event) => {
	window.deferredPrompt = null
})
