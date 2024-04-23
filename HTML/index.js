document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = button.getAttribute('title').toLowerCase().replace('go to ', '');
            const targetElement = document.querySelector(`#${targetId}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

   
    const galleryImages = document.querySelectorAll('#gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
        img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
    });

   
    const form = document.querySelector('form.contact');
    if (form) {
        form.addEventListener('submit', function(event) {
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && !emailInput.value.includes('@')) {
                alert('Mohon masukkan alamat email yang valid.');
                event.preventDefault();
            }
        });
    });

  
    const aboutUs = document.querySelector('#aboutus');
    window.addEventListener('scroll', function() {
        const windowBottom = window.scrollY + window.innerHeight;
        if (windowBottom >= aboutUs.offsetTop) {
            aboutUs.style.opacity = '1';
            aboutUs.style.transition = 'opacity 1s ease-in-out';
        }
    });

  
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Kembali ke atas';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.backgroundColor = '#4a90e2';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '5px';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    document.body.appendChild(scrollToTopButton);


    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

  
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
