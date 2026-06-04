// កូដសម្រាប់ឱ្យ Browser ស្គាល់ថាជា Web App
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
