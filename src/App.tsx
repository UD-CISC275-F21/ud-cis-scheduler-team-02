import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Dropdown} from "react-bootstrap";

=======
import "./TABLE/Table";
>>>>>>> fe7c2d360643d24f6f36a8da1554ecce96f7ccff

function App(): JSX.Element {
    return (
        <div className="APP">
            <header>
                UD CIS Scheduler
<<<<<<< HEAD
            </header>
            <p>
                Welcome to UD CIS Scheduler make by Yongxu Boyuan Yufan! 
            </p>
            <p>
                You can asscess your each year plan or 4 year whole plan through homepage, you can also go to course search to find course information.
            </p>
            <div className="btn-group">
                <button type="button" className="btn btn-primary">Help</button>
                <button type="button" className="btn btn-primary">About</button>
                <button type="button" className="btn btn-primary">Import file</button>
                <button type="button" className="btn btn-primary">Export file</button>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Freshmen
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><button>Freshmen Fall</button></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><button>Freshmen Spring</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sophomore
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><button>Sophomore Fall</button></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><button>Sophomore Spring</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Junior
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><button>Junior Fall</button></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><button>Junior Spring</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Senior
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><button>Senior Fall</button></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><button>Senior Spring</button></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <button type="button" className="btn btn-primary">4 Year Plan</button>
            </div>
            <div>
                <button type="button" className="btn btn-primary">Course Search</button>
            </div>
        </div>
    );
}
=======
                <h1>CISC 275 Final Project</h1>
                <p>Yongxu Wang, Yufan Jiang, Boyuan Yang</p>
            </header>

            
        </div>
    );
}

>>>>>>> fe7c2d360643d24f6f36a8da1554ecce96f7ccff
export default App;