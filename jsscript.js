      // Toggle show/hide content for Education
      function toggleContent(section) {
        const content = document.getElementById(section);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    // Open modal for Certifications and Awards
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    }

    // Close modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // Close the modal when clicking outside the modal
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
    function toggleContent(id) {
        const content = document.getElementById(id);
        content.classList.toggle('visible');
    }

   // JavaScript to animate the progress bars
document.addEventListener("DOMContentLoaded", function() {
    // Define the skill levels
    const skills = {
      html: 90,
      css: 90,
      javascript: 75,
      react: 90,
      node: 85,
      python: 80
    };
  
    // Function to animate the progress bars
    function animateSkillBars() {
      // Loop through each skill and animate the progress bar width
      for (let skill in skills) {
        const progressBar = document.getElementById(`${skill}-progress`).querySelector('.progress-bar');
        const value = skills[skill];
  
        // Set the width and text dynamically based on the value
        progressBar.style.transition = "width 2s ease-in-out"; // Smooth transition
        progressBar.style.width = `${value}%`; // Update width dynamically
        progressBar.innerText = `${value}%`; // Update the text to match the width
      }
    }
  
    // Call the function to animate the bars when the page loads
    animateSkillBars();
  });

  // Add event listeners to all "View Project" buttons to open project URLs in a new tab
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(event) {
        window.open(this.getAttribute('href'), '_blank');
        event.preventDefault(); // Prevents the default link behavior if necessary
    });
});

// Optional: Add hover animations or any interactive feature you'd like.

// Add event listeners to all service cards for an interactive experience
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        // Toggle the description or add more functionality here
        const description = this.querySelector('.card-text');
        description.classList.toggle('expanded');
    });
});

