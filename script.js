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
