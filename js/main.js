$('.team-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
      0:{
        items: 1
      },
      768:{
        items: 2
      },
      991:{
        items: 3
      },
      1200:{
        items: 3
      },
      1920:{
        items: 3
      }
    }
  });

  // Gallery filter

  // get elements from the page
  const btns = document.querySelectorAll('.buttons button');
  const albums = document.querySelectorAll('.albumCover');

  // add a click event to all buttons
  for(let i = 1; i < btns.length; i++){
    btns[i].addEventListener('click', filterAlbum);
  }

  // set active buttons on click
  function setActiveBtn(e){

    // remove active class from all buttons
    btns.forEach(btn => {
      btn.classList.remove('btn-clicked');
    });

    // Add active class to clicked button
    e.target.classList.add('btn-clicked');
  }

   // Filter Albums
   function filterAlbum(e){

    // run active button function
    setActiveBtn(e);

    // Loop through all albums
    albums.forEach(album => {
      album.classList.remove('album-shrink');
      album.classList.add('album-expand');

      // get data from data attributes
      const albumType = parseInt(album.dataset.album);
      // get button type data
      const btnType = parseInt(e.target.dataset.btn);

      // if albumType and btnType are NOT the same
      if (albumType !== btnType) {
        // hide the album
        album.classList.remove('album-expand');
        album.classList.add('album-shrink');
      }
    });
  }
  // Set click event for the 'All' button
  btns[0].addEventListener('click', (e) => {
    // run the active button function
    setActiveBtn(e);

    // loop through all albums
    albums.forEach(album => {
      album.classList.remove('album-shrink');
      album.classList.add('album-expand');
    });
  });

  // End gallery filter

  // Popup buttons
  function togglemsasani(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var msasani = document.getElementById('msasani');
    msasani.classList.toggle('active');
  }

  function toggleMB(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var MB = document.getElementById('MB');
    MB.classList.toggle('active');
  }

  function toggleBO(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var BO = document.getElementById('BO');
    BO.classList.toggle('active');
  }

  function toggleR53(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var R53 = document.getElementById('R53');
    R53.classList.toggle('active');
  }

  function toggle909(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var R909 = document.getElementById('R909');
    R909.classList.toggle('active');
  }

  function toggle786(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var R786 = document.getElementById('R786');
    R786.classList.toggle('active');
  }

  function toggleMR(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var MR = document.getElementById('MR');
    MR.classList.toggle('active');
  }

  function toggleET(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var ET = document.getElementById('ET');
    ET.classList.toggle('active');
  }

  function toggleFT(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var FT = document.getElementById('FT');
    FT.classList.toggle('active');
  }

  function toggleOT(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var OT = document.getElementById('OT');
    OT.classList.toggle('active');
  }

  function toggleLT(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var LT = document.getElementById('LT');
    LT.classList.toggle('active');
  }

  function toggleST(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var ST = document.getElementById('ST');
    ST.classList.toggle('active');
  }

  function togglePG(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var PG = document.getElementById('PG');
    PG.classList.toggle('active');
  }

  function toggleTC(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var TC = document.getElementById('TC');
    TC.classList.toggle('active');
  }

  function toggleEG(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var EG = document.getElementById('EG');
    EG.classList.toggle('active');
  }

  // End Popups

  AOS.init({
    duration: 1000
  });

