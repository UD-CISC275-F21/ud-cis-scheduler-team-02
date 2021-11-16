/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { Form, Button, Row, Col } from "react-bootstrap";
import { CourseList, Course } from "../App";


interface SchedulerProp {
    scheduler: { [x: string]: CourseList; }
    setScheduler: React.Dispatch<React.SetStateAction<{ [x: string]: CourseList; }>>
}



const Scheduler = ({ scheduler, setScheduler }: SchedulerProp): JSX.Element => {

    // const courseList: CourseList[] = ;
    console.log(scheduler);
    const [semesterName, setSemesterName] = useState<string>("");
    const [columns, setColumns] = useState<{ [x: string]: CourseList; }>(scheduler);

    useEffect(() => {
        // console.log(columns);
        setScheduler(columns);
    }, [columns]);


    const onDragEnd = (result: DropResult, columns: { [x: string]: CourseList; }, setColumns: React.Dispatch<React.SetStateAction<{ [x: string]: CourseList; }>>) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };


    const addSemester = () => {
        console.log(columns);
        const copy = { ...columns };
        if (semesterName === "" || copy[semesterName])
            return;

        copy[semesterName] = ({
            name: semesterName,
            items: []
        });
        setColumns(copy);
        setSemesterName("");
        return;
    };

    const removeSemester = (name: string) => {
        const copy = { ...columns };
        copy["Courses"].items = [...copy["Courses"].items, ...copy[name].items];
        delete copy[name];
        setColumns(copy);
    };


    return <div className="p-3 ">
        <Row>
            <Col md="3">
                <Form.Group className="mb-3" >
                    <Form.Label>Add Semester</Form.Label>
                    <Form.Control type="text" className="mb-2" value={semesterName} onChange={(e) => setSemesterName((e.target as HTMLInputElement).value)} placeholder="Enter Semester" />
                    <Button onClick={addSemester}>Add</Button>
                </Form.Group>
            </Col>
        </Row>

        <div style={{ display: "flex", justifyContent: "left", height: "100%" }}>

            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column]) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                // color: "white",
                                border: "1px solid darkgrey",
                                background: "lightgrey",
                                // padding: "5px",
                                margin: "0px 10px",
                            }}
                            key={columnId}
                        >
                            <div style={{
                                padding: "5px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}> <div className="fs-6">{column.name}</div>
                                {column.name !== "Courses" && <div
                                    style={{
                                        padding: "2px",
                                        cursor: "pointer",
                                        // border: "1px solid darkgrey",
                                        // background: "darkgrey"
                                    }}
                                    onClick={() => removeSemester(column.name)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg></div>}
                            </div>
                            <div style={{ margin: 8 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    // padding: 4,
                                                    width: 150,
                                                    // height: 500,
                                                    // overflowY: "scroll"
                                                }}
                                            >
                                                {column.items.map((item: Course, index: number) => {
                                                    return (
                                                        <Draggable
                                                            key={item.CourseName}
                                                            draggableId={item.CourseName}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#456C86",
                                                                            color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        <h5 style={{
                                                                            fontSize: "12px"
                                                                        }}>{item.CourseName}</h5>
                                                                        <div style={{
                                                                            fontSize: "12px"
                                                                        }}>Credit: {item.Credit}</div>
                                                                        <div style={{
                                                                            fontSize: "11px"
                                                                        }}>{item.Description}</div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    </div>
    ;
};

export default Scheduler;
