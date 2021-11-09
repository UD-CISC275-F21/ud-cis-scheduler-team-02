/* eslint-disable react/jsx-key */
import React, { useState, Fragment, FC, ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import data from "./coursePool.json";

export interface Course {
        id: string;
        name: string;
        title: string;
        term: string;
        credit: string;
}

export interface FormData {
        name: string;
        title: string;
        term: string;
        credit: string;
}

const Table: FC = () => {
    const [ courses, setCourses ] = useState<Course[]>(data);
    const [ addFormData, setAddFormData ] = useState<FormData>({
        name: "",
        title: "",
        term: "",
        credit: ""
    });

    const [ editFormData, setEditFormData ] = useState<FormData>({
        name: "",
        title: "",
        term: "",
        credit: ""
    });

    const [ editCourseId, setEditCourseId ] = useState("");

    const handleAddFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        if (fieldName) {
            const newFormData = { ...addFormData, [fieldName]: fieldValue };
            setAddFormData(newFormData);
        }
    };

    const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        if (fieldName) {
            const newFormData = { ...editFormData, [fieldName]: fieldValue };
            setEditFormData(newFormData);
        }
    };

    const handleAddFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newCourse = {
            id: nanoid(),
            name: addFormData.name,
            title: addFormData.title,
            term: addFormData.term,
            language: addFormData.language
        };

        const newContacts = [...courses, newCourse];
        setCourses(newContacts);
    };

    const handleEditFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const editedCourse = {
            id: editCourseId,
            name: editFormData.name,
            title: editFormData.title,
            term: editFormData.term,
            language: editFormData.language
        };

        const newContacts = [...courses];

        const index = courses.findIndex((contact) => contact.id === editCourseId);
        if (index) {
            newContacts[index] = editedCourse;
            setCourses(newContacts);
            setEditCourseId("");
        }
    };

    /*const handleEditClick = (event: Event, contact: Course) => {
        event.preventDefault();
        setEditCourseId(contact.id);

        const formValues = {
            name: contact.name,
            title: contact.title,
            term: contact.term,
            language: contact.language
            credit: contact.credit
        };

        setEditFormData(formValues);
    };
    */

    const handleCancelClick = () => {
        setEditCourseId("");
    };

    const handleDeleteClick = (contactId: string) => {
        const newCourses = [...courses];

        const index = courses.findIndex((contact) => contact.id === contactId);

        newCourses.splice(index, 1);

        setCourses(newCourses);
    };

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Term</th>
                            <th>Language</th>
                            <th>credit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        
                        {courses.map((contact) => 
                            <Fragment>
                                {editCourseId === contact.id ? 
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                    :
                                   <ReadOnlyRow
                                        course={contact}
                                        //handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                }
                            </Fragment>






                        )}
                    </tbody>
                </table>
            </form>

            <h1>Add a Course</h1>
            <h3>--for developer use only</h3>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="name"
                    required

                    placeholder="enter course name"

                    placeholder="course id"

                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="title"
                    required

                    placeholder="enter a course id"

                    placeholder="course title"

                    onChange={handleAddFormChange}
                />
                <input type="text" name="term" required placeholder="enter a term" onChange={handleAddFormChange} />
                <input
                    type="language"
                    name="language"
                    required
                    placeholder="enter type language"
                  
                    type="credit"
                    name="credit"
                    required
                    placeholder="enter type credit"
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Table;