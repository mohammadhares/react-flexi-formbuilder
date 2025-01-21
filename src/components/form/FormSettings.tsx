import { FormFieldListType } from "../../type";
import { FormFieldList } from "../data/FormData";
import { DisplayIcon } from "../util/Utility";

const FormSettings = ({
  handleAddField,
}: {
  handleAddField: (fieldKey: keyof FormFieldListType) => void;
}) => {
  return (
    <div className="frm-setting">
      <h3>Form Elements</h3>
      <div>
        {Object.keys(FormFieldList).map((fieldKey) => (
          <button
            title={FormFieldList[fieldKey].label}
            key={fieldKey}
            className="frm-btn"
            onClick={() => handleAddField(fieldKey as keyof FormFieldListType)}>
            <DisplayIcon value={FormFieldList[fieldKey].icon} />
            <span className="btn-label">{FormFieldList[fieldKey].label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FormSettings
