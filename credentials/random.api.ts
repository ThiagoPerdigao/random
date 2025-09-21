import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class RandomApi implements ICredentialType {
	name = 'randomApi';
	displayName = 'Random.org API';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
