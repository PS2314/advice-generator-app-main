let num = document.querySelector(".adviceno");
let advice = document.querySelector(".advice");
let change = document.querySelector(".change");
//let bg1 = document.images(".image");

change.addEventListener("click", getAdvice);

//API function- Call

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  num.innerHTML = "ADVICE #" + data.slip.id;
  advice.innerHTML = '"' + data.slip.advice + '"';
}

//bg1.background("get", getImage);

// async function getImage() {
//   fetch(
//     "https://api.unsplash.com/search/photos?query=philippines&client_id=2BHRf_91BeuRTt7CDCE-_eA3l95wlZLWlyog-KQ2c2Y"
//   )
//     .then(function (response) {
//       if (response.status !== 200) {
//         console.log("There was a problem. Status code: " + response.status);
//         return;
//       }

//       response.json().then(function (data) {
//         document.getElementById("image").style.background =
//           "url(" + data["results"][0]["urls"]["regular"] + ")";
//       });
//     })
//     .catch(function (err) {
//       console.log(err + "404");
//     });
// }
