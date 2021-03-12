import { Editor } from './Editor';
import { LocalisedString, LocalisedValue } from './Localised';
import { Validations } from './Validations';

type FieldDataTypeMap<T> = {
    'boolean': T,
    'booleanArray': T,
    'dateTime': T,
    'dateTimeArray': T,
    'decimal': T,
    'decimalArray': T,
    'integer': T,
    'integerArray': T,
    'object': T,
    'objectArray': T,
    'string': T,
    'stringArray': T
};

type FieldDataFormatMap<T> = {
    'asset': T,
    'daterange': T,
    'embed': T,
    'entry': T,
    'field': T,
    'heading': T,
    'html': T,
    'image': T,
    'location': T,
    'markdown': T,
    'quote': T,
    'taxonomy': T,
    'component': T
};

type FieldDataType = keyof FieldDataTypeMap<any>;

type FieldDataFormat = keyof FieldDataFormatMap<any> | string; // `component.${string}`;

export interface Field {
    id: string;
    name: LocalisedString;
    description?: LocalisedString;
    dataType: FieldDataType;
    dataFormat?: FieldDataFormat;
    default?: LocalisedValue<any>;
    groupId?: string;
    validations?: Validations<Field>;
    editor?: Editor;
    readonly fields?: Field[];
}
