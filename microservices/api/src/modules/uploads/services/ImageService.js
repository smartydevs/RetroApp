import os from 'os';
import sizeOf from 'image-size';
import {
  mimeTypes,
  extension,
  sizeList,
  sizeDimensions,
} from '../enums/imageProcessingEnum';

const uploadDir = os.tmpdir();

export default class ImageService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  isImage(mimeType) {
    return mimeType.search('image') !== -1;
  }

  isPng(mimeType) {
    return mimeType === mimeTypes[extension.PNG];
  }

  getImageDimension(imagePath) {
    const dimensions = sizeOf(imagePath);
    return {
      width: dimensions.width,
      height: dimensions.height,
    };
  }
}
