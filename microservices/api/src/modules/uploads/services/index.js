import UploaderServiceModel from './UploaderService';
import ImageServiceModel from './ImageService';
import AWS from 'aws-sdk';
import config from '../config';

export const UploaderService = new UploaderServiceModel({
  s3: new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: config.AWS.key,
    secretAccessKey: config.AWS.secret,
    region: config.AWS.region,
  }),
  bucket: config.AWS.bucket,
});

export const ImageService = new ImageServiceModel();
