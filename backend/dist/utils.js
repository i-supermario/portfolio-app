let accessToken = "";
export function checkTokenAvailability() {
    accessToken ? accessToken : null;
}
export function setAccessToken(token) {
    accessToken = token;
}
export const getAccessToken = () => accessToken;
