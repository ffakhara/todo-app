## Task 03 - Props and State.

We have split our app into different components and now it's time to see how the data flow through components.

Short for properties, props can best be defined as a way of passing data from component to component, basically from parent to child component.

State on the other hand, stores data about the component that can change over time. Change could come in the form of user events or system events such as response to user input or server requests. Working with a state’s component normally involves setting a component’s default state, accessing the current state and updating the state.

**TODO**

1. Please create a separate component for each todo and todone item.
2. Please use props to pass the data of each item from the parent component to the child.
3. Use state to define the initial state of your app component.

---

## Task 02 - Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference [here](https://reactjs.org/docs/react-component.html). Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

But we don't really care about props YET!. In this task we would like to organize our app and build our components. We will design our app, we will break it into components and we will start writing our first components.

**TODO**

1. Create a design of how your app will look. Your app should contain a navigation bar, some space for your todo input form and some space for the finished todos.
2. Implement the design into components.

---

## Task 01 - Hello World

Here we are. Our journey with React just started and we are about to learn the sh\*t out of it. We have our basic file structure set up, thanks to `create-react-app` and we will dig in to our first task.

**Story**
We will create a simple todo app. We will build all the functionalitis from scratch so the users can be able to add new todos, check and uncheck todos as done and delete them.

**TODO**:

In this task we would like to:

1. Explore the folder structure and the javascript files. What's the entry point of our app? What is this funky html called [JSX](https://reactjs.org/docs/introducing-jsx.html)?
2. Let's try to print Hello World to our app, instread of the default message from React.
3. Let's get rid of what we don't need like unused images.
4. I don't see any .scss files around. Let's add one.
