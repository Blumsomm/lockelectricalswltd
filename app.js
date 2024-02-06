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
    };

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