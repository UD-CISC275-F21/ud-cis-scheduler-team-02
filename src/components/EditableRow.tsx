import React, { ChangeEvent } from "react";
import { FormData } from "../Table";

interface EditableRowProp {
        editFormData: FormData;
        handleEditFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
        handleCancelClick: () => void;
}

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }: EditableRowProp) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required
                    placeholder="name"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="title"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="term"
                    name="term"
                    value={editFormData.term}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="credit"
                    name="language"
                    value={editFormData.language}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                                        Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;