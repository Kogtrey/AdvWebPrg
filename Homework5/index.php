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
        $sentence = $firstString.$nextString;
        echo $sentence;
        ?>

        &lt;?php
        $firstNum = '1';
        $nextNum = '3';
        $sum = $firstNum+$nextNum;
        echo $sum;
        ?>
      </code> </pre>
      <h5>Output</h5>
        <?php
        $firstString = 'I like ';
        $nextString = 'to run.';
        $sentence = $firstString.$nextString;
        echo $sentence;
        ?>

        <?php
        $firstNum = '1';
        $nextNum = '3';
        $sum = $firstNum+$nextNum;
        echo $sum;
        ?>

      <br>
      <h3>Question 2</h3>
      <p>The three ways to assign and initialize an array are listed below</p>
      <pre><code>
        &lt;?php
        $people = array(
        'people' => array('a'=> 'Jack','b' => 'John')
        'numbers' => array(1,2,3,4,5,6),
        'animals' => array('Dog', 5 => 'cat','mouse')
        );
        ?>

      </code>
      </pre>
      <br>
      <h3>Question 3</h3>
      <p>In order to store the value returned by print_r(), you need to add 'true' as the second argument.
      This argument tells the function wether or not to return a value <br>
      Example:
      <br>
      </p>
      <pre><code>
        &alt;?php
        $input = "Hello";
        $output = print_r($input,true);
        echo $output;
      </code>
      </pre>
      <h5>Output</h5>
      <?php
      $input = "Hello";
      $output = print_r($input,true);
      echo $output;
       ?>
      <br>
      <h3>Question 4</h3>
      <p>print_r will show human readable information about a variable. var_dump() will show structured information about one or more expressions.
        <br>
        Example:
        <br>
      </p>
      <pre> <code>
        &lt;?php
        $string  = 'This is a string';

        $output = print_r($string,true);
        echo $output;

        var_dump($string);
        ?>
      </code>
      </pre>
      <h5>Output</h5>
      <?php
      $string  = 'This is a string';

      $output = print_r($string,true);
      echo $output;

      var_dump($string);
      ?>
    </div>
  </body>
</html>
