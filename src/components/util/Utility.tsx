import {
    faPencilAlt,
    faHashtag,
    faLink,
    faCalendar,
    faUpload,
    faList,
    faFileAlt,
    faEnvelope,
    faCheckSquare,
    faDotCircle,
    faTrashAlt,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const toBool = (value: string) => {
    return value === 'Yes';
};

export const DisplayIcon = ({ value }: { value: string }) => {
    switch (value) {
        case 'pencil':
            return <FontAwesomeIcon icon={faPencilAlt} />;
        case 'hashtag':
            return <FontAwesomeIcon icon={faHashtag} />;
        case 'link':
            return <FontAwesomeIcon icon={faLink} />;
        case 'calendar':
            return <FontAwesomeIcon icon={faCalendar} />;
        case 'upload':
            return <FontAwesomeIcon icon={faUpload} />;
        case 'list':
            return <FontAwesomeIcon icon={faList} />;
        case 'file-text':
            return <FontAwesomeIcon icon={faFileAlt} />;
        case 'envelope':
            return <FontAwesomeIcon icon={faEnvelope} />;
        case 'checksquare':
            return <FontAwesomeIcon icon={faCheckSquare} />;
        case 'circle':
            return <FontAwesomeIcon icon={faDotCircle} />;
        case 'trash':
            return <FontAwesomeIcon icon={faTrashAlt} />;
        case 'plus':
            return <FontAwesomeIcon icon={faPlus} />;
        default:
            return null; // Return null if no matching icon is found
    }
};
