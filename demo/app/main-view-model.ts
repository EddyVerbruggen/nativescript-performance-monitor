import { PerformanceMonitor, PerformanceMonitorSample } from "nativescript-performance-monitor";
import { Color } from 'tns-core-modules/color';
import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {
  private performanceMonitor: PerformanceMonitor;

  constructor() {
    super();
    this.performanceMonitor = new PerformanceMonitor();
  }

  public onStartTap() {
    this.set("active", true);
    this.performanceMonitor.start({
      textColor: new Color("white"),
      backgroundColor: new Color("black"),
      borderColor: new Color("black"),
      hide: false,
      onSample: (sample: PerformanceMonitorSample) => {
        this.set("fps", sample.fps);
        if (sample.cpu) {
          this.set("cpu", sample.cpu);
        }
      }
    });
  }

  public onStopTap() {
    this.set("active", false);
    this.performanceMonitor.stop();
  }
}