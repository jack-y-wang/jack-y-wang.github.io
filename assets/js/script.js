// DECLARED
let task = {
  "Classes": {
    "img": "wdd.jpg",
    "url": "projects/classes",
    "descrip": "Classes I'm taking this fall are: CS 170 (Efficient Algorithms), CS 188 (Artifical Intelligence), CS 61C (Computer Architecture)"
  },
  "Teaching": {
    "img": "google.jpg",
    "url": "https://cs61a.org",
    "descrip": "In Spring 2019, I was a academic intern for CS 61A, the introductory cs course, helping students with problem solving strategies, python, and progamming fundamentals."
  },
  "HKN": {
    "img": "wdd.jpg",
    "url": "https://hkn.mu",
    "descrip": "Eta Kappa Nu is the EECS honors society, that works to improve the student community and experience at Berkeley. I'm currently an activites officer, creating and hosting social activities for members and candidates."
  },
  "SERES (SF Motors)": {
    "img": "wdd.jpg",
    "url": "https://www.driveseres.com",
    "descrip": "SERES is an electric vehicle start up company in San Jose. Summer 2018, I worked as a engineering intern designing eletric motor testing systems (dyno motors, motor dynos) in Catia v5"
  },
  // "Innovative Design": {
  // 	"img": "innod.jpg",
  // 	"url": "http://innovativedesign.club",
  // 	"descrip": "I'm a graphic designer at Innovative design, a student-run creative agency at UC Berkeley, where I do various design work for off-campus clients using my favorite Adobe Creative Cloud tools!"
  // }
}

/** Creates DOM structure for mobile responsiveness **/
let calculateActivities = function() {
    $("#together").hide();
    $("#mobile-activities").show()
    if (!$("#mobile-activities").text()) {
      Object.keys(task).forEach(function(tsk) {
        let t = task[tsk]
        let descrip = t.descrip;
        $("#mobile-activities").append('<div class="activity-card"><a href="' + t.url + '"target="_blank" class="card-title">' + tsk + '</a><div class="card-description short">' + descrip);
      })
    }
}

calculateActivities();

$(window).resize(function() {
  calculateActivities();
})

// Hovering
$("#tasks > a").hover(function() {

  let selectedTask = task[this.textContent];
  let image = $("#background-img img");
  let description = $("#description p");
  let newSrc = "assets/img/" + selectedTask.img

  description.text(selectedTask.descrip);
  description.removeClass("flash-class");
  $("#description").show()

  if (image.attr("src") != newSrc) {
    image.attr("src", newSrc)
    let newImage = image.clone();
    newImage.appendTo("#background-img")
    newImage.attr("src", newSrc);

    image.remove();
  }
}, function() {})

// PORTFOLIO
let oldText;
$(".coming-soon").hover(function() {
  oldText = $(this).text();
  $(this).text(oldText + " (Coming Soon!)");
}, function() {
  $(this).text(oldText);
})
