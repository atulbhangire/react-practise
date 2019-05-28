
const data = {
    heading: "Visibility Toggle",
    para: "Test text"
};

let isVisible = false;
const toggleData = () => {
    isVisible = !isVisible;
    renderFunction();    
}

const appRoot = document.getElementById("app");

const renderFunction = function(){
    const template = (
        <div>
            <button onClick={toggleData}>{(isVisible) ? "Hide Details" : "Show Details"}</button>
            {(isVisible) && <p>{data.para}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderFunction();

