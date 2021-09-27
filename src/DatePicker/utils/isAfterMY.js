const isAfterMY = (d1, d2) => {
    const d1Year = d1.getFullYear();
    const d1Month = d1.getMonth();

    const d2Year = d2.getFullYear();
    const d2Month = d2.getMonth();

    return d1Year > d2Year || (d1Year === d2Year && d1Month > d2Month);
};

export default isAfterMY;
