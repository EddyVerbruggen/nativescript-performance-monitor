import { PerformanceMonitorApi, PerformanceMonitorStartOptions } from "./performance-monitor.common";
export declare class PerformanceMonitor implements PerformanceMonitorApi {
    private _monitor;
    private _delegate;
    start(options?: PerformanceMonitorStartOptions): Promise<any>;
    stop(): Promise<any>;
}
