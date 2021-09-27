import { propInfo } from '../../DatePicker/props';
import { pick } from '../../DatePicker/utils';

export default {
    ...pick(propInfo, 'locale', 'minDate', 'maxDate', 'initialMonth'),
    singleMonthOnly: {
        title: {
            en: 'Single month only',
        },
        control: 'checkbox',
    },
};
