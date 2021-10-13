import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="APP">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Yongxu Wang, Boyuan Yang, Yufan Jinag
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}


export default App;
