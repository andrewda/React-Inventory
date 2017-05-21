export default class Tag {
    constructor(tag = {}) {
        if (typeof tag.name === 'string') this.name = tag.name;
        else throw 'A valid name is required';

        if (typeof tag.color === 'string') this.color = tag.color;
        else throw 'A valid color is required';
    }
}
