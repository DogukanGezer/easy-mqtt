/// <reference types="node" />
import mqtt, { IClientOptions, MqttClient } from "mqtt";
export interface Handler {
    pattern: string;
    handle(params: any, payload: any): void;
}
export interface RPCRequest {
    request: string;
    response: string;
    error?: string;
    timeout?: number;
    message: string | Buffer;
}
export interface Response {
    params: object;
    payload: Buffer;
}
declare const easymqtt: {
    handlers: Handler[];
    _client: MqttClient | undefined;
    readonly client: mqtt.MqttClient;
    initialized: boolean;
    onMessage(topic: string, payload: any): void;
    connect(options: IClientOptions): void;
    publish(topic: string, message: string | Buffer): void;
    rpc(rpcRequest: RPCRequest): Promise<Response>;
    on(pattern: string, method: (params: any, payload: any) => void): void;
    addHandler(handler: Handler): Handler;
    removeHandler(handler: Handler): void;
};
export { easymqtt };
export default easymqtt;
