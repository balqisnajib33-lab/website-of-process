// Placeholder for future JavaScript features
// For now, you can use this file to add interactive features if needed
console.log("OpsDept Malaysia website loaded.");

<script>
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // Set "active" menu item
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu li a').forEach(link => {
      if(link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });
  });
</script>