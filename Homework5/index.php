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
        echo "&lt;br>"
        var_dump($string);
        ?>
      </code>
      </pre>
      <h5>Output</h5>
      <?php
      $string  = 'This is a string';

      $output = print_r($string,true);
      echo $output;
      echo '<br>';
      var_dump($string);
      ?>
      <br>
      <h3>Question 5</h3>
      <!-- https://stackoverflow.com/questions/7394711/what-is-dynamic-typing -->
      <p>A language has dynamic typing when it does not associate values strictly with a specific type, but it is designed to "decide" what the type of a value should be at runtime, based on how you are attempting to use it.
        <br>
        Example:
        <br> </p>
        <pre><code>
          &lt;?php
          $number = '2';
          $product = $number * 2;
          echo $product;
          ?>
        </code></pre>
        <h5>Output</h5>
        <?php
        $number = '2';
        $product = $number * 2;
        echo $product;
         ?>
         <p>Advantages: Easy to understand and code due to readability. Disadvantages: Could lead to unwanted results when it decides incorrectly</p>
         <h3>Question 6</h3>
         <h5>What will this output?</h5>
         <pre> <code>
           &lt;?php
           $x = 1;
           var_dump($x);
           $y = $z = $x + $x;
           $x = "just no";
           var_dump($x, $y, $z);
           ?>
         </code> </pre>
         <h5>Expected Result</h5>
         <pre> <code>
           int(1)string(7)"just no"int(2)int(2)
         </code> </pre>
         <h5>Actual</h5>
         <?php
         $x = 1;
         var_dump($x);
         $y = $z = $x + $x;
         $x = "just no";
         var_dump($x, $y, $z);
         ?>
         <h3>Second set of Code</h3>
         <pre> <code>
           &lt;?php
           $even_numbers =[];
           $even_numbers[2] = 0;
           $even_numbers["Melissa"] = 1;
           $even_numbers[0] = 2;
           print_r($even_numbers);
           var_dump($even_numbers);
           var_dump(print_r($even_numbers, true));
           ?>
         </code> </pre>
         <h5>Expected Results</h5>
         <pre> <code>
           Array([0]=>2[2]=>0["Melissa"]=>1)array(3){[0]=>int(2)[2]=>int(0)["Melissa"]=>int(1)}Array([0]=>2[2]=>0["Melissa"]=>1)
         </code> </pre>
         <h5>Actual</h5>
         <?php
         $even_numbers =[];
         $even_numbers[2] = 0;
         $even_numbers["Melissa"] = 1;
         $even_numbers[0] = 2;
         print_r($even_numbers);
         var_dump($even_numbers);
         var_dump(print_r($even_numbers, true));
         ?>
    </div>
  </body>
</html>
