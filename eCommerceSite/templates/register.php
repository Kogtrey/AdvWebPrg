<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>register</title>
  </head>
  <body>

    <?php
      $username = $email = $password = "";
      $valid = true;
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(empty($_POST["uname"])){
          $error_username = "Username required";
          $valid = false;
        }else{
          $username = check_data($_POST["uname"]);
        }

        if(empty($_POST["email"])){
          $error_email = "Email required";
          $valid = false;
        }else{
          $email = check_data($_POST["email"]);
        }

        if(empty($_POST["password"])){
          $error_password = "Password required";
          $valid = false;
        }else{
          $password = check_data($_POST["password"]);
        }

      }

      function check_data($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }

      if($valid){
        $host = "webdev.cs.umt.edu";
        $dbuser = "kn106816";
        $dbpass = "";
        $dbname = "kn106816";

        $conn = mysqli_connect($host,$dbuser,$dbpass,$dbname)
          or die('Could not connect');
        echo "Connected successfully <br>";

        $sql = "INSERT INTO auth (Username,Email,password)VALUES ('$username','$email','$password')";

        mysqli_query($conn,$sql);

        mysqli_close($conn);
      }
     ?>
     <span class="invalid">* required</span>
    <form method="post"action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <label for="uname">Username:</label><br>
      <input type="text"id="uname"name="uname"placeholder="Username..."><br>
      <span class="invalid">* <?php echo $error_username; ?></span>

      <label for="email">Email:</label><br>
      <input type="email"id="email"name="email"placeholder="Email..."><br>
      <span class="invalid">* <?php echo $error_email; ?></span>

      <label for="password">Password:</label><br>
      <input type="password"id="pass"name="password"placeholder="Password..."><br>
      <span class="invalid">* <?php echo $error_password; ?></span>

      <input type="submit" name="submit" value="Submit">
    </form>


  </body>
</html>
