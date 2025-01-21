import { Fragment, useState } from "react"
import { FormFieldList } from "./components/data/FormData"
import InputElement from "./components/form/formElements/InputElement"
import TextareaElement from "./components/form/formElements/TextareaElement"
import SelectElement from "./components/form/formElements/SelectElement"
import CheckboxElement from "./components/form/formElements/CheckboxElement"
import RadioButtonElement from "./components/form/formElements/RadioButtonElement"
import FileElement from "./components/form/formElements/FileElement"
import FormSettings from "./components/form/FormSettings"
import './style/index.scss'
import { FieldConfig, FormFieldListType, FormFieldsList } from "./type"


type FormBulderProps = {
    onGetFormJson : ( value : FormFieldsList) => void
}

const FormBuilder = ({ onGetFormJson } : FormBulderProps) => {

    const [selectedFields, setSelectedFields] = useState<FormFieldsList>([]);

    const handleAddField = (fieldKey: keyof FormFieldListType) => {
        setSelectedFields((prevFields) => [
            ...prevFields,
            { id: Date.now(), ...FormFieldList[fieldKey] },
        ])
    }

    const handleRemoveField = (fieldId: number) => {
        setSelectedFields((prevFields) => prevFields.filter((field) => field.id !== fieldId))
    }

    const handleEditField = (fieldId: number, updatedField: Partial<FieldConfig>) => {
        setSelectedFields((prevFields) =>
            prevFields.map((field) =>
                field.id === fieldId ? { ...field, ...updatedField } : field
            )
        )
    }

    const handleSaveChange = () => {
        onGetFormJson(selectedFields)
    }

    const renderField = (field: FieldConfig & { id: number }) => {
        switch (field.type) {
            case 'text':
            case 'number':
            case 'url':
            case 'date':
            case 'email':
                return (
                    <InputElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )
            case 'textarea':
                return (
                    <TextareaElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )
            case 'select':
                return (
                    <SelectElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )
            case 'checkbox':
                return (
                    <CheckboxElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )
            case 'radio':
                return (
                    <RadioButtonElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )

            case 'file':
                return (
                    <FileElement
                        field={field}
                        onRemoveField={handleRemoveField}
                        onEditField={handleEditField}
                    />
                )
            default:
                return null;
        }
    }


    return (
        <div className="frm-container">
            <div className="frm-row">
                <div className="frm-col-3 frm-element-section">
                    <FormSettings handleAddField={handleAddField} />
                </div>
                <div className="frm-col-9">
                    <div className="frm-form">
                        {selectedFields.length === 0 ? (
                            <div className="center-message">
                                <div>
                                    <h2>Your Custom Form</h2>
                                    <p>Start building your form by selecting elements from the left sidebar.</p>
                                    <p>Click on fields to customize your layout, and adjust settings to fit your needs.</p>
                                </div>
                            </div>
                        ) : selectedFields.map((field, i) => (
                            <Fragment key={i}>
                                {renderField(field)}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-right mt-3">
                <button onClick={() => handleSaveChange()} className="frm-btn btn-submit">
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default FormBuilder