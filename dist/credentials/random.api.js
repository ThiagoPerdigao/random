"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomApi = void 0;
class RandomApi {
    constructor() {
        this.name = 'randomApi';
        this.displayName = 'Random.org API';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.RandomApi = RandomApi;
//# sourceMappingURL=random.api.js.map