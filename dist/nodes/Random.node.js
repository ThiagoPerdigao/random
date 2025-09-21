"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:random.svg',
            group: ['transform'],
            version: 1,
            description: 'Generate a true random number using Random.org API',
            defaults: {
                name: 'Random',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'generate',
                            description: 'Generate a true random number',
                            action: 'Generate a random number',
                        },
                    ],
                    default: 'generate',
                    noDataExpression: true,
                },
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    required: true,
                    default: 1,
                    description: 'Minimum number (inclusive)',
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    required: true,
                    default: 100,
                    description: 'Maximum number (inclusive)',
                    displayOptions: {
                        show: {
                            operation: ['generate'],
                        },
                    },
                },
            ],
            credentials: [],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const operation = this.getNodeParameter('operation', 0);
        for (let i = 0; i < items.length; i++) {
            if (operation === 'generate') {
                const min = this.getNodeParameter('min', i);
                const max = this.getNodeParameter('max', i);
                const options = {
                    method: 'GET',
                    url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
                    json: false,
                };
                const response = await this.helpers.request(options);
                const number = parseInt(response.trim(), 10);
                returnData.push({ randomNumber: number });
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Random = Random;
//# sourceMappingURL=Random.node.js.map