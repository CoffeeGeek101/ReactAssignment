# ReactAssignment

The project has been done using raect, tailwindCSS and redux/RTK.
I have used tailwind as it comes with postCSS, which enable the various plugins and enhances cross browser compalibilty.

## 1. Counter

- I have add multiple background colors on each mouse click
- Dynamic '0' in front of count when the count is less than 10 or double digits

##  2. Passing the Data from component A to B and then updating

- I have used component A to render component B
- Redux has been used to have a global store
- The data has been passed a prop to component B, and on the B, I'm dispatching the action which will increment the data by 10
- Finally we are just rending the component A on the webpage, which renders the B

## 3. Boolean Button

- I have used useState hook to maintain the boolean state of the button
- ES6 string literals has been used to dynamically update the tailwind classses based on boolean value
