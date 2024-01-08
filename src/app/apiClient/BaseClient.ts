export class BaseClient {

    protected transformOptions = async (options: RequestInit): Promise<RequestInit> => {
        let token = sessionStorage.getItem("token");

        options.headers = {
            ...options.headers,
            Authorization: 'Bearer ' + token,
        };
        return Promise.resolve(options);
    };
}