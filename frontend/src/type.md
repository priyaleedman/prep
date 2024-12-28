// Interfaces

type Presentation = {
    id: String,
    title: String,
    description: String,
    slides: Slide[],
}

type Slide = {
    id: number,
    background: String,
    elements: Element[]
}

type Element = [Image, Text, Video, Code]

type Text = {
    type: String,
    font-size: number, (em / decimal)
    font-family: String, (hex)
    font-colour: String, (hex)
    content: String,
    height: number, (0-100)
    width: number, (0-100)
    positionX: number, (0-100)
    positionY: number, (0-100)
    layer: number,
}

type Image = {
    type: String,
    height: number, (0-100)
    width: number, (0-100)
    src: String, (URL)
    description: String, (alt tag)
    positionX: number, (0-100)
    positionY: number, (0-100)
    layer: number,
}

type Video = {
    type: String,
    height: number, (0-100)
    width: number, (0-100)
    src: String, (URL)
    autoplay: boolean,
    positionX: number, (0-100)
    positionY: number, (0-100)
    layer: number,
}

type Code = {
    type: String,
    height: number, (0-100)
    width: number, (0-100)
    content: String,
    font-size: number, (em / decimal),
    language: String, (One of C, Python, JS)
    positionX: number, (0-100)
    positionY: number, (0-100)
    layer: number,
}