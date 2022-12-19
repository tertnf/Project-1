//Settings slider-qualification

$(".qualification-list_slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    respondTo: 'window'
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
          
    //     }
    //   }
    // ]
  });
  

  //Create modal window for open full img qualification
  let qualificationImages = document.querySelectorAll('.qualification-img_slider');
  let clickedQualificationImage;

  const modalWindow = document.querySelector('.qualification-modal');
  const modalWrap = document.querySelector('.qualification-modal_wrapper');
  const closeModalBtn = document.querySelector('.close-btn');

  const openModalWindow = (img) => {
    modalWindow.classList.remove('modal-close')
    clickedQualificationImage = document.createElement('img');
    clickedQualificationImage.src = `${img.attributes.src.value}`;
    clickedQualificationImage.classList.add('qualification-modal_img');
    modalWrap.append(clickedQualificationImage);
  }

  qualificationImages.forEach(item => {
    item.addEventListener('click', () => openModalWindow(item))
  })

  const closeModalWindow = () => {
    modalWindow.classList.add('modal-close');
    clickedQualificationImage.remove();
  }

  closeModalBtn.addEventListener('click', closeModalWindow)

  document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape'){
      closeModalWindow()
    }
  })