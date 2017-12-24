export default function (imgURL, options = ''){
    const urlArr = imgURL.split('upload/');
    urlArr.push('upload/' + options + '/');
    return urlArr[0] + urlArr[2] + urlArr[1];
}