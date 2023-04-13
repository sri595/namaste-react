/* <div id="parent">
 <div id="child1">
    <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h1>

 </div>
 <div id="child2">
    <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h1>

 </div>

</div> 
*/


const parent = React.createElement("div",
    { id: "parent" }, [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I am H1 Tag"), React.createElement("h2", {}, "I am H2 Tag")]

    ), React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am H1 Tag of child 2"), React.createElement("h2", {}, "I am H2 Tag child 2")]

    )])


//const heading = React.createElement("h1",
//{id:"heading"},"Hello World From React APP.JS");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);