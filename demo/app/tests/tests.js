var PerfMon = require("nativescript-performance-monitor").PerformanceMonitor;
var performanceMonitor = new PerfMon();

describe("start", function() {
  it("exists", function() {
    expect(performanceMonitor.start).toBeDefined();
  });

  it("returns a promise", function() {
    expect(performanceMonitor.start()).toEqual(jasmine.any(Promise));
  });
});

describe("stop", function() {
  it("exists", function() {
    expect(performanceMonitor.stop).toBeDefined();
  });

  it("returns a promise", function() {
    expect(performanceMonitor.stop()).toEqual(jasmine.any(Promise));
  });
});