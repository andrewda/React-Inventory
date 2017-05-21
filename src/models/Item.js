export default class Item {
    constructor(item = {}) {
        if (typeof item.name === 'string') this.name = item.name;
        else throw new Error('A valid name is required');

        if (typeof item.description === 'string') this.description = item.description;
        else this.description = '';

        if (typeof item.stock === 'number') this.stock = item.stock;
        else this.stock = 0;

        if (typeof item.status === 'number') this.status = item.status;
        else this.status = 0;

        if (typeof item.location === 'string') this.location = item.location;
        else this.location = '';

        // If tags is an array
        if (item.tags && item.tags.constructor === Array) this.tags = item.tags;
        else this.tags = [];
    }

    get statusText() {
        switch (this.status) {
            case 0:
                return 'In Stock';
            case 1:
                return 'Low Stock';
            case 2:
                return 'Out of Stock';
            default:
                return '';
        }
    }
}
