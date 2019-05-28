const app = {
    name: "Atul",
    options: []
};

const formSubmitMethod = function(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    }
}

const removeAll = function(){
    app.options.length = 0;
    renderFunction();
}

const appRoot = document.getElementById("app");

const renderFunction = function() {
    const template = (
        <div>
            <h1>{app.name}</h1>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>

            {/* Arrays in JSX */}
            <ol>
                {/*(Set key for each item of options)*/}
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={formSubmitMethod}>
                <input type="text" name="option" />
                <button>Add</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderFunction();
