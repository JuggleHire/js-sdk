const API_URL: string = 'https://app.jugglehire.com/api/v1';

interface Job {
    id: number;
    title: string;
    description: string;
    company: string;
    // Add other relevant job details here
}

export class JuggleHire {
    private url: string;
    private apiKey: string;

    constructor(url: string, apiKey: string) {
        this.url = url;
        this.apiKey = apiKey;
    };

    async jobs(): Promise<void> {
        try {
            const response = await fetch(API_URL + '/jobs' + "?url=" + this.url, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Error fetching jobs: ${response.statusText}`);
            }

            const data: Job = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
}