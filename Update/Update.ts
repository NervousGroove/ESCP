// Add an event listener to the document object that listens for a keydown event
document.addEventListener('keydown', function(event) {
  // Check if the key combination pressed is "ALT + S"
  if (event.altKey && event.code === 'KeyS') {
    // Open the following URL in a new tab
    window.open('https://drive.google.com/drive/folders/1LNS-wLPJQYUH3OFkknHOgQPejHZvyJwR?usp=sharing');
    // Show an alert with the following content
    alert('You have pressed ALT + S. With this key you can update SpellSpike. To update is simple, download and extract, in the same folder C:/SpellSpikeLang, replacing the necessary files. It is important to keep the SpellSpike always updated, to have the new features and bug fixes');
  }
});
