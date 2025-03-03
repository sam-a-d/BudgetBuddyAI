export const FilterDurationProcessor = (duration) => {
    let startDate = null;
    let endDate = new Date();

    switch (duration) {
        case "today":
            startDate = new Date();
            break;
        case "last7d":
            startDate = new Date();
            startDate.setDate(endDate.getDate() - 7);
            break;
        case "last1m":
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 1);
            break;
        case "last6m":
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 6);
            break;
        case "last12m":
            startDate = new Date();
            startDate.setMonth(endDate.getMonth() - 12);
            break;
        default:
            break;
    }

    const formatDate = (date) => date ? date.toISOString().slice(0, 10) : null;

    return { startDate: formatDate(startDate), endDate: formatDate(endDate) };
}