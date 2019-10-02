# getBoundaries undefined

This is an MVP to show that the `getMapBoundaries` call using `react-native-maps` does not work on **Android**.

## Getting started

1. Clone this repository.
2. cd into the repository folder.
3. `yarn install` and `yarn start`.
4. Launch the app in an Android simulator or device.

### Expected

App runs without errors.

### Actual

An error is thrown and the stack trace is below.

## Investigation

The `NativeModules` property `AirMapModule` is missing (the segment in the source code is below). `AirMapModule` should have been installed and linked when `react-native-maps` was installed and I have tried removing and re-installing.

``` JavaScript
// node_modules/react-native-maps/lib/components/MapView.js

if (Platform.OS === 'android') {
return await NativeModules.AirMapModule.getMapBoundaries(
   this._getHandle()
);
} else if (Platform.OS === 'ios') {
return await this._runCommand('getMapBoundaries', []);
}
```

## Stack trace

``` shell
Finished building JavaScript bundle in 3199ms.
Running application on Android SDK built for x86.

[Unhandled promise rejection: TypeError: null is not an object (evaluating '_reactNative.NativeModules.AirMapModule.getMapBoundaries')]
- node_modules/react-native-maps/lib/components/MapView.js:711:46 in getMapBoundaries$
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:44 in tryCatch
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:271:30 in invoke
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:44 in tryCatch
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:135:28 in invoke
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:170:17 in <unknown>
- node_modules/promise/setimmediate/core.js:45:7 in tryCallTwo
- node_modules/promise/setimmediate/core.js:200:23 in doResolve
- node_modules/promise/setimmediate/core.js:66:12 in Promise
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:169:27 in callInvokeWithMethodAndArg
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:192:38 in enqueue
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:216:8 in async
* null:null in getMapBoundaries
* App.tsx:10:10 in handleRegionChange$
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:44 in tryCatch
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:271:30 in invoke
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:45:44 in tryCatch
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:135:28 in invoke
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:170:17 in <unknown>
- node_modules/promise/setimmediate/core.js:45:7 in tryCallTwo
- node_modules/promise/setimmediate/core.js:200:23 in doResolve
- node_modules/promise/setimmediate/core.js:66:12 in Promise
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:169:27 in callInvokeWithMethodAndArg
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:192:38 in enqueue
- node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js:216:8 in async
* App.tsx:8:29 in handleRegionChange
- node_modules/react-native-maps/lib/components/MapView.js:624:40 in _onChange
- node_modules/react-native/Libraries/Renderer/oss/ReactNativeRenderer-dev.js:93:15 in invokeGuardedCallbackImpl
- ... 18 more stack frames from framework internals

```
