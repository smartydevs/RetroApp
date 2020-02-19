import os from 'os';
import sharp from 'sharp';
import imagemin from 'imagemin';
import sizeOf from 'image-size';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';
import imageminPnqQuant from 'imagemin-pngquant';
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

  async getImageThumbs(filepath) {
    const imageThumbs = [];
    const resize = async sizeType => {
      return sharp(filepath)
        .resize(sizeDimensions[sizeType].width, sizeDimensions[sizeType].height)
        .toBuffer()
        .then(async buffer => {
          return {
            width: sizeDimensions[sizeType].width,
            height: sizeDimensions[sizeType].height,
            // path: fileKey,
            buffer,
          };
        })
        .catch(err => console.log('err', err));
    };

    for (let i = 0; i < sizeList.length; i++) {
      const currentThumb = await resize(sizeList[i]);
      imageThumbs.push(currentThumb);
    }
    // await Promise.all(sizeList.map(resize));
    return imageThumbs;
  }

  async optimizeImages(imagePaths) {
    const files = await imagemin(imagePaths, {
      destination: uploadDir,
      plugins: [
        imageminPnqQuant({
          strip: true,
          quality: [0.65, 0.8],
          speed: 1,
          dithering: 0.8,
        }),
        imageminJpegRecompress({
          loops: 10,
          min: 40,
          max: 80,
          quality: 'medium',
        }),
      ],
    });
    return files;
  }
}
