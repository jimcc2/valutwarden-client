/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/platform/services/fido2/fido2-utils.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/platform/services/fido2/fido2-utils.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fido2Utils: function() { return /* binding */ Fido2Utils; }
/* harmony export */ });
// @ts-strict-ignore
class Fido2Utils {
    static createResultToJson(result) {
        return {
            id: result.credentialId,
            rawId: result.credentialId,
            response: {
                clientDataJSON: result.clientDataJSON,
                authenticatorData: result.authData,
                transports: result.transports,
                publicKey: result.publicKey,
                publicKeyAlgorithm: result.publicKeyAlgorithm,
                attestationObject: result.attestationObject,
            },
            authenticatorAttachment: "platform",
            clientExtensionResults: result.extensions,
            type: "public-key",
        };
    }
    static getResultToJson(result) {
        return {
            id: result.credentialId,
            rawId: result.credentialId,
            response: {
                clientDataJSON: result.clientDataJSON,
                authenticatorData: result.authenticatorData,
                signature: result.signature,
                userHandle: result.userHandle,
            },
            authenticatorAttachment: "platform",
            clientExtensionResults: {},
            type: "public-key",
        };
    }
    static bufferToString(bufferSource) {
        return Fido2Utils.fromBufferToB64(Fido2Utils.bufferSourceToUint8Array(bufferSource))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }
    static stringToBuffer(str) {
        return Fido2Utils.fromB64ToArray(Fido2Utils.fromUrlB64ToB64(str)).buffer;
    }
    static bufferSourceToUint8Array(bufferSource) {
        if (Fido2Utils.isArrayBuffer(bufferSource)) {
            return new Uint8Array(bufferSource);
        }
        else {
            return new Uint8Array(bufferSource.buffer, bufferSource.byteOffset, bufferSource.byteLength);
        }
    }
    /** Utility function to identify type of bufferSource. Necessary because of differences between runtimes */
    static isArrayBuffer(bufferSource) {
        return bufferSource instanceof ArrayBuffer || bufferSource.buffer === undefined;
    }
    static fromB64toUrlB64(b64Str) {
        return b64Str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }
    static fromBufferToB64(buffer) {
        if (buffer == null) {
            return null;
        }
        let binary = "";
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return globalThis.btoa(binary);
    }
    static fromB64ToArray(str) {
        if (str == null) {
            return null;
        }
        const binaryString = globalThis.atob(str);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }
    static fromUrlB64ToB64(urlB64Str) {
        let output = urlB64Str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += "==";
                break;
            case 3:
                output += "=";
                break;
            default:
                throw new Error("Illegal base64url string!");
        }
        return output;
    }
}


/***/ }),

/***/ "./src/autofill/fido2/content/messaging/message.ts":
/*!*********************************************************!*\
  !*** ./src/autofill/fido2/content/messaging/message.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageTypes: function() { return /* binding */ MessageTypes; }
/* harmony export */ });
const MessageTypes = {
    CredentialCreationRequest: 0,
    CredentialCreationResponse: 1,
    CredentialGetRequest: 2,
    CredentialGetResponse: 3,
    AbortRequest: 4,
    DisconnectRequest: 5,
    ReconnectRequest: 6,
    AbortResponse: 7,
    ErrorResponse: 8,
};


/***/ }),

/***/ "./src/autofill/fido2/content/messaging/messenger.ts":
/*!***********************************************************!*\
  !*** ./src/autofill/fido2/content/messaging/messenger.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messenger: function() { return /* binding */ Messenger; }
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/autofill/fido2/content/messaging/message.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore

const SENDER = "bitwarden-webauthn";
/**
 * A class that handles communication between the page and content script. It converts
 * the browser's broadcasting API into a request/response API with support for seamlessly
 * handling aborts and exceptions across separate execution contexts.
 */
class Messenger {
    /**
     * Creates a messenger that uses the browser's `window.postMessage` API to initiate
     * requests in the content script. Every request will then create it's own
     * `MessageChannel` through which all subsequent communication will be sent through.
     *
     * @param window the window object to use for communication
     * @returns a `Messenger` instance
     */
    static forDOMCommunication(window) {
        const windowOrigin = window.location.origin;
        return new Messenger({
            postMessage: (message, port) => window.postMessage(message, windowOrigin, [port]),
            addEventListener: (listener) => window.addEventListener("message", listener),
            removeEventListener: (listener) => window.removeEventListener("message", listener),
        });
    }
    constructor(broadcastChannel) {
        this.broadcastChannel = broadcastChannel;
        this.messageEventListener = null;
        this.onDestroy = new EventTarget();
        this.messengerId = this.generateUniqueId();
        this.messageEventListener = this.createMessageEventListener();
        this.broadcastChannel.addEventListener(this.messageEventListener);
    }
    /**
     * Sends a request to the content script and returns the response.
     * AbortController signals will be forwarded to the content script.
     *
     * @param request data to send to the content script
     * @param abortSignal the abort controller that might be used to abort the request
     * @returns the response from the content script
     */
    request(request, abortSignal) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestChannel = new MessageChannel();
            const { port1: localPort, port2: remotePort } = requestChannel;
            try {
                const promise = new Promise((resolve) => {
                    localPort.onmessage = (event) => resolve(event.data);
                });
                const abortListener = () => localPort.postMessage({
                    metadata: { SENDER },
                    type: _message__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.AbortRequest,
                });
                abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.addEventListener("abort", abortListener);
                this.broadcastChannel.postMessage(Object.assign(Object.assign({}, request), { SENDER, senderId: this.messengerId }), remotePort);
                const response = yield promise;
                abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.removeEventListener("abort", abortListener);
                if (response.type === _message__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.ErrorResponse) {
                    const error = new Error();
                    Object.assign(error, JSON.parse(response.error));
                    throw error;
                }
                return response;
            }
            finally {
                localPort.close();
            }
        });
    }
    createMessageEventListener() {
        return (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const windowOrigin = window.location.origin;
            if (event.origin !== windowOrigin || !this.handler) {
                return;
            }
            const message = event.data;
            const port = (_a = event.ports) === null || _a === void 0 ? void 0 : _a[0];
            if ((message === null || message === void 0 ? void 0 : message.SENDER) !== SENDER || message.senderId == this.messengerId || port == null) {
                return;
            }
            const abortController = new AbortController();
            port.onmessage = (event) => {
                if (event.data.type === _message__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.AbortRequest) {
                    abortController.abort();
                }
            };
            const onDestroyListener = () => abortController.abort();
            this.onDestroy.addEventListener("destroy", onDestroyListener);
            try {
                const handlerResponse = yield this.handler(message, abortController);
                port.postMessage(Object.assign(Object.assign({}, handlerResponse), { SENDER }));
            }
            catch (error) {
                port.postMessage({
                    SENDER,
                    type: _message__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.ErrorResponse,
                    error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
                });
            }
            finally {
                this.onDestroy.removeEventListener("destroy", onDestroyListener);
                port.close();
            }
        });
    }
    /**
     * Cleans up the messenger by removing the message event listener
     */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.onDestroy.dispatchEvent(new Event("destroy"));
            if (this.messageEventListener) {
                yield this.sendDisconnectCommand();
                this.broadcastChannel.removeEventListener(this.messageEventListener);
                this.messageEventListener = null;
            }
        });
    }
    sendDisconnectCommand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request({ type: _message__WEBPACK_IMPORTED_MODULE_0__.MessageTypes.DisconnectRequest });
        });
    }
    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
}


/***/ }),

/***/ "./src/autofill/fido2/utils/webauthn-utils.ts":
/*!****************************************************!*\
  !*** ./src/autofill/fido2/utils/webauthn-utils.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebauthnUtils: function() { return /* binding */ WebauthnUtils; }
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/services/fido2/fido2-utils */ "../../libs/common/src/platform/services/fido2/fido2-utils.ts");

class WebauthnUtils {
    static mapCredentialCreationOptions(options, fallbackSupported) {
        var _a, _b, _c, _d, _e;
        const keyOptions = options.publicKey;
        if (keyOptions == undefined) {
            throw new Error("Public-key options not found");
        }
        return {
            attestation: keyOptions.attestation,
            authenticatorSelection: {
                requireResidentKey: (_a = keyOptions.authenticatorSelection) === null || _a === void 0 ? void 0 : _a.requireResidentKey,
                residentKey: (_b = keyOptions.authenticatorSelection) === null || _b === void 0 ? void 0 : _b.residentKey,
                userVerification: (_c = keyOptions.authenticatorSelection) === null || _c === void 0 ? void 0 : _c.userVerification,
            },
            challenge: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.bufferToString(keyOptions.challenge),
            excludeCredentials: (_d = keyOptions.excludeCredentials) === null || _d === void 0 ? void 0 : _d.map((credential) => ({
                id: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.bufferToString(credential.id),
                transports: credential.transports,
                type: credential.type,
            })),
            extensions: {
                credProps: (_e = keyOptions.extensions) === null || _e === void 0 ? void 0 : _e.credProps,
            },
            pubKeyCredParams: keyOptions.pubKeyCredParams
                .map((params) => ({
                // Fix for spec-deviation: Sites using KeycloakJS send `kp.alg` as a string
                alg: Number(params.alg),
                type: params.type,
            }))
                .filter((params) => !isNaN(params.alg)),
            rp: {
                id: keyOptions.rp.id,
                name: keyOptions.rp.name,
            },
            user: {
                id: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.bufferToString(keyOptions.user.id),
                displayName: keyOptions.user.displayName,
                name: keyOptions.user.name,
            },
            timeout: keyOptions.timeout,
            fallbackSupported,
        };
    }
    static mapCredentialRegistrationResult(result) {
        const credential = {
            id: result.credentialId,
            rawId: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.credentialId),
            type: "public-key",
            authenticatorAttachment: "platform",
            response: {
                clientDataJSON: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.clientDataJSON),
                attestationObject: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.attestationObject),
                getAuthenticatorData() {
                    return _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.authData);
                },
                getPublicKey() {
                    return _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.publicKey);
                },
                getPublicKeyAlgorithm() {
                    return result.publicKeyAlgorithm;
                },
                getTransports() {
                    return result.transports;
                },
            },
            getClientExtensionResults: () => ({
                credProps: result.extensions.credProps,
            }),
            toJSON: () => _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.createResultToJson(result),
        };
        // Modify prototype chains to fix `instanceof` calls.
        // This makes these objects indistinguishable from the native classes.
        // Unfortunately PublicKeyCredential does not have a javascript constructor so `extends` does not work here.
        Object.setPrototypeOf(credential.response, AuthenticatorAttestationResponse.prototype);
        Object.setPrototypeOf(credential, PublicKeyCredential.prototype);
        return credential;
    }
    static mapCredentialRequestOptions(options, fallbackSupported) {
        var _a, _b;
        const keyOptions = options.publicKey;
        if (keyOptions == undefined) {
            throw new Error("Public-key options not found");
        }
        return {
            allowedCredentialIds: (_b = (_a = keyOptions.allowCredentials) === null || _a === void 0 ? void 0 : _a.map((c) => _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.bufferToString(c.id))) !== null && _b !== void 0 ? _b : [],
            challenge: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.bufferToString(keyOptions.challenge),
            rpId: keyOptions.rpId,
            userVerification: keyOptions.userVerification,
            timeout: keyOptions.timeout,
            mediation: options.mediation,
            fallbackSupported,
        };
    }
    static mapCredentialAssertResult(result) {
        const credential = {
            id: result.credentialId,
            rawId: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.credentialId),
            type: "public-key",
            response: {
                authenticatorData: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.authenticatorData),
                clientDataJSON: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.clientDataJSON),
                signature: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.signature),
                userHandle: _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.stringToBuffer(result.userHandle),
            },
            getClientExtensionResults: () => ({}),
            authenticatorAttachment: "platform",
            toJSON: () => _bitwarden_common_platform_services_fido2_fido2_utils__WEBPACK_IMPORTED_MODULE_0__.Fido2Utils.getResultToJson(result),
        };
        // Modify prototype chains to fix `instanceof` calls.
        // This makes these objects indistinguishable from the native classes.
        // Unfortunately PublicKeyCredential does not have a javascript constructor so `extends` does not work here.
        Object.setPrototypeOf(credential.response, AuthenticatorAssertionResponse.prototype);
        Object.setPrototypeOf(credential, PublicKeyCredential.prototype);
        return credential;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!*********************************************************!*\
  !*** ./src/autofill/fido2/content/fido2-page-script.ts ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/webauthn-utils */ "./src/autofill/fido2/utils/webauthn-utils.ts");
/* harmony import */ var _messaging_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messaging/message */ "./src/autofill/fido2/content/messaging/message.ts");
/* harmony import */ var _messaging_messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messaging/messenger */ "./src/autofill/fido2/content/messaging/messenger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore



(function (globalContext) {
    if (globalContext.document.currentScript) {
        globalContext.document.currentScript.parentNode.removeChild(globalContext.document.currentScript);
    }
    const shouldExecuteContentScript = globalContext.document.contentType === "text/html" &&
        (globalContext.document.location.protocol === "https:" ||
            (globalContext.document.location.protocol === "http:" &&
                globalContext.document.location.hostname === "localhost"));
    if (!shouldExecuteContentScript) {
        return;
    }
    const BrowserPublicKeyCredential = globalContext.PublicKeyCredential;
    const BrowserNavigatorCredentials = navigator.credentials;
    const BrowserAuthenticatorAttestationResponse = globalContext.AuthenticatorAttestationResponse;
    const browserNativeWebauthnSupport = globalContext.PublicKeyCredential != undefined;
    let browserNativeWebauthnPlatformAuthenticatorSupport = false;
    if (!browserNativeWebauthnSupport) {
        // Polyfill webauthn support
        try {
            // credentials are read-only if supported, use type-casting to force assignment
            navigator.credentials = {
                create() {
                    return __awaiter(this, void 0, void 0, function* () {
                        throw new Error("Webauthn not supported in this browser.");
                    });
                },
                get() {
                    return __awaiter(this, void 0, void 0, function* () {
                        throw new Error("Webauthn not supported in this browser.");
                    });
                },
            };
            globalContext.PublicKeyCredential = class PolyfillPublicKeyCredential {
                static isUserVerifyingPlatformAuthenticatorAvailable() {
                    return Promise.resolve(true);
                }
            };
            globalContext.AuthenticatorAttestationResponse =
                class PolyfillAuthenticatorAttestationResponse {
                };
        }
        catch (_a) {
            /* empty */
        }
    }
    else {
        void BrowserPublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then((available) => {
            browserNativeWebauthnPlatformAuthenticatorSupport = available;
            if (!available) {
                // Polyfill platform authenticator support
                globalContext.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable = () => Promise.resolve(true);
            }
        });
    }
    const browserCredentials = {
        create: navigator.credentials.create.bind(navigator.credentials),
        get: navigator.credentials.get.bind(navigator.credentials),
    };
    const messenger = _messaging_messenger__WEBPACK_IMPORTED_MODULE_2__.Messenger.forDOMCommunication(window);
    let waitForFocusTimeout;
    let focusListenerHandler;
    navigator.credentials.create = createWebAuthnCredential;
    navigator.credentials.get = getWebAuthnCredential;
    /**
     * Creates a new webauthn credential.
     *
     * @param options Options for creating new credentials.
     * @returns Promise that resolves to the new credential object.
     */
    function createWebAuthnCredential(options) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!isWebauthnCall(options)) {
                return yield browserCredentials.create(options);
            }
            const authenticatorAttachmentIsPlatform = ((_b = (_a = options === null || options === void 0 ? void 0 : options.publicKey) === null || _a === void 0 ? void 0 : _a.authenticatorSelection) === null || _b === void 0 ? void 0 : _b.authenticatorAttachment) === "platform";
            const fallbackSupported = (authenticatorAttachmentIsPlatform && browserNativeWebauthnPlatformAuthenticatorSupport) ||
                (!authenticatorAttachmentIsPlatform && browserNativeWebauthnSupport);
            try {
                const response = yield messenger.request({
                    type: _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialCreationRequest,
                    data: _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialCreationOptions(options, fallbackSupported),
                }, options === null || options === void 0 ? void 0 : options.signal);
                if (response.type !== _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialCreationResponse) {
                    throw new Error("Something went wrong.");
                }
                return _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialRegistrationResult(response.result);
            }
            catch (error) {
                if (error && error.fallbackRequested && fallbackSupported) {
                    yield waitForFocus();
                    return yield browserCredentials.create(options);
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves a webauthn credential.
     *
     * @param options Options for creating new credentials.
     * @returns Promise that resolves to the new credential object.
     */
    function getWebAuthnCredential(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isWebauthnCall(options)) {
                return yield browserCredentials.get(options);
            }
            const abortSignal = (options === null || options === void 0 ? void 0 : options.signal) || new AbortController().signal;
            const fallbackSupported = browserNativeWebauthnSupport;
            if ((options === null || options === void 0 ? void 0 : options.mediation) && options.mediation === "conditional") {
                const internalAbortControllers = [new AbortController(), new AbortController()];
                const bitwardenResponse = (internalAbortController) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const abortListener = () => messenger.request({
                            type: _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.AbortRequest,
                            abortedRequestId: abortSignal.toString(),
                        });
                        internalAbortController.signal.addEventListener("abort", abortListener);
                        const response = yield messenger.request({
                            type: _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialGetRequest,
                            data: _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialRequestOptions(options, fallbackSupported),
                        }, internalAbortController.signal);
                        internalAbortController.signal.removeEventListener("abort", abortListener);
                        if (response.type !== _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialGetResponse) {
                            throw new Error("Something went wrong.");
                        }
                        return _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialAssertResult(response.result);
                    }
                    catch (_a) {
                        // Ignoring error
                    }
                });
                const browserResponse = (internalAbortController) => browserCredentials.get(Object.assign(Object.assign({}, options), { signal: internalAbortController.signal }));
                const abortListener = () => {
                    internalAbortControllers.forEach((controller) => controller.abort());
                };
                abortSignal.addEventListener("abort", abortListener);
                const response = yield Promise.race([
                    bitwardenResponse(internalAbortControllers[0]),
                    browserResponse(internalAbortControllers[1]),
                ]);
                abortSignal.removeEventListener("abort", abortListener);
                internalAbortControllers.forEach((controller) => controller.abort());
                return response;
            }
            try {
                const response = yield messenger.request({
                    type: _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialGetRequest,
                    data: _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialRequestOptions(options, fallbackSupported),
                }, options === null || options === void 0 ? void 0 : options.signal);
                if (response.type !== _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.CredentialGetResponse) {
                    throw new Error("Something went wrong.");
                }
                return _utils_webauthn_utils__WEBPACK_IMPORTED_MODULE_0__.WebauthnUtils.mapCredentialAssertResult(response.result);
            }
            catch (error) {
                if (error && error.fallbackRequested && fallbackSupported) {
                    yield waitForFocus();
                    return yield browserCredentials.get(options);
                }
                throw error;
            }
        });
    }
    function isWebauthnCall(options) {
        return options && "publicKey" in options;
    }
    /**
     * Wait for window to be focused.
     * Safari doesn't allow scripts to trigger webauthn when window is not focused.
     *
     * @param fallbackWait How long to wait when the script is not able to add event listeners to `window.top`. Defaults to 500ms.
     * @param timeout Maximum time to wait for focus in milliseconds. Defaults to 5 minutes.
     * @returns Promise that resolves when window is focused, or rejects if timeout is reached.
     */
    function waitForFocus() {
        return __awaiter(this, arguments, void 0, function* (fallbackWait = 500, timeout = 5 * 60 * 1000) {
            try {
                if (globalContext.top.document.hasFocus()) {
                    return;
                }
            }
            catch (_a) {
                // Cannot access window.top due to cross-origin frame, fallback to waiting
                return yield new Promise((resolve) => globalContext.setTimeout(resolve, fallbackWait));
            }
            const focusPromise = new Promise((resolve) => {
                focusListenerHandler = () => resolve();
                globalContext.top.addEventListener("focus", focusListenerHandler);
            });
            const timeoutPromise = new Promise((_, reject) => {
                waitForFocusTimeout = globalContext.setTimeout(() => reject(new DOMException("The operation either timed out or was not allowed.", "AbortError")), timeout);
            });
            try {
                yield Promise.race([focusPromise, timeoutPromise]);
            }
            finally {
                clearWaitForFocus();
            }
        });
    }
    function clearWaitForFocus() {
        globalContext.top.removeEventListener("focus", focusListenerHandler);
        if (waitForFocusTimeout) {
            globalContext.clearTimeout(waitForFocusTimeout);
        }
    }
    function destroy() {
        try {
            if (browserNativeWebauthnSupport) {
                navigator.credentials.create = browserCredentials.create;
                navigator.credentials.get = browserCredentials.get;
            }
            else {
                navigator.credentials = BrowserNavigatorCredentials;
                globalContext.PublicKeyCredential = BrowserPublicKeyCredential;
                globalContext.AuthenticatorAttestationResponse = BrowserAuthenticatorAttestationResponse;
            }
            clearWaitForFocus();
            void messenger.destroy();
            // FIXME: Remove when updating file. Eslint update
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (e) {
            /** empty */
        }
    }
    /**
     * Sets up a listener to handle cleanup or reconnection when the extension's
     * context changes due to being reloaded or unloaded.
     */
    messenger.handler = (message) => {
        const type = message.type;
        // Handle cleanup for disconnect request
        if (type === _messaging_message__WEBPACK_IMPORTED_MODULE_1__.MessageTypes.DisconnectRequest) {
            destroy();
        }
    };
})(globalThis);

}();
/******/ })()
;