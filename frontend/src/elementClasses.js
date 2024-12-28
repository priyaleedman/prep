// Parent class
class Element {
  constructor (type, height, width, positionX, positionY, layer) {
    this.id = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    this.type = type;
    this.height = height;
    this.width = width;
    this.positionX = positionX;
    this.positionY = positionY;
    this.layer = layer;
  }
}

// Child classes
// Text class
class Text extends Element {
  constructor (fontSize, fontFamily, fontColor, content, height, width, positionX, positionY, layer) {
    super('text', height, width, positionX, positionY, layer);
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fontColor = fontColor;
    this.content = content;
  }
}

// Image class
class Image extends Element {
  constructor (height, width, src, description, positionX, positionY, layer) {
    super('image', height, width, positionX, positionY, layer);
    this.src = src;
    this.description = description;
  }
}
// Video class
class Video extends Element {
  constructor (height, width, src, autoplay, positionX, positionY, layer) {
    super('video', height, width, positionX, positionY, layer);
    this.src = src;
    this.autoplay = autoplay;
  }
}

// Code class
class Code extends Element {
  constructor (height, width, content, fontSize, language, positionX, positionY, layer) {
    super('code', height, width, positionX, positionY, layer);
    this.content = content;
    this.fontSize = fontSize;
    this.language = language;
  }
}

// Export the classes
export { Element, Text, Image, Video, Code };
//   const textElement = new Text(16, 'Arial', '#000000', 'Hello World', 50, 100, 10, 20, 1);
//   const imageElement = new Image(200, 300, 'example.jpg', 'An example image', 50, 50, 2);
//   const videoElement = new Video(400, 600, 'example.mp4', true, 100, 100, 3);
//   const codeElement = new Code(80, 120, 'console.log("Hello")', 14, 'JavaScript', 30, 40, 4);
