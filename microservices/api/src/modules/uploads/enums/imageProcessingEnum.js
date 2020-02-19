const extension = {
  JPEG: 'jpeg',
  PNG: 'png',
};

const mimeTypes = {
  [extension.JPEG]: 'image/jpeg',
  [extension.PNG]: 'image/png',
};

const imageSize = {
  ORIGINAL: 'original',
  AVATAR: 'avatar',
  THUMBNAIL: 'thumbnail',
};

const sizeList = [imageSize.AVATAR, imageSize.THUMBNAIL];

const sizeDimensions = {
  [imageSize.AVATAR]: {
    width: 200,
    height: 200,
  },
  [imageSize.THUMBNAIL]: {
    width: 256,
    height: 256,
  },
};

export { extension, mimeTypes, imageSize, sizeDimensions, sizeList };
