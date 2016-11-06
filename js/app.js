// console.log('wired up!')
console.log($);
var appSelector = document.querySelector("#app-container")
// var proSearchSelector = document.querySelector('.prof-search')
console.log('wired up!');

 var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}



  // var columnLeft = function(pageObj){
    var columnLeft =  function (profileColumn){
      $.getJSON("https://api.github.com/users/chaselden?" + myApiSecret)
         .then(function(returnData){
              console.log(returnData);
               var pageObj = returnData
              var profileColumn = document.querySelector(".profile-col")
              console.log('columnLeft')
              var columnStrL = ''
                columnStrL +=       '<img src="'+ pageObj.avatar_url +'" class= "avatar rounded-2" alt=""/>'
                columnStrL +=       '<h1>' + pageObj.name + '</h1>'
                columnStrL +=       '<h3>' + pageObj.company + '</h3>'
                columnStrL +=       '<h3>' + pageObj.blog + '</h3>'
                columnStrL +=       '<h3>' + pageObj.location + '</h3>'
                columnStrL +=       '<h3>' + pageObj.email + '/h3>'
                columnStrL +=       '<h3>' + pageObj.bio + '/h3>'

                profileColumn.innerHTML = columnStrL

                // console.log()
      })
   }


 var fetchAndRenderRepoData = function(userProfile){
   var userReposUrl = "https://api.github.com/users/" + userProfile + '/repos?' +  myApiSecret

   $.getJSON(userReposUrl)
      .then(function(returnData){
         var repoInfoEl = document.querySelector('.repo-col')

        //  console.log(returnData);
         var repoArr = returnData
         forEach(repoArr, function(repoObj) {
          //  console.log(repoObj);
          var columnStrR =    '<li>' + repoObj.name + '</li>'
          //  console.log(repoInfoEl);
          repoInfoEl.innerHTML += columnStrR

       })
   })
}

// var columnLeft =  function (profileColumn){
//   $.getJSON("https:/api.github.com/users/chaselden" + profileColumn + "?" + myApiSecret)
//        .then(columnLeft)

// }
// var columnRight =  function (repoArr){
//   $.getJSON("https:/api.github.com/users/" + '/repos' + "?" +  myApiSecret).then(columnRight)
//
// }

var controlRouter = function(){
   var currentProfile = window.location.hash.slice(1)

   if(currentProfile.length === 0){
      columnLeft('chaselden')
      fetchAndRenderRepoData('chaselden')
      return
   }

     columnLeft(currentProfile)
     fetchAndRenderRepoData(currentProfile)

}


// controlRouter()
window.addEventListener('hashchange', controlRouter)
controlRouter()
