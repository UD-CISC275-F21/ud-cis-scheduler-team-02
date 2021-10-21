import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <p>Yongxu Wang, Boyuan Yang, Yufan Jiang</p>
            </header>
            <button>Freshman</button>
            <button>Sophermore</button>
            <button>Junior</button>
            <button>Senior</button>
            <button>Add a semester</button>

        </div>
    );
}
export default App;