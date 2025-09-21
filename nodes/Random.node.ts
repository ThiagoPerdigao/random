// Aviso de warning se dá apenas pelo nome do arquivo não ser o mesmo que o da pasta

import type{
	IExecuteFunctions,
} from 'n8n-workflow';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';


export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random',
		name: 'random',
		icon: 'file:random_v2.svg',
		group: ['transform'],
		version: 1,
		description: 'Generate a true random number using Random.org API',
		defaults: {
			name: 'Random',
		},
		inputs: ['main'] as NodeConnectionType[],
		outputs: ['main'] as NodeConnectionType[],
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			if (operation === 'generate') {
				const min = this.getNodeParameter('min', i) as number;
				const max = this.getNodeParameter('max', i) as number;

				const options = {
					method: 'GET' as const,
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
