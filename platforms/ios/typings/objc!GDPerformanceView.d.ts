
declare class GDMarginLabel extends UILabel {

	static alloc(): GDMarginLabel; // inherited from NSObject

	static appearance(): GDMarginLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GDMarginLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GDMarginLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GDMarginLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GDMarginLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GDMarginLabel; // inherited from UIAppearance

	static new(): GDMarginLabel; // inherited from NSObject
}

declare class GDPerformanceMonitor extends NSObject {

	static alloc(): GDPerformanceMonitor; // inherited from NSObject

	static new(): GDPerformanceMonitor; // inherited from NSObject

	static sharedInstance(): GDPerformanceMonitor;

	appVersionHidden: boolean;

	delegate: GDPerformanceMonitorDelegate;

	deviceVersionHidden: boolean;

	configureStatusBarAppearanceWithPrefersStatusBarHiddenPreferredStatusBarStyle(prefersStatusBarHidden: boolean, preferredStatusBarStyle: number): void;

	configureWithConfiguration(configuration: (p1: UILabel) => void): void;

	hideMonitoring(): void;

	pauseMonitoring(): void;

	startMonitoring(): void;

	startMonitoringWithConfiguration(configuration: (p1: UILabel) => void): void;

	stopMonitoring(): void;
}

interface GDPerformanceMonitorDelegate extends NSObjectProtocol {

	performanceMonitorDidReportFPSCPU(fpsValue: number, cpuValue: number): void;
}
declare var GDPerformanceMonitorDelegate: {

	prototype: GDPerformanceMonitorDelegate;
};

declare class GDPerformanceView extends UIWindow {

	static alloc(): GDPerformanceView; // inherited from NSObject

	static appearance(): GDPerformanceView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GDPerformanceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GDPerformanceView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GDPerformanceView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GDPerformanceView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GDPerformanceView; // inherited from UIAppearance

	static new(): GDPerformanceView; // inherited from NSObject

	appVersionHidden: boolean;

	deviceVersionHidden: boolean;

	performanceDelegate: GDPerformanceMonitorDelegate;

	preferredStatusBarStyle: UIStatusBarStyle;

	prefersStatusBarHidden: boolean;

	addMonitoringViewAboveStatusBar(): void;

	configureRootViewController(): void;

	hideMonitoring(): void;

	pauseMonitoring(): void;

	resumeMonitoringAndShowMonitoringView(showMonitoringView: boolean): void;

	stopMonitoring(): void;

	textLabel(): UILabel;
}

declare var GDPerformanceViewVersionNumber: number;

declare var GDPerformanceViewVersionString: interop.Reference<number>;

declare class GDWindowViewController extends UIViewController {

	static alloc(): GDWindowViewController; // inherited from NSObject

	static new(): GDWindowViewController; // inherited from NSObject

	configureStatusBarAppearanceWithPrefersStatusBarHiddenPreferredStatusBarStyle(prefersStatusBarHidden: boolean, preferredStatusBarStyle: UIStatusBarStyle): void;
}
