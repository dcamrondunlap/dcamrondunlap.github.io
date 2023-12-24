function showSection (sectionId) {
  console.log(`Clicked on section: ${sectionId}`)
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    section.classList.remove('visible')
  });

  var selectedSection = document.getElementById(sectionId);
  if(selectedSection) {
    selectedSection.classList.add('visible');
  };

}

//Rain

document.addEventListener('DOMContentLoaded', function () {
  // Set up Three.js scene
  var scene = new THREE.Scene();

  // Set up camera
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Set up renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Set background color directly on the renderer's canvas element
  renderer.setClearColor(0x0c3356);

  // Wait for the DOM to be fully loaded before appending
  var container = document.getElementById('rain');
  if (container) {
    container.appendChild(renderer.domElement);

    var raindrops = [];
  var material = new THREE.MeshBasicMaterial({
    color: 0xADB7C0,
    opacity: 0.7,
    transparent: true,
  });

  for (var i = 0; i < 1000; i++) {
  var raindropGeometry = new THREE.BoxGeometry(0.01, 0.2, 0.05);
  var raindrop = new THREE.Mesh(raindropGeometry, material);

  raindrop.position.set(
    (Math.random() - 0.5) * 20,
    Math.random() * 20 + 5,
    (Math.random() - 0.5) * 10
  );

  raindrops.push(raindrop);
  scene.add(raindrop);
  }

  function animate() {
    requestAnimationFrame(animate);

    for (var i = 0; i < raindrops.length; i++) {
      raindrops[i].position.y -= 0.08;

      if (raindrops[i].position.y < -5) {
          raindrops[i].position.y = 5;
      }
    }

      renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', function () {
      var newWidth = window.innerWidth;
      var newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Start animation
    animate();
  } else {
    console.error("Container not found");
  }
});
