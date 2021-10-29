import { propInfo } from '../../DatePicker/props';
import { pick } from '../../DatePicker/utils';

export default {
    ...pick(
        propInfo,
        'locale',
        'minDate',
        'maxDate',
        'initialMonth',
        'showOutsideDays',
        'disabledDates',
        'disabledDaysOfWeek'
    ),
};
