class Cover {
  constructor(coverImgSrc, title, descriptor1, descriptor2) {
    this.id = Date.now();
    this.cover = coverImgSrc;
    this.title = title;
    this.tagline1 = descriptor1;
    this.tagline2 = descriptor2;
  }
}

class RandomCover {
    constructor(covers, titles, descriptors) {
      this.id = Date.now();
      this.cover = getRandomElement(covers);
      this.title = getRandomElement(titles);
      this.tagline1 = getRandomElement(descriptors);
      this.tagline2 = getRandomElement(descriptors);
    }
}
