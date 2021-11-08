import { defaultProps } from '../../DatePicker/props';
import { pick } from '../../utils';

export default {
    ...pick(
        defaultProps,
        'locale',
        'minDate',
        'maxDate',
        'showOutsideDays',
        'disabledDates',
        'disabledDaysOfWeek'
    ),
};
