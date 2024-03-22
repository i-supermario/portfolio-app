
let accessToken = ""

export function checkTokenAvailability(){
    accessToken ? accessToken : null
} 

export function setAccessToken( token: string ){
    accessToken = token
}

export const getAccessToken = () => accessToken