import {BASE_URL} from '../constants/base-url';
import {constructFailureResponse} from './serviceUtils';

export async function setUploadImageToServer(image) {
  try {
    const formdata = new FormData();
    formdata.append('image', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const response = await fetch(`${BASE_URL}/image/upload`, requestOptions);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: 'Upload failed',
    };
  }
}
