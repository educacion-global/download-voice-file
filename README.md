# download-voice-file

**Download AAC File with Token**

This function, `downloadAACFileWithToken`, is designed to facilitate the downloading of AAC files from a specified URL using a provided access token for authorization. 

### Usage

To use this function, you need to provide three parameters:

1. **url**: The URL from which the AAC file will be fetched.
2. **token**: The access token used for authorization. It will be included in the request headers.
3. **output** (optional): The desired filename for the downloaded AAC file. If not provided, the default filename will be "file.aac".

### Example

```javascript
downloadAACFileWithToken('https://example.com/audio.aac', 'your_access_token', 'audio_file');
```

This example would download the AAC file from 'https://example.com/audio.aac', using the provided access token 'your_access_token', and save it as 'audio_file.aac'.

### Functionality

1. The function initiates a `fetch` request to the specified URL.
2. It attaches the access token to the request headers for authorization.
3. Upon receiving the response, it converts the response body into a Blob object.
4. It creates a temporary URL for the Blob object using `URL.createObjectURL`.
5. Then, it dynamically creates an `<a>` element, sets its `href` attribute to the temporary URL, and specifies the filename for the downloaded file.
6. The function simulates a click on the `<a>` element to trigger the download.
7. Finally, it revokes the temporary URL to free up system resources.

### Note

Make sure to handle errors appropriately, such as network failures or invalid access tokens, to ensure smooth functionality. Additionally, ensure that the server from which you're fetching the AAC file supports the necessary authorization mechanism.
