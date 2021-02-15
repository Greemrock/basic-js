module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (typeof date === 'string' || !date.getTime()) throw new Error();
    
    let month = date.getMonth();
    if (month < 2 || month > 10) return "winter";
    if (month > 1 &&  month < 5) return "spring";
    if (month > 4 &&  month < 8) return "summer";
    if (month > 7 &&  month < 11) return "autumn";
};
