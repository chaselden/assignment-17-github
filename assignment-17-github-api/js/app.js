console.log($)
console.log(wired up!);
// var appContainer = document.querySelector('#app-container')
if( typeof myApiSecret === 'undefined' ){  var myApiSecret = ''  }
var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}
if( typeof myApiSecret === 'undefined' ){  var myApiSecret = ''  }

var leftColumn  = document.querySelector('.left-column')

var rightColumn = document.querySelector('.right-column')


var fetchAndRender/----------/ = function(){
   $.getJSON("https://api.github.com/users/matthiasak?"+myApiSecret).then( function(returnData){
          console.log(returnData)

          var leftColStr = '<h2 class="bg-danger">Annual <span class="text-danger">Love</span> Count in <u class="bg-warning">'+  +'</u></h2>'

          forEach(returnData.results, function(eachResult){
               leftColStr  += "<h4>" + eachResult./----/ + "---- <span class='text-danger'>" + eachResult.count +"</span></h4>"
               leftColStr  += "<p class='text-danger'>"

               for(var i = 0; i < eachResult.count; i++){
                   leftColStr += "<i class=''></i> "
               }

               leftColStr  += "<br/><br/></p>"


          })

          /------/El.innerHTML = leftColStr

       })
}



var fetchAndRender/----------/Data = function(/-------/){
   $.getJSON("https://api.github.com/users/matthiasak/repos?"+myApiSecret)then( function( returnData ){
            //Inspecting the returned data
            // console.log(returnData)

            var rightColHTMLStr = '<h2 class="bg-success">/---------/</h2>'

            forEach(returnData.results, function(congressPersonResult){
               // console.log(congressPersonResult)
               rightColHTMLStr +=  '<div class="media">'
               rightColHTMLStr +=  '<div class="media-left">'
               rightColHTMLStr +=     '<img class="media-object" src="/-------/' + /-------------/ + '/-----------/" alt="...">'

               rightColHTMLStr +=   '</div>'
               rightColHTMLStr +=   '<div class="media-body">'
               rightColHTMLStr +=      '<h4 class="media-heading">' +/-----------/ + " " /-----------/ + '</h4>'

               rightColHTMLStr +=      '<h5 class="bg-warning">' + /-----------/   + '</h5>'

               rightColHTMLStr +=   '</div>'

               rightColHTMLStr +='</div>'

            })

            /---------/El.innerHTML = rightColHTMLStr
         }) //Promise Handler
}
// ---------------CONTROLLER DECLARATION------------//

var controllerRouter = function(){
   var /-------/ = window.location.hash.slice(1)

   console.log(window.location.hash)
   console.log(/-------/)

   if ( currentState.length === 0 ){
         fetchAndRender/--------/('SC')
         fetchAndRender/--------/('SC')
         return
   }

   fetchAndRender/------------/(/---------/)
   fetchAndRender/---------/(/---------/)

}

// -----------CONTROLLER EXECUTION-----------//

// window.addEventListener('hashchange', controllerRouter )
// controllerRouter()
