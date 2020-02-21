<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Homework 5</title>
    <link rel="stylesheet" href="./css/master.css">
  </head>
  <body>
    <div class="header">
      <h1>Homework 5 PHP questions</h1>
    </div>
    <div class="content">
      <h3>Question 1</h3>
      <p>'.' operator will concatenate the strings. '+' will convert the argument into numbers and then add them
      '.' converts the argument into strings and then joins them.</p>

      <pre><code>
        &lt;?php 
        $firstString = 'I like ';
        $nextString = 'to run.';
        $sentence = $firstString.nextString;
        echo $sentence
        ?>

        &lt;?php
        $firstNum = '1';
        $nextNum = '3';
        $sum = $firstNum+nextNum;
        echo $sum
        ?>
      </code> </pre>
      <h5>Output</h5>
        <?php
        $firstString = 'I like ';
        $nextString = 'to run.';
        $sentence = $firstString.nextString;
        echo $sentence;
        ?>

        <?php
        $firstNum = '1';
        $nextNum = '3';
        $sum = $firstNum+nextNum;
        echo $sum;
        ?>

      <br>
      <h3>Question 2</h3>
      <br>
      <h3>Question 3</h3>
      <br>
      <h3>Question 4</h3>
    </div>
  </body>
</html>
