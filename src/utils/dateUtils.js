// Format date to a human-readable string
export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Check if a date is within a given range
export const isDateInRange = (date, startDate, endDate) => {
    const d = new Date(date);
    return (
        (!startDate || d >= new Date(startDate)) &&
        (!endDate || d <= new Date(endDate))
    );
};
