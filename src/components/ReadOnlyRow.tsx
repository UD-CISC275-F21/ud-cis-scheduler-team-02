/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
//import { Course } from "../Table";
import React, { Course }  from "../Table";

interface ReadOnlyRowProps {
    course: Course;
    handleDeleteClick: (id: string) => void;
}
const ReadOnlyRow = ({ course, handleDeleteClick }: ReadOnlyRowProps) => {
    return (
        <tr>
            <td>{course.name}</td>
            <td>{course.title}</td>
            <td>{course.term}</td>
            <td>{course.credit}</td>
            <td>
                <button type="button" onClick={() => handleDeleteClick(course.id)}>
                                    Drop
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;