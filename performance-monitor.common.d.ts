import { Color } from "color";
export interface PerformanceMonitorSample {
    fps?: number;
    cpu?: number;
}
export interface PerformanceMonitorStartOptions {
    onSample?: (PerformanceMonitorSample) => void;
    hide?: boolean;
    backgroundColor?: Color;
    textColor?: Color;
    borderColor?: Color;
}
export interface PerformanceMonitorApi {
    start(options?: PerformanceMonitorStartOptions): Promise<any>;
    stop(): Promise<any>;
}
