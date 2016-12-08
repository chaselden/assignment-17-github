// console.log('wired up!')
console.log($);
var appSelector = document.querySelector("#app-container")
console.log('wired up!');

 var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}



    var columnLeft =  function (profileColumn){
      $.getJSON("https://api.github.com/users/chaselden?" + myApiSecret)
         .then(function(returnData){

              var pageObj = returnData
              var profileColumn = document.querySelector(".profile-col")

              var columnStrL = ''

               columnStrL +=       '<img class="media-object" src="' + returnData.avatar_url + '" alt="...">'
               columnStrL +=       '</div>'
               columnStrL +=       '<div class="user-info">'
               columnStrL +=       '<h1>' + returnData.name + '</h1>'
               columnStrL +=       '<h2>' + returnData.login + '</h2>'
               columnStrL +=       '<p>' + returnData.bio + '</p>'
               columnStrL +=       '<p>' + returnData.blog + "</p>"
               columnStrL +=       '</div>'
               columnStrL +=       '<div> <button type="button" class="btn btn-primary">Follow</button> </div>'
               columnStrL +=       '<a href="#"> Block or Report User</a>'
               columnStrL +=       '<hr>'
               columnStrL +=       '<p>' + returnData.company + "</p>"
               columnStrL +=       '<p>' + '<i class="fa fa-map-marker" aria-hidden="true"></i>'+ ' ' + returnData.location + "</p>"
               columnStrL +=       '<p>' + '<i class="fa fa-envelope-o" aria-hidden="true"></i>' + ' ' + '<a href="#">'+ returnData.email + '</a>' + "</p>"
               columnStrL +=       '<p>' + '<i class="fa fa-link" aria-hidden="true"></i>' + ' ' + '<a href="#">' + returnData.blog + '</a>'+ "</p>"
               columnStrL +=       '<p>' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + ' ' +returnData.created_at + "</p>"

               profileColumn.innerHTML = columnStrL

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
          var repoStr =    '<ul>' + repoObj.name + '</ul>'
          repoStr +=     '<hr>'
          repoInfoEl.innerHTML += repoStr

       })
   })
}
var searchButton = document.querySelector('button')
var inputBox = document.querySelector('input')

var controlRouter = function(evt){
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
controlRouter()
window.addEventListener('hashchange', controlRouter)
