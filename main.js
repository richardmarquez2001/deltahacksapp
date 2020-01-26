chrome.app.runtime.onLaunched.addListener(function() {

   chrome.app.window.create('index.html', {
      console.log('The link was clicked.');
      

   });


});