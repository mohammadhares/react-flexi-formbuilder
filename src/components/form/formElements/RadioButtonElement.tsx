import { ChangeEvent, FormEvent, useState } from "react";
import { FieldConfig } from "../../../type"
import { DisplayIcon, toBool } from "../../util/Utility";

type RadioButtonElementProps = {
    field: FieldConfig & { id: number };
    onRemoveField: (id: number) => void;
    onEditField: (id: number, updatedField: Partial<FieldConfig>) => void;
};

const RadioButtonElement = ({ field, onRemoveField, onEditField }: RadioButtonElementProps) => {
    const [edit, setEdit] = useState(false);
    const [newOption, setNewOption] = useState("");

    const handleAddOption = () => {
        if (newOption.trim() !== "") {
            const updatedOptions = [...(field.options || []), newOption];
            onEditField(field.id, { options: updatedOptions });
            setNewOption("");
        }
    };

    const handleRemoveOption = (optionIndex: number) => {
        const updatedOptions = field.options?.filter((_, index) => index !== optionIndex);
        onEditField(field.id, { options: updatedOptions });
    };

    return (
        <div key={field.id} className={field.className}>
            <div className="form-element frm-element">
                <label>
                    {field.label} {field.required ? "*" : ""}
                </label>
                <div>
                    {field.options?.map((option, index) => (
                        <div className="options" key={index}>
                            <input
                                type="radio"
                                id={`${field.id}-${index}`}
                                name={field.label}
                                value={option}
                                required={field.required}
                            />
                            <label htmlFor={`${field.id}-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>
                <div className="action-btns">
                    <button
                        className="frm-btn-red"
                        onClick={() => {
                            onRemoveField(field.id);
                            setEdit(false);
                        }}
                    >
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
                            <div className="add-option ">
                                <form
                                    className="flex"
                                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                        e.preventDefault();
                                        handleAddOption();
                                    }}>
                                    <input
                                        type="text"
                                        value={newOption}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewOption(e.target.value)}
                                        placeholder="New option"
                                    />
                                    <button type="submit" className="btn-blue">
                                        <DisplayIcon value="plus" />
                                    </button>
                                </form>
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

export default RadioButtonElement;
