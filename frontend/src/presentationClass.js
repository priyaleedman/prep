
// Classes for presentation and slide
class Slide {
  constructor (id, background, elements) {
    this.id = id;
    this.background = background;
    this.elements = elements;
  }
}

class Presentation {
  constructor (id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.slides = [new Slide(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER).toString(), '#FFFFFF', [])];
    this.thumbnail = 0;
    this.defaultBackground = 'white';
    this.slideIndex = 0;
  }
}

export { Slide, Presentation };
