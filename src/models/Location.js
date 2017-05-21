export default class Location {
    constructor(location = {}) {
        if (typeof location.name === 'string') this.name = location.name;
        else throw new Error('A valid name is required');

        if (typeof location.description === 'string') this.description = item.description;
        else this.description = '';

        // If items is an array
        if (location.items && location.items.constructor === Array) this.items = location.items;
        else this.items = [];

        // If tags is an array
        if (location.tags && location.tags.constructor === Array) this.tags = location.tags;
        else this.tags = [];
    }
}
