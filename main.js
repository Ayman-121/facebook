let listShower = document.querySelector("#nav-hider");

listShower.onclick = function ayman() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  document.body.appendChild(popup);

  let a1 = document.createElement("a");
  // a1.innerHTML = data[i].username
  popup.appendChild(a1);

  let a3 = document.createElement("a");
  a3.innerHTML = "See Your Profile";
  popup.appendChild(a3);

  let a4 = document.createElement("a");
  a4.innerHTML = "Nonfictions " + '<i class="fa-solid fa-bell"></i>';
  popup.appendChild(a4);

  let a2 = document.createElement("a");
  a2.innerHTML = "Help";
  popup.appendChild(a2);

  let a5 = document.createElement("a");
  a5.innerHTML = "Favorite";
  popup.appendChild(a5);

  let a6 = document.createElement("a");
  a6.innerHTML = "Delivery";
  popup.appendChild(a6);

  let a7 = document.createElement("a");
  a7.innerHTML = "Sign In OR Login";
  popup.appendChild(a7);

  a1.onclick = function () {
    popup.remove();
  };
  a2.onclick = function () {
    popup.remove();
  };
  a3.onclick = function () {
    popup.remove();
  };
  a4.onclick = function () {
    popup.remove();
  };
  a5.onclick = function () {
    popup.remove();
  };
  a6.onclick = function () {
    popup.remove();
  };
  a7.onclick = function () {
    popup.remove();
  };

  listShower.onclick = function () {
    popup.remove();
    listShower.onclick = function () {
      ayman();
    };
  };
};

// let landingPage = document.querySelector(".landing .container");

// let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

// setInterval(() => {
//   let randomNumber = Math.floor(Math.random() * imgs.length);
//   landingPage.style.backgroundImage = 'url("./imgs/' + imgs[randomNumber] + '")';
// }, 10000);

//
//




let req = new XMLHttpRequest();
req.open("GET", "Application_info.json")
req.send()
console.log(req)
req.onreadystatechange = function () {

  if (this.readyState === 4 && this.status === 200) {

    data = JSON.parse(this.responseText)
    console.log(data)

    let mainDiv = document.querySelector(".posts")

    let tall = data.length

    for (let i = 0; i < tall; i++) {

      let box = document.createElement("div")
      box.classList.add("post")
      mainDiv.appendChild(box)

      let text = document.createElement("div")
      text.classList.add("text")
      box.appendChild(text)

      let h2 = document.createElement("h2")
      h2.innerHTML = data[i].title
      text.appendChild(h2)

      let author = document.createElement("p")
      author.innerHTML = data[i].Name
      author.classList.add("author")
      text.appendChild(author)

      let date = document.createElement("p")
      date.innerHTML = ' <i class="fa-regular fa-calendar"></i> ' + data[i].time
      date.classList.add("date")
      text.appendChild(date)

      let disc = document.createElement("p")
      disc.innerHTML = data[i].discreption
      disc.classList.add("disc")
      text.appendChild(disc)

      let like = document.createElement("p")
      like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>' + data[i].likes
      like.classList.add("like")
      text.appendChild(like)

      like.onclick = function likeFun() {
        like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>' + data[i].likes++
        
        like.onclick = function likeFun() {
          like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>' + data[i].likes--
          
          like.onclick = function likeFun() {
            like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>' + data[i].likes++
            
            like.onclick = function likeFun() {
              like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>' + data[i].likes--
              
              like.onclick = function likeFun() {
                like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>' + data[i].likes++
                
                like.onclick = function likeFun() {
                  like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>' + data[i].likes--
                  
                  like.onclick = function likeFun() {
                    like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>' + data[i].likes++
                    
                    like.onclick = function likeFun() {
                      like.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>' + data[i].likes--
                      
                      like.onclick = function likeFun() {
                        like.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>' + data[i].likes++
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      let comment = document.createElement("p")
      comment.innerHTML = '<i class="fa-regular fa-comment"></i>' + data[i].comment
      comment.classList.add("comment")
      text.appendChild(comment)

      comment.onclick = function likeFun() {
        comment.innerHTML = '<i class="fa-solid fa-comment"></i>' + data[i].comment++
        
        comment.onclick = function likeFun() {
          comment.innerHTML = '<i class="fa-regular fa-comment"></i>' + data[i].comment--
          
          comment.onclick = function likeFun() {
            comment.innerHTML = '<i class="fa-solid fa-comment"></i>' + data[i].comment++
            
            comment.onclick = function likeFun() {
              comment.innerHTML = '<i class="fa-regular fa-comment"></i>' + data[i].comment--
              
              comment.onclick = function likeFun() {
                comment.innerHTML = '<i class="fa-solid fa-comment"></i>' + data[i].comment++
                
                comment.onclick = function likeFun() {
                  comment.innerHTML = '<i class="fa-regular fa-comment"></i>' + data[i].comment--
                  
                  comment.onclick = function likeFun() {
                    comment.innerHTML = '<i class="fa-solid fa-comment"></i>' + data[i].comment++
                    
                    comment.onclick = function likeFun() {
                      comment.innerHTML = '<i class="fa-regular fa-comment"></i>' + data[i].comment--
                      
                      comment.onclick = function likeFun() {
                        comment.innerHTML = '<i class="fa-solid fa-comment"></i>' + data[i].comment++
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      let share = document.createElement("p")
      share.innerHTML = '<i class="fa-solid fa-share"></i>' + data[i].share
      share.classList.add("share")
      text.appendChild(share)
    }
  }
}





// let footer = document.createElement("div")
// footer.classList.add("footer")
// document.body.appendChild(footer)

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// show Testimonials <[-?>

// let myFirstBox = document.querySelector(".testimonials .first-box");
// let mySecondBox = document.querySelector(".testimonials .second-box");
// let myThirdBox = document.querySelector(".testimonials .third-box");
// let myAllBoxes = document.querySelectorAll(".testimonials .box");

// myArray = [myFirstBox, mySecondBox, myThirdBox];

// function test() {
//   myFirstBox.style.display = "none";
//   mySecondBox.style.display = "none";
//   myThirdBox.style.display = "none";
//   let our = Math.floor(Math.random() * myAllBoxes.length);
//   let value = (myArray[our].style.display = "grid");

//   let dot1 = document.querySelector(`.testimonials #one`);
//   let dot2 = document.querySelector(`.testimonials #second`);
//   let dot3 = document.querySelector(`.testimonials #third`);

//   if (our === 0) {
//     dot1.style.cssText = "opacity:1";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 1) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:1";
//     dot3.style.cssText = "opacity:0.3";
//   } else if (our === 2) {
//     dot1.style.cssText = "opacity:0.3";
//     dot2.style.cssText = "opacity:0.3";
//     dot3.style.cssText = "opacity:1";
//   }
// }
// setTimeout(test, 0);
