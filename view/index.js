Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@kowalkem 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


freeCodeCamp
/
boilerplate-project-exercisetracker
49
6187
 Code Issues 2 Pull requests 5 Actions Projects 0 Wiki Security Insights
boilerplate-project-exercisetracker/views/index.html
 System Initial commit from Gomix.
b344f20 on 18 Feb 2017
35 lines (32 sloc)  1.66 KB
  
<!DOCTYPE html>
<html>

   <head>
      <title>Exercise Tracker | Free Code Camp</title>
      <link rel="shortcut icon" href="https://cdn.hyperdev.com/us-east-1%3A52a203ff-088b-420f-81be-45bf559d01b1%2Ffavicon.ico" type="image/x-icon"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="style.css" rel="stylesheet" type="text/css">
   </head>

   <body>
      <div class="container">
         <h1>Exercise tracker</h1>
          <form action="/api/exercise/new-user" method="post">
            <h3>Create a New User</h3>
            <p><code>POST /api/exercise/new-user</code></p>
            <input id="uname" type="text" name="username" placeholder="username">
            <input type="submit" value="Submit">
          </form>
          <form action="/api/exercise/add" method="post">
            <h3>Add exercises</h3>
            <p><code>POST /api/exercise/add</code></p>
            <input id="uid" type="text" name="userId" placeholder="userId*">
            <input id="desc" type="text" name="description" placeholder="description*">
            <input id="dur" type="text" name="duration" placeholder="duration* (mins.)">
            <input id="dat" type="text" name="date" placeholder="date (yyyy-mm-dd)">
            <input type="submit" value="Submit">
          </form>
          <p><strong>GET users's exercise log: </strong><code>GET /api/exercise/log?{userId}[&amp;from][&amp;to][&amp;limit]</code></p>
          <p><strong>{ }</strong> = required, <strong>[ ]</strong> = optional</p>
          <p><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</p>
      </div>
   </body>

</html>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
