chrome.app.runtime.onLaunched.addListener(function() {

   chrome.app.window.create('index.html', function(){

      console.log('The link was clicked.');
      

   });


});