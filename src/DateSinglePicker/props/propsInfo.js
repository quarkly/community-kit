import { propInfo } from '../../DatePicker/props';
import { pick } from '../../utils';

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
