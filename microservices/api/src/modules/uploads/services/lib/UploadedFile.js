import { AppUploads } from '../../db';

export default class {
  constructor(name, path, mimeType, size, dimension) {
    this.name = name;
    this.path = path;
    this.mimeType = mimeType;
    this.size = size;
    this.dimension = dimension;
    this.thumbs = [];
  }

  addThumb(width, height, path) {
    this.thumbs.push({ width, height, path });
  }
  save({ resourceType, resourceId, userId }) {
    return AppUploads.insert({
      path: this.path,
      name: this.name,
      mimeType: this.mimeType,
      thumbs: this.thumbs,
      size: this.size,
      dimension: this.dimension,
      resourceType,
      resourceId,
      userId,
    });
  }
}
