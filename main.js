chrome.app.runtime.onLaunched.addListener(function() {

<<<<<<< HEAD
   chrome.app.window.create('index.html', {

=======
   chrome.app.window.create('index.html', function(){

      console.log('The link was clicked.');
>>>>>>> d16e896df346a1243c5dabc10b6983edf2f73267
      

   });


});