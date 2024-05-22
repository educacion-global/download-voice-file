function downloadAACFileWithToken(url, params, token, output = "audiofile") {
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;
    fetch(fullUrl, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.blob())
    .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = `${output}.aac`;
        a.click();
        URL.revokeObjectURL(objectUrl);
    })
    .catch(error => {
        console.error('Error downloading file:', error);
    });
}
