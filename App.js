import React from "react";
import ReactDOM from "react-dom/client";

/* 
    <h1 id="heading">Namaste from React</h1>
*/

// const headingReact = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingReact);

//========================================================================================================================================

/* 
 <div id="parent">
  <div id="child">
    <h1>I am the h1 tag</h1>
    <h2>I am the h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I am the h1 tag</h1>
    <h2>I am the h2 tag</h2>
  </div>
 </div>;
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "c1" }, [
//     React.createElement("h1", { key: "c11" }, "I am the h1 tag"),
//     React.createElement("h2", { key: "c12" }, "I am the h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "c2" }, [
//     React.createElement("h1", { key: "c21" }, "I am the h1 tag"),
//     React.createElement("h2", { key: "c22" }, "I am the h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//========================================================================================================================================

// JSX (Transpiled before it reaches to js) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElements-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste from React</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//========================================================================================================================================

//Functional Component

const Title = () => {
  return <h1 id="title">Namaste from React Title</h1>;
};

const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">Namaste from React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
