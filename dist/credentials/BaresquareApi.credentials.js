"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaresquareApi = void 0;
class BaresquareApi {
    constructor() {
        this.name = 'baresquareApi';
        this.displayName = 'Baresquare API';
        this.documentationUrl = 'baresquare';
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
exports.BaresquareApi = BaresquareApi;
//# sourceMappingURL=BaresquareApi.credentials.js.map