export const checkStatus = (id: number) => {
    let status: string = ''
    if(id >= 200 && id <= 232){status = 'thunderstorm'}
    if(id >= 300 && id < 321 || id >= 500 && id <= 531 ){ status='rain'}
    if(id >= 600 && id <= 622){status='snow'}
    if(id === 800 ){status='sun'}
    if (id >= 801 && id <= 804) { status = 'cloud' }
    return status
}