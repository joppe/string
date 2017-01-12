export interface PadFunctionInterface {
    (source: string, char: string, length: number, type: number): string;
}
export declare enum padType {
    Left = 0,
    Right = 1,
}
export declare const pad: PadFunctionInterface;
