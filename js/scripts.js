/*!
 * Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }

    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

function myFunction(x) {
  if (x.matches) {
      
    window.addEventListener("DOMContentLoaded", (event) => {
      const sidebarToggle = document.body.querySelector("#inbox-masuk");
      if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        
        sidebarToggle.addEventListener("click", (event) => {
          event.preventDefault();
          document.getElementById("surat1").style.display = "block";
          document.getElementById("inbox1").style.display = "none";

        });
      }
    });
  }
}

function myFunction1(x) {
    if (x.matches) {
        
      window.addEventListener("DOMContentLoaded", (event) => {
        const sidebarToggle = document.body.querySelector("#back-inbox");
        if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          //     document.body.classList.toggle('sb-sidenav-toggled');
          // }
          
          sidebarToggle.addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("surat1").style.display = "none";
            document.getElementById("inbox1").style.display = "block";
          });
        }
      });
    }
  }

var x = window.matchMedia("(max-width: 1366px)");
myFunction(x);
myFunction1(x);
x.addListener(myFunction);

var a = "block";

function w3_open() {
  if (a == "block") {
    document.getElementById("sidebar-id").style.marginLeft = "0";
    document.getElementById("sidebar-id").style.display = "none";
    a = "none";
  } else if (a == "none") {
    document.getElementById("sidebar-id").style.width = "16.66666667%";
    document.getElementById("sidebar-id").style.display = "block";
    a = "block";
  }
  console.log(a);
}
