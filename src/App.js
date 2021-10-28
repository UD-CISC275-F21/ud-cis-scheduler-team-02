// App.js
import React from "react";
import "./App.css";

import Draggable from "react-draggable";
import { render } from "@testing-library/react";

class App extends React.Component {}
    
    render(){
        return (
            <div>
                <Draggable>
                    <div className="drag-wrapper">
                        <div>Boyuan Yang</div>
                        <div>Yongxu Wang</div>
                        <div>Yufan Jiang</div>
                    </div>
                </Draggable>

                <div className="container">
                    <div className="row row-cols-4">
                        <div className="col">
                            <button onClick={this.handleShow}>
                                Freshmen
                            </button>
                            <button>Freshmen Fall</button>
                            <button>Freshmen Spring</button>
                        </div>
                        <div className="col">
                            <button onClick={this.handleShow}>
                                Sophomore
                            </button>
                            <button>Freshmen Fall</button>
                            <button>Freshmen Spring</button>
                        </div>
                        <div className="col">
                            <button onClick={this.handleShow}> 
                                Junior
                            </button>
                            <button>Freshmen Fall</button>
                            <button>Freshmen Spring</button>
                        </div>
                        <div className="col">
                            <button onClick={this.handleShow}>
                                Senior
                            </button>
                            <button>Freshmen Fall</button>
                            <button>Freshmen Spring</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}

        
    



export default App;
