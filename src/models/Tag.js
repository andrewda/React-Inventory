export default class Tag {
    constructor(tag = {}) {
        if (typeof tag.name === 'string') this.name = tag.name;
        else throw new Error('A valid name is required');

        if (typeof tag.color === 'string') this.color = tag.color;
        else throw new Error('A valid color is required');
    }
}
