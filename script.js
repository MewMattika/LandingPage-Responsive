function imgSlider(anything) {
    document.querySelector(".drinks").src = anything;
  }
  function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
  }

  function toggleManu(){
    var manuToggle = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');
    manuToggle.classList.toggle('active');
  }
  