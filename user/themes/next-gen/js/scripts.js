var jq321 = $.noConflict(true);

(function($) {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".nav").removeClass("active");
    }
  });
}(jq321));

(function($) {
  $(document).ready(function() {
    var icons = ["fa-heart", "fa-code", "fa-cogs", "fa-coffee", "fa-magic", "fa-code-fork", "fa-fire", "fa-wifi", "fa-bolt", "fa-flask", "fa-paper-plane", "fa-terminal", "fa-bug"];
    var counter = Math.floor(Math.random() * icons.length);
    $("#madeby-icon").addClass(icons[counter]);
    setInterval(cycle, 1000);
    
    function cycle() {
      $("#madeby-icon").removeClass(icons[counter]);
      counter = Math.floor(Math.random() * icons.length);
      $("#madeby-icon").addClass(icons[counter]);    
    }
  });
}(jq321));

// fix floating label bug
(function($) {
  var selector = '.input-field label';
  var input = '.input-field input'

  $(input).focus(function() {
    $(this).parents('.form-data ').siblings('.form-label ').children('label').addClass('focused-input-blue');
    $(this).parents('.form-data ').siblings('.form-label ').children('label').addClass('active');
    
  });
  $(input).blur(function() {
    $(this).parents('.form-data ').siblings('.form-label ').children('label').removeClass('focused-input-blue');
    if ($(this).val().length < 1) {
      $(this).parents('.form-data ').siblings('.form-label ').children('label').removeClass('active');
    }  
  });
}(jq321));

// nav onclick 
(function($) {
  $(document).ready(function() {
    $('.parent-link').click(function() {
      $('.sub-nav').toggleClass('visible');
    });
  });
}(jq321));


// form change checkbox type
(function($) {
  $(document).ready(function() {
  $(":checkbox").addClass("filled-in");
});
}(jq321));


//  about.html
(function($) {
  $(document).ready(function() {
    $('.collapsible').collapsible();
  });
}(jq321));

// become-sponsor-2.html
(function($) {
  $(document).ready(function() {
     $('select').material_select();
  });
}(jq321));


// about.html pagination 
var num = 1;
showDiv(num);

function incr(n) {
  showDiv(num += n);
}

function curr(n) {
  showDiv(num = n);
}

function showDiv(n) {
  var gallery = document.getElementsByClassName("slider-image");
  var indicator = document.getElementsByClassName("img-num");
  if (n > gallery.length) {
    num = 1;
  } else if (n < 1) {
    num = gallery.length;
  }
  for (var i = 0; i < gallery.length; i++) {
      if (i == num-1) {
        gallery[i].style.display = "block";
      }
      else { 
        gallery[i].style.display = "none";
      }
  }
   for (var i = 0; i < indicator.length; i++) {
      indicator[i].classList.remove("active");
  }
    indicator[num-1].className += " active";

  // for (i = 0; i < indicator.length; i++) {
  //   indicator[i].className += "active";
  // }

  // indicator[n-1].className += "active";
}
// about.html 
  new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#40c4ff",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#aeea00",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Population growth (millions)',
        fontColor: "white"
      },
      legend: {
        labels: {
          fontColor: "white"
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white"
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: "white"
          }
        }]
      }
    }
});

// about.html

// var map;
// function initMap() {
// map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: -34.397, lng: 150.644},
//   zoom: 8
// });
// }


