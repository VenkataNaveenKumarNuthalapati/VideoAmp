export const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now - past) / 1000);

    const seconds = 60;
    const minutes = 60 * seconds;
    const hours = 24 * minutes;
    const days = 7 * hours;
    const weeks = 4.34524 * days; // Approximate weeks in a month
    const years = 12 * weeks;

    if (diffInSeconds < seconds) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < minutes) {
        return `${Math.floor(diffInSeconds / seconds)} minutes ago`;
    } else if (diffInSeconds < hours) {
        return `${Math.floor(diffInSeconds / minutes)} hours ago`;
    } else if (diffInSeconds < days) {
        return `${
            Math.floor(diffInSeconds / hours) > 1
                ? `${Math.floor(diffInSeconds / hours)}days ago`
                : `${Math.floor(diffInSeconds / hours)}day ago`
        } `;
    } else if (diffInSeconds < weeks) {
        return `${Math.floor(diffInSeconds / days)} weeks ago`;
    } else if (diffInSeconds < years) {
        return `${Math.floor(diffInSeconds / weeks)} months ago`;
    } else {
        return `${Math.floor(diffInSeconds / years)} years ago`;
    }
};

export const formatViews = (views) => {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + "M"; // Convert to millions
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + "K"; // Convert to thousands
    } else {
        return views.toString(); // Return as-is if less than 1000
    }
};
