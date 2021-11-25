import { propInfo } from '../../DatePicker/props';
import { pick } from '../../utils';

export default {
    ...pick(propInfo, 'locale', 'minDate', 'maxDate', 'initialMonth'),
    singleMonthOnly: {
        title: {
            en: 'Display only one month',
            ru: 'Отображать только один месяц',
        },
        control: 'checkbox',
    },
};
