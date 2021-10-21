// App.js
import React from "react";
import "./App.css";

import Draggable from "react-draggable";

class App extends React.Component {
    render() {
        return (
            <Draggable>
                <div className="drag-wrapper">
                    <div>Boyuan Yang</div>
                    <div>Yongxu Wang</div>
                    <div>Yufan Jiang</div>
                </div>
            </Draggable>

            
            
        );
    }

    
}

export default App;
