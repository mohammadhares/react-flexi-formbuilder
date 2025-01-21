import { useState } from "react";
import { FieldConfig } from "../../../type"
import { DisplayIcon, toBool } from "../../util/Utility";

type FileFieldProps = {
    field: FieldConfig & { id: number };
    onRemoveField: (id: number) => void;
    onEditField: (id: number, updatedField: Partial<FieldConfig>) => void;
};

const FileElement = ({ field, onRemoveField, onEditField }: FileFieldProps) => {
    const [edit, setEdit] = useState(false);
    const [newOption, setNewOption] = useState("");
    const fileExtensions = [".jpg", ".png", ".pdf", ".doc", ".docx"]; // Predefined extensions

    const handleAddOption = () => {
        if (newOption && !field.options?.includes(newOption)) {
            onEditField(field.id, { options: [...(field.options || []), newOption] });
            setNewOption("");
        }
    };

    const handleRemoveOption = (index: number) => {
        const updatedOptions = [...(field.options || [])];
        updatedOptions.splice(index, 1);
        onEditField(field.id, { options: updatedOptions });
    };

    return (
        <div key={field.id} className={field.className}>
            <div className="form-element frm-element">
                <div className="file-upload-container">
                    <label className="file-label">
                        {field.label} {field.required ? "*" : ""}
                    </label>
                    <div className="file-upload-box" onClick={() => document.getElementById(`file-input-${field.id}`)?.click()}>
                        <p className="file-upload-text">Click to upload or drag and drop a file here</p>
                        <button type="button" className="file-upload-button">Choose File</button>
                        <input
                            type="file"
                            id={`file-input-${field.id}`}
                            accept={(field.options || []).join(",")}
                            className="file-input-hidden"
                            required={field.required}
                            onChange={(e) => console.log(e.target.files)}
                        />
                    </div>
                </div>

                <div className="action-btns">
                    <button
                        className="frm-btn-red"
                        onClick={() => {
                            onRemoveField(field.id);
                            setEdit(false);
                        }} >
                        <DisplayIcon value="trash" />
                    </button>
                    <button className="frm-btn-blue" onClick={() => setEdit(!edit)}>
                        <DisplayIcon value="pencil" />
                    </button>
                </div>
                {edit && (
                    <div className="edit-form">
                        <div className="form-field">
                            <label>Label</label>
                            <input
                                type="text"
                                value={field.label}
                                onChange={(e) => onEditField(field.id, { label: e.target.value })}
                            />
                        </div>
                        <div className="form-field mt-2">
                            <label>Required</label>
                            <select
                                id="required"
                                defaultValue={field.required ? "Yes" : "No"}
                                onChange={(e) =>
                                    onEditField(field.id, { required: toBool(e.target.value) })
                                }
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="form-field mt-3">
                            <div className="add-option flex">
                                <select
                                    value={newOption}
                                    onChange={(e) => setNewOption(e.target.value)} >
                                    <option value="">Select file type</option>
                                    {fileExtensions.map((ext, index) => (
                                        <option key={index} value={ext}>
                                            {ext}
                                        </option>
                                    ))}
                                </select>
                                <button onClick={handleAddOption} className="btn-blue">
                                    <DisplayIcon value="plus" />
                                </button>
                            </div>
                            <div className="mt-3">
                                <label>Options</label>
                                <ul className="option-list">
                                    {field.options?.map((option, index) => (
                                        <li key={index} className="option-item">
                                            <div className="option-label">
                                                {option}
                                            </div>
                                            <button
                                                style={{ width: '30px' }}
                                                className="frm-btn-red"
                                                onClick={() => handleRemoveOption(index)}>
                                                <DisplayIcon value="trash" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileElement