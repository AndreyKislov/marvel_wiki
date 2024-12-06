export function cutString(str) {
    const lenStr = 100;
    if (str.length < lenStr || str.length === 0) {
        return str;
    } else {
        return str.slice(0, lenStr) + '...';
    }
}