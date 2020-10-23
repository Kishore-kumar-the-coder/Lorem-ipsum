const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut ornare lectus sit amet est placerat in. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Vivamus at augue eget arcu dictum. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Tincidunt id aliquet risus feugiat in. Non nisi est sit amet facilisis magna etiam. Mattis pellentesque id nibh tortor id. Leo in vitae turpis massa sed elementum tempus. Nibh tortor id aliquet lectus proin nibh. Netus et malesuada fames ac turpis egestas maecenas pharetra. Purus non enim praesent elementum facilisis leo vel fringilla. Velit scelerisque in dictum non consectetur a erat nam at. Urna et pharetra pharetra massa massa ultricies.",

  "Purus viverra accumsan in nisl nisi scelerisque eu. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nunc mattis enim ut tellus elementum sagittis vitae et. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Non odio euismod lacinia at quis risus sed vulputate odio. Egestas sed sed risus pretium quam. Et odio pellentesque diam volutpat commodo. Eu consequat ac felis donec et odio pellentesque diam volutpat. Sit amet risus nullam eget felis eget nunc lobortis mattis. Suspendisse interdum consectetur libero id faucibus. Odio eu feugiat pretium nibh ipsum consequat nisl vel.",

  "Faucibus vitae aliquet nec ullamcorper sit amet. Turpis massa sed elementum tempus egestas. Volutpat sed cras ornare arcu dui. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Euismod lacinia at quis risus sed vulputate odio ut. Urna cursus eget nunc scelerisque viverra mauris. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Diam maecenas ultricies mi eget mauris pharetra. Eget arcu dictum varius duis at consectetur lorem donec massa. Nulla at volutpat diam ut. Urna nunc id cursus metus aliquam eleifend mi in. Integer feugiat scelerisque varius morbi enim. Mauris cursus mattis molestie a iaculis at erat. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. In egestas erat imperdiet sed euismod nisi. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Ut lectus arcu bibendum at varius vel pharetra. Mauris a diam maecenas sed enim ut sem viverra aliquet. Porttitor rhoncus dolor purus non enim praesent elementum facilisis.",

  "In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Et leo duis ut diam quam nulla porttitor. Blandit massa enim nec dui nunc mattis enim ut. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Nunc consequat interdum varius sit. Accumsan lacus vel facilisis volutpat. Orci porta non pulvinar neque laoreet. Viverra mauris in aliquam sem. Feugiat pretium nibh ipsum consequat nisl vel. Id porta nibh venenatis cras sed. Sagittis vitae et leo duis. Quis hendrerit dolor magna eget est lorem. Commodo nulla facilisi nullam vehicula ipsum. Eget lorem dolor sed viverra. Sapien et ligula ullamcorper malesuada proin. Enim nunc faucibus a pellentesque sit amet. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. In eu mi bibendum neque egestas congue quisque egestas.",

  "Ut lectus arcu bibendum at varius vel. Leo in vitae turpis massa sed elementum tempus. Sit amet risus nullam eget. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Pellentesque habitant morbi tristique senectus et netus. A cras semper auctor neque vitae tempus quam pellentesque. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Odio euismod lacinia at quis risus sed. Id diam maecenas ultricies mi eget. Amet cursus sit amet dictum sit amet justo. Gravida arcu ac tortor dignissim convallis aenean et tortor. Tempus egestas sed sed risus.",

  "Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing elit ut aliquam purus sit amet. Purus semper eget duis at tellus at urna. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sit amet nisl purus in mollis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Sapien et ligula ullamcorper malesuada. Nunc scelerisque viverra mauris in aliquam. Nec sagittis aliquam malesuada bibendum. Ut venenatis tellus in metus vulputate eu scelerisque felis. Nisl suscipit adipiscing bibendum est ultricies integer. Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit ullamcorper dignissim cras tincidunt. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Tristique risus nec feugiat in fermentum posuere urna nec.",

  "Facilisi morbi tempus iaculis urna id volutpat lacus. Massa tincidunt dui ut ornare lectus sit amet est placerat. Elementum sagittis vitae et leo. Sit amet dictum sit amet justo donec enim diam vulputate. Vitae proin sagittis nisl rhoncus mattis. Aliquet risus feugiat in ante metus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Nisl purus in mollis nunc sed id semper. Nec feugiat in fermentum posuere urna nec. Dictumst vestibulum rhoncus est pellentesque elit. Viverra aliquet eget sit amet tellus. Senectus et netus et malesuada fames ac turpis. Sed odio morbi quis commodo odio aenean sed. Ut ornare lectus sit amet est placerat in. Suspendisse sed nisi lacus sed. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Massa eget egestas purus viverra.",

  "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Cras sed felis eget velit aliquet. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Nec feugiat in fermentum posuere urna. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Faucibus purus in massa tempor nec feugiat nisl pretium. At augue eget arcu dictum varius. Velit dignissim sodales ut eu sem integer. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Tortor dignissim convallis aenean et tortor at risus viverra. Tortor consequat id porta nibh venenatis cras sed. Tincidunt arcu non sodales neque. Suscipit adipiscing bibendum est ultricies integer quis auctor. At risus viverra adipiscing at in tellus integer feugiat. Est pellentesque elit ullamcorper dignissim cras.",

  "Donec adipiscing tristique risus nec feugiat in. Egestas fringilla phasellus faucibus scelerisque eleifend. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Id consectetur purus ut faucibus. Tristique senectus et netus et malesuada fames. Fringilla ut morbi tincidunt augue interdum velit euismod in. Sem integer vitae justo eget magna fermentum iaculis eu non. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Vitae tempus quam pellentesque nec nam aliquam. Aliquet enim tortor at auctor. Leo vel fringilla est ullamcorper eget nulla facilisi."
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");
const loremP = document.getElementById("article-p")
const copyBtn = document.querySelector("#copy-btn")

var kk = "True";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  console.log(value);

  if (isNaN(value) || value <= 0 || value > 9) {
    const r = Math.random()

    const k = r * 9
    const m = Math.floor(k)
    console.log(m)

    let tempText = text.slice(0, m);
    result.innerHTML = tempText;

    // result.innerHTML = "Please enter a value between 1 - 27"

    // '<p class="result">' + $; { text[random] } +'</p>'

  } else {
    let tempText = text.slice(0, value);
    result.innerHTML = tempText;





  }
});
console.log("this website was made by kishore kumar ")
console.log("bg-pic:hero patterns")
console.log("font:popinns")
console.log("thanks for visiting my website")
console.log("this website was made by kishore kumar at the age of 12(2020).")
console.log("hansum-txt:freecodecamp's video")
console.log("hansum ipsum ! ")




// i commented this becoz it dosent worked tried !

// function copyTxt() {

//   result.innerHTML.select();
//   result.innerHTML.setSelectionRange(0, 99999)
//   document.execCommand("copy");

// }



