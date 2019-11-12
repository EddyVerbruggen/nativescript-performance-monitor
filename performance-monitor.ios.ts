import { PerformanceMonitorApi, PerformanceMonitorSample, PerformanceMonitorStartOptions } from "./performance-monitor.common";

export class PerformanceMonitor implements PerformanceMonitorApi {
  private _monitor: GDPerformanceMonitor;
  private _delegate: GDPerformanceMonitorDelegate;

  public start(options?: PerformanceMonitorStartOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let opts = options || {};
      this._monitor = GDPerformanceMonitor.new();

      this._monitor.startMonitoringWithConfiguration((label) => {
        if (opts.backgroundColor) {
          label.backgroundColor = opts.backgroundColor.ios;
        }
        if (opts.textColor) {
          label.textColor = opts.textColor.ios;
        }
        if (opts.borderColor) {
          label.layer.borderColor = opts.borderColor.ios.CGColor;
        }
      });

      this._monitor.appVersionHidden = true;
      this._monitor.deviceVersionHidden = true;

      if (opts.onSample) {
        this._delegate = GDPerformanceMonitorDelegateImpl.initWithOwnerAndCallback(new WeakRef(this), opts.onSample);
        this._monitor.delegate = this._delegate;
      }

      if (opts.hide) {
        this._monitor.hideMonitoring();
      }

      resolve();
    });
  }

  public stop(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this._monitor) {
        this._monitor.stopMonitoring();
        resolve();
      } else {
        reject();
      }
    });
  }
}

class GDPerformanceMonitorDelegateImpl extends NSObject implements GDPerformanceMonitorDelegate {
  public static ObjCProtocols = [GDPerformanceMonitorDelegate];

  private _owner: WeakRef<any>;
  private _callback: (sample: PerformanceMonitorSample) => void;

  public static initWithOwnerAndCallback(owner: WeakRef<any>, callback: (PerformanceMonitorSample) => void): GDPerformanceMonitorDelegateImpl {
    let delegate = <GDPerformanceMonitorDelegateImpl>GDPerformanceMonitorDelegateImpl.new();
    delegate._owner = owner;
    delegate._callback = callback;
    return delegate;
  }

  static new(): GDPerformanceMonitorDelegateImpl {
    return <GDPerformanceMonitorDelegateImpl>super.new();
  }

  public performanceMonitorDidReportFPSCPU(fps: number, cpu: number) {
    if (this._callback && fps >= 0) {
      this._callback({
        fps: fps,
        cpu: Math.round(cpu * 10) / 10
      });
    }
  }
}