  /* Drop Down Menu */

  const toggleBtn = document.querySelector('.toggle-btn')
    const toggleBtnIcon = document.querySelector('.toggle-btn i')
    const dropDownMenu = document.querySelector('.dropdown-menu')

    toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }

    /* Gallery */

    document.querySelectorAll('.image-container img').forEach(image => {
      image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
      }
    });
    
    document.querySelector('.popup-image span').onclick = () => {
      document.querySelector('.popup-image').style.display = 'none';
    }

    /* Contact Form */

    const formHeading = document.querySelector(".form-heading")
    const formInputs = document.querySelectorAll(".contact-form-input");
    
    formInputs.forEach(input => {
      input.addEventListener("focus", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
          formHeading.textContent = `${input.placeholder}`;
          formHeading.style.opacity = "1";
        }, 300);
      });
      input.addEventListener("blur", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
          formHeading.textContent = "Get in touch";
          formHeading.style.opacity = "1";
        }, 300);
      });
    })

    /* Services Dropdown Info */

  const acc = document.getElementsByClassName("accordion");
  var i;

  for(i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');

      var panel = this.nextElementSibling;
      if(panel.style.display == 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }

  /* Testimonials */

  const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: '.js-testimonials-pagination',
      clickable: true
    },
    breakpoints:{
      767:{
        slidesPerView: 2
      }
    } 
});