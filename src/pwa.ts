import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    // Show update notification using a more secure approach
    const shouldReload = window.confirm('New content available. Reload?');
    if (shouldReload) {
      updateSW();
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
  // Add error handling for CSP issues
  onRegisterError(error: Error) {
    console.warn('SW registration failed:', error);
  },
});
