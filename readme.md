README Document for Calculator Project:

About Project: My first project using HTML, SCSS and Javascript all together. Performs basic math operators on numbers and displays the equations and answers. First time use of Bootstrap used for the layout of the calculator body. 

Build: Built on VSCode, using HTMl, SCSS and Javascript files. Bootstrap library and npm-cypress used.
  - npm: in terminal, under folder directory the following is performed: 
    1. 'npm init'
    2. 'npm install cypress --save-dev'

Functionality:
** For use of only two numbers as parameters **

GENERAL USE: click number button, followed by math operator button, followed by number button and then equals button to submit. The formed equation with the answer will be displayed on line above where each input was displayed.

** Math operators included: addition, subtraction, multiplication, division and to-the-power of **
** Includes: Decimal input for a number and input for the previously calculated answer (Ans) **
** Includes: All Clear (AC) button to clear display and calculator history **
** Includes: Delete button to delete last inputted number/input character from main display **
** Includes: Submit/equals button which executes most recent equation **

Testing: The file: calculator.spec.js contains e2e testing for calculator performance.
To Test:
1. in terminal, enter: 'npm run e2e'
2. Window will appear with 'INTEGRATION TESTS' foler. Click 'run 1..' to run tests
3. A new window should appear in browser with calculator in window. Tests should be running on screen.



