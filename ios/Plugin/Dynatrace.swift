import Foundation

@objc public class Dynatrace: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
