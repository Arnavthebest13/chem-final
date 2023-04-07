document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.content')
  const customBar = document.querySelector('.custom-bar')
  const getMaxScroll = () => {
    window.scroll(0, container.scrollHeight)
    const scroll = window.pageYOffset
    window.scroll(0, 0)
    return scroll
  }

  let maxScroll = getMaxScroll();
  const maxTopValue = 305; // replace 500 with the maximum number of pixels you want to allow the bar to go down
  
  window.addEventListener('resize', e => {
    maxScroll = getMaxScroll();
  });
  
  window.addEventListener('scroll', e => {
    let topValue = 20 + window.pageYOffset + (window.pageYOffset / maxScroll * (window.innerHeight - 11025)); // 130 is gotten from the minimum top offset of 20px + the minimum bottom offset of 20px + bar height of 90px
    
    if (topValue > maxTopValue) {
      topValue = maxTopValue;
    }
    
    customBar.style.transform = `translateY(${topValue}px)`;
  });

  // get all navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // add event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = '#ddd'; // change background color on hover
    });
    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = 'transparent'; // change back to transparent on mouseout
    });
  });


  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 800); /* replace 200 with the pixel value of the desired scroll point */
  });

    // get the div element
  const myDiv = document.getElementById("Progress-bar");


  // set initial opacity to 0
  myDiv.style.opacity = 1;

  // set the visibility of the div to hidden
  myDiv.style.visibility = "visible";

  // set a timeout for hiding the div after scrolling stops
  let timeout = null;

  // add an event listener for scrolling
  window.addEventListener("scroll", () => {
    // check if the user has scrolled past 800 pixels
    if (window.pageYOffset >= 800) {
      // clear the timeout if the user is still scrolling
      if (timeout) {
        clearTimeout(timeout);
      }

      // set a timeout to fade out the div after 1 second of no scrolling
      timeout = setTimeout(() => {
        // add a fade-out animation to the div
        myDiv.style.transition = "opacity 0.5s";
        myDiv.style.opacity = 0;

        // set the visibility of the div to hidden after the animation completes
        setTimeout(() => {
          myDiv.style.visibility = "hidden";
        }, 500);
      }, 1000);

      // add a fade-in animation to the div
      myDiv.style.transition = "opacity 0.5s";
      myDiv.style.opacity = 1;

      // show the div
      myDiv.style.visibility = "visible";
    } else {
      // hide the div if the user has not scrolled past 800 pixels
      myDiv.style.transition = "opacity 0.5s";
      myDiv.style.opacity = 1;
      myDiv.style.visibility = "visible";
    }
  });


  if (window.pageYOffset < 800){
    // hide the div if the user has not scrolled past 800 pixels
    myDiv.style.transition = "opacity 0.5s";
    myDiv.style.opacity = 1;
    myDiv.style.visibility = "visible";
  }

  const moveBtn = document.getElementById("move-btn");
  const imageContainer = document.querySelector(".rounded-square");
  const imageContainer2 = document.querySelector(".move-btn");

  moveBtn.addEventListener("click", () => {
    imageContainer.classList.toggle("move-right");
    imageContainer2.classList.toggle("move-right");
  });


  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', (event) => {
      const answer = event.currentTarget.nextElementSibling;
      const icon = event.currentTarget.querySelector('.plus-icon');
      
      if (answer.style.maxHeight) {
        // answer is open, so close it
        answer.style.opacity = 0;
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
      } else {
        // answer is closed, so open it
        answer.style.opacity = 1;
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
      }
    });
  });

});
