import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DynatracePlugin)
public class DynatracePlugin: CAPPlugin {
    private let implementation = Dynatrace()
}
