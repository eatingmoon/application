import { RNS3 } from 'react-native-upload-aws-s3';

interface IS3Response {
  postResponse: {
    bucket: string;
    etag: string;
    key: string;
    location: string;
  }
}

export default async function uploadImageToS3(uri: string): Promise<IS3Response | null> {
  console.log('RNS3', RNS3)
  const file = {
    uri,
    name: 'image.png',
    type: 'image/png'
  }

  const options = {
    keyPrefix: 'uploads/',
    bucket: 'cdn.nully.app',
    region: 'ap-northeast-2',
    accessKey: 'AKIAWYWJ4RTUNYCKZW23',
    secretKey: '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',
    successActionStatus: 201,
  };

  try {
    const response = await RNS3.put(file, options)
    if (response.status === 201) {
      console.log('Success: ', response.body)
      return response.body;
    } else {
      console.log('Failed to upload image to S3: ', response)
    }
  } catch (error) {
    console.log(error)
  }
  return null;
}
