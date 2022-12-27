//Settings slider-qualification

$(".qualification-list_slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  //Create modal window for open full img qualification
  let clickedQualificationImage;

  const modalWindow = document.querySelector('.qualification-modal');
  const modalWrap = document.querySelector('.qualification-modal_wrapper');
  const closeModalBtn = document.querySelector('.close-btn');
  const qualificationListSlider = document.querySelector('.qualification-list_slider');
  
  const arrQualificationImages = ['playback.JPG', 'dyploma-mag.JPG', 'dyploma-magistra.JPG', 'child-pscihology.JPG'];

  // const openModalWindow = (id) => {
  //   modalWindow.classList.remove('modal-close')
  //   clickedQualificationImage = document.createElement('img');
  //   clickedQualificationImage.src = `./images/${arrQualificationImages[id]}`;
  //   clickedQualificationImage.classList.add('qualification-modal_img');
  //   modalWrap.append(clickedQualificationImage);
  // }

  const openModalWindow = (id) => {
    modalWindow.classList.remove('modal-close')
    clickedQualificationImage = document.createElement('span');
    clickedQualificationImage.style.backgroundImage = `url('./images/${arrQualificationImages[id]}')`;
    clickedQualificationImage.classList.add('qualification-modal_img');
    modalWrap.append(clickedQualificationImage);
  }

  qualificationListSlider.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id === undefined) return;
    openModalWindow(id);
  })

  const closeModalWindow = () => {
    modalWindow.classList.add('modal-close');
    clickedQualificationImage.remove();
  }

  closeModalBtn.addEventListener('click', closeModalWindow)

  document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape'){
      closeModalWindow();
    }
  })



