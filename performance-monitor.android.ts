import { PerformanceMonitorApi, PerformanceMonitorStartOptions } from "./performance-monitor.common";
import * as appModule from "application";

declare let jp: any;

/**
 * See https://github.com/wasabeef/Takt
 */
export class PerformanceMonitor implements PerformanceMonitorApi {

  public start(options?: PerformanceMonitorStartOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      // needs a little delay on certain devices, otherwise it hides again almost instantly
      setTimeout(() => {
        let opts = options || {};

        let monitor = jp.wasabeef.takt.Takt.stock(appModule.android.nativeApp);

        // TODO add as option
        monitor.seat(jp.wasabeef.takt.Seat.TOP_CENTER);

        if (opts.textColor) {
          monitor.color(opts.textColor.android);
        }
        monitor.size(15.0);
        monitor.alpha(0.7);

        if (opts.onSample) {
          monitor.listener(new jp.wasabeef.takt.Audience({
            heartbeat: function (fps: number) {
              opts.onSample({
                fps: Math.round(fps * 10) / 10
              });
            }
          }))
        }

        if (opts.hide) {
          monitor.hide();
        }

        monitor.play();
        resolve();
      }, 3000);
    });
  }

  public stop(): Promise<any> {
    return new Promise((resolve, reject) => {
      jp.wasabeef.takt.Takt.finish();
      resolve();
    });
  }
}