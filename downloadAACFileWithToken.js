function downloadAACFileWithToken(url, token, output = "file") {
    fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${output}.aac`;
        a.click();
        URL.revokeObjectURL(url);
    });
}
