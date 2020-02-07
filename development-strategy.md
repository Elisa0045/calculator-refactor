# Calculator-refactor



## Steps Plan


| _Step Name_ | User Story | Changes in HTML | Changes in CSS |
| --- | --- | --- | --- |
| __DOM__ | As a student of Hack your Future I want to create the initial HTML code and identify the HTML objects with id's so that i can use them in javascript. | Writing the initial code adding a form, input box, output span, and the buttons. | Without changes. |
| __Listener__ | As a student of Hack your Future I create the listener, so that can add an event handler to an element in HTML or in the DOM.  | Without changes. | Without changes. |
| __Handler__ |As a student I create the handler, so that allows to extract the data from the boxes (box1+box2), process, and calculate.| I add the sources: listener, handler and logic. | Without changes. |
| __Logic__ | As a student I create the logic of mi javascript, so that allows to execute all the logic in the sense like functions, with all the characters and will be return the response. | I add the input type: number. | Without changes. |
| __Styling__ | As a student I add the CSS properties for layout the calculator.| I add some eds and classes for the CSS. | Styling the size inputs, layout the contents of the calculator, the text, the button, and the colors. |





## WireFrame

> [Link WireFrame](https://wireframe.cc/DgpTBK)


## DOM

| tag name | attributes | role |
| --- | --- | --- |
| Text input | id="box1" | First input number |
| Text input | id="box2" | Second input number |
| Tag name selector | id="operator" | Select the operations |
| Button | id="buttoncalc" | Calculate the operation |
| Span | id="result" | Show the result |

## Listener

| type | attached to | callback |
| --- | --- | --- |
| Click | id="buttoncalc" | "calculateHandler" |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| Function: calculate handler id="box1" id="box2" id="operator" | First value and second value, and operation type (add, minus, divide, multiply).  | Boolean. | Extract the data from the boxes (box1+box2), process, and calculate.  |



## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| Function doMath (operation, a, b). | _String:_ that will be inform of an invalid operation. _Number:_ that will be return de response of the operations (add, minus, divide, multiply) in a number.| Process the input value on the text fields, show the operations (add, minus, divide, multiply) and will return the value of the results, and that will be processing only the number characters, if the values are not numbers the operation will be invalid, and types a throw an error. |


## Styling

| class name | description | role |
| --- | --- | --- |(
| _Main-area_ |Container with all the general styling elements (main-styling). | CSS attributes and properties for layout and styling the calculator.  |
| _Buttoncalc_ |The button "calculate"  | CSS attributes and properties for layout and styling the button.  |
| _Operator_ |Selector for the operations (add, minus, divide, multiply) | CSS attributes and properties for layout and styling the selector.  |
| _Box input_ |Input box.| CSS attributes and properties for layout and styling the input boxes.  |
| _Box_ |Styling the padding in the container elements (box1 and box2) | CSS attributes and properties for layout and styling the boxes.  |
| _Result_ |Styling the padding of the container element | CSS attributes and properties for layout and styling the boxes.  |





