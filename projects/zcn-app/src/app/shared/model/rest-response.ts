export class RestResponse<T> {
    public code: string;
    public message: string;
    public type: string;
    public object: T;
    public data: T[];

}