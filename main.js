chrome.app.runtime.onLaunched.addListener(function() {

   chrome.app.window.create('index.html', function(){

      console.log('The link was clicked.');
      /*render() {
         return (
           <body>
             <button id='learn'>Are you ready to learn?</button>
             <button onclick="NewTab()">
       </button>
             <script>
               function NewTab() {
                 window.open("file:///C:/Users/Ameer/Documents/Github/deltahacksapp/Delta.html", "_blank")
               }
             </script>
           </body>
         );
       }
*/
   });
   

});