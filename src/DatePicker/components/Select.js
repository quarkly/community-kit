import atomize from '@quarkly/atomize';
import { Select } from '@quarkly/widgets';

// Object.assign не работал.
// Можно и atomize.select({})
export default atomize(Select)({
    effects: {
        hover: ':hover',
        focus: ':focus',
        active: ':active',
    },
});
