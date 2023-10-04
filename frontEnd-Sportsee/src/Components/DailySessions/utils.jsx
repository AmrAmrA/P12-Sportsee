export default function formatActivityData(rawData) {
    if (!rawData || !rawData.sessions) return [];
    const formattedData = [...rawData.sessions];
    const dayNumber = formattedData.map(item => item.day.slice(-1));
    for (let i = 0; i < formattedData.length; i++) {
        formattedData[i].day = dayNumber[i]}
    return formattedData;
}