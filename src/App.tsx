/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
// import { Dropdown } from "react-bootstrap";
import Scheduler from "./components/Scheduler";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Summary from "./components/Summary";
import logo from "./logo.png";


export interface Course {
    CourseName: string;
    Credit: number;
    Description: string;
}

export interface CourseList {
    name: string
    items: Course[]
}
const list = [
    { CourseName: "CISC106", Credit: 3, Description: "General Computer Science for Engineers" },
    { CourseName: "CISC108", Credit: 3, Description: "Introduction to Computer Science I" },
    { CourseName: "CISC181", Credit: 3, Description: "Introduction to Computer Science II" },
    { CourseName: "CISC210", Credit: 3, Description: "Introduction to Systems Programming" },
    { CourseName: "CISC220", Credit: 3, Description: "Data Structures" },
    { CourseName: "CISC260", Credit: 3, Description: "Machine Organization and Assembly Language" },
    { CourseName: "CISC275", Credit: 3, Description: "Introduction to Software Engineering" },
    { CourseName: "CISC303", Credit: 3, Description: "Automata Theory" },
    { CourseName: "CISC304", Credit: 3, Description: "Logic for Programming" },
    { CourseName: "CISC320", Credit: 3, Description: "Introduction to Algorithms" },
    { CourseName: "CISC355", Credit: 3, Description: "Computers, Ethics and Society" },
    { CourseName: "CISC361", Credit: 3, Description: "Operating Systems" },
    { CourseName: "CISC372", Credit: 3, Description: "Parallel Computing" },
    { CourseName: "CISC404", Credit: 3, Description: "Logic in Computer Science" },
    { CourseName: "CISC410", Credit: 3, Description: "Computational Mathematics I" },
    { CourseName: "CISC436", Credit: 3, Description: "Computational Biology & Bioinformatics" },
    { CourseName: "CISC437", Credit: 3, Description: "Database Systems" },
    { CourseName: "CISC442", Credit: 3, Description: "Introduction to Computer Vision" },
    { CourseName: "CISC449", Credit: 3, Description: "Topics in Computer Applications: Various Topics" },
    { CourseName: "CISC450", Credit: 3, Description: "Computer Networks I" },
    { CourseName: "CISC472", Credit: 3, Description: "Web Applications Security" },
    { CourseName: "CISC474", Credit: 3, Description: "Advanced Web Technologies" },
    { CourseName: "CISC475", Credit: 3, Description: "Advanced Software Engineering" },
    { CourseName: "CISC481", Credit: 3, Description: "Artificial Intelligence" },
    { CourseName: "CISC482", Credit: 3, Description: "Introduction to Human-Computer Interaction" },
    { CourseName: "CISC483", Credit: 3, Description: "Introduction to Data Mining" },
    { CourseName: "CISC484", Credit: 3, Description: "Introduction to Machine Learning" },
    { CourseName: "MATH210", Credit: 3, Description: "Discrete Mathematics I"},
    { CourseName: "MATH241", Credit: 4, Description: "Analytic Geometry and Calculus A"},
    { CourseName: "MATH242", Credit: 4, Description: "Analytic Geometry and Calculus B"},
    { CourseName: "MATH243", Credit: 4, Description: "Analytic Geometry and Calculus C"},
    { CourseName: "ENGL110", Credit: 3, Description: "Seminar in Composition"},
    { CourseName: "MATH205", Credit: 4, Description: "Statistical Methods"},
    { CourseName: "MATH350", Credit: 3, Description: "Probability Theory and Simulation Methods"},
    { CourseName: "CISC498", Credit: 3, Description: "Computer Science Senior Design Project I"},
    { CourseName: "CISC499", Credit: 3, Description: "Computer Science Senior Design Project II"},
    { CourseName: "PHYS207", Credit: 3, Description: "Fundamentals of Physics I"},
    { CourseName: "PHYS208", Credit: 3, Description: "Fundamentals of Physics II"},
    { CourseName: "CHEM103", Credit: 3, Description: "General Chemistry"},
    { CourseName: "CHEM104", Credit: 3, Description: "General Chemistry "},
    { CourseName: "BISC207", Credit: 4, Description: "Introductory Biology I"},
    { CourseName: "BISC208", Credit: 4, Description: "Introductory Biology II"}
];

function App(): JSX.Element {
    const [scheduler, setScheduler] = useState<{ [x: string]: CourseList; }>({
        "Courses": {
            name: "Courses",
            items: list
        },
        "First Year Fall": {
            name: "First Year Fall",
            items: []
        },
        "First Year Spring": {
            name: "First Year Spring",
            items: []
        },
        "Second Year Fall": {
            name: "Second Year Fall",
            items: []
        },
        "Second Year Spring": {
            name: "Second Year Spring",
            items: []
        },
        "Third Year Fall": {
            name: "Third Year Fall",
            items: []
        },
        "Third Year Spring": {
            name: "Third Year Spring",
            items: []
        },
        "Fourth Year Fall": {
            name: "Fourth Year Fall",
            items: []
        },
        "Fourth Year Spring": {
            name: "Fourth Year Spring",
            items: []
        }
    });
    return (
        <div className="APP">
            <header>
                UD CIS Scheduler
            </header>
            <img src={logo} alt="" />
            <p>
                Welcome to UD CIS Scheduler make by Yongxu Boyuan Yufan!
            </p>
            <p>
                You can asscess your each year plan or 4 year whole plan through homepage, you can also go to course search to find course information.
            </p>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/scheduler">Scheduler</Link>
                            </li>
                            <li>
                                <Link to="/preview">Preview</Link>
                            </li>
                            <li>
                                <a href="https://www.cis.udel.edu/academics/undergraduate-programs/bscs/">Common Plan</a>
                            </li>
                            
                        </ul>
                    </nav>

                    <Routes>

                        <Route path="/preview" element={<Summary scheduler={scheduler} />} />

                        <Route path="/scheduler" element={
                            <Scheduler scheduler={scheduler} setScheduler={setScheduler} />
                        }>
                        </Route>
                        <Route path="/" element={<Table></Table>} />
                    </Routes>
                </div>
            </Router >
            {/* <div className="btn-group">
                <button type="button" className="btn btn-primary">Help</button>
                <button type="button" className="btn btn-primary">About</button>
                <button type="button" className="btn btn-primary">Import file</button>
                <button type="button" className="btn btn-primary">Export file</button>
            </div> */}

            {/* <Dropdown>
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
            </div> */}
        </div >
    );
}
export default App;
