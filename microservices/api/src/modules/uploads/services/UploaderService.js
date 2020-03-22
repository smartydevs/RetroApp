import moment from 'moment';

import { Random } from 'meteor/random';
import { Meteor } from 'meteor/meteor';

import UploadedFile from './lib/UploadedFile';
import { storeFS } from './lib/utils';
import { ImageService } from './index';
import { AppUploads } from '../db';
import fs from 'fs';
import os from 'os';
import path from 'path';

class Uploader {
  constructor({ s3, bucket }) {
    this.s3 = s3;
    this.bucket = bucket;
  }

  /**
   * Handles the file upload and returns the object inserted in database
   */
  async handleFileUpload(file, userId) {
    const { createReadStream, filename, mimetype } = await file;
    const stream = createReadStream();

    if (!filename) {
      throw new Error("Can't find filename");
    }
    const { filepath } = await storeFS({ stream, filename });

    const uploadedFile = await this.upload(filepath, null, mimetype);
    const appUploadId = uploadedFile.save({ userId });

    return AppUploads.findOne(appUploadId);
  }

  remove(key) {
    return this.s3.deleteObject({
      Bucket: this.bucket,
      Key: key,
    });
  }

  getObject(key) {
    return this.s3
      .deleteObject({
        Bucket: this.bucket,
        Key: key,
      })
      .promise();
  }

  putObject(fileKey, mimeType, stream) {
    const params = {
      Bucket: this.bucket,
      Key: fileKey,
      Body: stream,
      ContentType: mimeType,
    };

    return this.s3.putObject(params).promise();
  }

  generateKey(filename, context) {
    if (context == null) {
      context = '';
    }
    const dateFolders = `${moment()
      .locale('en')
      .format('YYYY')}/${moment()
      .locale('en')
      .format('MM')}/${moment()
      .locale('en')
      .format('DD')}`;
    let key = `${dateFolders}/${Random.id()}`;

    if (context !== '') {
      key += `-${context}`;
    }

    if (Meteor.isDevelopment) {
      key = `dev/${key}`;
    }

    return `${key}-${filename}`;
  }

  isImage(filename) {
    return this.guessMimeType(filename).search('image') !== -1;
  }

  async upload(filePath, fileKey, mimeType) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;

    const stream = fs.readFileSync(filePath);
    const fileName = filePath.replace(`${os.tmpdir()}/`, '');
    if (!fileKey) {
      fileKey = this.generateKey(fileName);
    }

    await this.putObject(fileKey, mimeType, stream);
    console.log(`[Uploads] Uploaded file: ${fileKey}`);
    let dimension = null;
    if (ImageService.isImage(mimeType)) {
      dimension = ImageService.getImageDimension(filePath);
    }
    const uploadedFile = new UploadedFile(
      fileName,
      fileKey,
      mimeType,
      fileSizeInBytes,
      dimension
    );

    fs.unlinkSync(filePath);

    return uploadedFile;
  }

  crop(filePath, sizeType) {
    const im = Npm.require('imagemagick');
    const fileName = filePath.replace(`${os.tmpdir()}/`, '');
    const fn = Meteor.wrapAsync(im.resize);

    const stdout = fn({
      srcData: fs.readFileSync(filePath, 'binary'),
      width: sizeType,
      format: path.extname(fileName).slice(1),
    });

    const buffer = new Buffer(stdout, 'binary');
    const keyThumb = `thumb${sizeType.toString()}x${sizeType.toString()}`;
    const key = this.generatethis.s3Key(fileName, keyThumb);

    this.putObject(key, this.guessMimeType(filePath), buffer);

    return key;
  }
}

export default Uploader;
