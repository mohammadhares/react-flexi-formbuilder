import { useState } from "react"
import { DisplayIcon, toBool } from "../../util/Utility"
import { FieldConfig } from "../../../type"

type TextareaElementProps = {
    field: FieldConfig & { id: number }
    onRemoveField: (id: number) => void
    onEditField: (id: number, updatedField: Partial<FieldConfig>) => void
}

const TextareaElement = ({ field, onRemoveField, onEditField }: TextareaElementProps) => {
    const [edit, setEdit] = useState(false)
    return (
        <div key={field.id} className={field.className}>
            <div className="form-element frm-element">
                <label>{field.label} {field.required ? '*' : ''}</label>
                <textarea
                    required={field.required}
                    placeholder={field.placeholder}
                />
                <div className="action-btns">
                    <button className="frm-btn-red" onClick={() => {
                        onRemoveField(field.id)
                        setEdit(false)
                    }}>
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
                            <input type="text" value={field.label} onChange={(e) => onEditField(field.id, { label: e.target.value })} />
                        </div>
                        <div className="form-field mt-2">
                            <label>Placeholder</label>
                            <input type="text" value={field.placeholder} onChange={(e) => onEditField(field.id, { placeholder: e.target.value })} />
                        </div>
                        <div className="form-field mt-2">
                            <label>Required</label>
                            <select id="required"
                                defaultValue={field.required ? 'Yes' : 'No'}
                                onChange={(e) => onEditField(field.id, { required: toBool(e.target.value) })}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TextareaElement