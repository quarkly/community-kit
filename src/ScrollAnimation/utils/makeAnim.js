const makeAnim = (anim, status, start, end) => {
    return (
        status === 'on' && {
            [anim]: [start, end],
        }
    );
};

export default makeAnim;
