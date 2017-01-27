import { PerformanceMonitorApi, PerformanceMonitorStartOptions } from "./performance-monitor.common";
export declare class PerformanceMonitor implements PerformanceMonitorApi {
    start(options?: PerformanceMonitorStartOptions): Promise<any>;
    stop(): Promise<any>;
}
