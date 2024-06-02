document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const bullets = document.querySelectorAll('.bullet');

    setActiveBullet(0);

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            carousel.scroll({
                left: index * carousel.offsetWidth,
                behavior: 'smooth'
            });
            setActiveBullet(index);
        });
    });

    function setActiveBullet(index) {
        bullets.forEach((bullet, i) => {
            if (i === index) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    carousel.addEventListener('scroll', () => {
        const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        setActiveBullet(index);
    });

    const contentContainers = document.querySelectorAll('.our-project-content-container .content');
    const projectImage = document.querySelector('.our-projects-content img');

    contentContainers.forEach((content, index) => {
        if (index !== 1) {
            content.classList.add('non-active');
        }
    });

    contentContainers[1].classList.add('active');

    contentContainers.forEach((content, index) => {
        content.addEventListener('click', () => {
            contentContainers.forEach((content) => {
                content.classList.remove('active');
                content.classList.add('non-active');
            });

            content.classList.remove('non-active');
            content.classList.add('active');

            if (index === 0) {
                projectImage.src = './images/project-img-2.png';
            } else if (index === 1) {
                projectImage.src = './images/our-projects.png';
            } else if (index === 2) {
                projectImage.src = './images/project-img-1.png';
            }
        });
    });
});

$(document).ready(function() {
    $('.contact-btn').click(function(e) {
        $('#form').removeClass('form-hidden').addClass('form-visible');
    });

    $('.close-btn').click(function(e) {
        $('#form').removeClass('form-visible').addClass('form-hidden');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#form').length && !$(e.target).closest('.contact-btn').length) {
            $('#form').removeClass('form-visible').addClass('form-hidden');
        }
    });
});