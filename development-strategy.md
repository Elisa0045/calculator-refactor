# Calculator-refactor



## Steps Plan


| _Step Name_ | User Story | Changes in HTML | Changes in CSS |
| --- | --- | --- | --- |
| __DOM__ | As a student of Hack your Future I want to create the initial HTML code and identify the HTML objects with id's so that i can use them in javascript. | Writing the initial code adding a form, input box, output span, and the buttons. | Without changes. |
| __Listener__ | As a student of Hack your Future I create the listener, so that can add an event handler to an element in HTML or in the DOM.  | Without changes. | Without changes. |
| __Handler__ |As a student I create the handler, so that allows to extract the data from the boxes (box1+box2), process, and calculate.| I add the sources: listener, handler and logic. | Without changes. |


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


## Styling

| class name | description | role |
| --- | --- | --- |
| | | |




## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| | | | |

