/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/autofill/constants/index.ts":
/*!*********************************************************!*\
  !*** ../../libs/common/src/autofill/constants/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTOFILL_CARD_ID: function() { return /* binding */ AUTOFILL_CARD_ID; },
/* harmony export */   AUTOFILL_ID: function() { return /* binding */ AUTOFILL_ID; },
/* harmony export */   AUTOFILL_IDENTITY_ID: function() { return /* binding */ AUTOFILL_IDENTITY_ID; },
/* harmony export */   AUTOFILL_OVERLAY_HANDLE_REPOSITION: function() { return /* binding */ AUTOFILL_OVERLAY_HANDLE_REPOSITION; },
/* harmony export */   AUTOFILL_OVERLAY_HANDLE_SCROLL: function() { return /* binding */ AUTOFILL_OVERLAY_HANDLE_SCROLL; },
/* harmony export */   AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT: function() { return /* binding */ AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT; },
/* harmony export */   AutofillOverlayVisibility: function() { return /* binding */ AutofillOverlayVisibility; },
/* harmony export */   BrowserClientVendors: function() { return /* binding */ BrowserClientVendors; },
/* harmony export */   BrowserShortcutsUris: function() { return /* binding */ BrowserShortcutsUris; },
/* harmony export */   CLEAR_NOTIFICATION_LOGIN_DATA_DURATION: function() { return /* binding */ CLEAR_NOTIFICATION_LOGIN_DATA_DURATION; },
/* harmony export */   COPY_IDENTIFIER_ID: function() { return /* binding */ COPY_IDENTIFIER_ID; },
/* harmony export */   COPY_PASSWORD_ID: function() { return /* binding */ COPY_PASSWORD_ID; },
/* harmony export */   COPY_USERNAME_ID: function() { return /* binding */ COPY_USERNAME_ID; },
/* harmony export */   COPY_VERIFICATION_CODE_ID: function() { return /* binding */ COPY_VERIFICATION_CODE_ID; },
/* harmony export */   CREATE_CARD_ID: function() { return /* binding */ CREATE_CARD_ID; },
/* harmony export */   CREATE_IDENTITY_ID: function() { return /* binding */ CREATE_IDENTITY_ID; },
/* harmony export */   CREATE_LOGIN_ID: function() { return /* binding */ CREATE_LOGIN_ID; },
/* harmony export */   CardExpiryDateDelimiters: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.CardExpiryDateDelimiters; },
/* harmony export */   ClearClipboardDelay: function() { return /* binding */ ClearClipboardDelay; },
/* harmony export */   DelimiterPatternExpression: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.DelimiterPatternExpression; },
/* harmony export */   DisablePasswordManagerUris: function() { return /* binding */ DisablePasswordManagerUris; },
/* harmony export */   EVENTS: function() { return /* binding */ EVENTS; },
/* harmony export */   ExpiryDateDelimitersPattern: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryDateDelimitersPattern; },
/* harmony export */   ExpiryFullYearPattern: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryFullYearPattern; },
/* harmony export */   ExpiryFullYearPatternExpression: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.ExpiryFullYearPatternExpression; },
/* harmony export */   ExtensionCommand: function() { return /* binding */ ExtensionCommand; },
/* harmony export */   GENERATE_PASSWORD_ID: function() { return /* binding */ GENERATE_PASSWORD_ID; },
/* harmony export */   IrrelevantExpiryCharactersPatternExpression: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.IrrelevantExpiryCharactersPatternExpression; },
/* harmony export */   MAX_DEEP_QUERY_RECURSION_DEPTH: function() { return /* binding */ MAX_DEEP_QUERY_RECURSION_DEPTH; },
/* harmony export */   MonthPattern: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.MonthPattern; },
/* harmony export */   MonthPatternExpression: function() { return /* reexport safe */ _match_patterns__WEBPACK_IMPORTED_MODULE_0__.MonthPatternExpression; },
/* harmony export */   NOOP_COMMAND_SUFFIX: function() { return /* binding */ NOOP_COMMAND_SUFFIX; },
/* harmony export */   NOTIFICATION_BAR_LIFESPAN_MS: function() { return /* binding */ NOTIFICATION_BAR_LIFESPAN_MS; },
/* harmony export */   ROOT_ID: function() { return /* binding */ ROOT_ID; },
/* harmony export */   SEPARATOR_ID: function() { return /* binding */ SEPARATOR_ID; },
/* harmony export */   SHOW_AUTOFILL_BUTTON: function() { return /* binding */ SHOW_AUTOFILL_BUTTON; },
/* harmony export */   TYPE_CHECK: function() { return /* binding */ TYPE_CHECK; },
/* harmony export */   UPDATE_PASSKEYS_HEADINGS_ON_SCROLL: function() { return /* binding */ UPDATE_PASSKEYS_HEADINGS_ON_SCROLL; },
/* harmony export */   UPDATE_PASSWORD: function() { return /* binding */ UPDATE_PASSWORD; }
/* harmony export */ });
/* harmony import */ var _match_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match-patterns */ "../../libs/common/src/autofill/constants/match-patterns.ts");
const TYPE_CHECK = {
    FUNCTION: "function",
    NUMBER: "number",
    STRING: "string",
};
const EVENTS = {
    CHANGE: "change",
    INPUT: "input",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    KEYUP: "keyup",
    BLUR: "blur",
    CLICK: "click",
    FOCUS: "focus",
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout",
    SCROLL: "scroll",
    RESIZE: "resize",
    DOMCONTENTLOADED: "DOMContentLoaded",
    LOAD: "load",
    MESSAGE: "message",
    VISIBILITYCHANGE: "visibilitychange",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    MOUSEUP: "mouseup",
    MOUSEOUT: "mouseout",
    SUBMIT: "submit",
};
const ClearClipboardDelay = {
    Never: null,
    TenSeconds: 10,
    TwentySeconds: 20,
    ThirtySeconds: 30,
    OneMinute: 60,
    TwoMinutes: 120,
    FiveMinutes: 300,
};
/* Ids for context menu items and messaging events */
const AUTOFILL_CARD_ID = "autofill-card";
const AUTOFILL_ID = "autofill";
const SHOW_AUTOFILL_BUTTON = "show-autofill-button";
const AUTOFILL_IDENTITY_ID = "autofill-identity";
const COPY_IDENTIFIER_ID = "copy-identifier";
const COPY_PASSWORD_ID = "copy-password";
const COPY_USERNAME_ID = "copy-username";
const COPY_VERIFICATION_CODE_ID = "copy-totp";
const CREATE_CARD_ID = "create-card";
const CREATE_IDENTITY_ID = "create-identity";
const CREATE_LOGIN_ID = "create-login";
const GENERATE_PASSWORD_ID = "generate-password";
const NOOP_COMMAND_SUFFIX = "noop";
const ROOT_ID = "root";
const SEPARATOR_ID = "separator";
const UPDATE_PASSWORD = "update-password";
const NOTIFICATION_BAR_LIFESPAN_MS = 150000; // 150 seconds
const AUTOFILL_OVERLAY_HANDLE_REPOSITION = "autofill-overlay-handle-reposition-event";
const AUTOFILL_OVERLAY_HANDLE_SCROLL = "autofill-overlay-handle-scroll-event";
const UPDATE_PASSKEYS_HEADINGS_ON_SCROLL = "update-passkeys-headings-on-scroll";
const AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT = "autofill-trigger-form-field-submit";
const AutofillOverlayVisibility = {
    Off: 0,
    OnButtonClick: 1,
    OnFieldFocus: 2,
};
const BrowserClientVendors = {
    Chrome: "Chrome",
    Opera: "Opera",
    Edge: "Edge",
    Vivaldi: "Vivaldi",
    Unknown: "Unknown",
};
const BrowserShortcutsUris = {
    Chrome: "chrome://extensions/shortcuts",
    Opera: "opera://extensions/shortcuts",
    Edge: "edge://extensions/shortcuts",
    Vivaldi: "vivaldi://extensions/shortcuts",
    Unknown: "https://bitwarden.com/help/keyboard-shortcuts",
};
const DisablePasswordManagerUris = {
    Chrome: "chrome://settings/autofill",
    Opera: "opera://settings/autofill",
    Edge: "edge://settings/passwords",
    Vivaldi: "vivaldi://settings/autofill",
    Unknown: "https://bitwarden.com/help/disable-browser-autofill/",
};
const ExtensionCommand = {
    AutofillCommand: "autofill_cmd",
    AutofillCard: "autofill_card",
    AutofillIdentity: "autofill_identity",
    AutofillLogin: "autofill_login",
    OpenAutofillOverlay: "open_autofill_overlay",
    GeneratePassword: "generate_password",
    OpenPopup: "open_popup",
    LockVault: "lock_vault",
    NoopCommand: "noop",
};
const CLEAR_NOTIFICATION_LOGIN_DATA_DURATION = 60 * 1000; // 1 minute
const MAX_DEEP_QUERY_RECURSION_DEPTH = 4;



/***/ }),

/***/ "../../libs/common/src/autofill/constants/match-patterns.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/autofill/constants/match-patterns.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardExpiryDateDelimiters: function() { return /* binding */ CardExpiryDateDelimiters; },
/* harmony export */   DelimiterPatternExpression: function() { return /* binding */ DelimiterPatternExpression; },
/* harmony export */   ExpiryDateDelimitersPattern: function() { return /* binding */ ExpiryDateDelimitersPattern; },
/* harmony export */   ExpiryFullYearPattern: function() { return /* binding */ ExpiryFullYearPattern; },
/* harmony export */   ExpiryFullYearPatternExpression: function() { return /* binding */ ExpiryFullYearPatternExpression; },
/* harmony export */   IrrelevantExpiryCharactersPatternExpression: function() { return /* binding */ IrrelevantExpiryCharactersPatternExpression; },
/* harmony export */   MonthPattern: function() { return /* binding */ MonthPattern; },
/* harmony export */   MonthPatternExpression: function() { return /* binding */ MonthPatternExpression; }
/* harmony export */ });
const CardExpiryDateDelimiters = ["/", "-", ".", " "];
// `CardExpiryDateDelimiters` is not intended solely for regex consumption,
// so we need to format it here
const ExpiryDateDelimitersPattern = "\\" +
    CardExpiryDateDelimiters.join("\\")
        // replace space character with the regex whitespace character class
        .replace(" ", "s");
const MonthPattern = "(([1]{1}[0-2]{1})|(0?[1-9]{1}))";
// Because we're dealing with expiry dates, we assume the year will be in current or next century (as of 2024)
const ExpiryFullYearPattern = "2[0-1]{1}\\d{2}";
const DelimiterPatternExpression = new RegExp(`[${ExpiryDateDelimitersPattern}]`, "g");
const IrrelevantExpiryCharactersPatternExpression = new RegExp(
// "nor digits" to ensure numbers are removed from guidance pattern, which aren't covered by ^\w
`[^\\d${ExpiryDateDelimitersPattern}]`, "g");
const MonthPatternExpression = new RegExp(`^${MonthPattern}$`);
const ExpiryFullYearPatternExpression = new RegExp(`^${ExpiryFullYearPattern}$`);


/***/ }),

/***/ "../../libs/common/src/platform/enums/encryption-type.enum.ts":
/*!********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/encryption-type.enum.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: function() { return /* binding */ EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE; },
/* harmony export */   EncryptionType: function() { return /* binding */ EncryptionType; },
/* harmony export */   encryptionTypeToString: function() { return /* binding */ encryptionTypeToString; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var EncryptionType;
(function (EncryptionType) {
    // Symmetric encryption types
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    // Type 1 was the unused and removed AesCbc128_HmacSha256_B64
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    // Cose is the encoding for the key used, but contained can be:
    // - XChaCha20Poly1305
    EncryptionType[EncryptionType["CoseEncrypt0"] = 7] = "CoseEncrypt0";
    // Asymmetric encryption types. These never occur in the same places that the symmetric ones would
    // and can be split out into a separate enum.
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
function encryptionTypeToString(encryptionType) {
    if (encryptionType in EncryptionType) {
        return EncryptionType[encryptionType];
    }
    else {
        return "Unknown encryption type " + encryptionType;
    }
}
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
    [EncryptionType.CoseEncrypt0]: 1,
};


/***/ }),

/***/ "../../libs/common/src/platform/enums/file-upload-type.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/file-upload-type.enum.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploadType: function() { return /* binding */ FileUploadType; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/hash-purpose.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/platform/enums/hash-purpose.enum.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HashPurpose: function() { return /* binding */ HashPurpose; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/html-storage-location.enum.ts":
/*!**************************************************************************!*\
  !*** ../../libs/common/src/platform/enums/html-storage-location.enum.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.HtmlStorageLocation; }
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/index.ts":
/*!*****************************************************!*\
  !*** ../../libs/common/src/platform/enums/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE; },
/* harmony export */   EncryptionType: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.EncryptionType; },
/* harmony export */   FileUploadType: function() { return /* reexport safe */ _file_upload_type_enum__WEBPACK_IMPORTED_MODULE_1__.FileUploadType; },
/* harmony export */   HashPurpose: function() { return /* reexport safe */ _hash_purpose_enum__WEBPACK_IMPORTED_MODULE_2__.HashPurpose; },
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_3__.HtmlStorageLocation; },
/* harmony export */   KeySuffixOptions: function() { return /* reexport safe */ _key_suffix_options_enum__WEBPACK_IMPORTED_MODULE_4__.KeySuffixOptions; },
/* harmony export */   LogLevelType: function() { return /* reexport safe */ _log_level_type_enum__WEBPACK_IMPORTED_MODULE_5__.LogLevelType; },
/* harmony export */   StorageLocation: function() { return /* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_6__.StorageLocation; },
/* harmony export */   ThemeType: function() { return /* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeType; },
/* harmony export */   ThemeTypes: function() { return /* reexport safe */ _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__.ThemeTypes; },
/* harmony export */   encryptionTypeToString: function() { return /* reexport safe */ _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__.encryptionTypeToString; }
/* harmony export */ });
/* harmony import */ var _encryption_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encryption-type.enum */ "../../libs/common/src/platform/enums/encryption-type.enum.ts");
/* harmony import */ var _file_upload_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload-type.enum */ "../../libs/common/src/platform/enums/file-upload-type.enum.ts");
/* harmony import */ var _hash_purpose_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash-purpose.enum */ "../../libs/common/src/platform/enums/hash-purpose.enum.ts");
/* harmony import */ var _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-storage-location.enum */ "../../libs/common/src/platform/enums/html-storage-location.enum.ts");
/* harmony import */ var _key_suffix_options_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-suffix-options.enum */ "../../libs/common/src/platform/enums/key-suffix-options.enum.ts");
/* harmony import */ var _log_level_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-level-type.enum */ "../../libs/common/src/platform/enums/log-level-type.enum.ts");
/* harmony import */ var _storage_location_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-location.enum */ "../../libs/common/src/platform/enums/storage-location.enum.ts");
/* harmony import */ var _theme_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-type.enum */ "../../libs/common/src/platform/enums/theme-type.enum.ts");










/***/ }),

/***/ "../../libs/common/src/platform/enums/key-suffix-options.enum.ts":
/*!***********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/key-suffix-options.enum.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeySuffixOptions: function() { return /* binding */ KeySuffixOptions; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));


/***/ }),

/***/ "../../libs/common/src/platform/enums/log-level-type.enum.ts":
/*!*******************************************************************!*\
  !*** ../../libs/common/src/platform/enums/log-level-type.enum.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevelType: function() { return /* reexport safe */ _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__.LogLevel; }
/* harmony export */ });
/* harmony import */ var _bitwarden_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/logging */ "../../libs/logging/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/storage-location.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/platform/enums/storage-location.enum.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocation: function() { return /* reexport safe */ _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__.StorageLocationEnum; }
/* harmony export */ });
/* harmony import */ var _bitwarden_storage_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/storage-core */ "../../libs/storage-core/src/index.ts");



/***/ }),

/***/ "../../libs/common/src/platform/enums/theme-type.enum.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/platform/enums/theme-type.enum.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeType: function() { return /* binding */ ThemeType; },
/* harmony export */   ThemeTypes: function() { return /* binding */ ThemeTypes; }
/* harmony export */ });
/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType || (ThemeType = {}));
const ThemeTypes = {
    System: "system",
    Light: "light",
    Dark: "dark",
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/cipher-reprompt-type.ts":
/*!*****************************************************************!*\
  !*** ../../libs/common/src/vault/enums/cipher-reprompt-type.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherRepromptType: function() { return /* binding */ CipherRepromptType; }
/* harmony export */ });
const CipherRepromptType = {
    None: 0,
    Password: 1,
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/cipher-type.ts":
/*!********************************************************!*\
  !*** ../../libs/common/src/vault/enums/cipher-type.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CipherType: function() { return /* binding */ CipherType; },
/* harmony export */   cipherTypeNames: function() { return /* binding */ cipherTypeNames; },
/* harmony export */   isCipherType: function() { return /* binding */ isCipherType; },
/* harmony export */   toCipherType: function() { return /* binding */ toCipherType; },
/* harmony export */   toCipherTypeName: function() { return /* binding */ toCipherTypeName; }
/* harmony export */ });
const _CipherType = Object.freeze({
    Login: 1,
    SecureNote: 2,
    Card: 3,
    Identity: 4,
    SshKey: 5,
});
// FIXME: Update typing of `CipherType` to be `Record<keyof _CipherType, CipherType>` which is ADR-0025 compliant when the TypeScript version is at least 5.8.
const CipherType = _CipherType;
/**
 * Reverse mapping of Cipher Types to their associated names.
 * Prefer using {@link toCipherTypeName} rather than accessing this object directly.
 *
 * When represented as an enum in TypeScript, this mapping was provided
 * by default. Now using a constant object it needs to be defined manually.
 */
const cipherTypeNames = Object.freeze(Object.fromEntries(Object.entries(CipherType).map(([key, value]) => [value, key])));
/**
 * Returns the associated name for the cipher type, will throw when the name is not found.
 */
function toCipherTypeName(type) {
    const name = cipherTypeNames[type];
    return name;
}
/**
 * @returns `true` if the value is a valid `CipherType`, `false` otherwise.
 */
const isCipherType = (value) => {
    return Object.values(CipherType).includes(value);
};
/**
 * Converts a value to a `CipherType` if it is valid, otherwise returns `null`.
 */
const toCipherType = (value) => {
    if (isCipherType(value)) {
        return value;
    }
    if (typeof value === "string") {
        const valueAsInt = parseInt(value, 10);
        if (isCipherType(valueAsInt)) {
            return valueAsInt;
        }
    }
    return undefined;
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/extension-page-urls.enum.ts":
/*!*********************************************************************!*\
  !*** ../../libs/common/src/vault/enums/extension-page-urls.enum.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionPageUrls: function() { return /* binding */ ExtensionPageUrls; }
/* harmony export */ });
/**
 * Available pages within the extension by their URL.
 * Useful when opening a specific page within the popup.
 */
const ExtensionPageUrls = {
    Index: "popup/index.html#/",
    AtRiskPasswords: "popup/index.html#/at-risk-passwords",
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/field-type.enum.ts":
/*!************************************************************!*\
  !*** ../../libs/common/src/vault/enums/field-type.enum.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldType: function() { return /* binding */ FieldType; }
/* harmony export */ });
const _FieldType = Object.freeze({
    Text: 0,
    Hidden: 1,
    Boolean: 2,
    Linked: 3,
});
const FieldType = _FieldType;


/***/ }),

/***/ "../../libs/common/src/vault/enums/index.ts":
/*!**************************************************!*\
  !*** ../../libs/common/src/vault/enums/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLinkedId: function() { return /* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.CardLinkedId; },
/* harmony export */   CipherRepromptType: function() { return /* reexport safe */ _cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_0__.CipherRepromptType; },
/* harmony export */   CipherType: function() { return /* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.CipherType; },
/* harmony export */   ExtensionPageUrls: function() { return /* reexport safe */ _extension_page_urls_enum__WEBPACK_IMPORTED_MODULE_5__.ExtensionPageUrls; },
/* harmony export */   FieldType: function() { return /* reexport safe */ _field_type_enum__WEBPACK_IMPORTED_MODULE_2__.FieldType; },
/* harmony export */   IdentityLinkedId: function() { return /* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.IdentityLinkedId; },
/* harmony export */   LoginLinkedId: function() { return /* reexport safe */ _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__.LoginLinkedId; },
/* harmony export */   SecureNoteType: function() { return /* reexport safe */ _secure_note_type_enum__WEBPACK_IMPORTED_MODULE_4__.SecureNoteType; },
/* harmony export */   cipherTypeNames: function() { return /* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.cipherTypeNames; },
/* harmony export */   isCipherType: function() { return /* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.isCipherType; },
/* harmony export */   toCipherType: function() { return /* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.toCipherType; },
/* harmony export */   toCipherTypeName: function() { return /* reexport safe */ _cipher_type__WEBPACK_IMPORTED_MODULE_1__.toCipherTypeName; }
/* harmony export */ });
/* harmony import */ var _cipher_reprompt_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-reprompt-type */ "../../libs/common/src/vault/enums/cipher-reprompt-type.ts");
/* harmony import */ var _cipher_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cipher-type */ "../../libs/common/src/vault/enums/cipher-type.ts");
/* harmony import */ var _field_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-type.enum */ "../../libs/common/src/vault/enums/field-type.enum.ts");
/* harmony import */ var _linked_id_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linked-id-type.enum */ "../../libs/common/src/vault/enums/linked-id-type.enum.ts");
/* harmony import */ var _secure_note_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secure-note-type.enum */ "../../libs/common/src/vault/enums/secure-note-type.enum.ts");
/* harmony import */ var _extension_page_urls_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extension-page-urls.enum */ "../../libs/common/src/vault/enums/extension-page-urls.enum.ts");








/***/ }),

/***/ "../../libs/common/src/vault/enums/linked-id-type.enum.ts":
/*!****************************************************************!*\
  !*** ../../libs/common/src/vault/enums/linked-id-type.enum.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLinkedId: function() { return /* binding */ CardLinkedId; },
/* harmony export */   IdentityLinkedId: function() { return /* binding */ IdentityLinkedId; },
/* harmony export */   LoginLinkedId: function() { return /* binding */ LoginLinkedId; }
/* harmony export */ });
// LoginView
const LoginLinkedId = {
    Username: 100,
    Password: 101,
};
// CardView
const CardLinkedId = {
    CardholderName: 300,
    ExpMonth: 301,
    ExpYear: 302,
    Code: 303,
    Brand: 304,
    Number: 305,
};
// IdentityView
const IdentityLinkedId = {
    Title: 400,
    MiddleName: 401,
    Address1: 402,
    Address2: 403,
    Address3: 404,
    City: 405,
    State: 406,
    PostalCode: 407,
    Country: 408,
    Company: 409,
    Email: 410,
    Phone: 411,
    Ssn: 412,
    Username: 413,
    PassportNumber: 414,
    LicenseNumber: 415,
    FirstName: 416,
    LastName: 417,
    FullName: 418,
};


/***/ }),

/***/ "../../libs/common/src/vault/enums/secure-note-type.enum.ts":
/*!******************************************************************!*\
  !*** ../../libs/common/src/vault/enums/secure-note-type.enum.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureNoteType: function() { return /* binding */ SecureNoteType; }
/* harmony export */ });
const SecureNoteType = {
    Generic: 0,
};


/***/ }),

/***/ "../../libs/logging/src/console-log.service.ts":
/*!*****************************************************!*\
  !*** ../../libs/logging/src/console-log.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: function() { return /* binding */ ConsoleLogService; }
/* harmony export */ });
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-level */ "../../libs/logging/src/log-level.ts");

class ConsoleLogService {
    constructor(isDev, filter = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.timersMap = new Map();
    }
    debug(message, ...optionalParams) {
        if (!this.isDev) {
            return;
        }
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info, message, ...optionalParams);
    }
    warning(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        this.write(_log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message, ...optionalParams);
    }
    write(level, message, ...optionalParams) {
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                // eslint-disable-next-line
                console.warn(message, ...optionalParams);
                break;
            case _log_level__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                // eslint-disable-next-line
                console.error(message, ...optionalParams);
                break;
            default:
                break;
        }
    }
}


/***/ }),

/***/ "../../libs/logging/src/index.ts":
/*!***************************************!*\
  !*** ../../libs/logging/src/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogService: function() { return /* reexport safe */ _console_log_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleLogService; },
/* harmony export */   LogLevel: function() { return /* reexport safe */ _log_level__WEBPACK_IMPORTED_MODULE_1__.LogLevel; },
/* harmony export */   LogService: function() { return /* reexport safe */ _log_service__WEBPACK_IMPORTED_MODULE_0__.LogService; }
/* harmony export */ });
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.service */ "../../libs/logging/src/log.service.ts");
/* harmony import */ var _log_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-level */ "../../libs/logging/src/log-level.ts");
/* harmony import */ var _console_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console-log.service */ "../../libs/logging/src/console-log.service.ts");





/***/ }),

/***/ "../../libs/logging/src/log-level.ts":
/*!*******************************************!*\
  !*** ../../libs/logging/src/log-level.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: function() { return /* binding */ LogLevel; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "../../libs/logging/src/log.service.ts":
/*!*********************************************!*\
  !*** ../../libs/logging/src/log.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogService: function() { return /* binding */ LogService; }
/* harmony export */ });
class LogService {
}


/***/ }),

/***/ "../../libs/storage-core/src/client-locations.ts":
/*!*******************************************************!*\
  !*** ../../libs/storage-core/src/client-locations.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/html-storage-location.enum.ts":
/*!*****************************************************************!*\
  !*** ../../libs/storage-core/src/html-storage-location.enum.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlStorageLocation: function() { return /* binding */ HtmlStorageLocation; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));


/***/ }),

/***/ "../../libs/storage-core/src/index.ts":
/*!********************************************!*\
  !*** ../../libs/storage-core/src/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStorageService: function() { return /* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService; },
/* harmony export */   HtmlStorageLocation: function() { return /* reexport safe */ _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_1__.HtmlStorageLocation; },
/* harmony export */   MemoryStorageService: function() { return /* reexport safe */ _memory_storage_service__WEBPACK_IMPORTED_MODULE_2__.MemoryStorageService; },
/* harmony export */   SerializedMemoryStorageService: function() { return /* reexport safe */ _serialized_memory_storage_service__WEBPACK_IMPORTED_MODULE_3__.SerializedMemoryStorageService; },
/* harmony export */   StorageLocationEnum: function() { return /* reexport safe */ _storage_location_enum__WEBPACK_IMPORTED_MODULE_5__.StorageLocationEnum; },
/* harmony export */   StorageService: function() { return /* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService; },
/* harmony export */   StorageServiceProvider: function() { return /* reexport safe */ _storage_service_provider__WEBPACK_IMPORTED_MODULE_7__.StorageServiceProvider; }
/* harmony export */ });
/* harmony import */ var _client_locations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-locations */ "../../libs/storage-core/src/client-locations.ts");
/* harmony import */ var _html_storage_location_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-storage-location.enum */ "../../libs/storage-core/src/html-storage-location.enum.ts");
/* harmony import */ var _memory_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memory-storage.service */ "../../libs/storage-core/src/memory-storage.service.ts");
/* harmony import */ var _serialized_memory_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialized-memory-storage.service */ "../../libs/storage-core/src/serialized-memory-storage.service.ts");
/* harmony import */ var _storage_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-location */ "../../libs/storage-core/src/storage-location.ts");
/* harmony import */ var _storage_location_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-location.enum */ "../../libs/storage-core/src/storage-location.enum.ts");
/* harmony import */ var _storage_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-options */ "../../libs/storage-core/src/storage-options.ts");
/* harmony import */ var _storage_service_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-service.provider */ "../../libs/storage-core/src/storage-service.provider.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");








// Renamed to just "StorageService", to be removed when references are updated




/***/ }),

/***/ "../../libs/storage-core/src/memory-storage.service.ts":
/*!*************************************************************!*\
  !*** ../../libs/storage-core/src/memory-storage.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryStorageService: function() { return /* binding */ MemoryStorageService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");
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


class MemoryStorageService extends _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService {
    constructor() {
        super(...arguments);
        this.store = new Map();
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get valuesRequireDeserialization() {
        return false;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        if (this.store.has(key)) {
            const obj = this.store.get(key);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        const toStore = structuredClone(obj);
        this.store.set(key, toStore);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        this.store.delete(key);
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/serialized-memory-storage.service.ts":
/*!************************************************************************!*\
  !*** ../../libs/storage-core/src/serialized-memory-storage.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerializedMemoryStorageService: function() { return /* binding */ SerializedMemoryStorageService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "../../libs/storage-core/src/storage.service.ts");
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


class SerializedMemoryStorageService extends _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService {
    constructor() {
        super(...arguments);
        this.store = {};
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get valuesRequireDeserialization() {
        return true;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        const json = this.store[key];
        if (json) {
            const obj = JSON.parse(json);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        this.store[key] = JSON.stringify(obj);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        delete this.store[key];
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/storage-location.enum.ts":
/*!************************************************************!*\
  !*** ../../libs/storage-core/src/storage-location.enum.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageLocationEnum: function() { return /* binding */ StorageLocationEnum; }
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var StorageLocationEnum;
(function (StorageLocationEnum) {
    StorageLocationEnum["Both"] = "both";
    StorageLocationEnum["Disk"] = "disk";
    StorageLocationEnum["Memory"] = "memory";
})(StorageLocationEnum || (StorageLocationEnum = {}));


/***/ }),

/***/ "../../libs/storage-core/src/storage-location.ts":
/*!*******************************************************!*\
  !*** ../../libs/storage-core/src/storage-location.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-options.ts":
/*!******************************************************!*\
  !*** ../../libs/storage-core/src/storage-options.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../libs/storage-core/src/storage-service.provider.ts":
/*!***************************************************************!*\
  !*** ../../libs/storage-core/src/storage-service.provider.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageServiceProvider: function() { return /* binding */ StorageServiceProvider; }
/* harmony export */ });
/**
 * A provider for getting client specific computed storage locations and services.
 */
class StorageServiceProvider {
    constructor(diskStorageService, memoryStorageService) {
        this.diskStorageService = diskStorageService;
        this.memoryStorageService = memoryStorageService;
    }
    /**
     * Computes the location and corresponding service for a given client.
     *
     * **NOTE** The default implementation does not respect client overrides and if clients
     * have special overrides they are responsible for implementing this service.
     * @param defaultLocation The default location to use if no client specific override is preferred.
     * @param overrides Client specific overrides
     * @returns The computed storage location and corresponding storage service to use to get/store state.
     * @throws If there is no configured storage service for the given inputs.
     */
    get(defaultLocation, overrides) {
        switch (defaultLocation) {
            case "disk":
                return [defaultLocation, this.diskStorageService];
            case "memory":
                return [defaultLocation, this.memoryStorageService];
            default:
                throw new Error(`Unexpected location: ${defaultLocation}`);
        }
    }
}


/***/ }),

/***/ "../../libs/storage-core/src/storage.service.ts":
/*!******************************************************!*\
  !*** ../../libs/storage-core/src/storage.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: function() { return /* binding */ StorageService; }
/* harmony export */ });
class StorageService {
}


/***/ }),

/***/ "../../node_modules/@webcomponents/custom-elements/custom-elements.min.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \********************************************************************************/
/***/ (function() {

(function () {
  /*
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   Google as part of the polymer project is also subject to an additional IP
   rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  var n = window.Document.prototype.createElement,
    p = window.Document.prototype.createElementNS,
    aa = window.Document.prototype.importNode,
    ba = window.Document.prototype.prepend,
    ca = window.Document.prototype.append,
    da = window.DocumentFragment.prototype.prepend,
    ea = window.DocumentFragment.prototype.append,
    q = window.Node.prototype.cloneNode,
    r = window.Node.prototype.appendChild,
    t = window.Node.prototype.insertBefore,
    u = window.Node.prototype.removeChild,
    v = window.Node.prototype.replaceChild,
    w = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
    y = window.Element.prototype.attachShadow,
    z = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
    A = window.Element.prototype.getAttribute,
    B = window.Element.prototype.setAttribute,
    C = window.Element.prototype.removeAttribute,
    D = window.Element.prototype.toggleAttribute,
    E = window.Element.prototype.getAttributeNS,
    F = window.Element.prototype.setAttributeNS,
    G = window.Element.prototype.removeAttributeNS,
    H = window.Element.prototype.insertAdjacentElement,
    fa = window.Element.prototype.insertAdjacentHTML,
    ha = window.Element.prototype.prepend,
    ia = window.Element.prototype.append,
    ja = window.Element.prototype.before,
    ka = window.Element.prototype.after,
    la = window.Element.prototype.replaceWith,
    ma = window.Element.prototype.remove,
    na = window.HTMLElement,
    I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
    oa = window.HTMLElement.prototype.insertAdjacentElement,
    pa = window.HTMLElement.prototype.insertAdjacentHTML;
  var qa = new Set();
  "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return qa.add(a);
  });
  function ra(a) {
    var b = qa.has(a);
    a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
    return !b && a;
  }
  var sa = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function J(a) {
    var b = a.isConnected;
    if (void 0 !== b) return b;
    if (sa(a)) return !0;
    for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }
  function K(a) {
    var b = a.children;
    if (b) return Array.prototype.slice.call(b);
    b = [];
    for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
    return b;
  }
  function L(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
    return b && b !== a ? b.nextSibling : null;
  }
  function M(a, b, d) {
    for (var f = a; f;) {
      if (f.nodeType === Node.ELEMENT_NODE) {
        var c = f;
        b(c);
        var e = c.localName;
        if ("link" === e && "import" === c.getAttribute("rel")) {
          f = c.import;
          void 0 === d && (d = new Set());
          if (f instanceof Node && !d.has(f)) for (d.add(f), f = f.firstChild; f; f = f.nextSibling) M(f, b, d);
          f = L(a, c);
          continue;
        } else if ("template" === e) {
          f = L(a, c);
          continue;
        }
        if (c = c.__CE_shadowRoot) for (c = c.firstChild; c; c = c.nextSibling) M(c, b, d);
      }
      f = f.firstChild ? f.firstChild : L(a, f);
    }
  }
  ;
  function N() {
    var a = !(null === O || void 0 === O || !O.noDocumentConstructionObserver),
      b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
    this.m = [];
    this.g = [];
    this.j = !1;
    this.shadyDomFastWalk = b;
    this.I = !a;
  }
  function P(a, b, d, f) {
    var c = window.ShadyDOM;
    if (a.shadyDomFastWalk && c && c.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && d(b), b.querySelectorAll) for (a = c.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) d(a[b]);
    } else M(b, d, f);
  }
  function ta(a, b) {
    a.j = !0;
    a.m.push(b);
  }
  function ua(a, b) {
    a.j = !0;
    a.g.push(b);
  }
  function Q(a, b) {
    a.j && P(a, b, function (d) {
      return R(a, d);
    });
  }
  function R(a, b) {
    if (a.j && !b.__CE_patched) {
      b.__CE_patched = !0;
      for (var d = 0; d < a.m.length; d++) a.m[d](b);
      for (d = 0; d < a.g.length; d++) a.g[d](b);
    }
  }
  function S(a, b) {
    var d = [];
    P(a, b, function (c) {
      return d.push(c);
    });
    for (b = 0; b < d.length; b++) {
      var f = d[b];
      1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
    }
  }
  function U(a, b) {
    var d = [];
    P(a, b, function (c) {
      return d.push(c);
    });
    for (b = 0; b < d.length; b++) {
      var f = d[b];
      1 === f.__CE_state && a.disconnectedCallback(f);
    }
  }
  function V(a, b, d) {
    d = void 0 === d ? {} : d;
    var f = d.J,
      c = d.upgrade || function (g) {
        return T(a, g);
      },
      e = [];
    P(a, b, function (g) {
      a.j && R(a, g);
      if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;
        h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
        h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;
          if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;
            var l = new Set();
            f && (f.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));
            V(a, k, {
              J: l,
              upgrade: c
            });
          }
        });
      } else e.push(g);
    }, f);
    for (b = 0; b < e.length; b++) c(e[b]);
  }
  function T(a, b) {
    try {
      var d = b.ownerDocument,
        f = d.__CE_registry;
      var c = f && (d.defaultView || d.__CE_isImportDocument) ? W(f, b.localName) : void 0;
      if (c && void 0 === b.__CE_state) {
        c.constructionStack.push(b);
        try {
          try {
            if (new c.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            c.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }
        b.__CE_state = 1;
        b.__CE_definition = c;
        if (c.attributeChangedCallback && b.hasAttributes()) {
          var e = c.observedAttributes;
          for (c = 0; c < e.length; c++) {
            var g = e[c],
              h = b.getAttribute(g);
            null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }
        J(b) && a.connectedCallback(b);
      }
    } catch (k) {
      X(k);
    }
  }
  N.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (d) {
      X(d);
    }
  };
  N.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;
    if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (d) {
      X(d);
    }
  };
  N.prototype.attributeChangedCallback = function (a, b, d, f, c) {
    var e = a.__CE_definition;
    if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b)) try {
      e.attributeChangedCallback.call(a, b, d, f, c);
    } catch (g) {
      X(g);
    }
  };
  function va(a, b, d, f) {
    var c = b.__CE_registry;
    if (c && (null === f || "http://www.w3.org/1999/xhtml" === f) && (c = W(c, d))) try {
      var e = new c.constructorFunction();
      if (void 0 === e.__CE_state || void 0 === e.__CE_definition) throw Error("Failed to construct '" + d + "': The returned value was not constructed with the HTMLElement constructor.");
      if ("http://www.w3.org/1999/xhtml" !== e.namespaceURI) throw Error("Failed to construct '" + d + "': The constructed element's namespace must be the HTML namespace.");
      if (e.hasAttributes()) throw Error("Failed to construct '" + d + "': The constructed element must not have any attributes.");
      if (null !== e.firstChild) throw Error("Failed to construct '" + d + "': The constructed element must not have any children.");
      if (null !== e.parentNode) throw Error("Failed to construct '" + d + "': The constructed element must not have a parent node.");
      if (e.ownerDocument !== b) throw Error("Failed to construct '" + d + "': The constructed element's owner document is incorrect.");
      if (e.localName !== d) throw Error("Failed to construct '" + d + "': The constructed element's local name is incorrect.");
      return e;
    } catch (g) {
      return X(g), b = null === f ? n.call(b, d) : p.call(b, f, d), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, R(a, b), b;
    }
    b = null === f ? n.call(b, d) : p.call(b, f, d);
    R(a, b);
    return b;
  }
  function X(a) {
    var b = "",
      d = "",
      f = 0,
      c = 0;
    a instanceof Error ? (b = a.message, d = a.sourceURL || a.fileName || "", f = a.line || a.lineNumber || 0, c = a.column || a.columnNumber || 0) : b = "Uncaught " + String(a);
    var e = void 0;
    void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent("error", {
      cancelable: !0,
      message: b,
      filename: d,
      lineno: f,
      colno: c,
      error: a
    }) : (e = document.createEvent("ErrorEvent"), e.initErrorEvent("error", !1, !0, b, d, f), e.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", {
        configurable: !0,
        get: function () {
          return !0;
        }
      });
    });
    void 0 === e.error && Object.defineProperty(e, "error", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return a;
      }
    });
    window.dispatchEvent(e);
    e.defaultPrevented || console.error(a);
  }
  ;
  function wa() {
    var a = this;
    this.g = void 0;
    this.F = new Promise(function (b) {
      a.l = b;
    });
  }
  wa.prototype.resolve = function (a) {
    if (this.g) throw Error("Already resolved.");
    this.g = a;
    this.l(a);
  };
  function xa(a) {
    var b = document;
    this.l = void 0;
    this.h = a;
    this.g = b;
    V(this.h, this.g);
    "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, {
      childList: !0,
      subtree: !0
    }));
  }
  function ya(a) {
    a.l && a.l.disconnect();
  }
  xa.prototype.G = function (a) {
    var b = this.g.readyState;
    "interactive" !== b && "complete" !== b || ya(this);
    for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, f = 0; f < d.length; f++) V(this.h, d[f]);
  };
  function Y(a) {
    this.s = new Map();
    this.u = new Map();
    this.C = new Map();
    this.A = !1;
    this.B = new Map();
    this.o = function (b) {
      return b();
    };
    this.i = !1;
    this.v = [];
    this.h = a;
    this.D = a.I ? new xa(a) : void 0;
  }
  Y.prototype.H = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
    za(this, a);
    this.s.set(a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return Aa(d);
    }));
  };
  Y.prototype.define = function (a, b) {
    var d = this;
    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
    za(this, a);
    Ba(this, a, b);
    this.v.push(a);
    this.i || (this.i = !0, this.o(function () {
      return Aa(d);
    }));
  };
  function za(a, b) {
    if (!ra(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
    if (W(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));
    if (a.A) throw Error("A custom element is already being defined.");
  }
  function Ba(a, b, d) {
    a.A = !0;
    var f;
    try {
      var c = d.prototype;
      if (!(c instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
      var e = function (m) {
        var x = c[m];
        if (void 0 !== x && !(x instanceof Function)) throw Error("The '" + m + "' callback must be a function.");
        return x;
      };
      var g = e("connectedCallback");
      var h = e("disconnectedCallback");
      var k = e("adoptedCallback");
      var l = (f = e("attributeChangedCallback")) && d.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.A = !1;
    }
    d = {
      localName: b,
      constructorFunction: d,
      connectedCallback: g,
      disconnectedCallback: h,
      adoptedCallback: k,
      attributeChangedCallback: f,
      observedAttributes: l,
      constructionStack: []
    };
    a.u.set(b, d);
    a.C.set(d.constructorFunction, d);
    return d;
  }
  Y.prototype.upgrade = function (a) {
    V(this.h, a);
  };
  function Aa(a) {
    if (!1 !== a.i) {
      a.i = !1;
      for (var b = [], d = a.v, f = new Map(), c = 0; c < d.length; c++) f.set(d[c], []);
      V(a.h, document, {
        upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
              m = f.get(l);
            m ? m.push(k) : a.u.has(l) && b.push(k);
          }
        }
      });
      for (c = 0; c < b.length; c++) T(a.h, b[c]);
      for (c = 0; c < d.length; c++) {
        for (var e = d[c], g = f.get(e), h = 0; h < g.length; h++) T(a.h, g[h]);
        (e = a.B.get(e)) && e.resolve(void 0);
      }
      d.length = 0;
    }
  }
  Y.prototype.get = function (a) {
    if (a = W(this, a)) return a.constructorFunction;
  };
  Y.prototype.whenDefined = function (a) {
    if (!ra(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
    var b = this.B.get(a);
    if (b) return b.F;
    b = new wa();
    this.B.set(a, b);
    var d = this.u.has(a) || this.s.has(a);
    a = -1 === this.v.indexOf(a);
    d && a && b.resolve(void 0);
    return b.F;
  };
  Y.prototype.polyfillWrapFlushCallback = function (a) {
    this.D && ya(this.D);
    var b = this.o;
    this.o = function (d) {
      return a(function () {
        return b(d);
      });
    };
  };
  function W(a, b) {
    var d = a.u.get(b);
    if (d) return d;
    if (d = a.s.get(b)) {
      a.s.delete(b);
      try {
        return Ba(a, b, d());
      } catch (f) {
        X(f);
      }
    }
  }
  Y.prototype.define = Y.prototype.define;
  Y.prototype.upgrade = Y.prototype.upgrade;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.whenDefined = Y.prototype.whenDefined;
  Y.prototype.polyfillDefineLazy = Y.prototype.H;
  Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
  function Z(a, b, d) {
    function f(c) {
      return function (e) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
        h = [];
        for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];
          m instanceof Element && J(m) && k.push(m);
          if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }
        c.apply(this, g);
        for (g = 0; g < k.length; g++) U(a, k[g]);
        if (J(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && S(a, k);
      };
    }
    void 0 !== d.prepend && (b.prepend = f(d.prepend));
    void 0 !== d.append && (b.append = f(d.append));
  }
  ;
  function Ca(a) {
    Document.prototype.createElement = function (b) {
      return va(a, this, b, null);
    };
    Document.prototype.importNode = function (b, d) {
      b = aa.call(this, b, !!d);
      this.__CE_registry ? V(a, b) : Q(a, b);
      return b;
    };
    Document.prototype.createElementNS = function (b, d) {
      return va(a, this, d, b);
    };
    Z(a, Document.prototype, {
      prepend: ba,
      append: ca
    });
  }
  ;
  function Da(a) {
    function b(f) {
      return function (c) {
        for (var e = [], g = 0; g < arguments.length; ++g) e[g] = arguments[g];
        g = [];
        for (var h = [], k = 0; k < e.length; k++) {
          var l = e[k];
          l instanceof Element && J(l) && h.push(l);
          if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }
        f.apply(this, e);
        for (e = 0; e < h.length; e++) U(a, h[e]);
        if (J(this)) for (e = 0; e < g.length; e++) h = g[e], h instanceof Element && S(a, h);
      };
    }
    var d = Element.prototype;
    void 0 !== ja && (d.before = b(ja));
    void 0 !== ka && (d.after = b(ka));
    void 0 !== la && (d.replaceWith = function (f) {
      for (var c = [], e = 0; e < arguments.length; ++e) c[e] = arguments[e];
      e = [];
      for (var g = [], h = 0; h < c.length; h++) {
        var k = c[h];
        k instanceof Element && J(k) && g.push(k);
        if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) e.push(k);else e.push(k);
      }
      h = J(this);
      la.apply(this, c);
      for (c = 0; c < g.length; c++) U(a, g[c]);
      if (h) for (U(a, this), c = 0; c < e.length; c++) g = e[c], g instanceof Element && S(a, g);
    });
    void 0 !== ma && (d.remove = function () {
      var f = J(this);
      ma.call(this);
      f && U(a, this);
    });
  }
  ;
  function Ea(a) {
    function b(c, e) {
      Object.defineProperty(c, "innerHTML", {
        enumerable: e.enumerable,
        configurable: !0,
        get: e.get,
        set: function (g) {
          var h = this,
            k = void 0;
          J(this) && (k = [], P(a, this, function (x) {
            x !== h && k.push(x);
          }));
          e.set.call(this, g);
          if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];
            1 === m.__CE_state && a.disconnectedCallback(m);
          }
          this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
          return g;
        }
      });
    }
    function d(c, e) {
      c.insertAdjacentElement = function (g, h) {
        var k = J(h);
        g = e.call(this, g, h);
        k && U(a, h);
        J(g) && S(a, h);
        return g;
      };
    }
    function f(c, e) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);
        for (k = 0; k < l.length; k++) V(a, l[k]);
      }
      c.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();
        if ("beforebegin" === h) {
          var l = this.previousSibling;
          e.call(this, h, k);
          g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }
    y && (Element.prototype.attachShadow = function (c) {
      c = y.call(this, c);
      if (a.j && !c.__CE_patched) {
        c.__CE_patched = !0;
        for (var e = 0; e < a.m.length; e++) a.m[e](c);
      }
      return this.__CE_shadowRoot = c;
    });
    z && z.get ? b(Element.prototype, z) : I && I.get ? b(HTMLElement.prototype, I) : ua(a, function (c) {
      b(c, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return q.call(this, !0).innerHTML;
        },
        set: function (e) {
          var g = "template" === this.localName,
            h = g ? this.content : this,
            k = p.call(document, this.namespaceURI, this.localName);
          for (k.innerHTML = e; 0 < h.childNodes.length;) u.call(h, h.childNodes[0]);
          for (e = g ? k.content : k; 0 < e.childNodes.length;) r.call(h, e.childNodes[0]);
        }
      });
    });
    Element.prototype.setAttribute = function (c, e) {
      if (1 !== this.__CE_state) return B.call(this, c, e);
      var g = A.call(this, c);
      B.call(this, c, e);
      e = A.call(this, c);
      a.attributeChangedCallback(this, c, g, e, null);
    };
    Element.prototype.setAttributeNS = function (c, e, g) {
      if (1 !== this.__CE_state) return F.call(this, c, e, g);
      var h = E.call(this, c, e);
      F.call(this, c, e, g);
      g = E.call(this, c, e);
      a.attributeChangedCallback(this, e, h, g, c);
    };
    Element.prototype.removeAttribute = function (c) {
      if (1 !== this.__CE_state) return C.call(this, c);
      var e = A.call(this, c);
      C.call(this, c);
      null !== e && a.attributeChangedCallback(this, c, e, null, null);
    };
    D && (Element.prototype.toggleAttribute = function (c, e) {
      if (1 !== this.__CE_state) return D.call(this, c, e);
      var g = A.call(this, c),
        h = null !== g;
      e = D.call(this, c, e);
      h !== e && a.attributeChangedCallback(this, c, g, e ? "" : null, null);
      return e;
    });
    Element.prototype.removeAttributeNS = function (c, e) {
      if (1 !== this.__CE_state) return G.call(this, c, e);
      var g = E.call(this, c, e);
      G.call(this, c, e);
      var h = E.call(this, c, e);
      g !== h && a.attributeChangedCallback(this, e, g, h, c);
    };
    oa ? d(HTMLElement.prototype, oa) : H && d(Element.prototype, H);
    pa ? f(HTMLElement.prototype, pa) : fa && f(Element.prototype, fa);
    Z(a, Element.prototype, {
      prepend: ha,
      append: ia
    });
    Da(a);
  }
  ;
  var Fa = {};
  function Ga(a) {
    function b() {
      var d = this.constructor;
      var f = document.__CE_registry.C.get(d);
      if (!f) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
      var c = f.constructionStack;
      if (0 === c.length) return c = n.call(document, f.localName), Object.setPrototypeOf(c, d.prototype), c.__CE_state = 1, c.__CE_definition = f, R(a, c), c;
      var e = c.length - 1,
        g = c[e];
      if (g === Fa) throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
      c[e] = Fa;
      Object.setPrototypeOf(g, d.prototype);
      R(a, g);
      return g;
    }
    b.prototype = na.prototype;
    Object.defineProperty(HTMLElement.prototype, "constructor", {
      writable: !0,
      configurable: !0,
      enumerable: !1,
      value: b
    });
    window.HTMLElement = b;
  }
  ;
  function Ha(a) {
    function b(d, f) {
      Object.defineProperty(d, "textContent", {
        enumerable: f.enumerable,
        configurable: !0,
        get: f.get,
        set: function (c) {
          if (this.nodeType === Node.TEXT_NODE) f.set.call(this, c);else {
            var e = void 0;
            if (this.firstChild) {
              var g = this.childNodes,
                h = g.length;
              if (0 < h && J(this)) {
                e = Array(h);
                for (var k = 0; k < h; k++) e[k] = g[k];
              }
            }
            f.set.call(this, c);
            if (e) for (c = 0; c < e.length; c++) U(a, e[c]);
          }
        }
      });
    }
    Node.prototype.insertBefore = function (d, f) {
      if (d instanceof DocumentFragment) {
        var c = K(d);
        d = t.call(this, d, f);
        if (J(this)) for (f = 0; f < c.length; f++) S(a, c[f]);
        return d;
      }
      c = d instanceof Element && J(d);
      f = t.call(this, d, f);
      c && U(a, d);
      J(this) && S(a, d);
      return f;
    };
    Node.prototype.appendChild = function (d) {
      if (d instanceof DocumentFragment) {
        var f = K(d);
        d = r.call(this, d);
        if (J(this)) for (var c = 0; c < f.length; c++) S(a, f[c]);
        return d;
      }
      f = d instanceof Element && J(d);
      c = r.call(this, d);
      f && U(a, d);
      J(this) && S(a, d);
      return c;
    };
    Node.prototype.cloneNode = function (d) {
      d = q.call(this, !!d);
      this.ownerDocument.__CE_registry ? V(a, d) : Q(a, d);
      return d;
    };
    Node.prototype.removeChild = function (d) {
      var f = d instanceof Element && J(d),
        c = u.call(this, d);
      f && U(a, d);
      return c;
    };
    Node.prototype.replaceChild = function (d, f) {
      if (d instanceof DocumentFragment) {
        var c = K(d);
        d = v.call(this, d, f);
        if (J(this)) for (U(a, f), f = 0; f < c.length; f++) S(a, c[f]);
        return d;
      }
      c = d instanceof Element && J(d);
      var e = v.call(this, d, f),
        g = J(this);
      g && U(a, f);
      c && U(a, d);
      g && S(a, d);
      return e;
    };
    w && w.get ? b(Node.prototype, w) : ta(a, function (d) {
      b(d, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          for (var f = [], c = this.firstChild; c; c = c.nextSibling) c.nodeType !== Node.COMMENT_NODE && f.push(c.textContent);
          return f.join("");
        },
        set: function (f) {
          for (; this.firstChild;) u.call(this, this.firstChild);
          null != f && "" !== f && r.call(this, document.createTextNode(f));
        }
      });
    });
  }
  ;
  var O = window.customElements;
  function Ia() {
    var a = new N();
    Ga(a);
    Ca(a);
    Z(a, DocumentFragment.prototype, {
      prepend: da,
      append: ea
    });
    Ha(a);
    Ea(a);
    window.CustomElementRegistry = Y;
    a = new Y(a);
    document.__CE_registry = a;
    Object.defineProperty(window, "customElements", {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Ia();
  window.__CE_installPolyfill = Ia;
}).call(self);

/***/ }),

/***/ "../../node_modules/lit/polyfill-support.js":
/*!**************************************************!*\
  !*** ../../node_modules/lit/polyfill-support.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!function (i) {
  "function" == typeof define && define.amd ? define(i) : i();
}(function () {
  "use strict";

  /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
  var i,
    n,
    o = "__scoped";
  null !== (i = globalThis.reactiveElementPolyfillSupport) && void 0 !== i || (globalThis.reactiveElementPolyfillSupport = function (i) {
    var n = i.ReactiveElement;
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      var t = n.prototype;
      window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto(t);
      var d = t.createRenderRoot;
      t.createRenderRoot = function () {
        var i,
          n,
          t,
          w = this.localName;
        if (window.ShadyCSS.nativeShadow) return d.call(this);
        if (!this.constructor.hasOwnProperty(o)) {
          this.constructor[o] = !0;
          var v = this.constructor.elementStyles.map(function (i) {
            return i instanceof CSSStyleSheet ? Array.from(i.cssRules).reduce(function (i, n) {
              return i + n.cssText;
            }, "") : i.cssText;
          });
          null === (n = null === (i = window.ShadyCSS) || void 0 === i ? void 0 : i.ScopingShim) || void 0 === n || n.prepareAdoptedCssText(v, w), void 0 === this.constructor._$AJ && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), w);
        }
        return null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      };
      var w = t.connectedCallback;
      t.connectedCallback = function () {
        w.call(this), this.hasUpdated && window.ShadyCSS.styleElement(this);
      };
      var v = t._$AE;
      t._$AE = function (i) {
        this.hasUpdated || window.ShadyCSS.styleElement(this), v.call(this, i);
      };
    }
  });
  var t,
    d = new Set(),
    w = new Map();
  null !== (n = globalThis.litHtmlPolyfillSupport) && void 0 !== n || (globalThis.litHtmlPolyfillSupport = function (i, n) {
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      var o = function (i) {
          return void 0 !== i && !d.has(i);
        },
        t = function (i) {
          var n = w.get(i);
          return void 0 === n && w.set(i, n = []), n;
        },
        v = new Map(),
        l = i.createElement;
      i.createElement = function (n, d) {
        var w = l.call(i, n, d),
          v = null == d ? void 0 : d.scope;
        if (void 0 !== v && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(w, v), o(v))) {
          var r = t(v),
            u = w.content.querySelectorAll("style");
          r.push.apply(r, Array.from(u).map(function (i) {
            var n;
            return null === (n = i.parentNode) || void 0 === n || n.removeChild(i), i.textContent;
          }));
        }
        return w;
      };
      var r = document.createDocumentFragment(),
        u = document.createComment(""),
        s = n.prototype,
        e = s._$AI;
      s._$AI = function (i, n) {
        var v, l;
        void 0 === n && (n = this);
        var s = this._$AA.parentNode,
          a = null === (v = this.options) || void 0 === v ? void 0 : v.scope;
        if (s instanceof ShadowRoot && o(a)) {
          var h = this._$AA,
            f = this._$AB;
          r.appendChild(u), this._$AA = u, this._$AB = null, e.call(this, i, n);
          var c = (null == i ? void 0 : i._$litType$) ? this._$AH._$AD.el : document.createElement("template");
          if (function (i, n) {
            var o,
              v = t(i),
              l = 0 !== v.length;
            l && ((o = document.createElement("style")).textContent = v.join("\n"), n.content.appendChild(o)), d.add(i), w.delete(i), window.ShadyCSS.prepareTemplateStyles(n, i), l && window.ShadyCSS.nativeShadow && null !== (o = n.content.querySelector("style")) && n.content.appendChild(o);
          }(a, c), r.removeChild(u), null === (l = window.ShadyCSS) || void 0 === l ? void 0 : l.nativeShadow) {
            var y = c.content.querySelector("style");
            null !== y && r.appendChild(y.cloneNode(!0));
          }
          s.insertBefore(r, f), this._$AA = h, this._$AB = f;
        } else e.call(this, i, n);
      }, s._$AC = function (n) {
        var o,
          t = null === (o = this.options) || void 0 === o ? void 0 : o.scope,
          d = v.get(t);
        void 0 === d && v.set(t, d = new Map());
        var w = d.get(n.strings);
        return void 0 === w && d.set(n.strings, w = new i(n, this.options)), w;
      };
    }
  }), null !== (t = globalThis.litElementPolyfillSupport) && void 0 !== t || (globalThis.litElementPolyfillSupport = function (i) {
    var n = i.LitElement;
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
      n._$AJ = !0;
      var o = n.prototype,
        t = o.createRenderRoot;
      o.createRenderRoot = function () {
        return this.renderOptions.scope = this.localName, t.call(this);
      };
    }
  });
});

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: function() { return /* binding */ COMPLETE_NOTIFICATION; },
/* harmony export */   createNotification: function() { return /* binding */ createNotification; },
/* harmony export */   errorNotification: function() { return /* binding */ errorNotification; },
/* harmony export */   nextNotification: function() { return /* binding */ nextNotification; }
/* harmony export */ });
var COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!****************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: function() { return /* binding */ Observable; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "../../node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "../../node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");







var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };
  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(function () {
      var _a = _this,
        operator = _a.operator,
        source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: function (value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable.prototype._subscribe = function (subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
    return this;
  };
  Observable.prototype.pipe = function () {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  };
  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;
      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };
  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };
  return Observable;
}();

function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subject.js":
/*!*************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subject.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: function() { return /* binding */ AnonymousSubject; },
/* harmony export */   Subject: function() { return /* binding */ Subject; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Observable */ "../../node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");






var Subject = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subject, _super);
  function Subject() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  };
  Subject.prototype.next = function (value) {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };
  Subject.prototype.error = function (err) {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject.prototype.complete = function () {
    var _this = this;
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(function () {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject.prototype, "observed", {
    get: function () {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject.prototype._innerSubscribe = function (subscriber) {
    var _this = this;
    var _a = this,
      hasError = _a.hasError,
      isStopped = _a.isStopped,
      observers = _a.observers;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(function () {
      _this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  };
  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
      hasError = _a.hasError,
      thrownError = _a.thrownError,
      isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject.prototype.asObservable = function () {
    var observable = new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
    observable.source = this;
    return observable;
  };
  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_5__.Observable);

var AnonymousSubject = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnonymousSubject, _super);
  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject.prototype.complete = function () {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject;
}(Subject);


/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!****************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: function() { return /* binding */ EMPTY_OBSERVER; },
/* harmony export */   SafeSubscriber: function() { return /* binding */ SafeSubscriber; },
/* harmony export */   Subscriber: function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ "../../node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js");









var Subscriber = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
  function Subscriber(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };
  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription);

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function () {
  function ConsumerObserver(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver.prototype.next = function (value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver.prototype.error = function (err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver.prototype.complete = function () {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver;
}();
var SafeSubscriber = function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      var context_1;
      if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber;
}(Subscriber);

function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!******************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: function() { return /* binding */ EMPTY_SUBSCRIPTION; },
/* harmony export */   Subscription: function() { return /* binding */ Subscription; },
/* harmony export */   isSubscription: function() { return /* binding */ isSubscription; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
      }
    }
  };
  Subscription.prototype.add = function (teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
    }
  };
  Subscription.prototype.remove = function (teardown) {
    var _finalizers = this._finalizers;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };
  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();
  return Subscription;
}();

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/config.js":
/*!************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/config.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: function() { return /* binding */ timeoutProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.mjs");

var timeoutProvider = {
  setTimeout: function (handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    }
    return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
  },
  clearTimeout: function (handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: function() { return /* binding */ observable; }
/* harmony export */ });
var observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: function() { return /* binding */ ObjectUnsubscribedError; }
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: function() { return /* binding */ UnsubscriptionError; }
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: function() { return /* binding */ arrRemove; }
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: function() { return /* binding */ createErrorClass; }
/* harmony export */ });
function createErrorClass(createImpl) {
  var _super = function (instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: function() { return /* binding */ captureError; },
/* harmony export */   errorContext: function() { return /* binding */ errorContext; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");

var context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      var _a = context,
        errorThrown = _a.errorThrown,
        error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: function() { return /* binding */ identity; }
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: function() { return /* binding */ isFunction; }
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: function() { return /* binding */ noop; }
/* harmony export */ });
function noop() {}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: function() { return /* binding */ pipe; },
/* harmony export */   pipeFromArray: function() { return /* binding */ pipeFromArray; }
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "../../node_modules/rxjs/dist/esm5/internal/util/identity.js");

function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

/***/ }),

/***/ "../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: function() { return /* binding */ reportUnhandledError; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../../node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
    var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ "../../node_modules/tabbable/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ../../node_modules/tabbable/dist/index.esm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: function() { return /* binding */ focusable; },
/* harmony export */   getTabIndex: function() { return /* binding */ getTabIndex; },
/* harmony export */   isFocusable: function() { return /* binding */ isFocusable; },
/* harmony export */   isTabbable: function() { return /* binding */ isTabbable; },
/* harmony export */   tabbable: function() { return /* binding */ tabbable; }
/* harmony export */ });
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.mjs":
/*!**********************************************!*\
  !*** ../../node_modules/tslib/tslib.es6.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: function() { return /* binding */ __addDisposableResource; },
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __disposeResources: function() { return /* binding */ __disposeResources; },
/* harmony export */   __esDecorate: function() { return /* binding */ __esDecorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __propKey: function() { return /* binding */ __propKey; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __rewriteRelativeImportExtension: function() { return /* binding */ __rewriteRelativeImportExtension; },
/* harmony export */   __runInitializers: function() { return /* binding */ __runInitializers; },
/* harmony export */   __setFunctionName: function() { return /* binding */ __setFunctionName; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function awaitReturn(f) {
    return function (v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
var ownKeys = function (o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function () {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r,
    s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
});

/***/ }),

/***/ "./src/autofill/content/autofill-init.ts":
/*!***********************************************!*\
  !*** ./src/autofill/content/autofill-init.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _services_collect_autofill_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/collect-autofill-content.service */ "./src/autofill/services/collect-autofill-content.service.ts");
/* harmony import */ var _services_insert_autofill_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insert-autofill-content.service */ "./src/autofill/services/insert-autofill-content.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
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




class AutofillInit {
    /**
     * AutofillInit constructor. Initializes the DomElementVisibilityService,
     * CollectAutofillContentService and InsertAutofillContentService classes.
     *
     * @param domQueryService - Service used to handle DOM queries.
     * @param domElementVisibilityService - Used to check if an element is viewable.
     * @param autofillOverlayContentService - The autofill overlay content service, potentially undefined.
     * @param autofillInlineMenuContentService - The inline menu content service, potentially undefined.
     * @param overlayNotificationsContentService - The overlay notifications content service, potentially undefined.
     */
    constructor(domQueryService, domElementVisibilityService, autofillOverlayContentService, autofillInlineMenuContentService, overlayNotificationsContentService) {
        this.autofillOverlayContentService = autofillOverlayContentService;
        this.autofillInlineMenuContentService = autofillInlineMenuContentService;
        this.overlayNotificationsContentService = overlayNotificationsContentService;
        this.sendExtensionMessage = _utils__WEBPACK_IMPORTED_MODULE_3__.sendExtensionMessage;
        this.extensionMessageHandlers = {
            collectPageDetails: ({ message }) => this.collectPageDetails(message),
            collectPageDetailsImmediately: ({ message }) => this.collectPageDetails(message, true),
            fillForm: ({ message }) => this.fillForm(message),
        };
        /**
         * Handles the extension messages sent to the content script.
         *
         * @param message - The extension message.
         * @param sender - The message sender.
         * @param sendResponse - The send response callback.
         */
        this.handleExtensionMessage = (message, sender, sendResponse) => {
            const command = message.command;
            const handler = this.getExtensionMessageHandler(command);
            if (!handler) {
                return null;
            }
            const messageResponse = handler({ message, sender });
            if (typeof messageResponse === "undefined") {
                return null;
            }
            void Promise.resolve(messageResponse).then((response) => sendResponse(response));
            return true;
        };
        this.collectAutofillContentService = new _services_collect_autofill_content_service__WEBPACK_IMPORTED_MODULE_1__.CollectAutofillContentService(domElementVisibilityService, domQueryService, this.autofillOverlayContentService);
        this.insertAutofillContentService = new _services_insert_autofill_content_service__WEBPACK_IMPORTED_MODULE_2__["default"](domElementVisibilityService, this.collectAutofillContentService);
    }
    /**
     * Initializes the autofill content script, setting up
     * the extension message listeners. This method should
     * be called once when the content script is loaded.
     */
    init() {
        var _a;
        this.setupExtensionMessageListeners();
        (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.init();
        this.collectPageDetailsOnLoad();
    }
    /**
     * Triggers a collection of the page details from the
     * background script, ensuring that autofill is ready
     * to act on the page.
     */
    collectPageDetailsOnLoad() {
        const sendCollectDetailsMessage = () => {
            this.clearCollectPageDetailsOnLoadTimeout();
            this.collectPageDetailsOnLoadTimeout = setTimeout(() => this.sendExtensionMessage("bgCollectPageDetails", { sender: "autofillInit" }), 750);
        };
        if (globalThis.document.readyState === "complete") {
            sendCollectDetailsMessage();
        }
        globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.LOAD, sendCollectDetailsMessage);
    }
    /**
     * Collects the page details and sends them to the
     * extension background script. If the `sendDetailsInResponse`
     * parameter is set to true, the page details will be
     * returned to facilitate sending the details in the
     * response to the extension message.
     *
     * @param message - The extension message.
     * @param sendDetailsInResponse - Determines whether to send the details in the response.
     */
    collectPageDetails(message_1) {
        return __awaiter(this, arguments, void 0, function* (message, sendDetailsInResponse = false) {
            const pageDetails = yield this.collectAutofillContentService.getPageDetails();
            if (sendDetailsInResponse) {
                return pageDetails;
            }
            void this.sendExtensionMessage("collectPageDetailsResponse", {
                tab: message.tab,
                details: pageDetails,
                sender: message.sender,
            });
        });
    }
    /**
     * Fills the form with the given fill script.
     *
     * @param {AutofillExtensionMessage} message
     */
    fillForm(_a) {
        return __awaiter(this, arguments, void 0, function* ({ fillScript, pageDetailsUrl }) {
            if ((document.defaultView || window).location.href !== pageDetailsUrl) {
                return;
            }
            this.blurFocusedFieldAndCloseInlineMenu();
            yield this.sendExtensionMessage("updateIsFieldCurrentlyFilling", {
                isFieldCurrentlyFilling: true,
            });
            yield this.insertAutofillContentService.fillForm(fillScript);
            setTimeout(() => this.sendExtensionMessage("updateIsFieldCurrentlyFilling", {
                isFieldCurrentlyFilling: false,
            }), 250);
        });
    }
    /**
     * Blurs the most recently focused field and removes the inline menu. Used
     * in cases where the background unlock or vault item reprompt popout
     * is opened.
     */
    blurFocusedFieldAndCloseInlineMenu() {
        var _a;
        (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.blurMostRecentlyFocusedField(true);
    }
    /**
     * Clears the send collect details message timeout.
     */
    clearCollectPageDetailsOnLoadTimeout() {
        if (this.collectPageDetailsOnLoadTimeout) {
            clearTimeout(this.collectPageDetailsOnLoadTimeout);
        }
    }
    /**
     * Sets up the extension message listeners for the content script.
     */
    setupExtensionMessageListeners() {
        chrome.runtime.onMessage.addListener(this.handleExtensionMessage);
    }
    /**
     * Gets the extension message handler for the given command.
     *
     * @param command - The extension message command.
     */
    getExtensionMessageHandler(command) {
        var _a, _b, _c, _d, _e, _f;
        if ((_b = (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b[command]) {
            return this.autofillOverlayContentService.messageHandlers[command];
        }
        if ((_d = (_c = this.autofillInlineMenuContentService) === null || _c === void 0 ? void 0 : _c.messageHandlers) === null || _d === void 0 ? void 0 : _d[command]) {
            return this.autofillInlineMenuContentService.messageHandlers[command];
        }
        if ((_f = (_e = this.overlayNotificationsContentService) === null || _e === void 0 ? void 0 : _e.messageHandlers) === null || _f === void 0 ? void 0 : _f[command]) {
            return this.overlayNotificationsContentService.messageHandlers[command];
        }
        return this.extensionMessageHandlers[command];
    }
    /**
     * Handles destroying the autofill init content script. Removes all
     * listeners, timeouts, and object instances to prevent memory leaks.
     */
    destroy() {
        var _a, _b, _c;
        this.clearCollectPageDetailsOnLoadTimeout();
        chrome.runtime.onMessage.removeListener(this.handleExtensionMessage);
        this.collectAutofillContentService.destroy();
        (_a = this.autofillOverlayContentService) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.autofillInlineMenuContentService) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = this.overlayNotificationsContentService) === null || _c === void 0 ? void 0 : _c.destroy();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (AutofillInit);


/***/ }),

/***/ "./src/autofill/enums/autofill-field.enums.ts":
/*!****************************************************!*\
  !*** ./src/autofill/enums/autofill-field.enums.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillFieldQualifier: function() { return /* binding */ AutofillFieldQualifier; }
/* harmony export */ });
const AutofillFieldQualifier = {
    password: "password",
    newPassword: "newPassword",
    username: "username",
    cardholderName: "cardholderName",
    cardNumber: "cardNumber",
    cardExpirationMonth: "cardExpirationMonth",
    cardExpirationYear: "cardExpirationYear",
    cardExpirationDate: "cardExpirationDate",
    cardCvv: "cardCvv",
    identityTitle: "identityTitle",
    identityFirstName: "identityFirstName",
    identityMiddleName: "identityMiddleName",
    identityLastName: "identityLastName",
    identityFullName: "identityFullName",
    identityAddress1: "identityAddress1",
    identityAddress2: "identityAddress2",
    identityAddress3: "identityAddress3",
    identityCity: "identityCity",
    identityState: "identityState",
    identityPostalCode: "identityPostalCode",
    identityCountry: "identityCountry",
    identityCompany: "identityCompany",
    identityPhone: "identityPhone",
    identityEmail: "identityEmail",
    identityUsername: "identityUsername",
};


/***/ }),

/***/ "./src/autofill/enums/autofill-overlay.enum.ts":
/*!*****************************************************!*\
  !*** ./src/autofill/enums/autofill-overlay.enum.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillOverlayElement: function() { return /* binding */ AutofillOverlayElement; },
/* harmony export */   AutofillOverlayPort: function() { return /* binding */ AutofillOverlayPort; },
/* harmony export */   InlineMenuAccountCreationFieldType: function() { return /* binding */ InlineMenuAccountCreationFieldType; },
/* harmony export */   InlineMenuFillTypes: function() { return /* binding */ InlineMenuFillTypes; },
/* harmony export */   MAX_SUB_FRAME_DEPTH: function() { return /* binding */ MAX_SUB_FRAME_DEPTH; },
/* harmony export */   RedirectFocusDirection: function() { return /* binding */ RedirectFocusDirection; }
/* harmony export */ });
const AutofillOverlayElement = {
    Button: "autofill-inline-menu-button",
    List: "autofill-inline-menu-list",
};
const AutofillOverlayPort = {
    Button: "autofill-inline-menu-button-port",
    ButtonMessageConnector: "autofill-inline-menu-button-message-connector",
    List: "autofill-inline-menu-list-port",
    ListMessageConnector: "autofill-inline-menu-list-message-connector",
};
const RedirectFocusDirection = {
    Current: "current",
    Previous: "previous",
    Next: "next",
};
const InlineMenuFillTypes = {
    AccountCreationUsername: 5,
    PasswordGeneration: 6,
    CurrentPasswordUpdate: 7,
};
const InlineMenuAccountCreationFieldType = {
    Text: "text",
    Email: "email",
    Password: "password",
    Totp: "totp",
};
const MAX_SUB_FRAME_DEPTH = 8;


/***/ }),

/***/ "./src/autofill/enums/autofill-port.enum.ts":
/*!**************************************************!*\
  !*** ./src/autofill/enums/autofill-port.enum.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillPort: function() { return /* binding */ AutofillPort; }
/* harmony export */ });
const AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};



/***/ }),

/***/ "./src/autofill/notification/abstractions/notification-bar.ts":
/*!********************************************************************!*\
  !*** ./src/autofill/notification/abstractions/notification-bar.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationTypes: function() { return /* binding */ NotificationTypes; }
/* harmony export */ });
const NotificationTypes = {
    Add: "add",
    Change: "change",
    Unlock: "unlock",
    AtRiskPassword: "at-risk-password",
};



/***/ }),

/***/ "./src/autofill/overlay/inline-menu/content/autofill-inline-menu-content.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/autofill/overlay/inline-menu/content/autofill-inline-menu-content.service.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillInlineMenuContentService: function() { return /* binding */ AutofillInlineMenuContentService; }
/* harmony export */ });
/* harmony import */ var _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/autofill-overlay.enum */ "./src/autofill/enums/autofill-overlay.enum.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/autofill/utils/index.ts");
/* harmony import */ var _iframe_content_autofill_inline_menu_button_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iframe-content/autofill-inline-menu-button-iframe */ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-button-iframe.ts");
/* harmony import */ var _iframe_content_autofill_inline_menu_list_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../iframe-content/autofill-inline-menu-list-iframe */ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-list-iframe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class AutofillInlineMenuContentService {
    constructor() {
        this.sendExtensionMessage = _utils__WEBPACK_IMPORTED_MODULE_1__.sendExtensionMessage;
        this.generateRandomCustomElementName = _utils__WEBPACK_IMPORTED_MODULE_1__.generateRandomCustomElementName;
        this.setElementStyles = _utils__WEBPACK_IMPORTED_MODULE_1__.setElementStyles;
        this.isFirefoxBrowser = globalThis.navigator.userAgent.indexOf(" Firefox/") !== -1 ||
            globalThis.navigator.userAgent.indexOf(" Gecko/") !== -1;
        this.mutationObserverIterations = 0;
        this.lastElementOverrides = new WeakMap();
        this.customElementDefaultStyles = {
            all: "initial",
            position: "fixed",
            display: "block",
            zIndex: "2147483647",
        };
        this.extensionMessageHandlers = {
            closeAutofillInlineMenu: ({ message }) => this.closeInlineMenu(message),
            appendAutofillInlineMenuToDom: ({ message }) => this.appendInlineMenuElements(message),
        };
        /**
         * Removes the autofill inline menu from the page. This will initially
         * unobserve the menu container to ensure the mutation observer no
         * longer triggers.
         */
        this.closeInlineMenu = (message) => {
            if ((message === null || message === void 0 ? void 0 : message.overlayElement) === _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.Button) {
                this.closeInlineMenuButton();
                return;
            }
            if ((message === null || message === void 0 ? void 0 : message.overlayElement) === _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.List) {
                this.closeInlineMenuList();
                return;
            }
            this.unobserveContainerElement();
            this.closeInlineMenuButton();
            this.closeInlineMenuList();
        };
        /**
         * Sets up mutation observers for the inline menu elements, the menu container, and
         * the document element. The mutation observers are used to remove any styles that
         * are added to the inline menu elements by the website. They are also used to ensure
         * that the inline menu elements are always present at the bottom of the menu container.
         */
        this.setupMutationObserver = () => {
            this.inlineMenuElementsMutationObserver = new MutationObserver(this.handleInlineMenuElementMutationObserverUpdate);
            this.containerElementMutationObserver = new MutationObserver(this.handleContainerElementMutationObserverUpdate);
        };
        /**
         * Handles the mutation observer update for the inline menu elements. This method will
         * remove any attributes or styles that might be added to the inline menu elements by
         * a separate process within the website where this script is injected.
         *
         * @param mutationRecord - The mutation record that triggered the update.
         */
        this.handleInlineMenuElementMutationObserverUpdate = (mutationRecord) => {
            if (this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            for (let recordIndex = 0; recordIndex < mutationRecord.length; recordIndex++) {
                const record = mutationRecord[recordIndex];
                if (record.type !== "attributes") {
                    continue;
                }
                const element = record.target;
                if (record.attributeName !== "style") {
                    this.removeModifiedElementAttributes(element);
                    continue;
                }
                element.removeAttribute("style");
                this.updateCustomElementDefaultStyles(element);
            }
        };
        /**
         * Handles the mutation observer update for the element that contains the inline menu.
         * This method will ensure that the inline menu elements are always present at the
         * bottom of the container.
         */
        this.handleContainerElementMutationObserverUpdate = (mutations) => {
            if ((!this.buttonElement && !this.listElement) ||
                this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            const containerElement = mutations[0].target;
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.requestIdleCallbackPolyfill)(() => this.processContainerElementMutation(containerElement), {
                timeout: 500,
            });
        };
        /**
         * Processes the mutation of the element that contains the inline menu. Will trigger when an
         * idle moment in the execution of the main thread is detected.
         */
        this.processContainerElementMutation = (containerElement) => __awaiter(this, void 0, void 0, function* () {
            const lastChild = containerElement.lastElementChild;
            const secondToLastChild = lastChild === null || lastChild === void 0 ? void 0 : lastChild.previousElementSibling;
            const lastChildIsInlineMenuList = lastChild === this.listElement;
            const lastChildIsInlineMenuButton = lastChild === this.buttonElement;
            const secondToLastChildIsInlineMenuButton = secondToLastChild === this.buttonElement;
            if (!lastChild) {
                return;
            }
            const lastChildEncounterCount = this.lastElementOverrides.get(lastChild) || 0;
            if (!lastChildIsInlineMenuList && !lastChildIsInlineMenuButton && lastChildEncounterCount < 3) {
                this.lastElementOverrides.set(lastChild, lastChildEncounterCount + 1);
            }
            if (this.lastElementOverrides.get(lastChild) >= 3) {
                this.handlePersistentLastChildOverride(lastChild);
                return;
            }
            const isInlineMenuListVisible = yield this.isInlineMenuListVisible();
            if (!lastChild ||
                (lastChildIsInlineMenuList && secondToLastChildIsInlineMenuButton) ||
                (lastChildIsInlineMenuButton && !isInlineMenuListVisible)) {
                return;
            }
            if ((lastChildIsInlineMenuList && !secondToLastChildIsInlineMenuButton) ||
                (lastChildIsInlineMenuButton && isInlineMenuListVisible)) {
                containerElement.insertBefore(this.buttonElement, this.listElement);
                return;
            }
            containerElement.insertBefore(lastChild, this.buttonElement);
        });
        /**
         * Verifies if the last child of the menu container is overlaying the inline menu elements.
         * This is triggered when the last child of the menu container is being forced by some
         * script to be an element other than the inline menu elements.
         *
         * @param lastChild - The last child of the menu container.
         */
        this.verifyInlineMenuIsNotObscured = (lastChild) => __awaiter(this, void 0, void 0, function* () {
            const inlineMenuPosition = yield this.sendExtensionMessage("getAutofillInlineMenuPosition");
            const { button, list } = inlineMenuPosition;
            if (!!button && this.elementAtCenterOfInlineMenuPosition(button) === lastChild) {
                this.closeInlineMenu();
                return;
            }
            if (!!list && this.elementAtCenterOfInlineMenuPosition(list) === lastChild) {
                this.closeInlineMenu();
            }
        });
        this.setupMutationObserver();
    }
    /**
     * Returns the message handlers for the autofill inline menu content service.
     */
    get messageHandlers() {
        return this.extensionMessageHandlers;
    }
    /**
     * Identifies if the passed element corresponds to the inline menu button or list.
     *
     * @param element  - The element being checked
     */
    isElementInlineMenu(element) {
        return element === this.buttonElement || element === this.listElement;
    }
    /**
     * Checks if the inline menu button is visible at the top frame.
     */
    isInlineMenuButtonVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return (!!this.buttonElement &&
                (yield this.sendExtensionMessage("checkIsAutofillInlineMenuButtonVisible")) === true);
        });
    }
    /**
     * Checks if the inline menu list if visible at the top frame.
     */
    isInlineMenuListVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return (!!this.listElement &&
                (yield this.sendExtensionMessage("checkIsAutofillInlineMenuListVisible")) === true);
        });
    }
    /**
     * Removes the inline menu button from the DOM if it is currently present. Will
     * also remove the inline menu reposition event listeners.
     */
    closeInlineMenuButton() {
        if (this.buttonElement) {
            this.buttonElement.remove();
            void this.sendExtensionMessage("autofillOverlayElementClosed", {
                overlayElement: _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.Button,
            });
        }
    }
    /**
     * Removes the inline menu list from the DOM if it is currently present.
     */
    closeInlineMenuList() {
        if (this.listElement) {
            this.listElement.remove();
            void this.sendExtensionMessage("autofillOverlayElementClosed", {
                overlayElement: _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.List,
            });
        }
    }
    /**
     * Updates the position of both the inline menu button and inline menu list.
     */
    appendInlineMenuElements(_a) {
        return __awaiter(this, arguments, void 0, function* ({ overlayElement }) {
            if (overlayElement === _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.Button) {
                return this.appendButtonElement();
            }
            return this.appendListElement();
        });
    }
    /**
     * Updates the position of the inline menu button.
     */
    appendButtonElement() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.buttonElement) {
                this.createButtonElement();
                this.updateCustomElementDefaultStyles(this.buttonElement);
            }
            if (!(yield this.isInlineMenuButtonVisible())) {
                this.appendInlineMenuElementToDom(this.buttonElement);
                this.updateInlineMenuElementIsVisibleStatus(_enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.Button, true);
            }
        });
    }
    /**
     * Updates the position of the inline menu list.
     */
    appendListElement() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.listElement) {
                this.createListElement();
                this.updateCustomElementDefaultStyles(this.listElement);
            }
            if (!(yield this.isInlineMenuListVisible())) {
                this.appendInlineMenuElementToDom(this.listElement);
                this.updateInlineMenuElementIsVisibleStatus(_enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayElement.List, true);
            }
        });
    }
    /**
     * Updates the visibility status of the inline menu element within the background script.
     *
     * @param overlayElement - The inline menu element to update the visibility status for.
     * @param isVisible - The visibility status to update the inline menu element to.
     */
    updateInlineMenuElementIsVisibleStatus(overlayElement, isVisible) {
        void this.sendExtensionMessage("updateAutofillInlineMenuElementIsVisibleStatus", {
            overlayElement,
            isVisible,
        });
    }
    /**
     * Appends the inline menu element to the menu container. This method will also
     * observe the menu container to ensure that the inline menu element is not
     * interfered with by any DOM changes.
     *
     * @param element - The inline menu element to append to the menu container.
     */
    appendInlineMenuElementToDom(element) {
        var _a;
        const parentDialogElement = (_a = globalThis.document.activeElement) === null || _a === void 0 ? void 0 : _a.closest("dialog");
        if ((parentDialogElement === null || parentDialogElement === void 0 ? void 0 : parentDialogElement.open) && parentDialogElement.matches(":modal")) {
            this.observeContainerElement(parentDialogElement);
            parentDialogElement.appendChild(element);
            return;
        }
        this.observeContainerElement(globalThis.document.body);
        globalThis.document.body.appendChild(element);
    }
    /**
     * Creates the autofill inline menu button element. Will not attempt
     * to create the element if it already exists in the DOM.
     */
    createButtonElement() {
        var _a;
        if (this.isFirefoxBrowser) {
            this.buttonElement = globalThis.document.createElement("div");
            new _iframe_content_autofill_inline_menu_button_iframe__WEBPACK_IMPORTED_MODULE_2__.AutofillInlineMenuButtonIframe(this.buttonElement);
            return;
        }
        const customElementName = this.generateRandomCustomElementName();
        (_a = globalThis.customElements) === null || _a === void 0 ? void 0 : _a.define(customElementName, class extends HTMLElement {
            constructor() {
                super();
                new _iframe_content_autofill_inline_menu_button_iframe__WEBPACK_IMPORTED_MODULE_2__.AutofillInlineMenuButtonIframe(this);
            }
        });
        this.buttonElement = globalThis.document.createElement(customElementName);
    }
    /**
     * Creates the autofill inline menu list element. Will not attempt
     * to create the element if it already exists in the DOM.
     */
    createListElement() {
        var _a;
        if (this.isFirefoxBrowser) {
            this.listElement = globalThis.document.createElement("div");
            new _iframe_content_autofill_inline_menu_list_iframe__WEBPACK_IMPORTED_MODULE_3__.AutofillInlineMenuListIframe(this.listElement);
            return;
        }
        const customElementName = this.generateRandomCustomElementName();
        (_a = globalThis.customElements) === null || _a === void 0 ? void 0 : _a.define(customElementName, class extends HTMLElement {
            constructor() {
                super();
                new _iframe_content_autofill_inline_menu_list_iframe__WEBPACK_IMPORTED_MODULE_3__.AutofillInlineMenuListIframe(this);
            }
        });
        this.listElement = globalThis.document.createElement(customElementName);
    }
    /**
     * Updates the default styles for the custom element. This method will
     * remove any styles that are added to the custom element by other methods.
     *
     * @param element - The custom element to update the default styles for.
     */
    updateCustomElementDefaultStyles(element) {
        this.unobserveCustomElements();
        this.setElementStyles(element, this.customElementDefaultStyles, true);
        this.observeCustomElements();
    }
    /**
     * Sets up mutation observers to verify that the inline menu
     * elements are not modified by the website.
     */
    observeCustomElements() {
        var _a, _b;
        if (this.buttonElement) {
            (_a = this.inlineMenuElementsMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.buttonElement, {
                attributes: true,
            });
        }
        if (this.listElement) {
            (_b = this.inlineMenuElementsMutationObserver) === null || _b === void 0 ? void 0 : _b.observe(this.listElement, { attributes: true });
        }
    }
    /**
     * Disconnects the mutation observers that are used to verify that the inline menu
     * elements are not modified by the website.
     */
    unobserveCustomElements() {
        var _a;
        (_a = this.inlineMenuElementsMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Sets up a mutation observer for the element which contains the inline menu.
     */
    observeContainerElement(element) {
        var _a;
        (_a = this.containerElementMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(element, { childList: true });
    }
    /**
     * Disconnects the mutation observer for the element which contains the inline menu.
     */
    unobserveContainerElement() {
        var _a;
        (_a = this.containerElementMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Removes all elements from a passed inline menu
     * element except for the style attribute.
     *
     * @param element - The element to remove the attributes from.
     */
    removeModifiedElementAttributes(element) {
        const attributes = Array.from(element.attributes);
        for (let attributeIndex = 0; attributeIndex < attributes.length; attributeIndex++) {
            const attribute = attributes[attributeIndex];
            if (attribute.name === "style") {
                continue;
            }
            element.removeAttribute(attribute.name);
        }
    }
    /**
     * Handles the behavior of a persistent child element that is forcing itself to
     * the bottom of the menu container. This method will ensure that the inline menu
     * elements are not obscured by the persistent child element.
     *
     * @param lastChild - The last child of the menu container.
     */
    handlePersistentLastChildOverride(lastChild) {
        const lastChildZIndex = parseInt(lastChild.style.zIndex);
        if (lastChildZIndex >= 2147483647) {
            lastChild.style.zIndex = "2147483646";
        }
        this.clearPersistentLastChildOverrideTimeout();
        this.handlePersistentLastChildOverrideTimeout = globalThis.setTimeout(() => this.verifyInlineMenuIsNotObscured(lastChild), 500);
    }
    /**
     * Returns the element present at the center of the inline menu position.
     *
     * @param position - The position of the inline menu element.
     */
    elementAtCenterOfInlineMenuPosition(position) {
        return globalThis.document.elementFromPoint(position.left + position.width / 2, position.top + position.height / 2);
    }
    /**
     * Clears the timeout that is used to verify that the last child of the menu container
     * is not overlaying the inline menu elements.
     */
    clearPersistentLastChildOverrideTimeout() {
        if (this.handlePersistentLastChildOverrideTimeout) {
            globalThis.clearTimeout(this.handlePersistentLastChildOverrideTimeout);
        }
    }
    /**
     * Identifies if the mutation observer is triggering excessive iterations.
     * Will trigger a blur of the most recently focused field and remove the
     * autofill inline menu if any set mutation observer is triggering
     * excessive iterations.
     */
    isTriggeringExcessiveMutationObserverIterations() {
        if (this.mutationObserverIterationsResetTimeout) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
        }
        this.mutationObserverIterations++;
        this.mutationObserverIterationsResetTimeout = setTimeout(() => (this.mutationObserverIterations = 0), 2000);
        if (this.mutationObserverIterations > 100) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
            this.mutationObserverIterations = 0;
            this.closeInlineMenu();
            return true;
        }
        return false;
    }
    /**
     * Disconnects the mutation observers and removes the inline menu elements from the DOM.
     */
    destroy() {
        this.closeInlineMenu();
        this.clearPersistentLastChildOverrideTimeout();
    }
}


/***/ }),

/***/ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-button-iframe.ts":
/*!***********************************************************************************************!*\
  !*** ./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-button-iframe.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillInlineMenuButtonIframe: function() { return /* binding */ AutofillInlineMenuButtonIframe; }
/* harmony export */ });
/* harmony import */ var _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/autofill-overlay.enum */ "./src/autofill/enums/autofill-overlay.enum.ts");
/* harmony import */ var _autofill_inline_menu_iframe_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autofill-inline-menu-iframe-element */ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe-element.ts");


class AutofillInlineMenuButtonIframe extends _autofill_inline_menu_iframe_element__WEBPACK_IMPORTED_MODULE_1__.AutofillInlineMenuIframeElement {
    constructor(element) {
        super(element, _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayPort.Button, {
            background: "transparent",
            border: "none",
        }, chrome.i18n.getMessage("bitwardenOverlayButton"), chrome.i18n.getMessage("bitwardenOverlayMenuAvailable"));
    }
}


/***/ }),

/***/ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe-element.ts":
/*!************************************************************************************************!*\
  !*** ./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe-element.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillInlineMenuIframeElement: function() { return /* binding */ AutofillInlineMenuIframeElement; }
/* harmony export */ });
/* harmony import */ var _autofill_inline_menu_iframe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autofill-inline-menu-iframe.service */ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe.service.ts");

class AutofillInlineMenuIframeElement {
    constructor(element, portName, initStyles, iframeTitle, ariaAlert) {
        const shadow = element.attachShadow({ mode: "closed" });
        const autofillInlineMenuIframeService = new _autofill_inline_menu_iframe_service__WEBPACK_IMPORTED_MODULE_0__.AutofillInlineMenuIframeService(shadow, portName, initStyles, iframeTitle, ariaAlert);
        autofillInlineMenuIframeService.initMenuIframe();
    }
}


/***/ }),

/***/ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe.service.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillInlineMenuIframeService: function() { return /* binding */ AutofillInlineMenuIframeService; }
/* harmony export */ });
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/enums */ "../../libs/common/src/platform/enums/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/autofill/utils/index.ts");
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



class AutofillInlineMenuIframeService {
    constructor(shadow, portName, initStyles, iframeTitle, ariaAlert) {
        this.shadow = shadow;
        this.portName = portName;
        this.initStyles = initStyles;
        this.iframeTitle = iframeTitle;
        this.ariaAlert = ariaAlert;
        this.setElementStyles = _utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles;
        this.sendExtensionMessage = _utils__WEBPACK_IMPORTED_MODULE_2__.sendExtensionMessage;
        this.port = null;
        this.fadeInOpacityTransition = "opacity 125ms ease-out 0s";
        this.fadeOutOpacityTransition = "opacity 65ms ease-out 0s";
        this.iframeStyles = {
            all: "initial",
            position: "fixed",
            display: "block",
            zIndex: "2147483647",
            lineHeight: "0",
            overflow: "hidden",
            transition: this.fadeInOpacityTransition,
            visibility: "visible",
            clipPath: "none",
            pointerEvents: "auto",
            margin: "0",
            padding: "0",
            colorScheme: "normal",
            opacity: "0",
        };
        this.defaultIframeAttributes = {
            src: "",
            title: "",
            allowtransparency: "true",
            tabIndex: "-1",
            scrolling: "no",
        };
        this.foreignMutationsCount = 0;
        this.mutationObserverIterations = 0;
        this.backgroundPortMessageHandlers = {
            initAutofillInlineMenuButton: ({ message }) => this.initAutofillInlineMenu(message),
            initAutofillInlineMenuList: ({ message }) => this.initAutofillInlineMenu(message),
            updateAutofillInlineMenuPosition: ({ message }) => this.updateIframePosition(message.styles),
            toggleAutofillInlineMenuHidden: ({ message }) => this.updateElementStyles(this.iframe, message.styles),
            updateAutofillInlineMenuColorScheme: () => this.updateAutofillInlineMenuColorScheme(),
            triggerDelayedAutofillInlineMenuClosure: () => this.handleDelayedAutofillInlineMenuClosure(),
            fadeInAutofillInlineMenuIframe: () => this.handleFadeInInlineMenuIframe(),
            updateAutofillInlineMenuGeneratedPassword: ({ message }) => this.handleUpdateGeneratedPassword(message),
        };
        /**
         * Sets up the port message listener to the extension background script. This
         * listener is used to communicate between the iframe and the background script.
         * This also facilitates announcing to screen readers when the iframe is loaded.
         */
        this.setupPortMessageListener = () => {
            this.port = chrome.runtime.connect({ name: this.portName });
            this.port.onDisconnect.addListener(this.handlePortDisconnect);
            this.port.onMessage.addListener(this.handlePortMessage);
            this.announceAriaAlert(this.ariaAlert, 2000);
        };
        /**
         * Handles disconnecting the port message listener from the extension background
         * script. This also removes the listener that facilitates announcing to screen
         * readers when the iframe is loaded.
         *
         * @param port - The port that is disconnected
         */
        this.handlePortDisconnect = (port) => {
            var _a, _b, _c;
            if (port.name !== this.portName) {
                return;
            }
            this.updateElementStyles(this.iframe, { opacity: "0", height: "0px" });
            this.unobserveIframe();
            this.clearAriaAlert();
            (_a = this.port) === null || _a === void 0 ? void 0 : _a.onMessage.removeListener(this.handlePortMessage);
            (_b = this.port) === null || _b === void 0 ? void 0 : _b.onDisconnect.removeListener(this.handlePortDisconnect);
            (_c = this.port) === null || _c === void 0 ? void 0 : _c.disconnect();
            this.port = null;
        };
        /**
         * Handles messages sent from the extension background script to the iframe.
         * Triggers behavior within the iframe as well as on the custom element that
         * contains the iframe element.
         *
         * @param message
         * @param port
         */
        this.handlePortMessage = (message, port) => {
            if (port.name !== this.portName) {
                return;
            }
            if (this.backgroundPortMessageHandlers[message.command]) {
                this.backgroundPortMessageHandlers[message.command]({ message, port });
                return;
            }
            this.postMessageToIFrame(message);
        };
        /**
         * Handles updating the generated password in the inline menu iframe. Triggers
         * an aria alert if the user initiated the password regeneration.
         *
         * @param message - The message sent from the iframe
         */
        this.handleUpdateGeneratedPassword = (message) => {
            this.postMessageToIFrame(message);
            if (message.refreshPassword) {
                this.clearAriaAlert();
                this.createAriaAlertElement(true);
                this.announceAriaAlert(chrome.i18n.getMessage("passwordRegenerated"), 500, true);
            }
        };
        /**
         * Handles mutations to the iframe element. The ensures that the iframe
         * element's styles are not modified by a third party source.
         *
         * @param mutations - The mutations to the iframe element
         */
        this.handleMutations = (mutations) => {
            if (this.isTriggeringExcessiveMutationObserverIterations()) {
                return;
            }
            for (let index = 0; index < mutations.length; index++) {
                const mutation = mutations[index];
                if (mutation.type !== "attributes") {
                    continue;
                }
                const element = mutation.target;
                if (mutation.attributeName !== "style") {
                    this.handleElementAttributeMutation(element);
                    continue;
                }
                this.iframe.removeAttribute("style");
                this.updateElementStyles(this.iframe, this.iframeStyles);
            }
        };
        this.iframeMutationObserver = new MutationObserver(this.handleMutations);
    }
    /**
     * Handles initialization of the iframe which includes applying initial styles
     * to the iframe, setting the source, and adding listener that connects the
     * iframe to the background script each time it loads. Can conditionally
     * create an aria alert element to announce to screen readers when the iframe
     * is loaded. The end result is append to the shadowDOM of the custom element
     * that is declared.
     */
    initMenuIframe() {
        this.defaultIframeAttributes.src = chrome.runtime.getURL("overlay/menu.html");
        this.defaultIframeAttributes.title = this.iframeTitle;
        this.iframe = globalThis.document.createElement("iframe");
        for (const [attribute, value] of Object.entries(this.defaultIframeAttributes)) {
            this.iframe.setAttribute(attribute, value);
        }
        this.iframeStyles = Object.assign(Object.assign({}, this.iframeStyles), this.initStyles);
        this.setElementStyles(this.iframe, this.iframeStyles, true);
        this.iframe.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.LOAD, this.setupPortMessageListener);
        if (this.ariaAlert) {
            this.createAriaAlertElement();
        }
        this.shadow.appendChild(this.iframe);
        this.observeIframe();
    }
    /**
     * Creates an aria alert element that is used to announce to screen readers
     * when the iframe is loaded.
     */
    createAriaAlertElement(assertive = false) {
        this.ariaAlertElement = globalThis.document.createElement("div");
        this.ariaAlertElement.setAttribute("role", "alert");
        this.ariaAlertElement.setAttribute("aria-live", assertive ? "assertive" : "polite");
        this.ariaAlertElement.setAttribute("aria-atomic", "true");
        this.updateElementStyles(this.ariaAlertElement, {
            position: "absolute",
            top: "-9999px",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0",
            pointerEvents: "none",
        });
    }
    /**
     * Announces the aria alert element to screen readers when the iframe is loaded.
     *
     * @param textContent - The text content to announce
     * @param delay - The delay before announcing the text content
     * @param triggeredByUser - Identifies whether we should present the alert regardless of field focus
     */
    announceAriaAlert(textContent, delay, triggeredByUser = false) {
        if (!this.ariaAlertElement || !textContent) {
            return;
        }
        this.ariaAlertElement.remove();
        this.ariaAlertElement.textContent = textContent;
        this.clearAriaAlert();
        this.ariaAlertTimeout = globalThis.setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            const isFieldFocused = yield this.sendExtensionMessage("checkIsFieldCurrentlyFocused");
            if (isFieldFocused || triggeredByUser) {
                this.shadow.appendChild(this.ariaAlertElement);
            }
            this.ariaAlertTimeout = null;
        }), delay);
    }
    /**
     * Clears any existing aria alert that could be announced.
     */
    clearAriaAlert() {
        if (this.ariaAlertTimeout) {
            clearTimeout(this.ariaAlertTimeout);
            this.ariaAlertTimeout = null;
        }
    }
    /**
     * Handles the initialization of the autofill inline menu. This includes setting
     * the port key and sending a message to the iframe to initialize the inline menu.
     *
     * @param message
     * @private
     */
    initAutofillInlineMenu(message) {
        this.portKey = message.portKey;
        if (message.command === "initAutofillInlineMenuList") {
            this.initAutofillInlineMenuList(message);
            return;
        }
        this.postMessageToIFrame(message);
    }
    /**
     * Handles initialization of the autofill inline menu list. This includes setting
     * the theme and sending a message to the iframe to initialize the inline menu.
     *
     * @param message - The message sent from the iframe
     */
    initAutofillInlineMenuList(message) {
        const { theme } = message;
        let borderColor;
        let verifiedTheme = theme;
        if (verifiedTheme === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.System) {
            verifiedTheme = globalThis.matchMedia("(prefers-color-scheme: dark)").matches
                ? _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark
                : _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Light;
        }
        if (verifiedTheme === _bitwarden_common_platform_enums__WEBPACK_IMPORTED_MODULE_1__.ThemeTypes.Dark) {
            borderColor = "#4c525f";
        }
        if (borderColor) {
            this.updateElementStyles(this.iframe, { borderColor });
        }
        message.theme = verifiedTheme;
        this.postMessageToIFrame(message);
    }
    postMessageToIFrame(message) {
        var _a;
        (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(Object.assign({ portKey: this.portKey }, message), "*");
    }
    /**
     * Updates the position of the iframe element. Will also announce
     * to screen readers that the iframe is open.
     *
     * @param position - The position styles to apply to the iframe
     */
    updateIframePosition(position) {
        if (!globalThis.document.hasFocus()) {
            return;
        }
        const styles = this.fadeInTimeout ? Object.assign(position, { opacity: "0" }) : position;
        this.updateElementStyles(this.iframe, styles);
        if (this.fadeInTimeout) {
            this.handleFadeInInlineMenuIframe();
        }
        this.announceAriaAlert(this.ariaAlert, 2000);
    }
    /**
     * Gets the page color scheme meta tag and sends a message to the iframe
     * to update its color scheme. Will default to "normal" if the meta tag
     * does not exist.
     */
    updateAutofillInlineMenuColorScheme() {
        var _a;
        const colorSchemeValue = (_a = globalThis.document
            .querySelector("meta[name='color-scheme']")) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
        this.postMessageToIFrame({
            command: "updateAutofillInlineMenuColorScheme",
            colorScheme: colorSchemeValue || "normal",
        });
    }
    /**
     * Accepts an element and updates the styles for that element. This method
     * will also unobserve the element if it is the iframe element. This is
     * done to ensure that we do not trigger the mutation observer when we
     * update the styles for the iframe.
     *
     * @param customElement - The element to update the styles for
     * @param styles - The styles to apply to the element
     */
    updateElementStyles(customElement, styles) {
        if (!customElement) {
            return;
        }
        this.unobserveIframe();
        this.setElementStyles(customElement, styles, true);
        if (customElement === this.iframe) {
            this.iframeStyles = Object.assign(Object.assign({}, this.iframeStyles), styles);
        }
        this.observeIframe();
    }
    /**
     * Triggers a forced closure of the autofill inline menu. This is used when the
     * mutation observer is triggered excessively.
     */
    forceCloseInlineMenu() {
        void this.sendExtensionMessage("closeAutofillInlineMenu", { forceCloseInlineMenu: true });
    }
    /**
     * Triggers a fade in effect for the inline menu iframe. Initialized by the background context.
     */
    handleFadeInInlineMenuIframe() {
        this.clearFadeInTimeout();
        this.fadeInTimeout = globalThis.setTimeout(() => {
            this.updateElementStyles(this.iframe, { display: "block", opacity: "1" });
            this.clearFadeInTimeout();
        }, 10);
    }
    /**
     * Clears the fade in timeout for the inline menu iframe.
     */
    clearFadeInTimeout() {
        if (this.fadeInTimeout) {
            clearTimeout(this.fadeInTimeout);
            this.fadeInTimeout = null;
        }
    }
    /**
     * Triggers a delayed closure of the inline menu to ensure that click events are
     * caught if focus is programmatically redirected away from the inline menu.
     */
    handleDelayedAutofillInlineMenuClosure() {
        if (this.delayedCloseTimeout) {
            clearTimeout(this.delayedCloseTimeout);
        }
        this.updateElementStyles(this.iframe, {
            transition: this.fadeOutOpacityTransition,
            opacity: "0",
        });
        this.delayedCloseTimeout = globalThis.setTimeout(() => {
            var _a;
            this.updateElementStyles(this.iframe, { transition: this.fadeInOpacityTransition });
            (_a = this.port) === null || _a === void 0 ? void 0 : _a.disconnect();
            this.port = null;
            this.forceCloseInlineMenu();
        }, 100);
    }
    /**
     * Handles mutations to the iframe element's attributes. This ensures that
     * the iframe element's attributes are not modified by a third party source.
     *
     * @param element - The element to handle attribute mutations for
     */
    handleElementAttributeMutation(element) {
        const attributes = Array.from(element.attributes);
        for (let attributeIndex = 0; attributeIndex < attributes.length; attributeIndex++) {
            const attribute = attributes[attributeIndex];
            if (attribute.name === "style") {
                continue;
            }
            if (this.foreignMutationsCount >= 10) {
                this.forceCloseInlineMenu();
                break;
            }
            const defaultIframeAttribute = this.defaultIframeAttributes[attribute.name];
            if (!defaultIframeAttribute) {
                this.iframe.removeAttribute(attribute.name);
                this.foreignMutationsCount++;
                continue;
            }
            if (attribute.value === defaultIframeAttribute) {
                continue;
            }
            this.iframe.setAttribute(attribute.name, defaultIframeAttribute);
            this.foreignMutationsCount++;
        }
    }
    /**
     * Observes the iframe element for mutations to its style attribute.
     */
    observeIframe() {
        this.iframeMutationObserver.observe(this.iframe, { attributes: true });
    }
    /**
     * Unobserves the iframe element for mutations to its style attribute.
     */
    unobserveIframe() {
        var _a;
        (_a = this.iframeMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    /**
     * Identifies if the mutation observer is triggering excessive iterations.
     * Will remove the autofill inline menu if any set mutation observer is
     * triggering excessive iterations.
     */
    isTriggeringExcessiveMutationObserverIterations() {
        const resetCounters = () => {
            this.mutationObserverIterations = 0;
            this.foreignMutationsCount = 0;
        };
        if (this.mutationObserverIterationsResetTimeout) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
        }
        this.mutationObserverIterations++;
        this.mutationObserverIterationsResetTimeout = globalThis.setTimeout(() => resetCounters(), 2000);
        if (this.mutationObserverIterations > 20) {
            clearTimeout(this.mutationObserverIterationsResetTimeout);
            resetCounters();
            this.forceCloseInlineMenu();
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-list-iframe.ts":
/*!*********************************************************************************************!*\
  !*** ./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-list-iframe.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillInlineMenuListIframe: function() { return /* binding */ AutofillInlineMenuListIframe; }
/* harmony export */ });
/* harmony import */ var _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/autofill-overlay.enum */ "./src/autofill/enums/autofill-overlay.enum.ts");
/* harmony import */ var _autofill_inline_menu_iframe_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autofill-inline-menu-iframe-element */ "./src/autofill/overlay/inline-menu/iframe-content/autofill-inline-menu-iframe-element.ts");


class AutofillInlineMenuListIframe extends _autofill_inline_menu_iframe_element__WEBPACK_IMPORTED_MODULE_1__.AutofillInlineMenuIframeElement {
    constructor(element) {
        super(element, _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillOverlayPort.List, {
            height: "0px",
            minWidth: "260px",
            maxHeight: "180px",
            boxShadow: "rgba(0, 0, 0, 0.1) 2px 4px 6px 0px",
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(206, 212, 220)",
        }, chrome.i18n.getMessage("bitwardenVault"));
    }
}


/***/ }),

/***/ "./src/autofill/overlay/notifications/content/overlay-notifications-content.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/autofill/overlay/notifications/content/overlay-notifications-content.service.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayNotificationsContentService: function() { return /* binding */ OverlayNotificationsContentService; }
/* harmony export */ });
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../notification/abstractions/notification-bar */ "./src/autofill/notification/abstractions/notification-bar.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/autofill/utils/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore



class OverlayNotificationsContentService {
    getNotificationBarStyles() {
        const styles = {
            height: "400px",
            width: "430px",
            maxWidth: "calc(100% - 20px)",
            minHeight: "initial",
            top: "10px",
            right: "0px",
            padding: "0",
            position: "fixed",
            zIndex: "2147483647",
            visibility: "visible",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "transparent",
            overflow: "hidden",
            transition: "box-shadow 0.15s ease",
            transitionDelay: "0.15s",
        };
        if (!this.notificationRefreshFlag) {
            styles.height = "82px";
            styles.right = "10px";
        }
        return styles;
    }
    constructor() {
        this.notificationBarElement = null;
        this.notificationBarIframeElement = null;
        this.currentNotificationBarType = null;
        this.notificationRefreshFlag = false;
        this.notificationBarIframeElementStyles = {
            width: "100%",
            height: "100%",
            border: "0",
            display: "block",
            position: "relative",
            transition: "transform 0.15s ease-out, opacity 0.15s ease",
            borderRadius: "4px",
        };
        this.extensionMessageHandlers = {
            openNotificationBar: ({ message }) => this.handleOpenNotificationBarMessage(message),
            closeNotificationBar: ({ message }) => this.handleCloseNotificationBarMessage(message),
            adjustNotificationBar: ({ message }) => this.handleAdjustNotificationBarHeightMessage(message),
            saveCipherAttemptCompleted: ({ message }) => this.handleSaveCipherAttemptCompletedMessage(message),
        };
        /**
         * Handles the load event for the notification bar iframe.
         * This will animate the notification bar into view.
         */
        this.handleNotificationBarIframeOnLoad = () => {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles)(this.notificationBarIframeElement, { transform: "translateX(0)", opacity: "1" }, true);
            if (!this.notificationRefreshFlag) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles)(this.notificationBarElement, { boxShadow: "2px 4px 6px 0px #0000001A" }, true);
            }
            this.notificationBarIframeElement.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.LOAD, this.handleNotificationBarIframeOnLoad);
        };
        void (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sendExtensionMessage)("checkNotificationQueue");
        void (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sendExtensionMessage)("notificationRefreshFlagValue").then((notificationRefreshFlag) => {
            this.notificationRefreshFlag = !!notificationRefreshFlag;
        });
    }
    /**
     * Returns the message handlers for the content script.
     */
    get messageHandlers() {
        return this.extensionMessageHandlers;
    }
    /**
     * Opens the notification bar with the provided init data. Will trigger a closure
     * of the notification bar if the type of the notification bar changes.
     *
     * @param message - The message containing the initialization data for the notification bar.
     */
    handleOpenNotificationBarMessage(message) {
        if (!message.data) {
            return;
        }
        const { type, typeData, params } = message.data;
        if (this.currentNotificationBarType && type !== this.currentNotificationBarType) {
            this.closeNotificationBar();
        }
        const initData = {
            type: type,
            isVaultLocked: typeData.isVaultLocked,
            theme: typeData.theme,
            removeIndividualVault: typeData.removeIndividualVault,
            importType: typeData.importType,
            launchTimestamp: typeData.launchTimestamp,
            params,
        };
        if (globalThis.document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => this.openNotificationBar(initData));
            return;
        }
        this.openNotificationBar(initData);
    }
    /**
     * Closes the notification bar. If the message contains a flag to fade out the notification,
     * the notification bar will fade out before being removed from the DOM.
     *
     * @param message - The message containing the data for closing the notification bar.
     */
    handleCloseNotificationBarMessage(message) {
        var _a, _b;
        const closedByUser = typeof ((_a = message.data) === null || _a === void 0 ? void 0 : _a.closedByUser) === "boolean" ? message.data.closedByUser : true;
        if ((_b = message.data) === null || _b === void 0 ? void 0 : _b.fadeOutNotification) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles)(this.notificationBarIframeElement, { opacity: "0" }, true);
            globalThis.setTimeout(() => this.closeNotificationBar(closedByUser), 150);
            return;
        }
        this.closeNotificationBar(closedByUser);
    }
    /**
     * Adjusts the height of the notification bar.
     *
     * @param message - The message containing the height of the notification bar.
     */
    handleAdjustNotificationBarHeightMessage(message) {
        var _a;
        if (this.notificationBarElement && ((_a = message.data) === null || _a === void 0 ? void 0 : _a.height)) {
            this.notificationBarElement.style.height = `${message.data.height}px`;
        }
    }
    /**
     * Handles the message for when a save cipher attempt has completed. This triggers an update
     * to the presentation of the notification bar, facilitating a visual indication of the save
     * attempt's success or failure.
     *
     * @param message
     * @private
     */
    handleSaveCipherAttemptCompletedMessage(message) {
        // destructure error out of data
        const _a = (message === null || message === void 0 ? void 0 : message.data) || {}, { error } = _a, otherData = __rest(_a, ["error"]);
        this.sendMessageToNotificationBarIframe({
            command: "saveCipherAttemptCompleted",
            data: Object.keys(otherData).length ? otherData : undefined,
            error,
        });
    }
    /**
     * Opens the notification bar with the given initialization data.
     *
     * @param initData
     * @private
     */
    openNotificationBar(initData) {
        if (!this.notificationBarElement && !this.notificationBarIframeElement) {
            this.createNotificationBarIframeElement(initData);
            this.createNotificationBarElement();
            this.setupInitNotificationBarMessageListener(initData);
            globalThis.document.body.appendChild(this.notificationBarElement);
        }
    }
    /**
     * Creates the iframe element for the notification bar.
     *
     * @param initData - The initialization data for the notification bar.
     */
    createNotificationBarIframeElement(initData) {
        var _a;
        const content = (_a = document.querySelector('meta[name="color-scheme"]')) === null || _a === void 0 ? void 0 : _a.content;
        const allowedColorScheme = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.matchAllowedColorSchemes)(content);
        const isNotificationFresh = initData.launchTimestamp && Date.now() - initData.launchTimestamp < 250;
        this.currentNotificationBarType = initData.type;
        this.notificationBarIframeElement = globalThis.document.createElement("iframe");
        this.notificationBarIframeElement.id = "bit-notification-bar-iframe";
        this.notificationBarIframeElement.src = chrome.runtime.getURL(`notification/bar.html?colorScheme=${encodeURIComponent(allowedColorScheme)}`);
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles)(this.notificationBarIframeElement, Object.assign(Object.assign({}, this.notificationBarIframeElementStyles), { transform: isNotificationFresh ? "translateX(100%)" : "translateX(0)", opacity: isNotificationFresh ? "1" : "0" }), true);
        this.notificationBarIframeElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.LOAD, this.handleNotificationBarIframeOnLoad);
    }
    /**
     * Creates the container for the notification bar iframe.
     */
    createNotificationBarElement() {
        if (this.notificationBarIframeElement) {
            this.notificationBarElement = globalThis.document.createElement("div");
            this.notificationBarElement.id = "bit-notification-bar";
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.setElementStyles)(this.notificationBarElement, this.getNotificationBarStyles(), true);
            this.notificationBarElement.appendChild(this.notificationBarIframeElement);
        }
    }
    /**
     * Sets up the message listener for the initialization of the notification bar.
     * This will send the initialization data to the notification bar iframe.
     *
     * @param initData - The initialization data for the notification bar.
     */
    setupInitNotificationBarMessageListener(initData) {
        const handleInitNotificationBarMessage = (event) => {
            const { source, data } = event;
            if (source !== this.notificationBarIframeElement.contentWindow ||
                (data === null || data === void 0 ? void 0 : data.command) !== "initNotificationBar") {
                return;
            }
            this.sendMessageToNotificationBarIframe({ command: "initNotificationBar", initData });
            globalThis.removeEventListener("message", handleInitNotificationBarMessage);
        };
        if (this.notificationBarIframeElement) {
            globalThis.addEventListener("message", handleInitNotificationBarMessage);
        }
    }
    /**
     * Closes the notification bar. Will trigger a removal of the notification bar
     * from the background queue if the notification bar was closed by the user.
     *
     * @param closedByUserAction - Whether the notification bar was closed by the user.
     */
    closeNotificationBar(closedByUserAction = false) {
        if (!this.notificationBarElement && !this.notificationBarIframeElement) {
            return;
        }
        this.notificationBarIframeElement.remove();
        this.notificationBarIframeElement = null;
        this.notificationBarElement.remove();
        this.notificationBarElement = null;
        const removableNotificationTypes = new Set([
            _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_1__.NotificationTypes.Add,
            _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_1__.NotificationTypes.Change,
            _notification_abstractions_notification_bar__WEBPACK_IMPORTED_MODULE_1__.NotificationTypes.AtRiskPassword,
        ]);
        if (closedByUserAction && removableNotificationTypes.has(this.currentNotificationBarType)) {
            void (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sendExtensionMessage)("bgRemoveTabFromNotificationQueue");
        }
        this.currentNotificationBarType = null;
    }
    /**
     * Sends a message to the notification bar iframe.
     *
     * @param message - The message to send to the notification bar iframe.
     */
    sendMessageToNotificationBarIframe(message) {
        if (this.notificationBarIframeElement) {
            this.notificationBarIframeElement.contentWindow.postMessage(message, "*");
        }
    }
    /**
     * Destroys the notification bar.
     */
    destroy() {
        this.closeNotificationBar(true);
    }
}


/***/ }),

/***/ "./src/autofill/services/autofill-constants.ts":
/*!*****************************************************!*\
  !*** ./src/autofill/services/autofill-constants.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoFillConstants: function() { return /* binding */ AutoFillConstants; },
/* harmony export */   CreditCardAutoFillConstants: function() { return /* binding */ CreditCardAutoFillConstants; },
/* harmony export */   IdentityAutoFillConstants: function() { return /* binding */ IdentityAutoFillConstants; },
/* harmony export */   SubmitChangePasswordButtonNames: function() { return /* binding */ SubmitChangePasswordButtonNames; },
/* harmony export */   SubmitLoginButtonNames: function() { return /* binding */ SubmitLoginButtonNames; }
/* harmony export */ });
class AutoFillConstants {
}
AutoFillConstants.EmailFieldNames = [
    // English
    "email",
    "email address",
    "e-mail",
    "e-mail address",
    // German
    "email adresse",
    "e-mail adresse",
];
AutoFillConstants.UsernameFieldNames = [
    // English
    "username",
    "user name",
    "userid",
    "user id",
    "customer id",
    "login id",
    "login",
    // German
    "benutzername",
    "benutzer name",
    "benutzerid",
    "benutzer id",
    ...AutoFillConstants.EmailFieldNames,
];
AutoFillConstants.TotpFieldNames = [
    "totp",
    "totpcode",
    "2facode",
    "approvals_code",
    "mfacode",
    "otc-code",
    "onetimecode",
    "otp-code",
    "otpcode",
    "onetimepassword",
    "security_code",
    "twofactor",
    "twofa",
    "twofactorcode",
    "verificationcode",
    "verification code",
    // 华为云特有字段
    "input_code",
    "hwid_code",
    "hwid_input",
    "huawei_code",
    "huawei_input",
];
AutoFillConstants.AmbiguousTotpFieldNames = ["code", "pin", "otc", "otp", "2fa", "mfa"];
// 华为云特有的CSS类名
AutoFillConstants.HuaweiCloudClasses = [
    "hwid-input",
    "hwid_input",
    "huawei-input",
    "huawei_input",
    "hcloud-input",
    "hcloud_input",
];
// 华为云特有的属性名
AutoFillConstants.HuaweiCloudAttributes = [
    "data-index",
    "ht",
];
AutoFillConstants.SearchFieldNames = ["search", "query", "find", "go"];
AutoFillConstants.FieldIgnoreList = ["captcha", "findanything", "forgot"];
AutoFillConstants.PasswordFieldExcludeList = [
    "hint",
    ...AutoFillConstants.FieldIgnoreList,
    ...AutoFillConstants.TotpFieldNames,
];
AutoFillConstants.ExcludedAutofillLoginTypes = [
    "hidden",
    "file",
    "button",
    "image",
    "reset",
    "search",
];
AutoFillConstants.ExcludedAutofillTypes = [
    "radio",
    "checkbox",
    ...AutoFillConstants.ExcludedAutofillLoginTypes,
];
AutoFillConstants.ExcludedInlineMenuTypes = [
    "textarea",
    ...AutoFillConstants.ExcludedAutofillTypes,
];
AutoFillConstants.ExcludedIdentityAutocompleteTypes = new Set([
    "current-password",
    "new-password",
]);
class CreditCardAutoFillConstants {
}
CreditCardAutoFillConstants.CardAttributes = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "title",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
];
CreditCardAutoFillConstants.CardAttributesExtended = [
    ...CreditCardAutoFillConstants.CardAttributes,
    "label-right",
];
CreditCardAutoFillConstants.CardHolderFieldNames = [
    "accountholdername",
    "cc-name",
    "card-name",
    "cardholder-name",
    "cardholder",
    "name",
    "nom",
];
CreditCardAutoFillConstants.CardHolderFieldNameValues = [
    "accountholdername",
    "cc-name",
    "card-name",
    "cardholder-name",
    "cardholder",
    "tbName",
];
CreditCardAutoFillConstants.CardNumberFieldNames = [
    "cc-number",
    "cc-num",
    "card-number",
    "card-num",
    "number",
    "cc",
    "cc-no",
    "card-no",
    "credit-card",
    "numero-carte",
    "carte",
    "carte-credit",
    "num-carte",
    "cb-num",
    "card-pan",
];
CreditCardAutoFillConstants.CardNumberFieldNameValues = [
    "cc-number",
    "cc-num",
    "card-number",
    "card-num",
    "cc-no",
    "card-no",
    "numero-carte",
    "num-carte",
    "cb-num",
];
CreditCardAutoFillConstants.CardExpiryFieldNames = [
    "cc-exp",
    "card-exp",
    "cc-expiration",
    "card-expiration",
    "cc-ex",
    "card-ex",
    "card-expire",
    "card-expiry",
    "validite",
    "expiration",
    "expiry",
    "mm-yy",
    "mm-yyyy",
    "yy-mm",
    "yyyy-mm",
    "expiration-date",
    "payment-card-expiration",
    "payment-cc-date",
];
CreditCardAutoFillConstants.CardExpiryFieldNameValues = [
    "mm-yy",
    "mm-yyyy",
    "yy-mm",
    "yyyy-mm",
    "expiration-date",
    "payment-card-expiration",
];
CreditCardAutoFillConstants.ExpiryMonthFieldNames = [
    "exp-month",
    "cc-exp-month",
    "cc-month",
    "card-month",
    "cc-mo",
    "card-mo",
    "exp-mo",
    "card-exp-mo",
    "cc-exp-mo",
    "card-expiration-month",
    "expiration-month",
    "cc-mm",
    "cc-m",
    "card-mm",
    "card-m",
    "card-exp-mm",
    "cc-exp-mm",
    "exp-mm",
    "exp-m",
    "expire-month",
    "expire-mo",
    "expiry-month",
    "expiry-mo",
    "card-expire-month",
    "card-expire-mo",
    "card-expiry-month",
    "card-expiry-mo",
    "mois-validite",
    "mois-expiration",
    "m-validite",
    "m-expiration",
    "expiry-date-field-month",
    "expiration-date-month",
    "expiration-date-mm",
    "exp-mon",
    "validity-mo",
    "exp-date-mo",
    "cb-date-mois",
    "date-m",
];
CreditCardAutoFillConstants.ExpiryYearFieldNames = [
    "exp-year",
    "cc-exp-year",
    "cc-year",
    "card-year",
    "cc-yr",
    "card-yr",
    "exp-yr",
    "card-exp-yr",
    "cc-exp-yr",
    "card-expiration-year",
    "expiration-year",
    "cc-yy",
    "cc-y",
    "card-yy",
    "card-y",
    "card-exp-yy",
    "cc-exp-yy",
    "exp-yy",
    "exp-y",
    "cc-yyyy",
    "card-yyyy",
    "card-exp-yyyy",
    "cc-exp-yyyy",
    "expire-year",
    "expire-yr",
    "expiry-year",
    "expiry-yr",
    "card-expire-year",
    "card-expire-yr",
    "card-expiry-year",
    "card-expiry-yr",
    "an-validite",
    "an-expiration",
    "annee-validite",
    "annee-expiration",
    "expiry-date-field-year",
    "expiration-date-year",
    "cb-date-ann",
    "expiration-date-yy",
    "expiration-date-yyyy",
    "validity-year",
    "exp-date-year",
    "date-y",
];
CreditCardAutoFillConstants.CVVFieldNames = [
    "cvv",
    "cvc",
    "cvv2",
    "cc-csc",
    "cc-cvv",
    "card-csc",
    "card-cvv",
    "cvd",
    "cid",
    "cvc2",
    "cnv",
    "cvn2",
    "cc-code",
    "card-code",
    "code-securite",
    "security-code",
    "crypto",
    "card-verif",
    "verification-code",
    "csc",
    "ccv",
];
CreditCardAutoFillConstants.CardBrandFieldNames = [
    "cc-type",
    "card-type",
    "card-brand",
    "cc-brand",
    "cb-type",
];
// Note, these are expressions of user-guidance for the expected expiry date format to be used
CreditCardAutoFillConstants.CardExpiryDateFormats = [
    // English
    {
        Month: "mm",
        MonthShort: "m",
        Year: "yyyy",
        YearShort: "yy",
    },
    // Danish
    {
        Month: "mm",
        MonthShort: "m",
        Year: "åååå",
        YearShort: "åå",
    },
    // German/Dutch
    {
        Month: "mm",
        MonthShort: "m",
        Year: "jjjj",
        YearShort: "jj",
    },
    // French/Spanish/Italian
    {
        Month: "mm",
        MonthShort: "m",
        Year: "aa",
        YearShort: "aa",
    },
    // Russian
    {
        Month: "мм",
        MonthShort: "м",
        Year: "гггг",
        YearShort: "гг",
    },
    // Portuguese
    {
        Month: "mm",
        MonthShort: "m",
        Year: "rrrr",
        YearShort: "rr",
    },
];
// Each index represents a language. These three arrays should all be the same length.
// 0: English, 1: Danish, 2: German/Dutch, 3: French/Spanish/Italian, 4: Russian, 5: Portuguese
CreditCardAutoFillConstants.MonthAbbr = ["mm", "mm", "mm", "mm", "мм", "mm"];
CreditCardAutoFillConstants.YearAbbrShort = ["yy", "åå", "jj", "aa", "гг", "rr"];
CreditCardAutoFillConstants.YearAbbrLong = ["yyyy", "åååå", "jjjj", "aa", "гггг", "rrrr"];
class IdentityAutoFillConstants {
}
IdentityAutoFillConstants.IdentityAttributes = [
    "autoCompleteType",
    "data-stripe",
    "htmlName",
    "htmlID",
    "label-tag",
    "placeholder",
    "label-left",
    "label-top",
    "data-recurly",
    "accountCreationFieldType",
];
IdentityAutoFillConstants.FullNameFieldNames = ["name", "full-name", "your-name"];
IdentityAutoFillConstants.FullNameFieldNameValues = ["full-name", "your-name"];
IdentityAutoFillConstants.TitleFieldNames = [
    "honorific-prefix",
    "prefix",
    "title",
    // German
    "anrede",
];
IdentityAutoFillConstants.FirstnameFieldNames = [
    // English
    "f-name",
    "first-name",
    "given-name",
    "first-n",
    // German
    "vorname",
];
IdentityAutoFillConstants.MiddlenameFieldNames = [
    "m-name",
    "middle-name",
    "additional-name",
    "middle-initial",
    "middle-n",
    "middle-i",
];
IdentityAutoFillConstants.LastnameFieldNames = [
    // English
    "l-name",
    "last-name",
    "s-name",
    "surname",
    "family-name",
    "family-n",
    "last-n",
    // German
    "nachname",
    "familienname",
];
IdentityAutoFillConstants.EmailFieldNames = ["e-mail", "email-address"];
IdentityAutoFillConstants.AddressFieldNames = [
    "address",
    "street-address",
    "addr",
    "street",
    "mailing-addr",
    "billing-addr",
    "mail-addr",
    "bill-addr",
    // German
    "strasse",
    "adresse",
];
IdentityAutoFillConstants.AddressFieldNameValues = [
    "mailing-addr",
    "billing-addr",
    "mail-addr",
    "bill-addr",
];
IdentityAutoFillConstants.Address1FieldNames = [
    "address-1",
    "address-line-1",
    "addr-1",
    "street-1",
];
IdentityAutoFillConstants.Address2FieldNames = [
    "address-2",
    "address-line-2",
    "addr-2",
    "street-2",
    "address-ext",
];
IdentityAutoFillConstants.Address3FieldNames = [
    "address-3",
    "address-line-3",
    "addr-3",
    "street-3",
];
IdentityAutoFillConstants.PostalCodeFieldNames = [
    "postal",
    "zip",
    "zip2",
    "zip-code",
    "postal-code",
    "post-code",
    "postcode",
    "address-zip",
    "address-postal",
    "address-code",
    "address-postal-code",
    "address-zip-code",
    // German
    "plz",
    "postleitzahl",
];
IdentityAutoFillConstants.CityFieldNames = [
    "city",
    "town",
    "address-level-2",
    "address-city",
    "address-town",
    // German
    "ort",
    "stadt",
    "wohnort",
];
IdentityAutoFillConstants.StateFieldNames = [
    "state",
    "province",
    "provence",
    "address-level-1",
    "address-state",
    "address-province",
    // German
    "bundesland",
];
IdentityAutoFillConstants.CountryFieldNames = [
    "country",
    "country-code",
    "country-name",
    "address-country",
    "address-country-name",
    "address-country-code",
    // German
    "land",
];
IdentityAutoFillConstants.PhoneFieldNames = [
    "phone",
    "mobile",
    "mobile-phone",
    "tel",
    "telephone",
    "phone-number",
    // German
    "telefon",
    "telefonnummer",
    "mobil",
    "handy",
];
IdentityAutoFillConstants.UserNameFieldNames = ["user-name", "user-id", "screen-name"];
IdentityAutoFillConstants.CompanyFieldNames = [
    "company",
    "company-name",
    "organization",
    "organization-name",
    // German
    "firma",
];
IdentityAutoFillConstants.IsoCountries = {
    afghanistan: "AF",
    "aland islands": "AX",
    albania: "AL",
    algeria: "DZ",
    "american samoa": "AS",
    andorra: "AD",
    angola: "AO",
    anguilla: "AI",
    antarctica: "AQ",
    "antigua and barbuda": "AG",
    argentina: "AR",
    armenia: "AM",
    aruba: "AW",
    australia: "AU",
    austria: "AT",
    azerbaijan: "AZ",
    bahamas: "BS",
    bahrain: "BH",
    bangladesh: "BD",
    barbados: "BB",
    belarus: "BY",
    belgium: "BE",
    belize: "BZ",
    benin: "BJ",
    bermuda: "BM",
    bhutan: "BT",
    bolivia: "BO",
    "bosnia and herzegovina": "BA",
    botswana: "BW",
    "bouvet island": "BV",
    brazil: "BR",
    "british indian ocean territory": "IO",
    "brunei darussalam": "BN",
    bulgaria: "BG",
    "burkina faso": "BF",
    burundi: "BI",
    cambodia: "KH",
    cameroon: "CM",
    canada: "CA",
    "cape verde": "CV",
    "cayman islands": "KY",
    "central african republic": "CF",
    chad: "TD",
    chile: "CL",
    china: "CN",
    "christmas island": "CX",
    "cocos (keeling) islands": "CC",
    colombia: "CO",
    comoros: "KM",
    congo: "CG",
    "congo, democratic republic": "CD",
    "cook islands": "CK",
    "costa rica": "CR",
    "cote d'ivoire": "CI",
    croatia: "HR",
    cuba: "CU",
    cyprus: "CY",
    "czech republic": "CZ",
    denmark: "DK",
    djibouti: "DJ",
    dominica: "DM",
    "dominican republic": "DO",
    ecuador: "EC",
    egypt: "EG",
    "el salvador": "SV",
    "equatorial guinea": "GQ",
    eritrea: "ER",
    estonia: "EE",
    ethiopia: "ET",
    "falkland islands": "FK",
    "faroe islands": "FO",
    fiji: "FJ",
    finland: "FI",
    france: "FR",
    "french guiana": "GF",
    "french polynesia": "PF",
    "french southern territories": "TF",
    gabon: "GA",
    gambia: "GM",
    georgia: "GE",
    germany: "DE",
    ghana: "GH",
    gibraltar: "GI",
    greece: "GR",
    greenland: "GL",
    grenada: "GD",
    guadeloupe: "GP",
    guam: "GU",
    guatemala: "GT",
    guernsey: "GG",
    guinea: "GN",
    "guinea-bissau": "GW",
    guyana: "GY",
    haiti: "HT",
    "heard island & mcdonald islands": "HM",
    "holy see (vatican city state)": "VA",
    honduras: "HN",
    "hong kong": "HK",
    hungary: "HU",
    iceland: "IS",
    india: "IN",
    indonesia: "ID",
    "iran, islamic republic of": "IR",
    iraq: "IQ",
    ireland: "IE",
    "isle of man": "IM",
    israel: "IL",
    italy: "IT",
    jamaica: "JM",
    japan: "JP",
    jersey: "JE",
    jordan: "JO",
    kazakhstan: "KZ",
    kenya: "KE",
    kiribati: "KI",
    "republic of korea": "KR",
    "south korea": "KR",
    "democratic people's republic of korea": "KP",
    "north korea": "KP",
    kuwait: "KW",
    kyrgyzstan: "KG",
    "lao people's democratic republic": "LA",
    latvia: "LV",
    lebanon: "LB",
    lesotho: "LS",
    liberia: "LR",
    "libyan arab jamahiriya": "LY",
    liechtenstein: "LI",
    lithuania: "LT",
    luxembourg: "LU",
    macao: "MO",
    macedonia: "MK",
    madagascar: "MG",
    malawi: "MW",
    malaysia: "MY",
    maldives: "MV",
    mali: "ML",
    malta: "MT",
    "marshall islands": "MH",
    martinique: "MQ",
    mauritania: "MR",
    mauritius: "MU",
    mayotte: "YT",
    mexico: "MX",
    "micronesia, federated states of": "FM",
    moldova: "MD",
    monaco: "MC",
    mongolia: "MN",
    montenegro: "ME",
    montserrat: "MS",
    morocco: "MA",
    mozambique: "MZ",
    myanmar: "MM",
    namibia: "NA",
    nauru: "NR",
    nepal: "NP",
    netherlands: "NL",
    "netherlands antilles": "AN",
    "new caledonia": "NC",
    "new zealand": "NZ",
    nicaragua: "NI",
    niger: "NE",
    nigeria: "NG",
    niue: "NU",
    "norfolk island": "NF",
    "northern mariana islands": "MP",
    norway: "NO",
    oman: "OM",
    pakistan: "PK",
    palau: "PW",
    "palestinian territory, occupied": "PS",
    panama: "PA",
    "papua new guinea": "PG",
    paraguay: "PY",
    peru: "PE",
    philippines: "PH",
    pitcairn: "PN",
    poland: "PL",
    portugal: "PT",
    "puerto rico": "PR",
    qatar: "QA",
    reunion: "RE",
    romania: "RO",
    "russian federation": "RU",
    rwanda: "RW",
    "saint barthelemy": "BL",
    "saint helena": "SH",
    "saint kitts and nevis": "KN",
    "saint lucia": "LC",
    "saint martin": "MF",
    "saint pierre and miquelon": "PM",
    "saint vincent and grenadines": "VC",
    samoa: "WS",
    "san marino": "SM",
    "sao tome and principe": "ST",
    "saudi arabia": "SA",
    senegal: "SN",
    serbia: "RS",
    seychelles: "SC",
    "sierra leone": "SL",
    singapore: "SG",
    slovakia: "SK",
    slovenia: "SI",
    "solomon islands": "SB",
    somalia: "SO",
    "south africa": "ZA",
    "south georgia and sandwich isl.": "GS",
    spain: "ES",
    "sri lanka": "LK",
    sudan: "SD",
    suriname: "SR",
    "svalbard and jan mayen": "SJ",
    swaziland: "SZ",
    sweden: "SE",
    switzerland: "CH",
    "syrian arab republic": "SY",
    taiwan: "TW",
    tajikistan: "TJ",
    tanzania: "TZ",
    thailand: "TH",
    "timor-leste": "TL",
    togo: "TG",
    tokelau: "TK",
    tonga: "TO",
    "trinidad and tobago": "TT",
    tunisia: "TN",
    turkey: "TR",
    turkmenistan: "TM",
    "turks and caicos islands": "TC",
    tuvalu: "TV",
    uganda: "UG",
    ukraine: "UA",
    "united arab emirates": "AE",
    "united kingdom": "GB",
    "united states": "US",
    "united states outlying islands": "UM",
    uruguay: "UY",
    uzbekistan: "UZ",
    vanuatu: "VU",
    venezuela: "VE",
    vietnam: "VN",
    "virgin islands, british": "VG",
    "virgin islands, u.s.": "VI",
    "wallis and futuna": "WF",
    "western sahara": "EH",
    yemen: "YE",
    zambia: "ZM",
    zimbabwe: "ZW",
};
IdentityAutoFillConstants.IsoStates = {
    alabama: "AL",
    alaska: "AK",
    "american samoa": "AS",
    arizona: "AZ",
    arkansas: "AR",
    california: "CA",
    colorado: "CO",
    connecticut: "CT",
    delaware: "DE",
    "district of columbia": "DC",
    "federated states of micronesia": "FM",
    florida: "FL",
    georgia: "GA",
    guam: "GU",
    hawaii: "HI",
    idaho: "ID",
    illinois: "IL",
    indiana: "IN",
    iowa: "IA",
    kansas: "KS",
    kentucky: "KY",
    louisiana: "LA",
    maine: "ME",
    "marshall islands": "MH",
    maryland: "MD",
    massachusetts: "MA",
    michigan: "MI",
    minnesota: "MN",
    mississippi: "MS",
    missouri: "MO",
    montana: "MT",
    nebraska: "NE",
    nevada: "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york": "NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "northern mariana islands": "MP",
    ohio: "OH",
    oklahoma: "OK",
    oregon: "OR",
    palau: "PW",
    pennsylvania: "PA",
    "puerto rico": "PR",
    "rhode island": "RI",
    "south carolina": "SC",
    "south dakota": "SD",
    tennessee: "TN",
    texas: "TX",
    utah: "UT",
    vermont: "VT",
    "virgin islands": "VI",
    virginia: "VA",
    washington: "WA",
    "west virginia": "WV",
    wisconsin: "WI",
    wyoming: "WY",
};
IdentityAutoFillConstants.IsoProvinces = {
    alberta: "AB",
    "british columbia": "BC",
    manitoba: "MB",
    "new brunswick": "NB",
    "newfoundland and labrador": "NL",
    "nova scotia": "NS",
    ontario: "ON",
    "prince edward island": "PE",
    quebec: "QC",
    saskatchewan: "SK",
};
const SubmitLoginButtonNames = [
    "login",
    "signin",
    "submit",
    "continue",
    "next",
    "verify",
];
const SubmitChangePasswordButtonNames = [
    "change",
    "save",
    "savepassword",
    "updatepassword",
    "changepassword",
    "resetpassword",
];


/***/ }),

/***/ "./src/autofill/services/autofill-overlay-content.service.ts":
/*!*******************************************************************!*\
  !*** ./src/autofill/services/autofill-overlay-content.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillOverlayContentService: function() { return /* binding */ AutofillOverlayContentService; }
/* harmony export */ });
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webcomponents/custom-elements */ "../../node_modules/@webcomponents/custom-elements/custom-elements.min.js");
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lit_polyfill_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/polyfill-support.js */ "../../node_modules/lit/polyfill-support.js");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tabbable */ "../../node_modules/tabbable/dist/index.esm.js");
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/vault/enums */ "../../libs/common/src/vault/enums/index.ts");
/* harmony import */ var _enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/autofill-field.enums */ "./src/autofill/enums/autofill-field.enums.ts");
/* harmony import */ var _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/autofill-overlay.enum */ "./src/autofill/enums/autofill-overlay.enum.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
/* harmony import */ var _autofill_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autofill-constants */ "./src/autofill/services/autofill-constants.ts");
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









class AutofillOverlayContentService {
    constructor(domQueryService, domElementVisibilityService, inlineMenuFieldQualificationService, inlineMenuContentService) {
        this.domQueryService = domQueryService;
        this.domElementVisibilityService = domElementVisibilityService;
        this.inlineMenuFieldQualificationService = inlineMenuFieldQualificationService;
        this.inlineMenuContentService = inlineMenuContentService;
        this.pageDetailsUpdateRequired = false;
        this.findTabs = tabbable__WEBPACK_IMPORTED_MODULE_8__.tabbable;
        this.sendExtensionMessage = _utils__WEBPACK_IMPORTED_MODULE_6__.sendExtensionMessage;
        this.formFieldElements = new Map();
        this.hiddenFormFieldElements = new WeakMap();
        this.formElements = new Set();
        this.submitElements = new Set();
        this.fieldsWithSubmitElements = new WeakMap();
        this.ignoredFieldTypes = new Set(_autofill_constants__WEBPACK_IMPORTED_MODULE_7__.AutoFillConstants.ExcludedInlineMenuTypes);
        this.userFilledFields = {};
        this.focusableElements = [];
        this.eventHandlersMemo = {};
        this.extensionMessageHandlers = {
            addNewVaultItemFromOverlay: ({ message }) => this.addNewVaultItem(message),
            focusMostRecentlyFocusedField: () => this.focusMostRecentlyFocusedField(),
            blurMostRecentlyFocusedField: () => this.blurMostRecentlyFocusedField(),
            unsetMostRecentlyFocusedField: () => this.unsetMostRecentlyFocusedField(),
            checkIsMostRecentlyFocusedFieldWithinViewport: () => this.checkIsMostRecentlyFocusedFieldWithinViewport(),
            bgUnlockPopoutOpened: () => this.blurMostRecentlyFocusedField(true),
            bgVaultItemRepromptPopoutOpened: () => this.blurMostRecentlyFocusedField(true),
            redirectAutofillInlineMenuFocusOut: ({ message }) => { var _a; return this.redirectInlineMenuFocusOut((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.direction); },
            getSubFrameOffsets: ({ message }) => this.getSubFrameOffsets(message),
            getSubFrameOffsetsFromWindowMessage: ({ message }) => this.getSubFrameOffsetsFromWindowMessage(message),
            checkMostRecentlyFocusedFieldHasValue: () => this.mostRecentlyFocusedFieldHasValue(),
            setupRebuildSubFrameOffsetsListeners: () => this.setupRebuildSubFrameOffsetsListeners(),
            destroyAutofillInlineMenuListeners: () => this.destroy(),
            getInlineMenuFormFieldData: ({ message }) => this.handleGetInlineMenuFormFieldDataMessage(message),
        };
        this.loginFieldQualifiers = {
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.username]: this.inlineMenuFieldQualificationService.isUsernameField,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.password]: this.inlineMenuFieldQualificationService.isCurrentPasswordField,
        };
        this.accountCreationFieldQualifiers = {
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.username]: this.inlineMenuFieldQualificationService.isUsernameField,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.newPassword]: this.inlineMenuFieldQualificationService.isNewPasswordField,
        };
        this.cardFieldQualifiers = {
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardholderName]: this.inlineMenuFieldQualificationService.isFieldForCardholderName,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardNumber]: this.inlineMenuFieldQualificationService.isFieldForCardNumber,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardExpirationMonth]: this.inlineMenuFieldQualificationService.isFieldForCardExpirationMonth,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardExpirationYear]: this.inlineMenuFieldQualificationService.isFieldForCardExpirationYear,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardExpirationDate]: this.inlineMenuFieldQualificationService.isFieldForCardExpirationDate,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.cardCvv]: this.inlineMenuFieldQualificationService.isFieldForCardCvv,
        };
        this.identityFieldQualifiers = {
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityTitle]: this.inlineMenuFieldQualificationService.isFieldForIdentityTitle,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityFirstName]: this.inlineMenuFieldQualificationService.isFieldForIdentityFirstName,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityMiddleName]: this.inlineMenuFieldQualificationService.isFieldForIdentityMiddleName,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityLastName]: this.inlineMenuFieldQualificationService.isFieldForIdentityLastName,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityFullName]: this.inlineMenuFieldQualificationService.isFieldForIdentityFullName,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityAddress1]: this.inlineMenuFieldQualificationService.isFieldForIdentityAddress1,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityAddress2]: this.inlineMenuFieldQualificationService.isFieldForIdentityAddress2,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityAddress3]: this.inlineMenuFieldQualificationService.isFieldForIdentityAddress3,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityCity]: this.inlineMenuFieldQualificationService.isFieldForIdentityCity,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityState]: this.inlineMenuFieldQualificationService.isFieldForIdentityState,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityPostalCode]: this.inlineMenuFieldQualificationService.isFieldForIdentityPostalCode,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityCountry]: this.inlineMenuFieldQualificationService.isFieldForIdentityCountry,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityCompany]: this.inlineMenuFieldQualificationService.isFieldForIdentityCompany,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityPhone]: this.inlineMenuFieldQualificationService.isFieldForIdentityPhone,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityEmail]: this.inlineMenuFieldQualificationService.isFieldForIdentityEmail,
            [_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityUsername]: this.inlineMenuFieldQualificationService.isFieldForIdentityUsername,
        };
        /**
         * Sets up the event listeners that trigger an indication that a form has been submitted.
         *
         * @param submitButton - The submit button element to set up the event listeners for.
         */
        this.setupSubmitButtonEventListeners = (submitButton) => {
            if (!submitButton || this.submitElements.has(submitButton)) {
                return;
            }
            this.submitElements.add(submitButton);
            const handler = this.useEventHandlersMemo((0,_utils__WEBPACK_IMPORTED_MODULE_6__.throttle)(this.handleSubmitButtonInteraction, 150), _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT);
            submitButton.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.KEYUP, handler);
            globalThis.document.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CLICK, handler);
            globalThis.document.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MOUSEUP, handler);
        };
        /**
         * Handles click and keyup events that trigger behavior for a submit button element.
         *
         * @param event - The event that triggered the submit button interaction.
         */
        this.handleSubmitButtonInteraction = (event) => {
            if (!this.submitElements.has(event.target) ||
                (event.type === "keyup" &&
                    !["Enter", "Space"].includes(event.code))) {
                return;
            }
            this.handleFormFieldSubmitEvent();
        };
        /**
         * Handles the repositioning of the autofill overlay when the form is submitted.
         */
        this.handleFormFieldSubmitEvent = () => {
            void this.sendExtensionMessage("formFieldSubmitted", this.getFormFieldData());
        };
        /**
         * Handles capturing the form field data for a notification message. Will not trigger this behavior
         * in the case where the user is still typing in the field unless the focus is ignored.
         */
        this.handleGetInlineMenuFormFieldDataMessage = (_a) => __awaiter(this, [_a], void 0, function* ({ ignoreFieldFocus, }) {
            if (!ignoreFieldFocus && (yield this.isFieldCurrentlyFocused())) {
                return;
            }
            return this.getFormFieldData();
        });
        /**
         * Returns the form field data used for add login and change password notifications.
         */
        this.getFormFieldData = () => {
            var _a, _b, _c;
            return {
                uri: globalThis.document.URL,
                username: ((_a = this.userFilledFields["username"]) === null || _a === void 0 ? void 0 : _a.value) || "",
                password: ((_b = this.userFilledFields["password"]) === null || _b === void 0 ? void 0 : _b.value) || "",
                newPassword: ((_c = this.userFilledFields["newPassword"]) === null || _c === void 0 ? void 0 : _c.value) || "",
            };
        };
        /**
         * Helper method that facilitates registration of an event handler to a form field element.
         *
         * @param eventHandler - The event handler to memoize.
         * @param memoIndex - The memo index to use for the event handler.
         */
        this.useEventHandlersMemo = (eventHandler, memoIndex) => {
            return this.eventHandlersMemo[memoIndex] || (this.eventHandlersMemo[memoIndex] = eventHandler);
        };
        /**
         * Form Field blur event handler. Updates the value identifying whether
         * the field is focused and sends a message to check if the inline menu itself
         * is currently focused.
         */
        this.handleFormFieldBlurEvent = () => {
            void this.updateIsFieldCurrentlyFocused(false);
            void this.sendExtensionMessage("checkAutofillInlineMenuFocused");
        };
        /**
         * Form field keyup event handler. Facilitates the ability to remove the
         * autofill inline menu using the escape key, focusing the inline menu list using
         * the ArrowDown key, and ensuring that the inline menu is repositioned when
         * the form is submitted using the Enter key.
         *
         * @param event - The keyup event.
         */
        this.handleFormFieldKeyupEvent = (event) => __awaiter(this, void 0, void 0, function* () {
            const eventCode = event.code;
            if (eventCode === "Escape") {
                void this.sendExtensionMessage("closeAutofillInlineMenu", {
                    forceCloseInlineMenu: true,
                });
                return;
            }
            if (eventCode === "Enter" && !(yield this.isFieldCurrentlyFilling())) {
                void this.handleOverlayRepositionEvent();
                return;
            }
            if (eventCode === "ArrowDown") {
                event.preventDefault();
                event.stopPropagation();
                void this.focusInlineMenuList();
            }
        });
        /**
         * Sets up and memoizes the form field input event handler.
         *
         * @param formFieldElement - The form field element that triggered the input event.
         */
        this.handleFormFieldInputEvent = (formFieldElement) => {
            return this.useEventHandlersMemo((0,_utils__WEBPACK_IMPORTED_MODULE_6__.debounce)(() => this.triggerFormFieldInput(formFieldElement), 100, true), this.getFormFieldHandlerMemoIndex(formFieldElement, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INPUT));
        };
        /**
         * Handles qualification of the user filled field based on the field qualifiers provided.
         *
         * @param autofillFieldData - Autofill field data captured from the form field element.
         * @param qualifiers - The field qualifiers to use when qualifying the user filled field.
         */
        this.qualifyUserFilledField = (autofillFieldData, qualifiers) => {
            for (const [fieldQualifier, fieldQualifierFunction] of Object.entries(qualifiers)) {
                if (fieldQualifierFunction(autofillFieldData)) {
                    autofillFieldData.fieldQualifier = fieldQualifier;
                    return;
                }
            }
        };
        /**
         * Sets up and memoizes the form field click event handler.
         *
         * @param formFieldElement - The form field element that triggered the click event.
         */
        this.handleFormFieldClickEvent = (formFieldElement) => {
            return this.useEventHandlersMemo(() => this.triggerFormFieldClickedAction(formFieldElement), this.getFormFieldHandlerMemoIndex(formFieldElement, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CLICK));
        };
        /**
         * Sets up and memoizes the form field focus event handler.
         *
         * @param formFieldElement - The form field element that triggered the focus event.
         */
        this.handleFormFieldFocusEvent = (formFieldElement) => {
            return this.useEventHandlersMemo(() => this.triggerFormFieldFocusedAction(formFieldElement), this.getFormFieldHandlerMemoIndex(formFieldElement, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS));
        };
        /**
         * Triggers an update in the background script focused status of the form field element.
         *
         * @param isFieldCurrentlyFocused - The focused status of the form field element.
         */
        this.updateIsFieldCurrentlyFocused = (isFieldCurrentlyFocused) => __awaiter(this, void 0, void 0, function* () {
            yield this.sendExtensionMessage("updateIsFieldCurrentlyFocused", { isFieldCurrentlyFocused });
        });
        /**
         * Handles the focus event on a hidden field. When
         * triggered, the inline menu is set up on the field.
         *
         * @param event - The focus event.
         */
        this.handleHiddenFieldFocusEvent = (event) => {
            const formFieldElement = event.target;
            this.handleHiddenElementFallbackEvent(formFieldElement);
        };
        /**
         * Handles an input event on a hidden field. When triggered, the inline menu is set up on the
         * field. We also capture the input value for the field to facilitate presentation of the value
         * for the field in the notification bar.
         *
         * @param event - The input event.
         */
        this.handleHiddenFieldInputEvent = (event) => __awaiter(this, void 0, void 0, function* () {
            const formFieldElement = event.target;
            this.handleHiddenElementFallbackEvent(formFieldElement);
            yield this.triggerFormFieldInput(formFieldElement);
        });
        /**
         * Handles updating the hidden element when a fallback event is triggered.
         *
         * @param formFieldElement - The form field element that triggered the focus event.
         */
        this.handleHiddenElementFallbackEvent = (formFieldElement) => {
            const autofillFieldData = this.hiddenFormFieldElements.get(formFieldElement);
            if (autofillFieldData) {
                autofillFieldData.readonly = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getAttributeBoolean)(formFieldElement, "disabled");
                autofillFieldData.disabled = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getAttributeBoolean)(formFieldElement, "disabled");
                autofillFieldData.viewable = true;
                void this.setupOverlayListenersOnQualifiedField(formFieldElement, autofillFieldData);
            }
            this.removeHiddenFieldFallbackListener(formFieldElement);
        };
        /**
         * Calculates the sub frame positioning for the current frame
         * through all parent frames until the top frame is reached.
         *
         * @param event - The message event.
         */
        this.calculateSubFramePositioning = (event) => __awaiter(this, void 0, void 0, function* () {
            const subFrameData = event.data.subFrameData;
            subFrameData.subFrameDepth++;
            if (subFrameData.subFrameDepth >= _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.MAX_SUB_FRAME_DEPTH) {
                void this.sendExtensionMessage("destroyAutofillInlineMenuListeners", { subFrameData });
                return;
            }
            let subFrameOffsets;
            const iframes = globalThis.document.querySelectorAll("iframe");
            for (let i = 0; i < iframes.length; i++) {
                if (iframes[i].contentWindow === event.source) {
                    const iframeElement = iframes[i];
                    subFrameOffsets = this.calculateSubFrameOffsets(iframeElement, subFrameData.url, subFrameData.frameId);
                    subFrameData.top += subFrameOffsets.top;
                    subFrameData.left += subFrameOffsets.left;
                    const parentFrameId = yield this.sendExtensionMessage("getCurrentTabFrameId");
                    if (typeof parentFrameId !== "undefined") {
                        subFrameData.parentFrameIds.push(parentFrameId);
                    }
                    break;
                }
            }
            if (globalThis.window.self !== globalThis.window.top) {
                globalThis.parent.postMessage({ command: "calculateSubFramePositioning", subFrameData }, "*");
                return;
            }
            void this.sendExtensionMessage("updateSubFrameData", { subFrameData });
        });
        /**
         * Sets up global event listeners and the mutation
         * observer to facilitate required changes to the
         * overlay elements.
         */
        this.setupGlobalEventListeners = () => {
            globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MESSAGE, this.handleWindowMessageEvent);
            globalThis.document.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.VISIBILITYCHANGE, this.handleVisibilityChangeEvent);
            globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUSOUT, this.handleWindowFocusOutEvent);
            this.setOverlayRepositionEventListeners();
        };
        /**
         * Handles window messages that are sent to the current frame. Will trigger a
         * calculation of the sub frame offsets through the parent frame.
         *
         * @param event - The message event.
         */
        this.handleWindowMessageEvent = (event) => {
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.command) === "calculateSubFramePositioning") {
                void this.calculateSubFramePositioning(event);
            }
        };
        /**
         * Handles the window focus out event, triggering a focus check on the
         * inline menu if the document has focus and a closure of the inline
         * menu if it does not have focus.
         */
        this.handleWindowFocusOutEvent = () => {
            if (document.hasFocus()) {
                this.handleFormFieldBlurEvent();
                return;
            }
            void this.sendExtensionMessage("closeAutofillInlineMenu", {
                forceCloseInlineMenu: true,
            });
        };
        /**
         * Handles the visibility change event. This method will remove the
         * autofill overlay if the document is not visible.
         */
        this.handleVisibilityChangeEvent = () => {
            if (globalThis.document.visibilityState === "hidden") {
                void this.sendExtensionMessage("closeAutofillInlineMenu", {
                    forceCloseInlineMenu: true,
                });
            }
            if (this.mostRecentlyFocusedField) {
                this.unsetMostRecentlyFocusedField();
            }
        };
        this.shouldRepositionSubFrameInlineMenuOnScroll = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.sendExtensionMessage("shouldRepositionSubFrameInlineMenuOnScroll");
        });
        /**
         * Handles the resize or scroll events that enact
         * repositioning of existing overlay elements.
         */
        this.handleOverlayRepositionEvent = () => __awaiter(this, void 0, void 0, function* () {
            yield this.sendExtensionMessage("triggerAutofillOverlayReposition");
        });
        /**
         * Sets up listeners that facilitate a rebuild of the sub frame offsets
         * when a user interacts or focuses an element within the frame.
         */
        this.setupRebuildSubFrameOffsetsListeners = () => {
            if (globalThis.window.top === globalThis.window || this.formFieldElements.size < 1) {
                return;
            }
            this.removeSubFrameFocusOutListeners();
            globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS, this.handleSubFrameFocusInEvent);
            globalThis.document.body.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MOUSEENTER, this.handleSubFrameFocusInEvent);
        };
        /**
         * Removes the listeners that facilitate a rebuild of the sub frame offsets.
         */
        this.removeRebuildSubFrameOffsetsListeners = () => {
            globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS, this.handleSubFrameFocusInEvent);
            globalThis.document.body.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MOUSEENTER, this.handleSubFrameFocusInEvent);
        };
        /**
         * Re-establishes listeners that handle the sub frame offsets rebuild of the frame
         * based on user interaction with the sub frame.
         */
        this.setupSubFrameFocusOutListeners = () => {
            globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BLUR, this.setupRebuildSubFrameOffsetsListeners);
            globalThis.document.body.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MOUSELEAVE, this.setupRebuildSubFrameOffsetsListeners);
        };
        /**
         * Removes the listeners that trigger when a user focuses away from the sub frame.
         */
        this.removeSubFrameFocusOutListeners = () => {
            globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BLUR, this.setupRebuildSubFrameOffsetsListeners);
            globalThis.document.body.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MOUSELEAVE, this.setupRebuildSubFrameOffsetsListeners);
        };
        /**
         * Sends a message to the background script to trigger a rebuild of the sub frame
         * offsets. Will deregister the listeners to ensure that other focus and mouse
         * events do not unnecessarily re-trigger a sub frame rebuild.
         */
        this.handleSubFrameFocusInEvent = () => {
            void this.sendExtensionMessage("triggerSubFrameFocusInRebuild");
            this.removeRebuildSubFrameOffsetsListeners();
            this.setupSubFrameFocusOutListeners();
        };
    }
    /**
     * Initializes the autofill overlay content service by setting up the mutation observers.
     * The observers will be instantiated on DOMContentLoaded if the page is current loading.
     */
    init() {
        void this.getInlineMenuCardsVisibility();
        void this.getInlineMenuIdentitiesVisibility();
        if (globalThis.document.readyState === "loading") {
            globalThis.document.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.DOMCONTENTLOADED, this.setupGlobalEventListeners);
            return;
        }
        this.setupGlobalEventListeners();
    }
    /**
     * Getter used to access the extension message handlers associated
     * with the autofill overlay content service.
     */
    get messageHandlers() {
        return this.extensionMessageHandlers;
    }
    /**
     * Sets up the autofill inline menu listener on the form field element. This method is called
     * during the page details collection process.
     *
     * @param formFieldElement - Form field elements identified during the page details collection process.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     * @param pageDetails - The collected page details from the tab.
     */
    setupOverlayListeners(formFieldElement, autofillFieldData, pageDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.currentlyInSandboxedIframe)() ||
                this.formFieldElements.has(formFieldElement) ||
                this.isIgnoredField(autofillFieldData, pageDetails)) {
                return;
            }
            if (this.isHiddenField(formFieldElement, autofillFieldData)) {
                return;
            }
            yield this.setupOverlayListenersOnQualifiedField(formFieldElement, autofillFieldData);
        });
    }
    /**
     * Removes focus from the most recently focused field element.
     */
    blurMostRecentlyFocusedField() {
        return __awaiter(this, arguments, void 0, function* (isClosingInlineMenu = false) {
            var _a;
            (_a = this.mostRecentlyFocusedField) === null || _a === void 0 ? void 0 : _a.blur();
            if (isClosingInlineMenu) {
                yield this.sendExtensionMessage("closeAutofillInlineMenu", { forceCloseInlineMenu: true });
            }
        });
    }
    /**
     * Clears all cached user filled fields.
     */
    clearUserFilledFields() {
        Object.keys(this.userFilledFields).forEach((key) => {
            if (this.userFilledFields[key]) {
                delete this.userFilledFields[key];
            }
        });
    }
    /**
     * Formats any found user filled fields for a login cipher and sends a message
     * to the background script to add a new cipher.
     */
    addNewVaultItem(_a) {
        return __awaiter(this, arguments, void 0, function* ({ addNewCipherType }) {
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
            const command = "autofillOverlayAddNewVaultItem";
            const password = ((_b = this.userFilledFields["newPassword"]) === null || _b === void 0 ? void 0 : _b.value) || ((_c = this.userFilledFields["password"]) === null || _c === void 0 ? void 0 : _c.value);
            if (addNewCipherType === _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Login) {
                const login = {
                    username: ((_d = this.userFilledFields["username"]) === null || _d === void 0 ? void 0 : _d.value) || "",
                    password: password || "",
                    uri: globalThis.document.URL,
                    hostname: globalThis.document.location.hostname,
                };
                yield this.sendExtensionMessage(command, { addNewCipherType, login });
                return;
            }
            if (addNewCipherType === _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Card) {
                const card = {
                    cardholderName: ((_e = this.userFilledFields["cardholderName"]) === null || _e === void 0 ? void 0 : _e.value) || "",
                    number: ((_f = this.userFilledFields["cardNumber"]) === null || _f === void 0 ? void 0 : _f.value) || "",
                    expirationMonth: ((_g = this.userFilledFields["cardExpirationMonth"]) === null || _g === void 0 ? void 0 : _g.value) || "",
                    expirationYear: ((_h = this.userFilledFields["cardExpirationYear"]) === null || _h === void 0 ? void 0 : _h.value) || "",
                    expirationDate: ((_j = this.userFilledFields["cardExpirationDate"]) === null || _j === void 0 ? void 0 : _j.value) || "",
                    cvv: ((_k = this.userFilledFields["cardCvv"]) === null || _k === void 0 ? void 0 : _k.value) || "",
                };
                yield this.sendExtensionMessage(command, { addNewCipherType, card });
                return;
            }
            if (addNewCipherType === _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Identity) {
                const identity = {
                    title: ((_l = this.userFilledFields["identityTitle"]) === null || _l === void 0 ? void 0 : _l.value) || "",
                    firstName: ((_m = this.userFilledFields["identityFirstName"]) === null || _m === void 0 ? void 0 : _m.value) || "",
                    middleName: ((_o = this.userFilledFields["identityMiddleName"]) === null || _o === void 0 ? void 0 : _o.value) || "",
                    lastName: ((_p = this.userFilledFields["identityLastName"]) === null || _p === void 0 ? void 0 : _p.value) || "",
                    fullName: ((_q = this.userFilledFields["identityFullName"]) === null || _q === void 0 ? void 0 : _q.value) || "",
                    address1: ((_r = this.userFilledFields["identityAddress1"]) === null || _r === void 0 ? void 0 : _r.value) || "",
                    address2: ((_s = this.userFilledFields["identityAddress2"]) === null || _s === void 0 ? void 0 : _s.value) || "",
                    address3: ((_t = this.userFilledFields["identityAddress3"]) === null || _t === void 0 ? void 0 : _t.value) || "",
                    city: ((_u = this.userFilledFields["identityCity"]) === null || _u === void 0 ? void 0 : _u.value) || "",
                    state: ((_v = this.userFilledFields["identityState"]) === null || _v === void 0 ? void 0 : _v.value) || "",
                    postalCode: ((_w = this.userFilledFields["identityPostalCode"]) === null || _w === void 0 ? void 0 : _w.value) || "",
                    country: ((_x = this.userFilledFields["identityCountry"]) === null || _x === void 0 ? void 0 : _x.value) || "",
                    company: ((_y = this.userFilledFields["identityCompany"]) === null || _y === void 0 ? void 0 : _y.value) || "",
                    phone: ((_z = this.userFilledFields["identityPhone"]) === null || _z === void 0 ? void 0 : _z.value) || "",
                    email: ((_0 = this.userFilledFields["identityEmail"]) === null || _0 === void 0 ? void 0 : _0.value) || "",
                    username: ((_1 = this.userFilledFields["identityUsername"]) === null || _1 === void 0 ? void 0 : _1.value) || "",
                };
                yield this.sendExtensionMessage(command, { addNewCipherType, identity });
            }
        });
    }
    /**
     * Focuses the most recently focused field element.
     */
    focusMostRecentlyFocusedField() {
        var _a;
        (_a = this.mostRecentlyFocusedField) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Sets the most recently focused field within the current frame to a `null` value.
     */
    unsetMostRecentlyFocusedField() {
        this.mostRecentlyFocusedField = null;
    }
    /**
     * Redirects the keyboard focus out of the inline menu, selecting the element that is
     * either previous or next in the tab order. If the direction is current, the most
     * recently focused field will be focused.
     *
     * @param direction - The direction to redirect the focus out.
     */
    redirectInlineMenuFocusOut(direction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!direction || !this.mostRecentlyFocusedField || !(yield this.isInlineMenuListVisible())) {
                return;
            }
            if (direction === _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.RedirectFocusDirection.Current) {
                this.focusMostRecentlyFocusedField();
                this.closeInlineMenuOnRedirectTimeout = globalThis.setTimeout(() => void this.sendExtensionMessage("closeAutofillInlineMenu"), 100);
                return;
            }
            if (!this.focusableElements.length) {
                this.focusableElements = this.findTabs(globalThis.document.body, { getShadowRoot: true });
            }
            const focusedElementIndex = this.focusableElements.findIndex((element) => element === this.mostRecentlyFocusedField);
            const indexOffset = direction === _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.RedirectFocusDirection.Previous ? -1 : 1;
            const redirectFocusElement = this.focusableElements[focusedElementIndex + indexOffset];
            if (redirectFocusElement) {
                redirectFocusElement.focus();
                return;
            }
            this.focusMostRecentlyFocusedField();
        });
    }
    /**
     * Sets up the event listeners that facilitate interaction with the form field elements.
     * Will clear any cached form field element handlers that are encountered when setting
     * up a form field element.
     *
     * @param formFieldElement - The form field element to set up the event listeners for.
     */
    setupFormFieldElementEventListeners(formFieldElement) {
        this.removeCachedFormFieldEventListeners(formFieldElement);
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INPUT, this.handleFormFieldInputEvent(formFieldElement));
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS, this.handleFormFieldFocusEvent(formFieldElement));
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsSelectElement)(formFieldElement)) {
            return;
        }
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BLUR, this.handleFormFieldBlurEvent);
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.KEYUP, this.handleFormFieldKeyupEvent);
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CLICK, this.handleFormFieldClickEvent(formFieldElement));
    }
    /**
     * Removes any cached form field element handlers that are encountered
     * when setting up a form field element to present the inline menu.
     *
     * @param formFieldElement - The form field element to remove the cached handlers for.
     */
    removeCachedFormFieldEventListeners(formFieldElement) {
        const handlers = [_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INPUT, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.CLICK, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS];
        for (let index = 0; index < handlers.length; index++) {
            const event = handlers[index];
            const memoIndex = this.getFormFieldHandlerMemoIndex(formFieldElement, event);
            const existingHandler = this.eventHandlersMemo[memoIndex];
            if (!existingHandler) {
                return;
            }
            formFieldElement.removeEventListener(event, existingHandler);
            delete this.eventHandlersMemo[memoIndex];
        }
    }
    /**
     * Sets up listeners on the submit button that triggers a submission of the field's form.
     *
     * @param formFieldElement - The form field element to set up the submit button listeners for.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setupFormSubmissionEventListeners(formFieldElement, autofillFieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsFillableFormField)(formFieldElement) ||
                autofillFieldData.inlineMenuFillType === _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Card) {
                return;
            }
            if (autofillFieldData.form) {
                yield this.setupSubmitListenerOnFieldWithForms(formFieldElement);
                return;
            }
            yield this.setupSubmitListenerOnFormlessField(formFieldElement);
            return;
        });
    }
    /**
     * Sets up the submit listener on the form field element that contains a form element.
     * Will establish on submit event listeners on the form element and click listeners on
     * the submit button element that triggers the submission of the form.
     *
     * @param formFieldElement - The form field element to set up the submit listener for.
     */
    setupSubmitListenerOnFieldWithForms(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const formElement = formFieldElement.form;
            if (formElement && !this.formElements.has(formElement)) {
                this.formElements.add(formElement);
                formElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.SUBMIT, this.handleFormFieldSubmitEvent);
                const closestSubmitButton = yield this.findSubmitButton(formElement);
                // If we cannot find a submit button within the form, check for a submit button outside the form.
                if (!closestSubmitButton) {
                    yield this.setupSubmitListenerOnFormlessField(formFieldElement);
                    return;
                }
                this.setupSubmitButtonEventListeners(closestSubmitButton);
                return;
            }
        });
    }
    /**
     * Sets up the submit listener on the form field element that does not contain a form element.
     * Will establish a submit button event listener on the closest formless submit button element.
     *
     * @param formFieldElement - The form field element to set up the submit listener for.
     */
    setupSubmitListenerOnFormlessField(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if (formFieldElement && !this.fieldsWithSubmitElements.has(formFieldElement)) {
                const closestSubmitButton = yield this.findClosestFormlessSubmitButton(formFieldElement);
                this.setupSubmitButtonEventListeners(closestSubmitButton);
            }
            return;
        });
    }
    /**
     * Finds the closest formless submit button element to the form field element.
     *
     * @param formFieldElement - The form field element to find the closest formless submit button for.
     */
    findClosestFormlessSubmitButton(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentElement = formFieldElement;
            while (currentElement && currentElement.tagName !== "HTML") {
                const submitButton = yield this.findSubmitButton(currentElement);
                if (submitButton) {
                    this.formFieldElements.forEach((_, element) => {
                        if (currentElement.contains(element)) {
                            this.fieldsWithSubmitElements.set(element, submitButton);
                        }
                    });
                    return submitButton;
                }
                if (!currentElement.parentElement && currentElement.getRootNode() instanceof ShadowRoot) {
                    currentElement = currentElement.getRootNode().host;
                    continue;
                }
                currentElement = currentElement.parentElement;
            }
            return null;
        });
    }
    /**
     * Finds the submit button element within the provided element. Will attempt to find a generic
     * submit element before attempting to find a button or button-like element.
     *
     * @param element - The element to find the submit button within.
     */
    findSubmitButton(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const genericSubmitElement = yield this.querySubmitButtonElement(element, "[type='submit']", (node) => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.nodeIsTypeSubmitElement)(node));
            if (genericSubmitElement) {
                return genericSubmitElement;
            }
            const submitButtonElement = yield this.querySubmitButtonElement(element, "button, [type='button']", (node) => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.nodeIsButtonElement)(node));
            if (submitButtonElement) {
                return submitButtonElement;
            }
            // If the submit button is not a traditional button element, check for an anchor element that contains submission keywords.
            const submitAnchorElement = yield this.querySubmitButtonElement(element, "a", (node) => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.nodeIsAnchorElement)(node));
            if (submitAnchorElement) {
                return submitAnchorElement;
            }
        });
    }
    /**
     * Queries the provided element for a submit button element using the provided selector.
     *
     * @param element - The element to query for a submit button.
     * @param selector - The selector to use to query the element for a submit button.
     * @param treeWalkerFilter - The tree walker filter to use when querying the element.
     */
    querySubmitButtonElement(element, selector, treeWalkerFilter) {
        return __awaiter(this, void 0, void 0, function* () {
            const submitButtonElements = this.domQueryService.query(element, selector, treeWalkerFilter);
            for (let index = 0; index < submitButtonElements.length; index++) {
                const submitElement = submitButtonElements[index];
                if (this.isElementSubmitButton(submitElement) &&
                    (yield this.domElementVisibilityService.isElementViewable(submitElement))) {
                    return submitElement;
                }
            }
        });
    }
    /**
     * Determines if the provided element is a submit button element.
     *
     * @param element - The element to determine if it is a submit button.
     */
    isElementSubmitButton(element) {
        return (this.inlineMenuFieldQualificationService.isElementLoginSubmitButton(element) ||
            this.inlineMenuFieldQualificationService.isElementChangePasswordSubmitButton(element));
    }
    /**
     * Formats the memoIndex for the form field event handler.
     *
     * @param formFieldElement - The form field element to format the memo index for.
     * @param event - The event to format the memo index for.
     */
    getFormFieldHandlerMemoIndex(formFieldElement, event) {
        return `${formFieldElement.opid}-${formFieldElement.id}-${event}-handler`;
    }
    /**
     * Triggers a focus of the inline menu list, if it is visible. If the list is not visible,
     * the inline menu will be opened and the list will be focused after a short delay. Ensures
     * that the inline menu list is focused when the user presses the down arrow key.
     */
    focusInlineMenuList() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mostRecentlyFocusedField && !(yield this.isInlineMenuListVisible())) {
                this.clearFocusInlineMenuListTimeout();
                yield this.updateMostRecentlyFocusedField(this.mostRecentlyFocusedField);
                yield this.sendExtensionMessage("openAutofillInlineMenu", { isOpeningFullInlineMenu: true });
                this.focusInlineMenuListTimeout = globalThis.setTimeout(() => this.sendExtensionMessage("focusAutofillInlineMenuList"), 125);
                return;
            }
            void this.sendExtensionMessage("focusAutofillInlineMenuList");
        });
    }
    /**
     * Triggers when the form field element receives an input event. This method will
     * store the modified form element data for use when the user attempts to add a new
     * vault item. It also acts to remove the inline menu list while the user is typing.
     *
     * @param formFieldElement - The form field element that triggered the input event.
     */
    triggerFormFieldInput(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsFillableFormField)(formFieldElement)) {
                return;
            }
            this.storeModifiedFormElement(formFieldElement);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsSelectElement)(formFieldElement)) {
                return;
            }
            yield this.sendExtensionMessage("closeAutofillInlineMenu", {
                overlayElement: _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.AutofillOverlayElement.List,
                forceCloseInlineMenu: true,
            });
            if (!(formFieldElement === null || formFieldElement === void 0 ? void 0 : formFieldElement.value)) {
                yield this.sendExtensionMessage("openAutofillInlineMenu");
            }
        });
    }
    /**
     * Stores the modified form element data for use when the user attempts to add a new
     * vault item. This method will also store the most recently focused field, if it is
     * not already stored.
     *
     * @param formFieldElement
     * @private
     */
    storeModifiedFormElement(formFieldElement) {
        if (formFieldElement !== this.mostRecentlyFocusedField) {
            void this.updateMostRecentlyFocusedField(formFieldElement);
        }
        const autofillFieldData = this.formFieldElements.get(formFieldElement);
        if (!autofillFieldData) {
            return;
        }
        if (!autofillFieldData.fieldQualifier) {
            switch (autofillFieldData.inlineMenuFillType) {
                case _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Login:
                case _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.CurrentPasswordUpdate:
                    this.qualifyUserFilledField(autofillFieldData, this.loginFieldQualifiers);
                    break;
                case _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.AccountCreationUsername:
                case _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.PasswordGeneration:
                    this.qualifyUserFilledField(autofillFieldData, this.accountCreationFieldQualifiers);
                    break;
                case _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Card:
                    this.qualifyUserFilledField(autofillFieldData, this.cardFieldQualifiers);
                    break;
                case _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Identity:
                    this.qualifyUserFilledField(autofillFieldData, this.identityFieldQualifiers);
                    break;
            }
        }
        this.storeQualifiedUserFilledField(formFieldElement, autofillFieldData);
    }
    /**
     * Stores the qualified user filled filed to allow for referencing its value when adding a new vault item.
     *
     * @param formFieldElement - The form field element that triggered the input event.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    storeQualifiedUserFilledField(formFieldElement, autofillFieldData) {
        if (!autofillFieldData.fieldQualifier) {
            return;
        }
        const clonedNode = formFieldElement.cloneNode(true);
        const identityLoginFields = [
            _enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityUsername,
            _enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.identityEmail,
        ];
        if (identityLoginFields.includes(autofillFieldData.fieldQualifier)) {
            this.userFilledFields[_enums_autofill_field_enums__WEBPACK_IMPORTED_MODULE_4__.AutofillFieldQualifier.username] = clonedNode;
        }
        this.userFilledFields[autofillFieldData.fieldQualifier] = clonedNode;
    }
    /**
     * Triggers when the form field element receives a click event. This method will
     * trigger the focused action for the form field element if the inline menu is not visible.
     *
     * @param formFieldElement - The form field element that triggered the click event.
     */
    triggerFormFieldClickedAction(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.isInlineMenuButtonVisible()) || (yield this.isInlineMenuListVisible())) {
                return;
            }
            yield this.triggerFormFieldFocusedAction(formFieldElement);
        });
    }
    /**
     * Triggers when the form field element receives a focus event. This method will
     * update the most recently focused field and open the autofill inline menu if the
     * autofill process is not currently active.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    triggerFormFieldFocusedAction(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.isFieldCurrentlyFilling()) {
                return;
            }
            if (this.pageDetailsUpdateRequired) {
                yield this.sendExtensionMessage("bgCollectPageDetails", {
                    sender: "autofillOverlayContentService",
                });
                this.pageDetailsUpdateRequired = false;
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsSelectElement)(formFieldElement)) {
                yield this.sendExtensionMessage("closeAutofillInlineMenu", {
                    forceCloseInlineMenu: true,
                });
                return;
            }
            yield this.updateIsFieldCurrentlyFocused(true);
            yield this.updateMostRecentlyFocusedField(formFieldElement);
            yield this.sendExtensionMessage("openAutofillInlineMenu");
        });
    }
    /**
     * Updates the data used to position the inline menu elements in relation
     * to the most recently focused form field.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    updateMostRecentlyFocusedField(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!formFieldElement ||
                !(0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsFillableFormField)(formFieldElement) ||
                (0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsSelectElement)(formFieldElement)) {
                return;
            }
            this.mostRecentlyFocusedField = formFieldElement;
            const { paddingRight, paddingLeft } = globalThis.getComputedStyle(formFieldElement);
            const { width, height, top, left } = yield this.getMostRecentlyFocusedFieldRects(formFieldElement);
            const autofillFieldData = this.formFieldElements.get(formFieldElement);
            this.focusedFieldData = {
                focusedFieldStyles: { paddingRight, paddingLeft },
                focusedFieldRects: { width, height, top, left },
                inlineMenuFillType: autofillFieldData === null || autofillFieldData === void 0 ? void 0 : autofillFieldData.inlineMenuFillType,
                showPasskeys: !!(autofillFieldData === null || autofillFieldData === void 0 ? void 0 : autofillFieldData.showPasskeys),
                accountCreationFieldType: autofillFieldData === null || autofillFieldData === void 0 ? void 0 : autofillFieldData.accountCreationFieldType,
            };
            const allFields = this.formFieldElements;
            const allFieldsRect = [];
            for (const key of allFields.keys()) {
                const rect = yield this.getMostRecentlyFocusedFieldRects(key);
                allFieldsRect.push(Object.assign(Object.assign({}, allFields.get(key)), { rect })); // Add the combined result to the array
            }
            yield this.sendExtensionMessage("updateFocusedFieldData", {
                focusedFieldData: this.focusedFieldData,
                allFieldsRect,
            });
        });
    }
    /**
     * Gets the bounding client rects for the most recently focused field. This method will
     * attempt to use an intersection observer to get the most recently focused field's
     * bounding client rects. If the intersection observer is not supported, or the
     * intersection observer does not return a valid bounding client rect, the form
     * field element's bounding client rect will be used.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    getMostRecentlyFocusedFieldRects(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const focusedFieldRects = yield this.getBoundingClientRectFromIntersectionObserver(formFieldElement);
            if (focusedFieldRects) {
                return focusedFieldRects;
            }
            return formFieldElement.getBoundingClientRect();
        });
    }
    /**
     * Gets the bounds of the form field element from the IntersectionObserver API.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    getBoundingClientRectFromIntersectionObserver(formFieldElement) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!("IntersectionObserver" in globalThis) && !("IntersectionObserverEntry" in globalThis)) {
                return null;
            }
            return new Promise((resolve) => {
                const intersectionObserver = new IntersectionObserver((entries) => {
                    var _a;
                    let fieldBoundingClientRects = (_a = entries[0]) === null || _a === void 0 ? void 0 : _a.boundingClientRect;
                    if (!(fieldBoundingClientRects === null || fieldBoundingClientRects === void 0 ? void 0 : fieldBoundingClientRects.width) || !fieldBoundingClientRects.height) {
                        fieldBoundingClientRects = null;
                    }
                    intersectionObserver.disconnect();
                    resolve(fieldBoundingClientRects);
                }, {
                    root: globalThis.document.body,
                    rootMargin: "0px",
                    threshold: 0.9999, // Safari doesn't seem to function properly with a threshold of 1
                });
                intersectionObserver.observe(formFieldElement);
            });
        });
    }
    /**
     * Identifies if the field should have the autofill inline menu setup on it. Currently, this is mainly
     * determined by whether the field correlates with a login cipher. This method will need to be
     * updated in the future to support other types of forms.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     * @param pageDetails - The collected page details from the tab.
     */
    isIgnoredField(autofillFieldData, pageDetails) {
        if (this.ignoredFieldTypes.has(autofillFieldData.type)) {
            return true;
        }
        if (this.inlineMenuFieldQualificationService.isFieldForLoginForm(autofillFieldData, pageDetails)) {
            void this.setQualifiedLoginFillType(autofillFieldData);
            return false;
        }
        if (this.showInlineMenuCards &&
            this.inlineMenuFieldQualificationService.isFieldForCreditCardForm(autofillFieldData, pageDetails)) {
            autofillFieldData.inlineMenuFillType = _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Card;
            return false;
        }
        if (this.inlineMenuFieldQualificationService.isFieldForAccountCreationForm(autofillFieldData, pageDetails)) {
            this.setQualifiedAccountCreationFillType(autofillFieldData);
            return false;
        }
        if (this.showInlineMenuIdentities &&
            this.inlineMenuFieldQualificationService.isFieldForIdentityForm(autofillFieldData, pageDetails)) {
            autofillFieldData.inlineMenuFillType = _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Identity;
            return false;
        }
        return true;
    }
    /**
     * Sets the autofill field data that indicates this field is part of a login form
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setQualifiedLoginFillType(autofillFieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            autofillFieldData.inlineMenuFillType = _bitwarden_common_vault_enums__WEBPACK_IMPORTED_MODULE_3__.CipherType.Login;
            autofillFieldData.showPasskeys = autofillFieldData.autoCompleteType.includes("webauthn");
            this.qualifyAccountCreationFieldType(autofillFieldData);
        });
    }
    /**
     * Sets the autofill field data that indicates this field is part of an account creation or update form.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setQualifiedAccountCreationFillType(autofillFieldData) {
        if (this.inlineMenuFieldQualificationService.isNewPasswordField(autofillFieldData)) {
            autofillFieldData.inlineMenuFillType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.PasswordGeneration;
            this.qualifyAccountCreationFieldType(autofillFieldData);
            return;
        }
        if (this.inlineMenuFieldQualificationService.isUpdateCurrentPasswordField(autofillFieldData)) {
            autofillFieldData.inlineMenuFillType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.CurrentPasswordUpdate;
            return;
        }
        if (this.inlineMenuFieldQualificationService.isUsernameField(autofillFieldData)) {
            autofillFieldData.inlineMenuFillType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFillTypes.AccountCreationUsername;
            this.qualifyAccountCreationFieldType(autofillFieldData);
        }
    }
    /**
     * Sets the account creation field type for the autofill field data based on the field's attributes.
     *
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    qualifyAccountCreationFieldType(autofillFieldData) {
        if (this.inlineMenuFieldQualificationService.isTotpField(autofillFieldData)) {
            autofillFieldData.accountCreationFieldType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuAccountCreationFieldType.Totp;
            return;
        }
        if (!this.inlineMenuFieldQualificationService.isUsernameField(autofillFieldData)) {
            autofillFieldData.accountCreationFieldType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuAccountCreationFieldType.Password;
            return;
        }
        if (!this.showInlineMenuIdentities) {
            return;
        }
        if (this.inlineMenuFieldQualificationService.isEmailField(autofillFieldData)) {
            autofillFieldData.accountCreationFieldType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuAccountCreationFieldType.Email;
            return;
        }
        autofillFieldData.accountCreationFieldType = _enums_autofill_overlay_enum__WEBPACK_IMPORTED_MODULE_5__.InlineMenuAccountCreationFieldType.Text;
    }
    /**
     * Validates whether a field is considered to be "hidden" based on the field's attributes.
     * If the field is hidden, a fallback listener will be set up to ensure that the
     * field will have the inline menu set up on it when it becomes visible.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    isHiddenField(formFieldElement, autofillFieldData) {
        if (!autofillFieldData.readonly && !autofillFieldData.disabled && autofillFieldData.viewable) {
            this.removeHiddenFieldFallbackListener(formFieldElement);
            return false;
        }
        this.setupHiddenFieldFallbackListener(formFieldElement, autofillFieldData);
        return true;
    }
    /**
     * Sets up a fallback listener that will facilitate setting up the
     * inline menu on the field when it becomes visible and focused.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setupHiddenFieldFallbackListener(formFieldElement, autofillFieldData) {
        this.hiddenFormFieldElements.set(formFieldElement, autofillFieldData);
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS, this.handleHiddenFieldFocusEvent);
        formFieldElement.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INPUT, this.handleHiddenFieldInputEvent);
    }
    /**
     * Removes the fallback listener that facilitates setting up the inline
     *  menu on the field when it becomes visible and focused.
     *
     * @param formFieldElement - The form field element that triggered the focus event.
     */
    removeHiddenFieldFallbackListener(formFieldElement) {
        formFieldElement.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUS, this.handleHiddenFieldFocusEvent);
        formFieldElement.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.INPUT, this.handleHiddenFieldInputEvent);
        this.hiddenFormFieldElements.delete(formFieldElement);
    }
    /**
     * Sets up the inline menu on a qualified form field element.
     *
     * @param formFieldElement - The form field element to set up the inline menu on.
     * @param autofillFieldData - Autofill field data captured from the form field element.
     */
    setupOverlayListenersOnQualifiedField(formFieldElement, autofillFieldData) {
        return __awaiter(this, void 0, void 0, function* () {
            this.formFieldElements.set(formFieldElement, autofillFieldData);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.elementIsFillableFormField)(formFieldElement) && !!formFieldElement.value) {
                this.storeModifiedFormElement(formFieldElement);
            }
            this.setupFormFieldElementEventListeners(formFieldElement);
            yield this.setupFormSubmissionEventListeners(formFieldElement, autofillFieldData);
            if (globalThis.document.hasFocus() &&
                this.getRootNodeActiveElement(formFieldElement) === formFieldElement) {
                yield this.triggerFormFieldFocusedAction(formFieldElement);
            }
        });
    }
    /**
     * Queries the background script for the autofill inline menu's Cards visibility setting.
     * If the setting is not found, a default value of true will be used
     * @private
     */
    getInlineMenuCardsVisibility() {
        return __awaiter(this, void 0, void 0, function* () {
            const inlineMenuCardsVisibility = yield this.sendExtensionMessage("getInlineMenuCardsVisibility");
            this.showInlineMenuCards = inlineMenuCardsVisibility !== null && inlineMenuCardsVisibility !== void 0 ? inlineMenuCardsVisibility : true;
        });
    }
    /**
     * Queries the background script for the autofill inline menu's Identities visibility setting.
     * If the setting is not found, a default value of true will be used
     * @private
     */
    getInlineMenuIdentitiesVisibility() {
        return __awaiter(this, void 0, void 0, function* () {
            const inlineMenuIdentitiesVisibility = yield this.sendExtensionMessage("getInlineMenuIdentitiesVisibility");
            this.showInlineMenuIdentities = inlineMenuIdentitiesVisibility !== null && inlineMenuIdentitiesVisibility !== void 0 ? inlineMenuIdentitiesVisibility : true;
        });
    }
    /**
     * Indicates whether the most recently focused field has a value.
     */
    mostRecentlyFocusedFieldHasValue() {
        var _a;
        return Boolean((_a = this.mostRecentlyFocusedField) === null || _a === void 0 ? void 0 : _a.value);
    }
    /**
     * Checks if a field is currently filling within an frame in the tab.
     */
    isFieldCurrentlyFilling() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.sendExtensionMessage("checkIsFieldCurrentlyFilling")) === true;
        });
    }
    /**
     * Checks if the inline menu button is visible at the top frame.
     */
    isInlineMenuButtonVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.sendExtensionMessage("checkIsAutofillInlineMenuButtonVisible")) === true;
        });
    }
    /**
     * Checks if the inline menu list if visible at the top frame.
     */
    isInlineMenuListVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.sendExtensionMessage("checkIsAutofillInlineMenuListVisible")) === true;
        });
    }
    /**
     * Checks if the field is currently focused within the top frame.
     */
    isFieldCurrentlyFocused() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.sendExtensionMessage("checkIsFieldCurrentlyFocused")) === true;
        });
    }
    /**
     * Gets the root node of the passed element and returns the active element within that root node.
     *
     * @param element - The element to get the root node active element for.
     */
    getRootNodeActiveElement(element) {
        if (!element) {
            return null;
        }
        const documentRoot = element.getRootNode();
        return documentRoot === null || documentRoot === void 0 ? void 0 : documentRoot.activeElement;
    }
    /**
     * Queries all iframe elements within the document and returns the
     * sub frame offsets for each iframe element.
     *
     * @param message - The message object from the extension.
     */
    getSubFrameOffsets(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const { subFrameUrl } = message;
            const subFrameUrlVariations = this.getSubFrameUrlVariations(subFrameUrl);
            if (!subFrameUrlVariations) {
                return null;
            }
            let iframeElement = null;
            const iframeElements = globalThis.document.getElementsByTagName("iframe");
            for (let iframeIndex = 0; iframeIndex < iframeElements.length; iframeIndex++) {
                const iframe = iframeElements[iframeIndex];
                if (!subFrameUrlVariations.has(iframe.src)) {
                    continue;
                }
                if (iframeElement) {
                    return null;
                }
                iframeElement = iframe;
            }
            if (!iframeElement) {
                return null;
            }
            return this.calculateSubFrameOffsets(iframeElement, subFrameUrl);
        });
    }
    /**
     * Returns a set of all possible URL variations for the sub frame URL.
     *
     * @param subFrameUrl - The URL of the sub frame.
     */
    getSubFrameUrlVariations(subFrameUrl) {
        try {
            const url = new URL(subFrameUrl, globalThis.location.href);
            const pathAndHash = url.pathname + url.hash;
            const pathAndSearch = url.pathname + url.search;
            const pathSearchAndHash = pathAndSearch + url.hash;
            const pathNameWithoutTrailingSlash = url.pathname.replace(/\/$/, "");
            const pathWithoutTrailingSlashAndHash = pathNameWithoutTrailingSlash + url.hash;
            const pathWithoutTrailingSlashAndSearch = pathNameWithoutTrailingSlash + url.search;
            const pathWithoutTrailingSlashSearchAndHash = pathWithoutTrailingSlashAndSearch + url.hash;
            return new Set([
                url.href,
                url.href.replace(/\/$/, ""),
                url.pathname,
                pathAndHash,
                pathAndSearch,
                pathSearchAndHash,
                pathNameWithoutTrailingSlash,
                pathWithoutTrailingSlashAndHash,
                pathWithoutTrailingSlashAndSearch,
                pathWithoutTrailingSlashSearchAndHash,
                url.hostname + url.pathname,
                url.hostname + pathAndHash,
                url.hostname + pathAndSearch,
                url.hostname + pathSearchAndHash,
                url.hostname + pathNameWithoutTrailingSlash,
                url.hostname + pathWithoutTrailingSlashAndHash,
                url.hostname + pathWithoutTrailingSlashAndSearch,
                url.hostname + pathWithoutTrailingSlashSearchAndHash,
                url.origin + url.pathname,
                url.origin + pathAndHash,
                url.origin + pathAndSearch,
                url.origin + pathSearchAndHash,
                url.origin + pathNameWithoutTrailingSlash,
                url.origin + pathWithoutTrailingSlashAndHash,
                url.origin + pathWithoutTrailingSlashAndSearch,
                url.origin + pathWithoutTrailingSlashSearchAndHash,
            ]);
            // FIXME: Remove when updating file. Eslint update
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (_error) {
            return null;
        }
    }
    /**
     * Posts a message to the parent frame to calculate the sub frame offset of the current frame.
     *
     * @param message - The message object from the extension.
     */
    getSubFrameOffsetsFromWindowMessage(message) {
        globalThis.parent.postMessage({
            command: "calculateSubFramePositioning",
            subFrameData: {
                url: window.location.href,
                frameId: message.subFrameId,
                left: 0,
                top: 0,
                parentFrameIds: [0],
                subFrameDepth: 0,
            },
        }, "*");
    }
    /**
     * Calculates the bounding rect for the queried frame and returns the
     * offset data for the sub frame.
     *
     * @param iframeElement - The iframe element to calculate the sub frame offsets for.
     * @param subFrameUrl - The URL of the sub frame.
     * @param frameId - The frame ID of the sub frame.
     */
    calculateSubFrameOffsets(iframeElement, subFrameUrl, frameId) {
        const iframeRect = iframeElement.getBoundingClientRect();
        const iframeStyles = globalThis.getComputedStyle(iframeElement);
        const paddingLeft = parseInt(iframeStyles.getPropertyValue("padding-left")) || 0;
        const paddingTop = parseInt(iframeStyles.getPropertyValue("padding-top")) || 0;
        const borderWidthLeft = parseInt(iframeStyles.getPropertyValue("border-left-width")) || 0;
        const borderWidthTop = parseInt(iframeStyles.getPropertyValue("border-top-width")) || 0;
        return {
            url: subFrameUrl,
            frameId,
            top: iframeRect.top + paddingTop + borderWidthTop,
            left: iframeRect.left + paddingLeft + borderWidthLeft,
        };
    }
    /**
     * Sets up event listeners that facilitate repositioning
     * the overlay elements on scroll or resize.
     */
    setOverlayRepositionEventListeners() {
        let currentScrollY = globalThis.scrollY;
        let currentScrollX = globalThis.scrollX;
        let mostRecentTargetScrollY = 0;
        const repositionHandler = this.useEventHandlersMemo((0,_utils__WEBPACK_IMPORTED_MODULE_6__.throttle)(this.handleOverlayRepositionEvent, 250), _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_REPOSITION);
        const eventTargetContainsFocusedField = (eventTarget) => {
            if (typeof eventTarget.contains !== "function") {
                return false;
            }
            const targetScrollY = eventTarget.scrollTop;
            if (targetScrollY === mostRecentTargetScrollY) {
                return false;
            }
            if (eventTarget === this.mostRecentlyFocusedField ||
                eventTarget.contains(this.mostRecentlyFocusedField)) {
                mostRecentTargetScrollY = targetScrollY;
                return true;
            }
            return false;
        };
        const scrollHandler = this.useEventHandlersMemo((0,_utils__WEBPACK_IMPORTED_MODULE_6__.throttle)((event) => __awaiter(this, void 0, void 0, function* () {
            if (currentScrollY !== globalThis.scrollY ||
                currentScrollX !== globalThis.scrollX ||
                eventTargetContainsFocusedField(event.target)) {
                repositionHandler(event);
            }
            currentScrollY = globalThis.scrollY;
            currentScrollX = globalThis.scrollX;
        }), 50), _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_SCROLL);
        globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.SCROLL, scrollHandler, {
            capture: true,
            passive: true,
        });
        globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.RESIZE, repositionHandler);
    }
    /**
     * Removes the listeners that facilitate repositioning
     * the overlay elements on scroll or resize.
     */
    removeOverlayRepositionEventListeners() {
        globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.SCROLL, this.eventHandlersMemo[_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_SCROLL], {
            capture: true,
        });
        globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.RESIZE, this.eventHandlersMemo[_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_REPOSITION]);
        delete this.eventHandlersMemo[_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_SCROLL];
        delete this.eventHandlersMemo[_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.AUTOFILL_OVERLAY_HANDLE_REPOSITION];
    }
    /**
     * Triggers an update in the most recently focused field's data and returns
     * whether the field is within the viewport bounds. If not within the bounds
     * of the viewport, the inline menu will be closed.
     */
    checkIsMostRecentlyFocusedFieldWithinViewport() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            yield this.updateMostRecentlyFocusedField(this.mostRecentlyFocusedField);
            const focusedFieldRectsTop = (_b = (_a = this.focusedFieldData) === null || _a === void 0 ? void 0 : _a.focusedFieldRects) === null || _b === void 0 ? void 0 : _b.top;
            const focusedFieldRectsBottom = focusedFieldRectsTop + ((_d = (_c = this.focusedFieldData) === null || _c === void 0 ? void 0 : _c.focusedFieldRects) === null || _d === void 0 ? void 0 : _d.height);
            const viewportHeight = globalThis.innerHeight + globalThis.scrollY;
            return (!globalThis.isNaN(focusedFieldRectsTop) &&
                focusedFieldRectsTop >= 0 &&
                focusedFieldRectsTop < viewportHeight &&
                focusedFieldRectsBottom <= viewportHeight);
        });
    }
    /**
     * Clears the timeout that triggers a debounced focus of the inline menu list.
     */
    clearFocusInlineMenuListTimeout() {
        if (this.focusInlineMenuListTimeout) {
            globalThis.clearTimeout(this.focusInlineMenuListTimeout);
        }
    }
    /**
     * Clears the timeout that triggers the closing of the inline menu on a focus redirection.
     */
    clearCloseInlineMenuOnRedirectTimeout() {
        if (this.closeInlineMenuOnRedirectTimeout) {
            globalThis.clearTimeout(this.closeInlineMenuOnRedirectTimeout);
        }
    }
    /**
     * Destroys the autofill overlay content service. This method will
     * disconnect the mutation observers and remove all event listeners.
     */
    destroy() {
        this.clearFocusInlineMenuListTimeout();
        this.clearCloseInlineMenuOnRedirectTimeout();
        this.formFieldElements.forEach((_autofillField, formFieldElement) => {
            this.removeCachedFormFieldEventListeners(formFieldElement);
            formFieldElement.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.BLUR, this.handleFormFieldBlurEvent);
            formFieldElement.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.KEYUP, this.handleFormFieldKeyupEvent);
            this.formFieldElements.delete(formFieldElement);
        });
        this.clearUserFilledFields();
        this.userFilledFields = null;
        globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.MESSAGE, this.handleWindowMessageEvent);
        globalThis.document.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.VISIBILITYCHANGE, this.handleVisibilityChangeEvent);
        globalThis.removeEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_2__.EVENTS.FOCUSOUT, this.handleFormFieldBlurEvent);
        this.removeOverlayRepositionEventListeners();
        this.removeRebuildSubFrameOffsetsListeners();
        this.removeSubFrameFocusOutListeners();
    }
}


/***/ }),

/***/ "./src/autofill/services/collect-autofill-content.service.ts":
/*!*******************************************************************!*\
  !*** ./src/autofill/services/collect-autofill-content.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectAutofillContentService: function() { return /* binding */ CollectAutofillContentService; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CollectAutofillContentService {
    constructor(domElementVisibilityService, domQueryService, autofillOverlayContentService) {
        this.domElementVisibilityService = domElementVisibilityService;
        this.domQueryService = domQueryService;
        this.autofillOverlayContentService = autofillOverlayContentService;
        this.sendExtensionMessage = _utils__WEBPACK_IMPORTED_MODULE_0__.sendExtensionMessage;
        this.getAttributeBoolean = _utils__WEBPACK_IMPORTED_MODULE_0__.getAttributeBoolean;
        this.getPropertyOrAttribute = _utils__WEBPACK_IMPORTED_MODULE_0__.getPropertyOrAttribute;
        this.noFieldsFound = false;
        this.domRecentlyMutated = true;
        this._autofillFormElements = new Map();
        this.autofillFieldElements = new Map();
        this.currentLocationHref = "";
        this.elementInitializingIntersectionObserver = new Set();
        this.mutationsQueue = [];
        this.updateAfterMutationTimeout = 1000;
        this.nonInputFormFieldTags = new Set(["textarea", "select"]);
        this.ignoredInputTypes = new Set([
            "hidden",
            "submit",
            "reset",
            "button",
            "image",
            "file",
        ]);
        /**
         * Builds an AutofillField object from the given form element. Will only return
         * shared field values if the element is a span element. Will not return any label
         * values if the element is a hidden input element.
         *
         * @param element - The form field element to build the AutofillField object from
         * @param index - The index of the form field element
         */
        this.buildAutofillFieldItem = (element, index) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (element.closest("button[type='submit']")) {
                return null;
            }
            element.opid = `__${index}`;
            const existingAutofillField = this.autofillFieldElements.get(element);
            if (index >= 0 && existingAutofillField) {
                existingAutofillField.opid = element.opid;
                existingAutofillField.elementNumber = index;
                this.autofillFieldElements.set(element, existingAutofillField);
                return existingAutofillField;
            }
            const autofillFieldBase = {
                opid: element.opid,
                elementNumber: index,
                maxLength: this.getAutofillFieldMaxLength(element),
                viewable: yield this.domElementVisibilityService.isElementViewable(element),
                htmlID: this.getPropertyOrAttribute(element, "id"),
                htmlName: this.getPropertyOrAttribute(element, "name"),
                htmlClass: this.getPropertyOrAttribute(element, "class"),
                tabindex: this.getPropertyOrAttribute(element, "tabindex"),
                title: this.getPropertyOrAttribute(element, "title"),
                tagName: this.getAttributeLowerCase(element, "tagName"),
                dataSetValues: this.getDataSetValues(element),
            };
            if (!autofillFieldBase.viewable) {
                this.elementInitializingIntersectionObserver.add(element);
                (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.observe(element);
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsSpanElement)(element)) {
                this.cacheAutofillFieldElement(index, element, autofillFieldBase);
                return autofillFieldBase;
            }
            let autofillFieldLabels = {};
            const elementType = this.getAttributeLowerCase(element, "type");
            if (elementType !== "hidden") {
                autofillFieldLabels = {
                    "label-tag": this.createAutofillFieldLabelTag(element),
                    "label-data": this.getPropertyOrAttribute(element, "data-label"),
                    "label-aria": this.getPropertyOrAttribute(element, "aria-label"),
                    "label-top": this.createAutofillFieldTopLabel(element),
                    "label-right": this.createAutofillFieldRightLabel(element),
                    "label-left": this.createAutofillFieldLeftLabel(element),
                    placeholder: this.getPropertyOrAttribute(element, "placeholder"),
                };
            }
            const fieldFormElement = element.form;
            const autofillField = Object.assign(Object.assign(Object.assign({}, autofillFieldBase), autofillFieldLabels), { rel: this.getPropertyOrAttribute(element, "rel"), type: elementType, value: this.getElementValue(element), checked: this.getAttributeBoolean(element, "checked"), autoCompleteType: this.getAutoCompleteAttribute(element), disabled: this.getAttributeBoolean(element, "disabled"), readonly: this.getAttributeBoolean(element, "readonly"), selectInfo: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsSelectElement)(element)
                    ? this.getSelectElementOptions(element)
                    : null, form: fieldFormElement ? this.getPropertyOrAttribute(fieldFormElement, "opid") : null, "aria-hidden": this.getAttributeBoolean(element, "aria-hidden", true), "aria-disabled": this.getAttributeBoolean(element, "aria-disabled", true), "aria-haspopup": this.getAttributeBoolean(element, "aria-haspopup", true), "data-stripe": this.getPropertyOrAttribute(element, "data-stripe") });
            this.cacheAutofillFieldElement(index, element, autofillField);
            return autofillField;
        });
        /**
         * Map over all the label elements and creates a
         * string of the text content of each label element.
         * @param {Set<HTMLElement>} labelElementsSet
         * @returns {string}
         * @private
         */
        this.createLabelElementsTag = (labelElementsSet) => {
            return Array.from(labelElementsSet)
                .map((labelElement) => {
                const textContent = labelElement
                    ? labelElement.textContent || labelElement.innerText
                    : null;
                return this.trimAndRemoveNonPrintableText(textContent || "");
            })
                .join("");
        };
        /**
         * Handles observed DOM mutations and identifies if a mutation is related to
         * an autofill element. If so, it will update the autofill element data.
         * @param {MutationRecord[]} mutations
         * @private
         */
        this.handleMutationObserverMutation = (mutations) => {
            if (this.currentLocationHref !== globalThis.location.href) {
                this.handleWindowLocationMutation();
                return;
            }
            if (!this.mutationsQueue.length) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.requestIdleCallbackPolyfill)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(this.processMutations, 100), { timeout: 500 });
            }
            this.mutationsQueue.push(mutations);
        };
        /**
         * Handles the processing of all mutations in the mutations queue. Will trigger
         * within an idle callback to help with performance and prevent excessive updates.
         */
        this.processMutations = () => {
            const queueLength = this.mutationsQueue.length;
            if (!this.domQueryService.pageContainsShadowDomElements()) {
                this.checkPageContainsShadowDom();
            }
            for (let queueIndex = 0; queueIndex < queueLength; queueIndex++) {
                const mutations = this.mutationsQueue[queueIndex];
                const processMutationRecords = () => {
                    this.processMutationRecords(mutations);
                    if (queueIndex === queueLength - 1 && this.domRecentlyMutated) {
                        this.updateAutofillElementsAfterMutation();
                    }
                };
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.requestIdleCallbackPolyfill)(processMutationRecords, { timeout: 500 });
            }
            this.mutationsQueue = [];
        };
        /**
         * Handles observed form field elements that are not viewable in the viewport.
         * Will re-evaluate the visibility of the element and set up the autofill
         * overlay listeners on the field if it is viewable.
         *
         * @param entries - The entries observed by the IntersectionObserver
         */
        this.handleFormElementIntersection = (entries) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            for (let entryIndex = 0; entryIndex < entries.length; entryIndex++) {
                const entry = entries[entryIndex];
                const formFieldElement = entry.target;
                if (this.elementInitializingIntersectionObserver.has(formFieldElement)) {
                    this.elementInitializingIntersectionObserver.delete(formFieldElement);
                    continue;
                }
                const cachedAutofillFieldElement = this.autofillFieldElements.get(formFieldElement);
                if (!cachedAutofillFieldElement) {
                    this.intersectionObserver.unobserve(entry.target);
                    continue;
                }
                const isViewable = yield this.domElementVisibilityService.isElementViewable(formFieldElement);
                if (!isViewable) {
                    continue;
                }
                cachedAutofillFieldElement.viewable = true;
                this.setupOverlayOnField(formFieldElement, cachedAutofillFieldElement);
                (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.unobserve(entry.target);
            }
        });
        let inputQuery = "input:not([data-bwignore])";
        for (const type of this.ignoredInputTypes) {
            inputQuery += `:not([type="${type}"])`;
        }
        this.formFieldQueryString = `${inputQuery}, textarea:not([data-bwignore]), select:not([data-bwignore]), span[data-bwautofill]`;
    }
    get autofillFormElements() {
        return this._autofillFormElements;
    }
    /**
     * Builds the data for all forms and fields found within the page DOM.
     * Sets up a mutation observer to verify DOM changes and returns early
     * with cached data if no changes are detected.
     * @returns {Promise<AutofillPageDetails>}
     * @public
     */
    getPageDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.mutationObserver) {
                this.setupMutationObserver();
            }
            if (!this.intersectionObserver) {
                this.setupIntersectionObserver();
            }
            if (!this.domRecentlyMutated && this.noFieldsFound) {
                return this.getFormattedPageDetails({}, []);
            }
            if (!this.domRecentlyMutated && this.autofillFieldElements.size) {
                this.updateCachedAutofillFieldVisibility();
                return this.getFormattedPageDetails(this.getFormattedAutofillFormsData(), this.getFormattedAutofillFieldsData());
            }
            const { formElements, formFieldElements } = this.queryAutofillFormAndFieldElements();
            const autofillFormsData = this.buildAutofillFormsData(formElements);
            const autofillFieldsData = (yield this.buildAutofillFieldsData(formFieldElements)).filter((field) => !!field);
            this.sortAutofillFieldElementsMap();
            if (!autofillFieldsData.length) {
                this.noFieldsFound = true;
            }
            this.domRecentlyMutated = false;
            const pageDetails = this.getFormattedPageDetails(autofillFormsData, autofillFieldsData);
            this.setupOverlayListeners(pageDetails);
            return pageDetails;
        });
    }
    /**
     * Find an AutofillField element by its opid, will only return the first
     * element if there are multiple elements with the same opid. If no
     * element is found, null will be returned.
     * @param {string} opid
     * @returns {FormFieldElement | null}
     */
    getAutofillFieldElementByOpid(opid) {
        const cachedFormFieldElements = Array.from(this.autofillFieldElements.keys());
        const formFieldElements = (cachedFormFieldElements === null || cachedFormFieldElements === void 0 ? void 0 : cachedFormFieldElements.length)
            ? cachedFormFieldElements
            : this.getAutofillFieldElements();
        const fieldElementsWithOpid = formFieldElements.filter((fieldElement) => fieldElement.opid === opid);
        if (!fieldElementsWithOpid.length) {
            const elementIndex = parseInt(opid.split("__")[1], 10);
            return formFieldElements[elementIndex] || null;
        }
        if (fieldElementsWithOpid.length > 1) {
            // eslint-disable-next-line no-console
            console.warn(`More than one element found with opid ${opid}`);
        }
        return fieldElementsWithOpid[0];
    }
    /**
     * Sorts the AutofillFieldElements map by the elementNumber property.
     * @private
     */
    sortAutofillFieldElementsMap() {
        if (!this.autofillFieldElements.size) {
            return;
        }
        this.autofillFieldElements = new Map([...this.autofillFieldElements].sort((a, b) => a[1].elementNumber - b[1].elementNumber));
    }
    /**
     * Formats and returns the AutofillPageDetails object
     *
     * @param autofillFormsData - The data for all the forms found in the page
     * @param autofillFieldsData - The data for all the fields found in the page
     */
    getFormattedPageDetails(autofillFormsData, autofillFieldsData) {
        return {
            title: document.title,
            url: (document.defaultView || globalThis).location.href,
            documentUrl: document.location.href,
            forms: autofillFormsData,
            fields: autofillFieldsData,
            collectedTimestamp: Date.now(),
        };
    }
    /**
     * Re-checks the visibility for all form fields and updates the
     * cached data to reflect the most recent visibility state.
     *
     * @private
     */
    updateCachedAutofillFieldVisibility() {
        this.autofillFieldElements.forEach((autofillField, element) => __awaiter(this, void 0, void 0, function* () {
            const previouslyViewable = autofillField.viewable;
            autofillField.viewable = yield this.domElementVisibilityService.isElementViewable(element);
            if (!previouslyViewable && autofillField.viewable) {
                this.setupOverlayOnField(element, autofillField);
            }
        }));
    }
    /**
     * Queries the DOM for all the forms elements and
     * returns a collection of AutofillForm objects.
     * @returns {Record<string, AutofillForm>}
     * @private
     */
    buildAutofillFormsData(formElements) {
        for (let index = 0; index < formElements.length; index++) {
            const formElement = formElements[index];
            formElement.opid = `__form__${index}`;
            const existingAutofillForm = this._autofillFormElements.get(formElement);
            if (existingAutofillForm) {
                existingAutofillForm.opid = formElement.opid;
                this._autofillFormElements.set(formElement, existingAutofillForm);
                continue;
            }
            this._autofillFormElements.set(formElement, {
                opid: formElement.opid,
                htmlAction: this.getFormActionAttribute(formElement),
                htmlName: this.getPropertyOrAttribute(formElement, "name"),
                htmlClass: this.getPropertyOrAttribute(formElement, "class"),
                htmlID: this.getPropertyOrAttribute(formElement, "id"),
                htmlMethod: this.getPropertyOrAttribute(formElement, "method"),
            });
        }
        return this.getFormattedAutofillFormsData();
    }
    /**
     * Returns the action attribute of the form element. If the action attribute
     * is a relative path, it will be converted to an absolute path.
     * @param {ElementWithOpId<HTMLFormElement>} element
     * @returns {string}
     * @private
     */
    getFormActionAttribute(element) {
        return new URL(this.getPropertyOrAttribute(element, "action"), globalThis.location.href).href;
    }
    /**
     * Iterates over all known form elements and returns an AutofillForm object
     * containing a key value pair of the form element's opid and the form data.
     * @returns {Record<string, AutofillForm>}
     * @private
     */
    getFormattedAutofillFormsData() {
        const autofillForms = {};
        const autofillFormElements = Array.from(this._autofillFormElements);
        for (let index = 0; index < autofillFormElements.length; index++) {
            const [formElement, autofillForm] = autofillFormElements[index];
            autofillForms[formElement.opid] = autofillForm;
        }
        return autofillForms;
    }
    /**
     * Queries the DOM for all the field elements and
     * returns a list of AutofillField objects.
     * @returns {Promise<AutofillField[]>}
     * @private
     */
    buildAutofillFieldsData(formFieldElements) {
        return __awaiter(this, void 0, void 0, function* () {
            const autofillFieldElements = this.getAutofillFieldElements(100, formFieldElements);
            const autofillFieldDataPromises = autofillFieldElements.map(this.buildAutofillFieldItem);
            return Promise.all(autofillFieldDataPromises);
        });
    }
    /**
     * Queries the DOM for all the field elements that can be autofilled,
     * and returns a list limited to the given `fieldsLimit` number that
     * is ordered by priority.
     * @param {number} fieldsLimit - The maximum number of fields to return
     * @param {FormFieldElement[]} previouslyFoundFormFieldElements - The list of all the field elements
     * @returns {FormFieldElement[]}
     * @private
     */
    getAutofillFieldElements(fieldsLimit, previouslyFoundFormFieldElements) {
        var _a;
        let formFieldElements = previouslyFoundFormFieldElements;
        if (!formFieldElements) {
            formFieldElements = this.domQueryService.query(globalThis.document.documentElement, this.formFieldQueryString, (node) => this.isNodeFormFieldElement(node), this.mutationObserver);
        }
        if (!fieldsLimit || formFieldElements.length <= fieldsLimit) {
            return formFieldElements;
        }
        const priorityFormFields = [];
        const unimportantFormFields = [];
        const unimportantFieldTypesSet = new Set(["checkbox", "radio"]);
        for (const element of formFieldElements) {
            if (priorityFormFields.length >= fieldsLimit) {
                return priorityFormFields;
            }
            const fieldType = (_a = this.getPropertyOrAttribute(element, "type")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (unimportantFieldTypesSet.has(fieldType)) {
                unimportantFormFields.push(element);
                continue;
            }
            priorityFormFields.push(element);
        }
        const numberUnimportantFieldsToInclude = fieldsLimit - priorityFormFields.length;
        for (let index = 0; index < numberUnimportantFieldsToInclude; index++) {
            priorityFormFields.push(unimportantFormFields[index]);
        }
        return priorityFormFields;
    }
    /**
     * Caches the autofill field element and its data.
     * Will not cache the element if the index is less than 0.
     *
     * @param index - The index of the autofill field element
     * @param element - The autofill field element to cache
     * @param autofillFieldData - The autofill field data to cache
     */
    cacheAutofillFieldElement(index, element, autofillFieldData) {
        if (index < 0) {
            return;
        }
        this.autofillFieldElements.set(element, autofillFieldData);
    }
    /**
     * Identifies the autocomplete attribute associated with an element and returns
     * the value of the attribute if it is not set to "off".
     * @param {ElementWithOpId<FormFieldElement>} element
     * @returns {string}
     * @private
     */
    getAutoCompleteAttribute(element) {
        return (this.getPropertyOrAttribute(element, "x-autocompletetype") ||
            this.getPropertyOrAttribute(element, "autocompletetype") ||
            this.getPropertyOrAttribute(element, "autocomplete"));
    }
    /**
     * Returns the attribute of an element as a lowercase value.
     * @param {ElementWithOpId<FormFieldElement>} element
     * @param {string} attributeName
     * @returns {string}
     * @private
     */
    getAttributeLowerCase(element, attributeName) {
        var _a;
        return (_a = this.getPropertyOrAttribute(element, attributeName)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    }
    /**
     * Returns the value of an element's property or attribute.
     * @returns {AutofillField[]}
     * @private
     */
    getFormattedAutofillFieldsData() {
        return Array.from(this.autofillFieldElements.values());
    }
    /**
     * Creates a label tag used to autofill the element pulled from a label
     * associated with the element's id, name, parent element or from an
     * associated description term element if no other labels can be found.
     * Returns a string containing all the `textContent` or `innerText`
     * values of the label elements.
     * @param {FillableFormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldLabelTag(element) {
        var _a;
        const labelElementsSet = new Set(element.labels);
        if (labelElementsSet.size) {
            return this.createLabelElementsTag(labelElementsSet);
        }
        const labelElements = this.queryElementLabels(element);
        for (let labelIndex = 0; labelIndex < (labelElements === null || labelElements === void 0 ? void 0 : labelElements.length); labelIndex++) {
            labelElementsSet.add(labelElements[labelIndex]);
        }
        let currentElement = element;
        while (currentElement && currentElement !== document.documentElement) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsLabelElement)(currentElement)) {
                labelElementsSet.add(currentElement);
            }
            currentElement = (_a = currentElement.parentElement) === null || _a === void 0 ? void 0 : _a.closest("label");
        }
        if (!labelElementsSet.size &&
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsDescriptionDetailsElement)(element.parentElement) &&
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsDescriptionTermElement)(element.parentElement.previousElementSibling)) {
            labelElementsSet.add(element.parentElement.previousElementSibling);
        }
        return this.createLabelElementsTag(labelElementsSet);
    }
    /**
     * Queries the DOM for label elements associated with the given element
     * by id or name. Returns a NodeList of label elements or null if none
     * are found.
     * @param {FillableFormFieldElement} element
     * @returns {NodeListOf<HTMLLabelElement> | null}
     * @private
     */
    queryElementLabels(element) {
        let labelQuerySelectors = element.id ? `label[for="${element.id}"]` : "";
        if (element.name) {
            const forElementNameSelector = `label[for="${element.name}"]`;
            labelQuerySelectors = labelQuerySelectors
                ? `${labelQuerySelectors}, ${forElementNameSelector}`
                : forElementNameSelector;
        }
        if (!labelQuerySelectors) {
            return null;
        }
        return element.getRootNode().querySelectorAll(labelQuerySelectors.replace(/\n/g, ""));
    }
    /**
     * Gets the maxLength property of the passed FormFieldElement and
     * returns the value or null if the element does not have a
     * maxLength property. If the element has a maxLength property
     * greater than 999, it will return 999.
     * @param {FormFieldElement} element
     * @returns {number | null}
     * @private
     */
    getAutofillFieldMaxLength(element) {
        const elementHasMaxLengthProperty = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsInputElement)(element) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsTextAreaElement)(element);
        const elementMaxLength = elementHasMaxLengthProperty && element.maxLength > -1 ? element.maxLength : 999;
        return elementHasMaxLengthProperty ? Math.min(elementMaxLength, 999) : null;
    }
    /**
     * Iterates over the next siblings of the passed element and
     * returns a string of the text content of each element. Will
     * stop iterating if it encounters a new section element.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldRightLabel(element) {
        const labelTextContent = [];
        let currentElement = element;
        while (currentElement && currentElement.nextSibling) {
            currentElement = currentElement.nextSibling;
            if (this.isNewSectionElement(currentElement)) {
                break;
            }
            const textContent = this.getTextContentFromElement(currentElement);
            if (textContent) {
                labelTextContent.push(textContent);
            }
        }
        return labelTextContent.join("");
    }
    /**
     * Recursively gets the text content from an element's previous siblings
     * and returns a string of the text content of each element.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    createAutofillFieldLeftLabel(element) {
        const labelTextContent = this.recursivelyGetTextFromPreviousSiblings(element);
        return labelTextContent.reverse().join("");
    }
    /**
     * Assumes that the input elements that are to be autofilled are within a
     * table structure. Queries the previous sibling of the parent row that
     * the input element is in and returns the text content of the cell that
     * is in the same column as the input element.
     * @param {FormFieldElement} element
     * @returns {string | null}
     * @private
     */
    createAutofillFieldTopLabel(element) {
        var _a, _b;
        const tableDataElement = element.closest("td");
        if (!tableDataElement) {
            return null;
        }
        const tableDataElementIndex = tableDataElement.cellIndex;
        if (tableDataElementIndex < 0) {
            return null;
        }
        const parentSiblingTableRowElement = (_a = tableDataElement.closest("tr")) === null || _a === void 0 ? void 0 : _a.previousElementSibling;
        return ((_b = parentSiblingTableRowElement === null || parentSiblingTableRowElement === void 0 ? void 0 : parentSiblingTableRowElement.cells) === null || _b === void 0 ? void 0 : _b.length) > tableDataElementIndex
            ? this.getTextContentFromElement(parentSiblingTableRowElement.cells[tableDataElementIndex])
            : null;
    }
    /**
     * Check if the element's tag indicates that a transition to a new section of the
     * page is occurring. If so, we should not use the element or its children in order
     * to get autofill context for the previous element.
     * @param {HTMLElement} currentElement
     * @returns {boolean}
     * @private
     */
    isNewSectionElement(currentElement) {
        if (!currentElement) {
            return true;
        }
        const transitionalElementTagsSet = new Set([
            "html",
            "body",
            "button",
            "form",
            "head",
            "iframe",
            "input",
            "option",
            "script",
            "select",
            "table",
            "textarea",
        ]);
        return ("tagName" in currentElement &&
            transitionalElementTagsSet.has(currentElement.tagName.toLowerCase()));
    }
    /**
     * Gets the text content from a passed element, regardless of whether it is a
     * text node, an element node or an HTMLElement.
     * @param {Node | HTMLElement} element
     * @returns {string}
     * @private
     */
    getTextContentFromElement(element) {
        if (element.nodeType === Node.TEXT_NODE) {
            return this.trimAndRemoveNonPrintableText(element.nodeValue);
        }
        return this.trimAndRemoveNonPrintableText(element.textContent || element.innerText);
    }
    /**
     * Removes non-printable characters from the passed text
     * content and trims leading and trailing whitespace.
     * @param {string} textContent
     * @returns {string}
     * @private
     */
    trimAndRemoveNonPrintableText(textContent) {
        return (textContent || "")
            .replace(/[^\x20-\x7E]+|\s+/g, " ") // Strip out non-primitive characters and replace multiple spaces with a single space
            .trim(); // Trim leading and trailing whitespace
    }
    /**
     * Get the text content from the previous siblings of the element. If
     * no text content is found, recursively get the text content from the
     * previous siblings of the parent element.
     * @param {FormFieldElement} element
     * @returns {string[]}
     * @private
     */
    recursivelyGetTextFromPreviousSiblings(element) {
        const textContentItems = [];
        let currentElement = element;
        while (currentElement && currentElement.previousSibling) {
            // Ensure we are capturing text content from nodes and elements.
            currentElement = currentElement.previousSibling;
            if (this.isNewSectionElement(currentElement)) {
                return textContentItems;
            }
            const textContent = this.getTextContentFromElement(currentElement);
            if (textContent) {
                textContentItems.push(textContent);
            }
        }
        if (!currentElement || textContentItems.length) {
            return textContentItems;
        }
        // Prioritize capturing text content from elements rather than nodes.
        currentElement = currentElement.parentElement || currentElement.parentNode;
        if (!currentElement) {
            return textContentItems;
        }
        let siblingElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsElement)(currentElement)
            ? currentElement.previousElementSibling
            : currentElement.previousSibling;
        while ((siblingElement === null || siblingElement === void 0 ? void 0 : siblingElement.lastChild) && !this.isNewSectionElement(siblingElement)) {
            siblingElement = siblingElement.lastChild;
        }
        if (this.isNewSectionElement(siblingElement)) {
            return textContentItems;
        }
        const textContent = this.getTextContentFromElement(siblingElement);
        if (textContent) {
            textContentItems.push(textContent);
            return textContentItems;
        }
        return this.recursivelyGetTextFromPreviousSiblings(siblingElement);
    }
    /**
     * Gets the value of the element. If the element is a checkbox, returns a checkmark if the
     * checkbox is checked, or an empty string if it is not checked. If the element is a hidden
     * input, returns the value of the input if it is less than 254 characters, or a truncated
     * value if it is longer than 254 characters.
     * @param {FormFieldElement} element
     * @returns {string}
     * @private
     */
    getElementValue(element) {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsFillableFormField)(element)) {
            const spanTextContent = element.textContent || element.innerText;
            return spanTextContent || "";
        }
        const elementValue = element.value || "";
        const elementType = String(element.type).toLowerCase();
        if ("checked" in element && elementType === "checkbox") {
            return element.checked ? "✓" : "";
        }
        if (elementType === "hidden") {
            const inputValueMaxLength = 254;
            return elementValue.length > inputValueMaxLength
                ? `${elementValue.substring(0, inputValueMaxLength)}...SNIPPED`
                : elementValue;
        }
        return elementValue;
    }
    /**
     * Captures the `data-*` attribute metadata to help with validating the autofill data.
     *
     * @param element - The form field element to capture the `data-*` attribute metadata from
     */
    getDataSetValues(element) {
        let datasetValues = "";
        const dataset = element.dataset;
        for (const key in dataset) {
            datasetValues += `${key}: ${dataset[key]}, `;
        }
        return datasetValues;
    }
    /**
     * Get the options from a select element and return them as an array
     * of arrays indicating the select element option text and value.
     * @param {HTMLSelectElement} element
     * @returns {{options: (string | null)[][]}}
     * @private
     */
    getSelectElementOptions(element) {
        const options = Array.from(element.options).map((option) => {
            const optionText = option.text
                ? String(option.text)
                    .toLowerCase()
                    .replace(/[\s~`!@$%^&#*()\-_+=:;'"[\]|\\,<.>?]/gm, "") // Remove whitespace and punctuation
                : null;
            return [optionText, option.value];
        });
        return { options };
    }
    /**
     * Queries all potential form and field elements from the DOM and returns
     * a collection of form and field elements. Leverages the TreeWalker API
     * to deep query Shadow DOM elements.
     */
    queryAutofillFormAndFieldElements() {
        const formElements = [];
        const formFieldElements = [];
        const queriedElements = this.domQueryService.query(globalThis.document.documentElement, `form, ${this.formFieldQueryString}`, (node) => {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsFormElement)(node)) {
                formElements.push(node);
                return true;
            }
            if (this.isNodeFormFieldElement(node)) {
                formFieldElements.push(node);
                return true;
            }
            return false;
        }, this.mutationObserver);
        if (formElements.length || formFieldElements.length) {
            return { formElements, formFieldElements };
        }
        for (let index = 0; index < queriedElements.length; index++) {
            const element = queriedElements[index];
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsFormElement)(element)) {
                formElements.push(element);
                continue;
            }
            if (this.isNodeFormFieldElement(element)) {
                formFieldElements.push(element);
            }
        }
        return { formElements, formFieldElements };
    }
    /**
     * Checks if the passed node is a form field element.
     * @param {Node} node
     * @returns {boolean}
     * @private
     */
    isNodeFormFieldElement(node) {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsElement)(node)) {
            return false;
        }
        const nodeTagName = node.tagName.toLowerCase();
        const nodeIsSpanElementWithAutofillAttribute = nodeTagName === "span" && node.hasAttribute("data-bwautofill");
        if (nodeIsSpanElementWithAutofillAttribute) {
            return true;
        }
        const nodeHasBwIgnoreAttribute = node.hasAttribute("data-bwignore");
        const nodeIsValidInputElement = nodeTagName === "input" && !this.ignoredInputTypes.has(node.type);
        if (nodeIsValidInputElement && !nodeHasBwIgnoreAttribute) {
            return true;
        }
        return this.nonInputFormFieldTags.has(nodeTagName) && !nodeHasBwIgnoreAttribute;
    }
    /**
     * Sets up a mutation observer on the body of the document. Observes changes to
     * DOM elements to ensure we have an updated set of autofill field data.
     * @private
     */
    setupMutationObserver() {
        this.currentLocationHref = globalThis.location.href;
        this.mutationObserver = new MutationObserver(this.handleMutationObserverMutation);
        this.mutationObserver.observe(document.documentElement, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    }
    /**
     * Handles a mutation to the window location. Clears the autofill elements
     * and updates the autofill elements after a timeout.
     * @private
     */
    handleWindowLocationMutation() {
        this.currentLocationHref = globalThis.location.href;
        this.domRecentlyMutated = true;
        if (this.autofillOverlayContentService) {
            this.autofillOverlayContentService.pageDetailsUpdateRequired = true;
            this.autofillOverlayContentService.clearUserFilledFields();
            void this.sendExtensionMessage("closeAutofillInlineMenu", { forceCloseInlineMenu: true });
        }
        this.noFieldsFound = false;
        this._autofillFormElements.clear();
        this.autofillFieldElements.clear();
        this.updateAutofillElementsAfterMutation();
    }
    /**
     * Handles checking if the current page contains a ShadowDOM element and
     * flags that a re-collection of page details is required if it does.
     */
    checkPageContainsShadowDom() {
        this.domQueryService.checkPageContainsShadowDom();
        if (this.domQueryService.pageContainsShadowDomElements()) {
            this.flagPageDetailsUpdateIsRequired();
        }
    }
    /**
     * Triggers several flags that indicate that a collection of page details should
     * occur again on a subsequent call after a mutation has been observed in the DOM.
     */
    flagPageDetailsUpdateIsRequired() {
        this.domRecentlyMutated = true;
        if (this.autofillOverlayContentService) {
            this.autofillOverlayContentService.pageDetailsUpdateRequired = true;
        }
        this.noFieldsFound = false;
    }
    /**
     * Processes all mutation records encountered by the mutation observer.
     *
     * @param mutations - The mutation record to process
     */
    processMutationRecords(mutations) {
        for (let mutationIndex = 0; mutationIndex < mutations.length; mutationIndex++) {
            const mutation = mutations[mutationIndex];
            const processMutationRecord = () => this.processMutationRecord(mutation);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.requestIdleCallbackPolyfill)(processMutationRecord, { timeout: 500 });
        }
    }
    /**
     * Processes a single mutation record and updates the autofill elements if necessary.
     * @param mutation
     * @private
     */
    processMutationRecord(mutation) {
        if (mutation.type === "childList" &&
            (this.isAutofillElementNodeMutated(mutation.removedNodes, true) ||
                this.isAutofillElementNodeMutated(mutation.addedNodes))) {
            this.flagPageDetailsUpdateIsRequired();
            return;
        }
        if (mutation.type === "attributes") {
            this.handleAutofillElementAttributeMutation(mutation);
        }
    }
    /**
     * Checks if the passed nodes either contain or are autofill elements.
     *
     * @param nodes - The nodes to check
     * @param isRemovingNodes - Whether the nodes are being removed
     */
    isAutofillElementNodeMutated(nodes, isRemovingNodes = false) {
        if (!nodes.length) {
            return false;
        }
        let isElementMutated = false;
        let mutatedElements = [];
        for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsElement)(node)) {
                continue;
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsFormElement)(node) || this.isNodeFormFieldElement(node)) {
                mutatedElements.push(node);
            }
            const autofillElements = this.domQueryService.query(node, `form, ${this.formFieldQueryString}`, (walkerNode) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsFormElement)(walkerNode) || this.isNodeFormFieldElement(walkerNode), this.mutationObserver, true);
            if (autofillElements.length) {
                mutatedElements = mutatedElements.concat(autofillElements);
            }
            if (mutatedElements.length) {
                isElementMutated = true;
            }
        }
        if (isRemovingNodes) {
            for (let elementIndex = 0; elementIndex < mutatedElements.length; elementIndex++) {
                const element = mutatedElements[elementIndex];
                this.deleteCachedAutofillElement(element);
            }
        }
        else if (this.autofillOverlayContentService) {
            this.setupOverlayListenersOnMutatedElements(mutatedElements);
        }
        return isElementMutated;
    }
    /**
     * Sets up the overlay listeners on the passed mutated elements. This ensures
     * that the overlay can appear on elements that are injected into the DOM after
     * the initial page load.
     *
     * @param mutatedElements - HTML elements that have been mutated
     */
    setupOverlayListenersOnMutatedElements(mutatedElements) {
        for (let elementIndex = 0; elementIndex < mutatedElements.length; elementIndex++) {
            const node = mutatedElements[elementIndex];
            const buildAutofillFieldItem = () => {
                if (!this.isNodeFormFieldElement(node) ||
                    this.autofillFieldElements.get(node)) {
                    return;
                }
                // We are setting this item to a -1 index because we do not know its position in the DOM.
                // This value should be updated with the next call to collect page details.
                void this.buildAutofillFieldItem(node, -1);
            };
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.requestIdleCallbackPolyfill)(buildAutofillFieldItem, { timeout: 1000 });
        }
    }
    /**
     * Deletes any cached autofill elements that have been
     * removed from the DOM.
     * @param {ElementWithOpId<HTMLFormElement> | ElementWithOpId<FormFieldElement>} element
     * @private
     */
    deleteCachedAutofillElement(element) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.elementIsFormElement)(element) && this._autofillFormElements.has(element)) {
            this._autofillFormElements.delete(element);
            return;
        }
        if (this.autofillFieldElements.has(element)) {
            this.autofillFieldElements.delete(element);
        }
    }
    /**
     * Updates the autofill elements after a DOM mutation has occurred.
     * Is debounced to prevent excessive updates.
     * @private
     */
    updateAutofillElementsAfterMutation() {
        if (this.updateAfterMutationIdleCallback) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cancelIdleCallbackPolyfill)(this.updateAfterMutationIdleCallback);
        }
        this.updateAfterMutationIdleCallback = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.requestIdleCallbackPolyfill)(this.getPageDetails.bind(this), { timeout: this.updateAfterMutationTimeout });
    }
    /**
     * Handles observed DOM mutations related to an autofill element attribute.
     * @param {MutationRecord} mutation
     * @private
     */
    handleAutofillElementAttributeMutation(mutation) {
        var _a;
        const targetElement = mutation.target;
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsElement)(targetElement)) {
            return;
        }
        const attributeName = (_a = mutation.attributeName) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        const autofillForm = this._autofillFormElements.get(targetElement);
        if (autofillForm) {
            this.updateAutofillFormElementData(attributeName, targetElement, autofillForm);
            return;
        }
        const autofillField = this.autofillFieldElements.get(targetElement);
        if (!autofillField) {
            return;
        }
        this.updateAutofillFieldElementData(attributeName, targetElement, autofillField);
    }
    /**
     * Updates the autofill form element data based on the passed attribute name.
     * @param {string} attributeName
     * @param {ElementWithOpId<HTMLFormElement>} element
     * @param {AutofillForm} dataTarget
     * @private
     */
    updateAutofillFormElementData(attributeName, element, dataTarget) {
        const updateAttribute = (dataTargetKey) => {
            this.updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey });
        };
        const updateActions = {
            action: () => (dataTarget.htmlAction = this.getFormActionAttribute(element)),
            name: () => updateAttribute("htmlName"),
            id: () => updateAttribute("htmlID"),
            method: () => updateAttribute("htmlMethod"),
        };
        if (!updateActions[attributeName]) {
            return;
        }
        updateActions[attributeName]();
        if (this._autofillFormElements.has(element)) {
            this._autofillFormElements.set(element, dataTarget);
        }
    }
    /**
     * Updates the autofill field element data based on the passed attribute name.
     *
     * @param {string} attributeName
     * @param {ElementWithOpId<FormFieldElement>} element
     * @param {AutofillField} dataTarget
     */
    updateAutofillFieldElementData(attributeName, element, dataTarget) {
        const updateAttribute = (dataTargetKey) => {
            this.updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey });
        };
        const updateActions = {
            maxlength: () => (dataTarget.maxLength = this.getAutofillFieldMaxLength(element)),
            id: () => updateAttribute("htmlID"),
            name: () => updateAttribute("htmlName"),
            class: () => updateAttribute("htmlClass"),
            tabindex: () => updateAttribute("tabindex"),
            title: () => updateAttribute("tabindex"),
            rel: () => updateAttribute("rel"),
            tagname: () => (dataTarget.tagName = this.getAttributeLowerCase(element, "tagName")),
            type: () => (dataTarget.type = this.getAttributeLowerCase(element, "type")),
            value: () => (dataTarget.value = this.getElementValue(element)),
            checked: () => (dataTarget.checked = this.getAttributeBoolean(element, "checked")),
            disabled: () => (dataTarget.disabled = this.getAttributeBoolean(element, "disabled")),
            readonly: () => (dataTarget.readonly = this.getAttributeBoolean(element, "readonly")),
            autocomplete: () => (dataTarget.autoCompleteType = this.getAutoCompleteAttribute(element)),
            "data-label": () => updateAttribute("label-data"),
            "aria-label": () => updateAttribute("label-aria"),
            "aria-hidden": () => (dataTarget["aria-hidden"] = this.getAttributeBoolean(element, "aria-hidden", true)),
            "aria-disabled": () => (dataTarget["aria-disabled"] = this.getAttributeBoolean(element, "aria-disabled", true)),
            "aria-haspopup": () => (dataTarget["aria-haspopup"] = this.getAttributeBoolean(element, "aria-haspopup", true)),
            "data-stripe": () => updateAttribute("data-stripe"),
        };
        if (!updateActions[attributeName]) {
            return;
        }
        updateActions[attributeName]();
        if (this.autofillFieldElements.has(element)) {
            this.autofillFieldElements.set(element, dataTarget);
        }
    }
    /**
     * Gets the attribute value for the passed element, and returns it. If the dataTarget
     * and dataTargetKey are passed, it will set the value of the dataTarget[dataTargetKey].
     * @param UpdateAutofillDataAttributeParams
     * @returns {string}
     * @private
     */
    updateAutofillDataAttribute({ element, attributeName, dataTarget, dataTargetKey, }) {
        const attributeValue = this.getPropertyOrAttribute(element, attributeName);
        if (dataTarget && dataTargetKey) {
            dataTarget[dataTargetKey] = attributeValue;
        }
        return attributeValue;
    }
    /**
     * Sets up an IntersectionObserver to observe found form
     * field elements that are not viewable in the viewport.
     */
    setupIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver(this.handleFormElementIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        });
    }
    /**
     * Iterates over all cached field elements and sets up the inline menu listeners on each field.
     *
     * @param pageDetails - The page details to use for the inline menu listeners
     */
    setupOverlayListeners(pageDetails) {
        if (this.autofillOverlayContentService) {
            this.autofillFieldElements.forEach((autofillField, formFieldElement) => {
                this.setupOverlayOnField(formFieldElement, autofillField, pageDetails);
            });
        }
    }
    /**
     * Sets up the inline menu listener on the passed field element.
     *
     * @param formFieldElement - The form field element to set up the inline menu listener on
     * @param autofillField - The metadata for the form field
     * @param pageDetails - The page details to use for the inline menu listeners
     */
    setupOverlayOnField(formFieldElement, autofillField, pageDetails) {
        if (this.autofillOverlayContentService) {
            const autofillPageDetails = pageDetails ||
                this.getFormattedPageDetails(this.getFormattedAutofillFormsData(), this.getFormattedAutofillFieldsData());
            void this.autofillOverlayContentService.setupOverlayListeners(formFieldElement, autofillField, autofillPageDetails);
        }
    }
    /**
     * Validates whether a password field is within the document.
     */
    isPasswordFieldWithinDocument() {
        var _a;
        return (((_a = this.domQueryService.query(globalThis.document.documentElement, `input[type="password"]`, (node) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.nodeIsInputElement)(node) && node.type === "password")) === null || _a === void 0 ? void 0 : _a.length) > 0);
    }
    /**
     * Destroys the CollectAutofillContentService. Clears all
     * timeouts and disconnects the mutation observer.
     */
    destroy() {
        var _a, _b;
        if (this.updateAfterMutationIdleCallback) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cancelIdleCallbackPolyfill)(this.updateAfterMutationIdleCallback);
        }
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.intersectionObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
}


/***/ }),

/***/ "./src/autofill/services/dom-element-visibility.service.ts":
/*!*****************************************************************!*\
  !*** ./src/autofill/services/dom-element-visibility.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DomElementVisibilityService {
    constructor(inlineMenuContentService) {
        this.inlineMenuContentService = inlineMenuContentService;
        this.cachedComputedStyle = null;
    }
    /**
     * Checks if an element is viewable. This is done by checking if the element is within the
     * viewport bounds, not hidden by CSS, and not hidden behind another element.
     * @param element
     */
    isElementViewable(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const elementBoundingClientRect = element.getBoundingClientRect();
            if (this.isElementOutsideViewportBounds(element, elementBoundingClientRect) ||
                this.isElementHiddenByCss(element)) {
                return false;
            }
            return this.formFieldIsNotHiddenBehindAnotherElement(element, elementBoundingClientRect);
        });
    }
    /**
     * Check if the target element is hidden using CSS. This is done by checking the opacity, display,
     * visibility, and clip-path CSS properties of the element. We also check the opacity of all
     * parent elements to ensure that the target element is not hidden by a parent element.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @public
     */
    isElementHiddenByCss(element) {
        this.cachedComputedStyle = null;
        if (this.isElementInvisible(element) ||
            this.isElementNotDisplayed(element) ||
            this.isElementNotVisible(element) ||
            this.isElementClipped(element)) {
            return true;
        }
        let parentElement = element.parentElement;
        while (parentElement && parentElement !== element.ownerDocument.documentElement) {
            this.cachedComputedStyle = null;
            if (this.isElementInvisible(parentElement)) {
                return true;
            }
            parentElement = parentElement.parentElement;
        }
        return false;
    }
    /**
     * Gets the computed style of a given element, will only calculate the computed
     * style if the element's style has not been previously cached.
     * @param {HTMLElement} element
     * @param {string} styleProperty
     * @returns {string}
     * @private
     */
    getElementStyle(element, styleProperty) {
        if (!this.cachedComputedStyle) {
            this.cachedComputedStyle = (element.ownerDocument.defaultView || globalThis).getComputedStyle(element);
        }
        return this.cachedComputedStyle.getPropertyValue(styleProperty);
    }
    /**
     * Checks if the opacity of the target element is less than 0.1.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementInvisible(element) {
        return parseFloat(this.getElementStyle(element, "opacity")) < 0.1;
    }
    /**
     * Checks if the target element has a display property of none.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementNotDisplayed(element) {
        return this.getElementStyle(element, "display") === "none";
    }
    /**
     * Checks if the target element has a visibility property of hidden or collapse.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementNotVisible(element) {
        return new Set(["hidden", "collapse"]).has(this.getElementStyle(element, "visibility"));
    }
    /**
     * Checks if the target element has a clip-path property that hides the element.
     * @param {HTMLElement} element
     * @returns {boolean}
     * @private
     */
    isElementClipped(element) {
        return new Set([
            "inset(50%)",
            "inset(100%)",
            "circle(0)",
            "circle(0px)",
            "circle(0px at 50% 50%)",
            "polygon(0 0, 0 0, 0 0, 0 0)",
            "polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)",
        ]).has(this.getElementStyle(element, "clipPath"));
    }
    /**
     * Checks if the target element is outside the viewport bounds. This is done by checking if the
     * element is too small or is overflowing the viewport bounds.
     * @param {HTMLElement} targetElement
     * @param {DOMRectReadOnly | null} targetElementBoundingClientRect
     * @returns {boolean}
     * @private
     */
    isElementOutsideViewportBounds(targetElement, targetElementBoundingClientRect = null) {
        const documentElement = targetElement.ownerDocument.documentElement;
        const documentElementWidth = documentElement.scrollWidth;
        const documentElementHeight = documentElement.scrollHeight;
        const elementBoundingClientRect = targetElementBoundingClientRect || targetElement.getBoundingClientRect();
        const elementTopOffset = elementBoundingClientRect.top - documentElement.clientTop;
        const elementLeftOffset = elementBoundingClientRect.left - documentElement.clientLeft;
        const isElementSizeInsufficient = elementBoundingClientRect.width < 10 || elementBoundingClientRect.height < 10;
        const isElementOverflowingLeftViewport = elementLeftOffset < 0;
        const isElementOverflowingRightViewport = elementLeftOffset + elementBoundingClientRect.width > documentElementWidth;
        const isElementOverflowingTopViewport = elementTopOffset < 0;
        const isElementOverflowingBottomViewport = elementTopOffset + elementBoundingClientRect.height > documentElementHeight;
        return (isElementSizeInsufficient ||
            isElementOverflowingLeftViewport ||
            isElementOverflowingRightViewport ||
            isElementOverflowingTopViewport ||
            isElementOverflowingBottomViewport);
    }
    /**
     * Checks if a passed FormField is not hidden behind another element. This is done by
     * checking if the element at the center point of the FormField is the FormField itself
     * or one of its labels.
     * @param {FormFieldElement} targetElement
     * @param {DOMRectReadOnly | null} targetElementBoundingClientRect
     * @returns {boolean}
     * @private
     */
    formFieldIsNotHiddenBehindAnotherElement(targetElement, targetElementBoundingClientRect = null) {
        var _a, _b;
        const elementBoundingClientRect = targetElementBoundingClientRect || targetElement.getBoundingClientRect();
        const elementRootNode = targetElement.getRootNode();
        const rootElement = elementRootNode instanceof ShadowRoot ? elementRootNode : targetElement.ownerDocument;
        const elementAtCenterPoint = rootElement.elementFromPoint(elementBoundingClientRect.left + elementBoundingClientRect.width / 2, elementBoundingClientRect.top + elementBoundingClientRect.height / 2);
        if (elementAtCenterPoint === targetElement) {
            return true;
        }
        if ((_a = this.inlineMenuContentService) === null || _a === void 0 ? void 0 : _a.isElementInlineMenu(elementAtCenterPoint)) {
            return true;
        }
        const targetElementLabelsSet = new Set(targetElement.labels);
        if (targetElementLabelsSet.has(elementAtCenterPoint)) {
            return true;
        }
        const closestParentLabel = (_b = elementAtCenterPoint === null || elementAtCenterPoint === void 0 ? void 0 : elementAtCenterPoint.parentElement) === null || _b === void 0 ? void 0 : _b.closest("label");
        return targetElementLabelsSet.has(closestParentLabel);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (DomElementVisibilityService);


/***/ }),

/***/ "./src/autofill/services/dom-query.service.ts":
/*!****************************************************!*\
  !*** ./src/autofill/services/dom-query.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DomQueryService: function() { return /* binding */ DomQueryService; }
/* harmony export */ });
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
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


class DomQueryService {
    constructor() {
        this.useTreeWalkerStrategyFlagSet = true;
        this.ignoredTreeWalkerNodes = new Set([
            "svg",
            "script",
            "noscript",
            "head",
            "style",
            "link",
            "meta",
            "title",
            "base",
            "img",
            "picture",
            "video",
            "audio",
            "object",
            "source",
            "track",
            "param",
            "map",
            "area",
        ]);
        /**
         * Checks if the page contains any shadow DOM elements.
         */
        this.checkPageContainsShadowDom = () => {
            this.pageContainsShadowDom = this.queryShadowRoots(globalThis.document.body, true).length > 0;
        };
        void this.init();
    }
    /**
     * Sets up a query that will trigger a deepQuery of the DOM, querying all elements that match the given query string.
     * If the deepQuery fails or reaches a max recursion depth, it will fall back to a treeWalker query.
     *
     * @param root - The root element to start the query from
     * @param queryString - The query string to match elements against
     * @param treeWalkerFilter - The filter callback to use for the treeWalker query
     * @param mutationObserver - The MutationObserver to use for observing shadow roots
     * @param forceDeepQueryAttempt - Whether to force a deep query attempt
     * @param ignoredTreeWalkerNodesOverride - An optional set of node names to ignore when using the treeWalker strategy
     */
    query(root, queryString, treeWalkerFilter, mutationObserver, forceDeepQueryAttempt, ignoredTreeWalkerNodesOverride) {
        const ignoredTreeWalkerNodes = ignoredTreeWalkerNodesOverride || this.ignoredTreeWalkerNodes;
        if (!forceDeepQueryAttempt && this.pageContainsShadowDomElements()) {
            return this.queryAllTreeWalkerNodes(root, treeWalkerFilter, ignoredTreeWalkerNodes, mutationObserver);
        }
        try {
            return this.deepQueryElements(root, queryString, mutationObserver);
        }
        catch (_a) {
            return this.queryAllTreeWalkerNodes(root, treeWalkerFilter, ignoredTreeWalkerNodes, mutationObserver);
        }
    }
    /**
     * Determines whether to use the treeWalker strategy for querying the DOM.
     */
    pageContainsShadowDomElements() {
        return this.useTreeWalkerStrategyFlagSet || this.pageContainsShadowDom;
    }
    /**
     * Initializes the DomQueryService, checking for the presence of shadow DOM elements on the page.
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const useTreeWalkerStrategyFlag = yield (0,_utils__WEBPACK_IMPORTED_MODULE_1__.sendExtensionMessage)("getUseTreeWalkerApiForPageDetailsCollectionFeatureFlag");
            if (useTreeWalkerStrategyFlag && typeof useTreeWalkerStrategyFlag.result === "boolean") {
                this.useTreeWalkerStrategyFlagSet = useTreeWalkerStrategyFlag.result;
            }
            if (globalThis.document.readyState === "complete") {
                this.checkPageContainsShadowDom();
                return;
            }
            globalThis.addEventListener(_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.LOAD, this.checkPageContainsShadowDom);
        });
    }
    /**
     * Queries all elements in the DOM that match the given query string.
     * Also, recursively queries all shadow roots for the element.
     *
     * @param root - The root element to start the query from
     * @param queryString - The query string to match elements against
     * @param mutationObserver - The MutationObserver to use for observing shadow roots
     */
    deepQueryElements(root, queryString, mutationObserver) {
        let elements = this.queryElements(root, queryString);
        const shadowRoots = this.recursivelyQueryShadowRoots(root);
        for (let index = 0; index < shadowRoots.length; index++) {
            const shadowRoot = shadowRoots[index];
            elements = elements.concat(this.queryElements(shadowRoot, queryString));
            if (mutationObserver) {
                mutationObserver.observe(shadowRoot, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                });
            }
        }
        return elements;
    }
    /**
     * Queries the DOM for elements based on the given query string.
     *
     * @param root - The root element to start the query from
     * @param queryString - The query string to match elements against
     */
    queryElements(root, queryString) {
        if (!root.querySelector(queryString)) {
            return [];
        }
        return Array.from(root.querySelectorAll(queryString));
    }
    /**
     * Recursively queries all shadow roots found within the given root element.
     * Will also set up a mutation observer on the shadow root if the
     * `isObservingShadowRoot` parameter is set to true.
     *
     * @param root - The root element to start the query from
     * @param depth - The depth of the recursion
     */
    recursivelyQueryShadowRoots(root, depth = 0) {
        if (!this.pageContainsShadowDom) {
            return [];
        }
        if (depth >= _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_DEEP_QUERY_RECURSION_DEPTH) {
            throw new Error("Max recursion depth reached");
        }
        let shadowRoots = this.queryShadowRoots(root);
        for (let index = 0; index < shadowRoots.length; index++) {
            const shadowRoot = shadowRoots[index];
            shadowRoots = shadowRoots.concat(this.recursivelyQueryShadowRoots(shadowRoot, depth + 1));
        }
        return shadowRoots;
    }
    /**
     * Queries any immediate shadow roots found within the given root element.
     *
     * @param root - The root element to start the query from
     * @param returnSingleShadowRoot - Whether to return a single shadow root or an array of shadow roots
     */
    queryShadowRoots(root, returnSingleShadowRoot = false) {
        if (!root) {
            return [];
        }
        const shadowRoots = [];
        const potentialShadowRoots = root.querySelectorAll(":defined");
        for (let index = 0; index < potentialShadowRoots.length; index++) {
            const shadowRoot = this.getShadowRoot(potentialShadowRoots[index]);
            if (!shadowRoot) {
                continue;
            }
            shadowRoots.push(shadowRoot);
            if (returnSingleShadowRoot) {
                break;
            }
        }
        return shadowRoots;
    }
    /**
     * Attempts to get the ShadowRoot of the passed node. If support for the
     * extension based openOrClosedShadowRoot API is available, it will be used.
     * Will return null if the node is not an HTMLElement or if the node has
     * child nodes.
     *
     * @param {Node} node
     */
    getShadowRoot(node) {
        var _a;
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.nodeIsElement)(node)) {
            return null;
        }
        if (node.shadowRoot) {
            return node.shadowRoot;
        }
        if ((_a = chrome.dom) === null || _a === void 0 ? void 0 : _a.openOrClosedShadowRoot) {
            try {
                return chrome.dom.openOrClosedShadowRoot(node);
                // FIXME: Remove when updating file. Eslint update
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }
            catch (error) {
                return null;
            }
        }
        return node.openOrClosedShadowRoot;
    }
    /**
     * Queries the DOM for all the nodes that match the given filter callback
     * and returns a collection of nodes.
     * @param rootNode
     * @param filterCallback
     * @param ignoredTreeWalkerNodes
     * @param mutationObserver
     */
    queryAllTreeWalkerNodes(rootNode, filterCallback, ignoredTreeWalkerNodes, mutationObserver) {
        const treeWalkerQueryResults = [];
        this.buildTreeWalkerNodesQueryResults(rootNode, treeWalkerQueryResults, filterCallback, ignoredTreeWalkerNodes, mutationObserver);
        return treeWalkerQueryResults;
    }
    /**
     * Recursively builds a collection of nodes that match the given filter callback.
     * If a node has a ShadowRoot, it will be observed for mutations.
     *
     * @param rootNode
     * @param treeWalkerQueryResults
     * @param filterCallback
     * @param ignoredTreeWalkerNodes
     * @param mutationObserver
     */
    buildTreeWalkerNodesQueryResults(rootNode, treeWalkerQueryResults, filterCallback, ignoredTreeWalkerNodes, mutationObserver) {
        const treeWalker = document === null || document === void 0 ? void 0 : document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT, (node) => {
            var _a;
            return ignoredTreeWalkerNodes.has((_a = node.nodeName) === null || _a === void 0 ? void 0 : _a.toLowerCase())
                ? NodeFilter.FILTER_REJECT
                : NodeFilter.FILTER_ACCEPT;
        });
        let currentNode = treeWalker === null || treeWalker === void 0 ? void 0 : treeWalker.currentNode;
        while (currentNode) {
            if (filterCallback(currentNode)) {
                treeWalkerQueryResults.push(currentNode);
            }
            const nodeShadowRoot = this.getShadowRoot(currentNode);
            if (nodeShadowRoot) {
                if (mutationObserver) {
                    mutationObserver.observe(nodeShadowRoot, {
                        attributes: true,
                        childList: true,
                        subtree: true,
                    });
                }
                this.buildTreeWalkerNodesQueryResults(nodeShadowRoot, treeWalkerQueryResults, filterCallback, ignoredTreeWalkerNodes, mutationObserver);
            }
            currentNode = treeWalker === null || treeWalker === void 0 ? void 0 : treeWalker.nextNode();
        }
    }
}


/***/ }),

/***/ "./src/autofill/services/inline-menu-field-qualification.service.ts":
/*!**************************************************************************!*\
  !*** ./src/autofill/services/inline-menu-field-qualification.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineMenuFieldQualificationService: function() { return /* binding */ InlineMenuFieldQualificationService; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
/* harmony import */ var _autofill_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autofill-constants */ "./src/autofill/services/autofill-constants.ts");


class InlineMenuFieldQualificationService {
    constructor() {
        this.searchFieldNamesSet = new Set(_autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.SearchFieldNames);
        this.excludedAutofillFieldTypesSet = new Set(_autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.ExcludedAutofillLoginTypes);
        this.usernameFieldTypes = new Set(["text", "email", "number", "tel"]);
        this.usernameAutocompleteValue = "username";
        this.emailAutocompleteValue = "email";
        this.webAuthnAutocompleteValue = "webauthn";
        this.loginUsernameAutocompleteValues = new Set([
            this.usernameAutocompleteValue,
            this.emailAutocompleteValue,
            this.webAuthnAutocompleteValue,
        ]);
        this.fieldIgnoreListString = _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.FieldIgnoreList.join(",");
        this.currentPasswordAutocompleteValue = "current-password";
        this.newPasswordAutoCompleteValue = "new-password";
        this.autofillFieldKeywordsMap = new WeakMap();
        this.submitButtonKeywordsMap = new WeakMap();
        this.autocompleteDisabledValues = new Set(["off", "false"]);
        this.accountCreationFieldKeywords = [
            "register",
            "registration",
            "create password",
            "create a password",
            "create an account",
            "create account password",
            "create user password",
            "confirm password",
            "confirm account password",
            "confirm user password",
            "new user",
            "new email",
            "new e-mail",
            "new password",
            "new-password",
            "neuer benutzer",
            "neues passwort",
            "neue e-mail",
            "pwdcheck",
        ];
        this.updatePasswordFieldKeywords = [
            "update password",
            "change password",
            "current password",
            "kennwort ändern",
        ];
        this.creditCardFieldKeywords = [
            ...new Set([
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardHolderFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardNumberFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardExpiryFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.ExpiryMonthFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.ExpiryYearFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CVVFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardBrandFieldNames,
            ]),
        ];
        this.creditCardNameAutocompleteValues = new Set([
            "cc-name",
            "cc-given-name,",
            "cc-additional-name",
            "cc-family-name",
        ]);
        this.creditCardExpirationDateAutocompleteValue = "cc-exp";
        this.creditCardExpirationMonthAutocompleteValue = "cc-exp-month";
        this.creditCardExpirationYearAutocompleteValue = "cc-exp-year";
        this.creditCardCvvAutocompleteValue = "cc-csc";
        this.creditCardNumberAutocompleteValue = "cc-number";
        this.creditCardTypeAutocompleteValue = "cc-type";
        this.creditCardAutocompleteValues = new Set([
            ...this.creditCardNameAutocompleteValues,
            this.creditCardExpirationDateAutocompleteValue,
            this.creditCardExpirationMonthAutocompleteValue,
            this.creditCardExpirationYearAutocompleteValue,
            this.creditCardNumberAutocompleteValue,
            this.creditCardCvvAutocompleteValue,
            this.creditCardTypeAutocompleteValue,
        ]);
        this.identityHonorificPrefixAutocompleteValue = "honorific-prefix";
        this.identityFullNameAutocompleteValue = "name";
        this.identityFirstNameAutocompleteValue = "given-name";
        this.identityMiddleNameAutocompleteValue = "additional-name";
        this.identityLastNameAutocompleteValue = "family-name";
        this.identityNameAutocompleteValues = new Set([
            this.identityFullNameAutocompleteValue,
            this.identityHonorificPrefixAutocompleteValue,
            this.identityFirstNameAutocompleteValue,
            this.identityMiddleNameAutocompleteValue,
            this.identityLastNameAutocompleteValue,
            "honorific-suffix",
            "nickname",
        ]);
        this.identityCompanyAutocompleteValue = "organization";
        this.identityStreetAddressAutocompleteValue = "street-address";
        this.identityAddressLine1AutocompleteValue = "address-line1";
        this.identityAddressLine2AutocompleteValue = "address-line2";
        this.identityAddressLine3AutocompleteValue = "address-line3";
        this.identityAddressCityAutocompleteValue = "address-level2";
        this.identityAddressStateAutocompleteValue = "address-level1";
        this.identityAddressAutoCompleteValues = new Set([
            this.identityStreetAddressAutocompleteValue,
            this.identityAddressLine1AutocompleteValue,
            this.identityAddressLine2AutocompleteValue,
            this.identityAddressLine3AutocompleteValue,
            this.identityAddressCityAutocompleteValue,
            this.identityAddressStateAutocompleteValue,
            "shipping",
            "billing",
            "address-level4",
            "address-level3",
        ]);
        this.identityCountryAutocompleteValues = new Set(["country", "country-name"]);
        this.identityPostalCodeAutocompleteValue = "postal-code";
        this.identityPhoneAutocompleteValue = "tel";
        this.identityPhoneNumberAutocompleteValues = new Set([
            this.identityPhoneAutocompleteValue,
            "tel-country-code",
            "tel-area-code",
            "tel-local",
            "tel-extension",
        ]);
        this.identityAutocompleteValues = new Set([
            ...this.identityNameAutocompleteValues,
            ...this.loginUsernameAutocompleteValues,
            ...this.identityCompanyAutocompleteValue,
            ...this.identityAddressAutoCompleteValues,
            ...this.identityCountryAutocompleteValues,
            ...this.identityPhoneNumberAutocompleteValues,
            this.identityCompanyAutocompleteValue,
            this.identityPostalCodeAutocompleteValue,
        ]);
        this.totpFieldAutocompleteValue = "one-time-code";
        this.premiumEnabled = false;
        /**
         * Validates the provided field as a credit card name field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardholderName = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardNameAutocompleteValues)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardHolderFieldNames, false);
        };
        /**
         * Validates the provided field as a credit card number field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardNumber = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardNumberAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardNumberFieldNames, false);
        };
        /**
         * Validates the provided field as a credit card expiration date field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardExpirationDate = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardExpirationDateAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CardExpiryFieldNames, false);
        };
        /**
         * Validates the provided field as a credit card expiration month field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardExpirationMonth = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardExpirationMonthAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.ExpiryMonthFieldNames, false);
        };
        /**
         * Validates the provided field as a credit card expiration year field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardExpirationYear = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardExpirationYearAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.ExpiryYearFieldNames, false);
        };
        /**
         * Validates the provided field as a credit card CVV field.
         *
         * @param field - The field to validate
         */
        this.isFieldForCardCvv = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.creditCardCvvAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.CreditCardAutoFillConstants.CVVFieldNames, false);
        };
        /**
         * Validates the provided field as an identity title type field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityTitle = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityHonorificPrefixAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.TitleFieldNames, false);
        };
        /**
         * Validates the provided field as an identity full name field.
         *
         * @param field
         */
        this.isFieldForIdentityFirstName = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityFirstNameAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.FirstnameFieldNames, false);
        };
        /**
         * Validates the provided field as an identity middle name field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityMiddleName = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityMiddleNameAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.MiddlenameFieldNames, false);
        };
        /**
         *  Validates the provided field as an identity last name field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityLastName = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityLastNameAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.LastnameFieldNames, false);
        };
        /**
         * Validates the provided field as an identity full name field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityFullName = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityFullNameAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.FullNameFieldNames, false);
        };
        /**
         * Validates the provided field as an identity address field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityAddress1 = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityAddressLine1AutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, [
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.AddressFieldNames,
                ..._autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.Address1FieldNames,
            ], false);
        };
        /**
         * Validates the provided field as an identity address field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityAddress2 = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityAddressLine2AutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.Address2FieldNames, false);
        };
        /**
         * Validates the provided field as an identity address field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityAddress3 = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityAddressLine3AutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.Address3FieldNames, false);
        };
        /**
         * Validates the provided field as an identity city field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityCity = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityAddressCityAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.CityFieldNames, false);
        };
        /**
         * Validates the provided field as an identity state field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityState = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityAddressStateAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.StateFieldNames, false);
        };
        /**
         * Validates the provided field as an identity postal code field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityPostalCode = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityPostalCodeAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.PostalCodeFieldNames, false);
        };
        /**
         * Validates the provided field as an identity country field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityCountry = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityCountryAutocompleteValues)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.CountryFieldNames, false);
        };
        /**
         * Validates the provided field as an identity company field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityCompany = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityCompanyAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.CompanyFieldNames, false);
        };
        /**
         * Validates the provided field as an identity phone field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityPhone = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.identityPhoneAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.PhoneFieldNames, false);
        };
        /**
         * Validates the provided field as an identity email field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityEmail = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.emailAutocompleteValue) ||
                field.type === "email") {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.EmailFieldNames, false);
        };
        /**
         * Validates the provided field as an identity username field.
         *
         * @param field - The field to validate
         */
        this.isFieldForIdentityUsername = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.usernameAutocompleteValue)) {
                return true;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.IdentityAutoFillConstants.UserNameFieldNames, false);
        };
        /**
         * Validates the provided field as a username field.
         *
         * @param field - The field to validate
         */
        this.isUsernameField = (field) => {
            if (!this.usernameFieldTypes.has(field.type) ||
                this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet) ||
                this.fieldHasDisqualifyingAttributeValue(field)) {
                return false;
            }
            return this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.UsernameFieldNames);
        };
        /**
         * Validates the provided field as an email field.
         *
         * @param field - The field to validate
         */
        this.isEmailField = (field) => {
            if (field.type === "email") {
                return true;
            }
            return (!this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet) &&
                this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.EmailFieldNames));
        };
        /**
         * Validates the provided field as a current password field.
         *
         * @param field - The field to validate
         */
        this.isCurrentPasswordField = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.newPasswordAutoCompleteValue) ||
                this.keywordsFoundInFieldData(field, this.accountCreationFieldKeywords)) {
                return false;
            }
            return this.isPasswordField(field);
        };
        /**
         * Validates the provided field as a current password field for an update password form.
         *
         * @param field - The field to validate
         */
        this.isUpdateCurrentPasswordField = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.newPasswordAutoCompleteValue)) {
                return false;
            }
            return (this.isPasswordField(field) &&
                this.keywordsFoundInFieldData(field, this.updatePasswordFieldKeywords));
        };
        /**
         * Validates the provided field as a new password field.
         *
         * @param field - The field to validate
         */
        this.isNewPasswordField = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.currentPasswordAutocompleteValue)) {
                return false;
            }
            return (this.isPasswordField(field) &&
                this.keywordsFoundInFieldData(field, this.accountCreationFieldKeywords));
        };
        /**
         * Validates the provided field as a password field.
         *
         * @param field - The field to validate
         */
        this.isPasswordField = (field) => {
            const isInputPasswordType = field.type === "password";
            if ((!isInputPasswordType &&
                this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet)) ||
                this.fieldHasDisqualifyingAttributeValue(field) ||
                this.isTotpField(field)) {
                return false;
            }
            return isInputPasswordType || this.isLikePasswordField(field);
        };
        /**
         * Validates whether the provided field is a TOTP field.
         *
         * @param field - The field to validate
         */
        this.isTotpField = (field) => {
            if (this.fieldContainsAutocompleteValues(field, this.totpFieldAutocompleteValue)) {
                return true;
            }
            return (!this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet) &&
                this.keywordsFoundInFieldData(field, _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.TotpFieldNames));
        };
        /**
         * Validates the provided field to indicate if the field is a submit button for a login form.
         *
         * @param element - The element to validate
         */
        this.isElementLoginSubmitButton = (element) => {
            const keywordValues = this.getSubmitButtonKeywords(element);
            return _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.SubmitLoginButtonNames.some((keyword) => keywordValues.indexOf(keyword) > -1);
        };
        /**
         * Validates the provided field to indicate if the field is a submit button for a change password form.
         *
         * @param element - The element to validate
         */
        this.isElementChangePasswordSubmitButton = (element) => {
            const keywordValues = this.getSubmitButtonKeywords(element);
            return _autofill_constants__WEBPACK_IMPORTED_MODULE_1__.SubmitChangePasswordButtonNames.some((keyword) => keywordValues.indexOf(keyword) > -1);
        };
        void Promise.all([
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendExtensionMessage)("getInlineMenuFieldQualificationFeatureFlag"),
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendExtensionMessage)("getUserPremiumStatus"),
        ]).then(([fieldQualificationFlag, premiumStatus]) => {
            this.premiumEnabled = !!(premiumStatus === null || premiumStatus === void 0 ? void 0 : premiumStatus.result);
        });
    }
    /**
     * Validates the provided field as a field for a login form.
     *
     * @param field - The field to validate, should be a username or password field.
     * @param pageDetails - The details of the page that the field is on.
     */
    isFieldForLoginForm(field, pageDetails) {
        /**
         * Totp inline menu is available only for premium users.
         */
        if (this.premiumEnabled) {
            const isTotpField = this.isTotpField(field);
            // Autofill does not fill totp inputs with a "password" `type` attribute value
            const passwordType = field.type === "password";
            if (isTotpField && !passwordType) {
                return true;
            }
        }
        const isCurrentPasswordField = this.isCurrentPasswordField(field);
        if (isCurrentPasswordField) {
            return this.isPasswordFieldForLoginForm(field, pageDetails);
        }
        const isUsernameField = this.isUsernameField(field);
        if (!isUsernameField) {
            return false;
        }
        return this.isUsernameFieldForLoginForm(field, pageDetails);
    }
    /**
     * Validates the provided field as a field for a credit card form.
     *
     * @param field - The field to validate
     * @param pageDetails - The details of the page that the field is on.
     */
    isFieldForCreditCardForm(field, pageDetails) {
        // If the field contains any of the standardized autocomplete attribute values
        // for credit card fields, we should assume that the field is part of a credit card form.
        if (this.fieldContainsAutocompleteValues(field, this.creditCardAutocompleteValues)) {
            return true;
        }
        const parentForm = pageDetails.forms[field.form];
        // If the field does not have a parent form
        if (!parentForm) {
            // If a credit card number field is not present on the page or there are multiple credit
            // card number fields, this field is not part of a credit card form.
            const numberFieldsInPageDetails = pageDetails.fields.filter(this.isFieldForCardNumber);
            if (numberFieldsInPageDetails.length !== 1) {
                return false;
            }
            // If a credit card CVV field is not present on the page or there are multiple credit card
            // CVV fields, this field is not part of a credit card form.
            const cvvFieldsInPageDetails = pageDetails.fields.filter(this.isFieldForCardCvv);
            if (cvvFieldsInPageDetails.length !== 1) {
                return false;
            }
            return this.keywordsFoundInFieldData(field, this.creditCardFieldKeywords);
        }
        // If the field has a parent form, check the fields from that form exclusively
        const fieldsFromSameForm = pageDetails.fields.filter((f) => f.form === field.form);
        // If a credit card number field is not present on the page or there are multiple credit
        // card number fields, this field is not part of a credit card form.
        const numberFieldsInPageDetails = fieldsFromSameForm.filter(this.isFieldForCardNumber);
        if (numberFieldsInPageDetails.length !== 1) {
            return false;
        }
        // If a credit card CVV field is not present on the page or there are multiple credit card
        // CVV fields, this field is not part of a credit card form.
        const cvvFieldsInPageDetails = fieldsFromSameForm.filter(this.isFieldForCardCvv);
        if (cvvFieldsInPageDetails.length !== 1) {
            return false;
        }
        return this.keywordsFoundInFieldData(field, [...this.creditCardFieldKeywords]);
    }
    /** Validates the provided field as a field for an account creation form.
     *
     * @param field - The field to validate
     * @param pageDetails - The details of the page that the field is on.
     */
    isFieldForAccountCreationForm(field, pageDetails) {
        if (this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet) ||
            this.isTotpField(field)) {
            return false;
        }
        if (!this.isUsernameField(field) && !this.isPasswordField(field)) {
            return false;
        }
        const parentForm = pageDetails.forms[field.form];
        if (!parentForm) {
            // If the field does not have a parent form, but we can identify that the page contains at least
            // one new password field, we should assume that the field is part of an account creation form.
            const newPasswordFields = pageDetails.fields.filter(this.isNewPasswordField);
            if (newPasswordFields.length >= 1) {
                return true;
            }
            // If no password fields are found on the page, check for keywords that indicate the field is
            // part of an account creation form.
            return this.keywordsFoundInFieldData(field, this.accountCreationFieldKeywords);
        }
        // If the field has a parent form, check the fields from that form exclusively
        const fieldsFromSameForm = pageDetails.fields.filter((f) => f.form === field.form);
        const newPasswordFields = fieldsFromSameForm.filter(this.isNewPasswordField);
        if (newPasswordFields.length >= 1) {
            return true;
        }
        return this.keywordsFoundInFieldData(field, this.accountCreationFieldKeywords);
    }
    /**
     * Validates the provided field as a field for an identity form.
     *
     * @param field - The field to validate
     * @param _pageDetails - Currently unused, will likely be required in the future
     */
    isFieldForIdentityForm(field, _pageDetails) {
        if (this.isExcludedFieldType(field, this.excludedAutofillFieldTypesSet)) {
            return false;
        }
        return this.fieldContainsAutocompleteValues(field, this.identityAutocompleteValues);
    }
    /**
     * Validates the provided field as a password field for a login form.
     *
     * @param field - The field to validate
     * @param pageDetails - The details of the page that the field is on.
     */
    isPasswordFieldForLoginForm(field, pageDetails) {
        const parentForm = pageDetails.forms[field.form];
        // If the provided field is set with an autocomplete value of "current-password", we should assume that
        // the page developer intends for this field to be interpreted as a password field for a login form.
        if (this.fieldContainsAutocompleteValues(field, this.currentPasswordAutocompleteValue)) {
            if (!parentForm) {
                return (pageDetails.fields.filter(this.isNewPasswordField).filter((f) => f.viewable).length === 0);
            }
            return (pageDetails.fields
                .filter(this.isNewPasswordField)
                .filter((f) => f.viewable && f.form === field.form).length === 0);
        }
        const usernameFieldsInPageDetails = pageDetails.fields.filter(this.isUsernameField);
        const passwordFieldsInPageDetails = pageDetails.fields.filter(this.isCurrentPasswordField);
        // If a single username and a single password field exists on the page, we
        // should assume that this field is part of a login form.
        if (usernameFieldsInPageDetails.length === 1 && passwordFieldsInPageDetails.length === 1) {
            return true;
        }
        // If the field is not structured within a form, we need to identify if the field is present on
        // a page with multiple password fields. If that isn't the case, we can assume this is a login form field.
        if (!parentForm) {
            // If no parent form is found, and multiple password fields are present, we should assume that
            // the passed field belongs to a user account creation form.
            if (passwordFieldsInPageDetails.length > 1) {
                return false;
            }
            // If multiple username fields exist on the page, we should assume that
            // the provided field is part of an account creation form.
            const visibleUsernameFields = usernameFieldsInPageDetails.filter((f) => f.viewable);
            if (visibleUsernameFields.length > 1) {
                return false;
            }
            // If a single username field or less is present on the page, then we can assume that the
            // provided field is for a login form. This will only be the case if the field does not
            // explicitly have its autocomplete attribute set to "off" or "false".
            return !this.fieldContainsAutocompleteValues(field, this.autocompleteDisabledValues);
        }
        // If the field has a form parent and there are multiple visible password fields
        // in the form, this is not a login form field
        const visiblePasswordFieldsInPageDetails = passwordFieldsInPageDetails.filter((f) => f.form === field.form && f.viewable);
        if (visiblePasswordFieldsInPageDetails.length > 1) {
            return false;
        }
        // If the form has any visible username fields, we should treat the field as part of a login form
        const visibleUsernameFields = usernameFieldsInPageDetails.filter((f) => f.form === field.form && f.viewable);
        if (visibleUsernameFields.length > 0) {
            return true;
        }
        // If the field has a form parent and no username field exists and the field has an
        // autocomplete attribute set to "off" or "false", this is not a password field
        return !this.fieldContainsAutocompleteValues(field, this.autocompleteDisabledValues);
    }
    /**
     * Validates the provided field as a username field for a login form.
     *
     * @param field - The field to validate
     * @param pageDetails - The details of the page that the field is on.
     */
    isUsernameFieldForLoginForm(field, pageDetails) {
        // If the provided field is set with an autocomplete of "username", we should assume that
        // the page developer intends for this field to be interpreted as a username field.
        if (this.fieldContainsAutocompleteValues(field, this.loginUsernameAutocompleteValues)) {
            const newPasswordFieldsInPageDetails = pageDetails.fields.filter((field) => field.viewable && this.isNewPasswordField(field));
            return newPasswordFieldsInPageDetails.length === 0;
        }
        // If any keywords in the field's data indicates that this is a field for a "new" or "changed"
        // username, we should assume that this field is not for a login form.
        if (this.keywordsFoundInFieldData(field, this.accountCreationFieldKeywords)) {
            return false;
        }
        // If the field is not explicitly set as a username field, we need to qualify
        // the field based on the other fields that are present on the page.
        const parentForm = pageDetails.forms[field.form];
        const passwordFieldsInPageDetails = pageDetails.fields.filter(this.isCurrentPasswordField);
        // If the field is not structured within a form, we need to identify if the field is used in conjunction
        // with a password field. If that's the case, then we should assume that it is a form field element.
        if (!parentForm) {
            // If a formless field is present in a webpage with a single password field, we
            // should assume that it is part of a login workflow.
            const visiblePasswordFieldsInPageDetails = passwordFieldsInPageDetails.filter((passwordField) => passwordField.viewable);
            if (visiblePasswordFieldsInPageDetails.length === 1) {
                return true;
            }
            // If more than a single password field exists on the page, we should assume that the field
            // is part of an account creation form.
            if (visiblePasswordFieldsInPageDetails.length > 1) {
                return false;
            }
            // If no visible fields are found on the page, but we have a single password
            // field we should assume that the field is part of a login form.
            if (passwordFieldsInPageDetails.length === 1) {
                return true;
            }
            // If the page does not contain any password fields, it might be part of a multistep login form.
            // That will only be the case if the field does not explicitly have its autocomplete attribute
            // set to "off" or "false".
            return !this.fieldContainsAutocompleteValues(field, this.autocompleteDisabledValues);
        }
        // If the field is structured within a form, but no password fields are present in the form,
        // we need to consider whether the field is part of a multistep login form.
        if (passwordFieldsInPageDetails.length === 0) {
            // If the field's autocomplete is set to a disabled value, we should assume that the field is
            // not part of a login form.
            if (this.fieldContainsAutocompleteValues(field, this.autocompleteDisabledValues)) {
                return false;
            }
            // If the form that contains a single field, we should assume that it is part
            // of a multistep login form.
            const fieldsWithinForm = pageDetails.fields.filter((pageDetailsField) => pageDetailsField.form === field.form);
            if (fieldsWithinForm.length === 1) {
                return true;
            }
            // If multiple fields exist within the form, we should check if a single visible field exists.
            // If so, we should assume that the field is part of a login form.
            return fieldsWithinForm.filter((field) => field.viewable).length === 1;
        }
        // If a single password field exists within the page details, and that password field is part of
        // the same form as the provided field, we should assume that the field is part of a login form.
        const visiblePasswordFieldsInPageDetails = passwordFieldsInPageDetails.filter((passwordField) => passwordField.form === field.form && passwordField.viewable);
        if (visiblePasswordFieldsInPageDetails.length === 1) {
            return true;
        }
        // If multiple visible password fields exist within the page details, we need to assume that the
        // provided field is part of an account creation form.
        if (visiblePasswordFieldsInPageDetails.length > 1) {
            return false;
        }
        // If we have a single password field we should assume that the field is part of a login form.
        if (passwordFieldsInPageDetails.length === 1) {
            return true;
        }
        // If no visible password fields are found, this field might be part of a multipart form.
        // Check for an invalid autocompleteType to determine if the field is part of a login form.
        return !this.fieldContainsAutocompleteValues(field, this.autocompleteDisabledValues);
    }
    /**
     * Validates the provided field as a field to indicate if the
     * field potentially acts as a password field.
     *
     * @param field - The field to validate
     */
    isLikePasswordField(field) {
        if (field.type !== "text") {
            return false;
        }
        const testedValues = [field.htmlID, field.htmlName, field.placeholder];
        for (let i = 0; i < testedValues.length; i++) {
            if (this.valueIsLikePassword(testedValues[i])) {
                return true;
            }
        }
        return false;
    }
    /**
     * Validates the provided value to indicate if the value is like a password.
     *
     * @param value - The value to validate
     */
    valueIsLikePassword(value) {
        if (value == null) {
            return false;
        }
        // Removes all whitespace, _ and - characters
        const cleanedValue = value.toLowerCase().replace(/[\s_-]/g, "");
        if (cleanedValue.indexOf("password") < 0) {
            return false;
        }
        return !_autofill_constants__WEBPACK_IMPORTED_MODULE_1__.AutoFillConstants.PasswordFieldExcludeList.some((i) => cleanedValue.indexOf(i) > -1);
    }
    /**
     * Validates the provided field to indicate if the field has a
     * disqualifying attribute that would impede autofill entirely.
     *
     * @param field - The field to validate
     */
    fieldHasDisqualifyingAttributeValue(field) {
        const checkedAttributeValues = [field.htmlID, field.htmlName, field.placeholder];
        for (let i = 0; i < checkedAttributeValues.length; i++) {
            const checkedAttributeValue = checkedAttributeValues[i];
            const cleanedValue = checkedAttributeValue === null || checkedAttributeValue === void 0 ? void 0 : checkedAttributeValue.toLowerCase().replace(/[\s_-]/g, "");
            if (cleanedValue && this.fieldIgnoreListString.indexOf(cleanedValue) > -1) {
                return true;
            }
        }
        return false;
    }
    /**
     * Validates the provided field to indicate if the field is excluded from autofill.
     *
     * @param field - The field to validate
     * @param excludedTypes - The set of excluded types
     */
    isExcludedFieldType(field, excludedTypes) {
        if (excludedTypes.has(field.type)) {
            return true;
        }
        return this.isSearchField(field);
    }
    /**
     * Validates the provided field to indicate if the field is a search field.
     *
     * @param field - The field to validate
     */
    isSearchField(field) {
        const matchFieldAttributeValues = [field.type, field.htmlName, field.htmlID, field.placeholder];
        for (let attrIndex = 0; attrIndex < matchFieldAttributeValues.length; attrIndex++) {
            if (!matchFieldAttributeValues[attrIndex]) {
                continue;
            }
            // Separate camel case words and case them to lower case values
            const camelCaseSeparatedFieldAttribute = matchFieldAttributeValues[attrIndex]
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .toLowerCase();
            // Split the attribute by non-alphabetical characters to get the keywords
            const attributeKeywords = camelCaseSeparatedFieldAttribute.split(/[^a-z]/gi);
            for (let keywordIndex = 0; keywordIndex < attributeKeywords.length; keywordIndex++) {
                if (this.searchFieldNamesSet.has(attributeKeywords[keywordIndex])) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Gather the keywords from the provided element to validate the submit button.
     *
     * @param element - The element to validate
     */
    getSubmitButtonKeywords(element) {
        if (!this.submitButtonKeywordsMap.has(element)) {
            const keywordsSet = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSubmitButtonKeywordsSet)(element);
            this.submitButtonKeywordsMap.set(element, Array.from(keywordsSet).join(","));
        }
        return this.submitButtonKeywordsMap.get(element);
    }
    /**
     * Validates the provided field to indicate if the field has any of the provided keywords.
     *
     * @param autofillFieldData - The field data to search for keywords
     * @param keywords - The keywords to search for
     * @param fuzzyMatchKeywords - Indicates if the keywords should be matched in a fuzzy manner
     */
    keywordsFoundInFieldData(autofillFieldData, keywords, fuzzyMatchKeywords = true) {
        const searchedValues = this.getAutofillFieldDataKeywords(autofillFieldData, fuzzyMatchKeywords);
        const parsedKeywords = keywords.map((keyword) => keyword.replace(/-/g, ""));
        if (typeof searchedValues === "string") {
            return parsedKeywords.some((keyword) => searchedValues.indexOf(keyword) > -1);
        }
        return parsedKeywords.some((keyword) => searchedValues.has(keyword));
    }
    /**
     * Retrieves the keywords from the provided autofill field data.
     *
     * @param autofillFieldData - The field data to search for keywords
     * @param returnStringValue - Indicates if the method should return a string value
     */
    getAutofillFieldDataKeywords(autofillFieldData, returnStringValue) {
        if (!this.autofillFieldKeywordsMap.has(autofillFieldData)) {
            const keywords = [
                autofillFieldData.htmlID,
                autofillFieldData.htmlName,
                autofillFieldData.htmlClass,
                autofillFieldData.type,
                autofillFieldData.title,
                autofillFieldData.placeholder,
                autofillFieldData.autoCompleteType,
                autofillFieldData.dataSetValues,
                autofillFieldData["label-data"],
                autofillFieldData["label-aria"],
                autofillFieldData["label-left"],
                autofillFieldData["label-right"],
                autofillFieldData["label-tag"],
                autofillFieldData["label-top"],
            ];
            const keywordsSet = new Set();
            for (let i = 0; i < keywords.length; i++) {
                if (keywords[i] && typeof keywords[i] === "string") {
                    let keywordEl = keywords[i].toLowerCase();
                    keywordsSet.add(keywordEl);
                    // Remove hyphens from all potential keywords, we want to treat these as a single word.
                    keywordEl = keywordEl.replace(/-/g, "");
                    // Split the keyword by non-alphanumeric characters to get the keywords without treating a space as a separator.
                    keywordEl.split(/[^\p{L}\d]+/gu).forEach((keyword) => {
                        if (keyword) {
                            keywordsSet.add(keyword);
                        }
                    });
                    // Collapse all spaces and split by non-alphanumeric characters to get the keywords
                    keywordEl
                        .replace(/\s/g, "")
                        .split(/[^\p{L}\d]+/gu)
                        .forEach((keyword) => {
                        if (keyword) {
                            keywordsSet.add(keyword);
                        }
                    });
                }
            }
            const stringValue = Array.from(keywordsSet).join(",");
            this.autofillFieldKeywordsMap.set(autofillFieldData, { keywordsSet, stringValue });
        }
        const mapValues = this.autofillFieldKeywordsMap.get(autofillFieldData);
        return returnStringValue ? mapValues.stringValue : mapValues.keywordsSet;
    }
    /**
     * Separates the provided field data into space-separated values and checks if any
     * of the values are present in the provided set of autocomplete values.
     *
     * @param autofillFieldData - The field autocomplete value to validate
     * @param compareValues - The set of autocomplete values to check against
     */
    fieldContainsAutocompleteValues(autofillFieldData, compareValues) {
        const fieldAutocompleteValue = autofillFieldData.autoCompleteType;
        if (!fieldAutocompleteValue || typeof fieldAutocompleteValue !== "string") {
            return false;
        }
        const autocompleteValueParts = fieldAutocompleteValue.split(" ");
        if (typeof compareValues === "string") {
            return autocompleteValueParts.indexOf(compareValues) > -1;
        }
        for (let index = 0; index < autocompleteValueParts.length; index++) {
            if (compareValues.has(autocompleteValueParts[index])) {
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "./src/autofill/services/insert-autofill-content.service.ts":
/*!******************************************************************!*\
  !*** ./src/autofill/services/insert-autofill-content.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/autofill/constants */ "../../libs/common/src/autofill/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
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


class InsertAutofillContentService {
    /**
     * InsertAutofillContentService constructor. Instantiates the
     * DomElementVisibilityService and CollectAutofillContentService classes.
     */
    constructor(domElementVisibilityService, collectAutofillContentService) {
        this.domElementVisibilityService = domElementVisibilityService;
        this.collectAutofillContentService = collectAutofillContentService;
        this.autofillInsertActions = {
            fill_by_opid: ({ opid, value }) => this.handleFillFieldByOpidAction(opid, value),
            click_on_opid: ({ opid }) => this.handleClickOnFieldByOpidAction(opid),
            focus_by_opid: ({ opid }) => this.handleFocusOnFieldByOpidAction(opid),
        };
        /**
         * Runs the autofill action based on the action type and the opid.
         * Each action is subsequently delayed by 20 milliseconds.
         * @param {"click_on_opid" | "focus_by_opid" | "fill_by_opid"} action
         * @param {string} opid
         * @param {string} value
         * @param {number} actionIndex
         * @returns {Promise<void>}
         * @private
         */
        this.runFillScriptAction = ([action, opid, value], actionIndex) => {
            if (!opid || !this.autofillInsertActions[action]) {
                return;
            }
            const delayActionsInMilliseconds = 20;
            return new Promise((resolve) => setTimeout(() => {
                this.autofillInsertActions[action]({ opid, value });
                resolve();
            }, delayActionsInMilliseconds * actionIndex));
        };
    }
    /**
     * Handles autofill of the forms on the current page based on the
     * data within the passed fill script object.
     * @param {AutofillScript} fillScript
     * @returns {Promise<void>}
     * @public
     */
    fillForm(fillScript) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!((_a = fillScript.script) === null || _a === void 0 ? void 0 : _a.length) ||
                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.currentlyInSandboxedIframe)() ||
                this.userCancelledInsecureUrlAutofill(fillScript.savedUrls) ||
                this.userCancelledUntrustedIframeAutofill(fillScript)) {
                return;
            }
            const fillActionPromises = fillScript.script.map(this.runFillScriptAction);
            yield Promise.all(fillActionPromises);
        });
    }
    /**
     * Checks if the autofill is occurring on a page that can be considered secure. If the page is not secure,
     * the user is prompted to confirm that they want to autofill on the page.
     * @param {string[] | null} savedUrls
     * @returns {boolean}
     * @private
     */
    userCancelledInsecureUrlAutofill(savedUrls) {
        if (!(savedUrls === null || savedUrls === void 0 ? void 0 : savedUrls.some((url) => url.startsWith(`https://${globalThis.location.hostname}`))) ||
            globalThis.location.protocol !== "http:" ||
            !this.isPasswordFieldWithinDocument()) {
            return false;
        }
        const confirmationWarning = [
            chrome.i18n.getMessage("insecurePageWarning"),
            chrome.i18n.getMessage("insecurePageWarningFillPrompt", [globalThis.location.hostname]),
        ].join("\n\n");
        return !globalThis.confirm(confirmationWarning);
    }
    /**
     * Checks if there is a password field within the current document. Includes
     * password fields that are present within the shadow DOM.
     * @returns {boolean}
     * @private
     */
    isPasswordFieldWithinDocument() {
        return this.collectAutofillContentService.isPasswordFieldWithinDocument();
    }
    /**
     * Checking if the autofill is occurring within an untrusted iframe. If the page is within an untrusted iframe,
     * the user is prompted to confirm that they want to autofill on the page. If the user cancels the autofill,
     * the script will not continue.
     *
     * Note: confirm() is blocked by sandboxed iframes, but we don't want to fill sandboxed iframes anyway.
     * If this occurs, confirm() returns false without displaying the dialog box, and autofill will be aborted.
     * The browser may print a message to the console, but this is not a standard error that we can handle.
     * @param {AutofillScript} fillScript
     * @returns {boolean}
     * @private
     */
    userCancelledUntrustedIframeAutofill(fillScript) {
        if (!fillScript.untrustedIframe) {
            return false;
        }
        const confirmationWarning = [
            chrome.i18n.getMessage("autofillIframeWarning"),
            chrome.i18n.getMessage("autofillIframeWarningTip", [globalThis.location.hostname]),
        ].join("\n\n");
        return !globalThis.confirm(confirmationWarning);
    }
    /**
     * Queries the DOM for an element by opid and inserts the passed value into the element.
     * @param {string} opid
     * @param {string} value
     * @private
     */
    handleFillFieldByOpidAction(opid, value) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        this.insertValueIntoField(element, value);
    }
    /**
     * Handles finding an element by opid and triggering a click event on the element.
     * @param {string} opid
     * @private
     */
    handleClickOnFieldByOpidAction(opid) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        this.triggerClickOnElement(element);
    }
    /**
     * Handles finding an element by opid and triggering click and focus events on the element.
     * To ensure that we trigger a blur event correctly on a filled field, we first check if the
     * element is already focused. If it is, we blur the element before focusing on it again.
     *
     * @param {string} opid - The opid of the element to focus on.
     */
    handleFocusOnFieldByOpidAction(opid) {
        const element = this.collectAutofillContentService.getAutofillFieldElementByOpid(opid);
        if (document.activeElement === element) {
            element.blur();
        }
        this.simulateUserMouseClickAndFocusEventInteractions(element, true);
    }
    /**
     * Identifies the type of element passed and inserts the value into the element.
     * Will trigger simulated events on the element to ensure that the element is
     * properly updated.
     * @param {FormFieldElement | null} element
     * @param {string} value
     * @private
     */
    insertValueIntoField(element, value) {
        const elementCanBeReadonly = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsInputElement)(element) || (0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsTextAreaElement)(element);
        const elementCanBeFilled = elementCanBeReadonly || (0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsSelectElement)(element);
        if (!element ||
            !value ||
            (elementCanBeReadonly && element.readOnly) ||
            (elementCanBeFilled && element.disabled)) {
            return;
        }
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsFillableFormField)(element)) {
            this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.innerText = value));
            return;
        }
        const isFillableCheckboxOrRadioElement = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsInputElement)(element) &&
            new Set(["checkbox", "radio"]).has(element.type) &&
            new Set(["true", "y", "1", "yes", "✓"]).has(String(value).toLowerCase());
        if (isFillableCheckboxOrRadioElement) {
            this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.checked = true));
            return;
        }
        this.handleInsertValueAndTriggerSimulatedEvents(element, () => (element.value = value));
    }
    /**
     * Simulates pre- and post-insert events on the element meant to mimic user interactions
     * while inserting the autofill value into the element.
     * @param {FormFieldElement} element
     * @param {Function} valueChangeCallback
     * @private
     */
    handleInsertValueAndTriggerSimulatedEvents(element, valueChangeCallback) {
        this.triggerPreInsertEventsOnElement(element);
        valueChangeCallback();
        this.triggerPostInsertEventsOnElement(element);
        this.triggerFillAnimationOnElement(element);
    }
    /**
     * Simulates a mouse click event on the element, including focusing the event, and
     * the triggers a simulated keyboard event on the element. Will attempt to ensure
     * that the initial element value is not arbitrarily changed by the simulated events.
     * @param {FormFieldElement} element
     * @private
     */
    triggerPreInsertEventsOnElement(element) {
        const initialElementValue = "value" in element ? element.value : "";
        this.simulateUserMouseClickAndFocusEventInteractions(element);
        this.simulateUserKeyboardEventInteractions(element);
        if ("value" in element && initialElementValue !== element.value) {
            element.value = initialElementValue;
        }
    }
    /**
     * Simulates a keyboard event on the element before assigning the autofilled value to the element, and then
     * simulates an input change event on the element to trigger expected events after autofill occurs.
     * @param {FormFieldElement} element
     * @private
     */
    triggerPostInsertEventsOnElement(element) {
        const autofilledValue = "value" in element ? element.value : "";
        this.simulateUserKeyboardEventInteractions(element);
        if ("value" in element && autofilledValue !== element.value) {
            element.value = autofilledValue;
        }
        this.simulateInputElementChangedEvent(element);
    }
    /**
     * Identifies if a passed element can be animated and sets a class on the element
     * to trigger a CSS animation. The animation is removed after a short delay.
     * @param {FormFieldElement} element
     * @private
     */
    triggerFillAnimationOnElement(element) {
        const skipAnimatingElement = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.elementIsFillableFormField)(element) &&
            !new Set(["email", "text", "password", "number", "tel", "url"]).has(element === null || element === void 0 ? void 0 : element.type);
        if (this.domElementVisibilityService.isElementHiddenByCss(element) || skipAnimatingElement) {
            return;
        }
        element.classList.add("com-bitwarden-browser-animated-fill");
        setTimeout(() => element.classList.remove("com-bitwarden-browser-animated-fill"), 200);
    }
    /**
     * Simulates a click  event on the element.
     * @param {HTMLElement} element
     * @private
     */
    triggerClickOnElement(element) {
        if (typeof (element === null || element === void 0 ? void 0 : element.click) !== _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.TYPE_CHECK.FUNCTION) {
            return;
        }
        element.click();
    }
    /**
     * Simulates a focus event on the element. Will optionally reset the value of the element
     * if the element has a value property.
     * @param {HTMLElement | undefined} element
     * @param {boolean} shouldResetValue
     * @private
     */
    triggerFocusOnElement(element, shouldResetValue = false) {
        if (typeof (element === null || element === void 0 ? void 0 : element.focus) !== _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.TYPE_CHECK.FUNCTION) {
            return;
        }
        let initialValue = "";
        if (shouldResetValue && "value" in element) {
            initialValue = String(element.value);
        }
        element.focus();
        if (initialValue && "value" in element) {
            element.value = initialValue;
        }
    }
    /**
     * Simulates a mouse click and focus event on the element.
     * @param {FormFieldElement} element
     * @param {boolean} shouldResetValue
     * @private
     */
    simulateUserMouseClickAndFocusEventInteractions(element, shouldResetValue = false) {
        this.triggerClickOnElement(element);
        this.triggerFocusOnElement(element, shouldResetValue);
    }
    /**
     * Simulates several keyboard events on the element, mocking a user interaction with the element.
     * @param {FormFieldElement} element
     * @private
     */
    simulateUserKeyboardEventInteractions(element) {
        const simulatedKeyboardEvents = [_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.KEYDOWN, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.KEYPRESS, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.KEYUP];
        for (let index = 0; index < simulatedKeyboardEvents.length; index++) {
            element.dispatchEvent(new KeyboardEvent(simulatedKeyboardEvents[index], { bubbles: true }));
        }
    }
    /**
     * Simulates an input change event on the element, mocking behavior that would occur if a user
     * manually changed a value for the element.
     * @param {FormFieldElement} element
     * @private
     */
    simulateInputElementChangedEvent(element) {
        const simulatedInputEvents = [_bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.INPUT, _bitwarden_common_autofill_constants__WEBPACK_IMPORTED_MODULE_0__.EVENTS.CHANGE];
        for (let index = 0; index < simulatedInputEvents.length; index++) {
            element.dispatchEvent(new Event(simulatedInputEvents[index], { bubbles: true }));
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (InsertAutofillContentService);


/***/ }),

/***/ "./src/autofill/utils/index.ts":
/*!*************************************!*\
  !*** ./src/autofill/utils/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areKeyValuesNull: function() { return /* binding */ areKeyValuesNull; },
/* harmony export */   buildSvgDomElement: function() { return /* binding */ buildSvgDomElement; },
/* harmony export */   cancelIdleCallbackPolyfill: function() { return /* binding */ cancelIdleCallbackPolyfill; },
/* harmony export */   currentlyInSandboxedIframe: function() { return /* binding */ currentlyInSandboxedIframe; },
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   elementIsDescriptionDetailsElement: function() { return /* binding */ elementIsDescriptionDetailsElement; },
/* harmony export */   elementIsDescriptionTermElement: function() { return /* binding */ elementIsDescriptionTermElement; },
/* harmony export */   elementIsFillableFormField: function() { return /* binding */ elementIsFillableFormField; },
/* harmony export */   elementIsFormElement: function() { return /* binding */ elementIsFormElement; },
/* harmony export */   elementIsInputElement: function() { return /* binding */ elementIsInputElement; },
/* harmony export */   elementIsInstanceOf: function() { return /* binding */ elementIsInstanceOf; },
/* harmony export */   elementIsLabelElement: function() { return /* binding */ elementIsLabelElement; },
/* harmony export */   elementIsSelectElement: function() { return /* binding */ elementIsSelectElement; },
/* harmony export */   elementIsSpanElement: function() { return /* binding */ elementIsSpanElement; },
/* harmony export */   elementIsTextAreaElement: function() { return /* binding */ elementIsTextAreaElement; },
/* harmony export */   generateDomainMatchPatterns: function() { return /* binding */ generateDomainMatchPatterns; },
/* harmony export */   generateRandomChars: function() { return /* binding */ generateRandomChars; },
/* harmony export */   generateRandomCustomElementName: function() { return /* binding */ generateRandomCustomElementName; },
/* harmony export */   getAttributeBoolean: function() { return /* binding */ getAttributeBoolean; },
/* harmony export */   getPropertyOrAttribute: function() { return /* binding */ getPropertyOrAttribute; },
/* harmony export */   getSubmitButtonKeywordsSet: function() { return /* binding */ getSubmitButtonKeywordsSet; },
/* harmony export */   isInvalidResponseStatusCode: function() { return /* binding */ isInvalidResponseStatusCode; },
/* harmony export */   matchAllowedColorSchemes: function() { return /* binding */ matchAllowedColorSchemes; },
/* harmony export */   nodeIsAnchorElement: function() { return /* binding */ nodeIsAnchorElement; },
/* harmony export */   nodeIsButtonElement: function() { return /* binding */ nodeIsButtonElement; },
/* harmony export */   nodeIsElement: function() { return /* binding */ nodeIsElement; },
/* harmony export */   nodeIsFormElement: function() { return /* binding */ nodeIsFormElement; },
/* harmony export */   nodeIsInputElement: function() { return /* binding */ nodeIsInputElement; },
/* harmony export */   nodeIsTypeSubmitElement: function() { return /* binding */ nodeIsTypeSubmitElement; },
/* harmony export */   rectHasSize: function() { return /* binding */ rectHasSize; },
/* harmony export */   requestIdleCallbackPolyfill: function() { return /* binding */ requestIdleCallbackPolyfill; },
/* harmony export */   sendExtensionMessage: function() { return /* binding */ sendExtensionMessage; },
/* harmony export */   setElementStyles: function() { return /* binding */ setElementStyles; },
/* harmony export */   setupAutofillInitDisconnectAction: function() { return /* binding */ setupAutofillInitDisconnectAction; },
/* harmony export */   setupExtensionDisconnectAction: function() { return /* binding */ setupExtensionDisconnectAction; },
/* harmony export */   specialCharacterToKeyMap: function() { return /* binding */ specialCharacterToKeyMap; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
/* harmony import */ var _enums_autofill_port_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/autofill-port.enum */ "./src/autofill/enums/autofill-port.enum.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Generates a random string of characters.
 *
 * @param length - The length of the random string to generate.
 */
function generateRandomChars(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const randomChars = [];
    const randomBytes = new Uint8Array(length);
    globalThis.crypto.getRandomValues(randomBytes);
    for (let byteIndex = 0; byteIndex < randomBytes.length; byteIndex++) {
        const byte = randomBytes[byteIndex];
        randomChars.push(chars[byte % chars.length]);
    }
    return randomChars.join("");
}
/**
 * Polyfills the requestIdleCallback API with a setTimeout fallback.
 *
 * @param callback - The callback function to run when the browser is idle.
 * @param options - The options to pass to the requestIdleCallback function.
 */
function requestIdleCallbackPolyfill(callback, options) {
    if ("requestIdleCallback" in globalThis) {
        return globalThis.requestIdleCallback(() => callback(), options);
    }
    const timeoutDelay = (options === null || options === void 0 ? void 0 : options.timeout) || 1;
    return globalThis.setTimeout(() => callback(), timeoutDelay);
}
/**
 * Polyfills the cancelIdleCallback API with a clearTimeout fallback.
 *
 * @param id - The ID of the idle callback to cancel.
 */
function cancelIdleCallbackPolyfill(id) {
    if ("cancelIdleCallback" in globalThis) {
        return globalThis.cancelIdleCallback(id);
    }
    return globalThis.clearTimeout(id);
}
/**
 * Generates a random string of characters that formatted as a custom element name.
 */
function generateRandomCustomElementName() {
    const length = Math.floor(Math.random() * 5) + 8; // Between 8 and 12 characters
    const numHyphens = Math.min(Math.max(Math.floor(Math.random() * 4), 1), length - 1); // At least 1, maximum of 3 hyphens
    const hyphenIndices = [];
    while (hyphenIndices.length < numHyphens) {
        const index = Math.floor(Math.random() * (length - 1)) + 1;
        if (!hyphenIndices.includes(index)) {
            hyphenIndices.push(index);
        }
    }
    hyphenIndices.sort((a, b) => a - b);
    let randomString = "";
    let prevIndex = 0;
    for (let index = 0; index < hyphenIndices.length; index++) {
        const hyphenIndex = hyphenIndices[index];
        randomString = randomString + generateRandomChars(hyphenIndex - prevIndex) + "-";
        prevIndex = hyphenIndex;
    }
    randomString += generateRandomChars(length - prevIndex);
    return randomString;
}
/**
 * Builds a DOM element from an SVG string.
 *
 * @param svgString - The SVG string to build the DOM element from.
 * @param ariaHidden - Determines whether the SVG should be hidden from screen readers.
 */
function buildSvgDomElement(svgString, ariaHidden = true) {
    const domParser = new DOMParser();
    const svgDom = domParser.parseFromString(svgString, "image/svg+xml");
    const domElement = svgDom.documentElement;
    domElement.setAttribute("aria-hidden", `${ariaHidden}`);
    return domElement;
}
/**
 * Sends a message to the extension.
 *
 * @param command - The command to send.
 * @param options - The options to send with the command.
 */
function sendExtensionMessage(command_1) {
    return __awaiter(this, arguments, void 0, function* (command, options = {}) {
        if (typeof browser !== "undefined" &&
            typeof browser.runtime !== "undefined" &&
            typeof browser.runtime.sendMessage !== "undefined") {
            return browser.runtime.sendMessage(Object.assign({ command }, options));
        }
        return new Promise((resolve) => chrome.runtime.sendMessage(Object.assign({ command }, options), (response) => {
            if (chrome.runtime.lastError) {
                resolve(null);
            }
            resolve(response);
        }));
    });
}
/**
 * Sets CSS styles on an element.
 *
 * @param element - The element to set the styles on.
 * @param styles - The styles to set on the element.
 * @param priority - Determines whether the styles should be set as important.
 */
function setElementStyles(element, styles, priority) {
    if (!element || !styles || !Object.keys(styles).length) {
        return;
    }
    for (const styleProperty in styles) {
        element.style.setProperty(styleProperty.replace(/([a-z])([A-Z])/g, "$1-$2"), // Convert camelCase to kebab-case
        styles[styleProperty], priority ? "important" : undefined);
    }
}
/**
 * Sets up a long-lived connection with the extension background
 * and triggers an onDisconnect event if the extension context
 * is invalidated.
 *
 * @param callback - Callback export function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: _enums_autofill_port_enum__WEBPACK_IMPORTED_MODULE_0__.AutofillPort.InjectedScript });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}
/**
 * Handles setup of the extension disconnect action for the autofill init class
 * in both instances where the overlay might or might not be initialized.
 *
 * @param windowContext - The global window context
 */
function setupAutofillInitDisconnectAction(windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        return;
    }
    const onDisconnectCallback = () => {
        windowContext.bitwardenAutofillInit.destroy();
        delete windowContext.bitwardenAutofillInit;
    };
    setupExtensionDisconnectAction(onDisconnectCallback);
}
/**
 * Identifies whether an element is a fillable form field.
 * This is determined by whether the element is a form field and not a span.
 *
 * @param formFieldElement - The form field element to check.
 */
function elementIsFillableFormField(formFieldElement) {
    return !elementIsSpanElement(formFieldElement);
}
/**
 * Identifies whether an element is an instance of a specific tag name.
 *
 * @param element - The element to check.
 * @param tagName -  The tag name to check against.
 */
function elementIsInstanceOf(element, tagName) {
    return nodeIsElement(element) && element.tagName.toLowerCase() === tagName;
}
/**
 * Identifies whether an element is a span element.
 *
 * @param element - The element to check.
 */
function elementIsSpanElement(element) {
    return elementIsInstanceOf(element, "span");
}
/**
 * Identifies whether an element is an input field.
 *
 * @param element - The element to check.
 */
function elementIsInputElement(element) {
    return elementIsInstanceOf(element, "input");
}
/**
 * Identifies whether an element is a select field.
 *
 * @param element - The element to check.
 */
function elementIsSelectElement(element) {
    return elementIsInstanceOf(element, "select");
}
/**
 * Identifies whether an element is a textarea field.
 *
 * @param element - The element to check.
 */
function elementIsTextAreaElement(element) {
    return elementIsInstanceOf(element, "textarea");
}
/**
 * Identifies whether an element is a form element.
 *
 * @param element - The element to check.
 */
function elementIsFormElement(element) {
    return elementIsInstanceOf(element, "form");
}
/**
 * Identifies whether an element is a label element.
 *
 * @param element - The element to check.
 */
function elementIsLabelElement(element) {
    return elementIsInstanceOf(element, "label");
}
/**
 * Identifies whether an element is a description details `dd` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionDetailsElement(element) {
    return elementIsInstanceOf(element, "dd");
}
/**
 * Identifies whether an element is a description term `dt` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionTermElement(element) {
    return elementIsInstanceOf(element, "dt");
}
/**
 * Identifies whether a node is an HTML element.
 *
 * @param node - The node to check.
 */
function nodeIsElement(node) {
    if (!node) {
        return false;
    }
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.ELEMENT_NODE;
}
/**
 * Identifies whether a node is an input element.
 *
 * @param node - The node to check.
 */
function nodeIsInputElement(node) {
    return nodeIsElement(node) && elementIsInputElement(node);
}
/**
 * Identifies whether a node is a form element.
 *
 * @param node - The node to check.
 */
function nodeIsFormElement(node) {
    return nodeIsElement(node) && elementIsFormElement(node);
}
function nodeIsTypeSubmitElement(node) {
    return nodeIsElement(node) && getPropertyOrAttribute(node, "type") === "submit";
}
function nodeIsButtonElement(node) {
    return (nodeIsElement(node) &&
        (elementIsInstanceOf(node, "button") ||
            getPropertyOrAttribute(node, "type") === "button"));
}
function nodeIsAnchorElement(node) {
    return nodeIsElement(node) && elementIsInstanceOf(node, "a");
}
/**
 * Returns a boolean representing the attribute value of an element.
 *
 * @param element
 * @param attributeName
 * @param checkString
 */
function getAttributeBoolean(element, attributeName, checkString = false) {
    if (checkString) {
        return getPropertyOrAttribute(element, attributeName) === "true";
    }
    return Boolean(getPropertyOrAttribute(element, attributeName));
}
/**
 * Get the value of a property or attribute from a FormFieldElement.
 *
 * @param element
 * @param attributeName
 */
function getPropertyOrAttribute(element, attributeName) {
    if (attributeName in element) {
        return element[attributeName];
    }
    return element.getAttribute(attributeName);
}
/**
 * Throttles a callback function to run at most once every `limit` milliseconds.
 *
 * @param callback - The callback function to throttle.
 * @param limit - The time in milliseconds to throttle the callback.
 */
function throttle(callback, limit) {
    let waitingDelay = false;
    return function (...args) {
        if (!waitingDelay) {
            callback.apply(this, args);
            waitingDelay = true;
            globalThis.setTimeout(() => (waitingDelay = false), limit);
        }
    };
}
/**
 * Debounces a callback function to run after a delay of `delay` milliseconds.
 *
 * @param callback - The callback function to debounce.
 * @param delay - The time in milliseconds to debounce the callback.
 * @param immediate - Determines whether the callback should run immediately.
 */
function debounce(callback, delay, immediate) {
    let timeout;
    return function (...args) {
        const callImmediately = !!immediate && !timeout;
        if (timeout) {
            globalThis.clearTimeout(timeout);
        }
        timeout = globalThis.setTimeout(() => {
            timeout = null;
            if (!callImmediately) {
                callback.apply(this, args);
            }
        }, delay);
        if (callImmediately) {
            callback.apply(this, args);
        }
    };
}
/**
 * Gathers and normalizes keywords from a potential submit button element. Used
 * to verify if the element submits a login or change password form.
 *
 * @param element - The element to gather keywords from.
 */
function getSubmitButtonKeywordsSet(element) {
    const keywords = [
        element.textContent,
        element.getAttribute("type"),
        element.getAttribute("value"),
        element.getAttribute("aria-label"),
        element.getAttribute("aria-labelledby"),
        element.getAttribute("aria-describedby"),
        element.getAttribute("title"),
        element.getAttribute("id"),
        element.getAttribute("name"),
        element.getAttribute("class"),
    ];
    const keywordsSet = new Set();
    for (let i = 0; i < keywords.length; i++) {
        if (typeof keywords[i] === "string") {
            // Iterate over all keywords metadata and split them by non-letter characters.
            // This ensures we check against individual words and not the entire string.
            keywords[i]
                .toLowerCase()
                .replace(/[-\s]/g, "")
                .split(/[^\p{L}]+/gu)
                .forEach((keyword) => {
                if (keyword) {
                    keywordsSet.add(keyword);
                }
            });
        }
    }
    return keywordsSet;
}
/**
 * Generates the origin and subdomain match patterns for the URL.
 *
 * @param url - The URL of the tab
 */
function generateDomainMatchPatterns(url) {
    try {
        const extensionUrlPattern = /^(chrome|chrome-extension|moz-extension|safari-web-extension):\/\/\/?/;
        if (extensionUrlPattern.test(url)) {
            return [];
        }
        // Add protocol to URL if it is missing to allow for parsing the hostname correctly
        const urlPattern = /^(https?|file):\/\/\/?/;
        if (!urlPattern.test(url)) {
            url = `https://${url}`;
        }
        let protocolGlob = "*://";
        if (url.startsWith("file:///")) {
            protocolGlob = "*:///"; // File URLs require three slashes to be a valid match pattern
        }
        const parsedUrl = new URL(url);
        const originMatchPattern = `${protocolGlob}${parsedUrl.hostname}/*`;
        const splitHost = parsedUrl.hostname.split(".");
        const domain = splitHost.slice(-2).join(".");
        const subDomainMatchPattern = `${protocolGlob}*.${domain}/*`;
        return [originMatchPattern, subDomainMatchPattern];
    }
    catch (_a) {
        return [];
    }
}
/**
 * Determines if the status code of the web response is invalid. An invalid status code is
 * any status code that is not in the 200-299 range.
 *
 * @param statusCode - The status code of the web response
 */
function isInvalidResponseStatusCode(statusCode) {
    return statusCode < 200 || statusCode >= 300;
}
/**
 * Determines if the current context is within a sandboxed iframe.
 */
function currentlyInSandboxedIframe() {
    var _a;
    return (String(self.origin).toLowerCase() === "null" ||
        ((_a = globalThis.frameElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("sandbox")) ||
        globalThis.location.hostname === "");
}
/**
 * This object allows us to map a special character to a key name. The key name is used
 * in gathering the i18n translation of the written version of the special character.
 */
const specialCharacterToKeyMap = {
    " ": "spaceCharacterDescriptor",
    "~": "tildeCharacterDescriptor",
    "`": "backtickCharacterDescriptor",
    "!": "exclamationCharacterDescriptor",
    "@": "atSignCharacterDescriptor",
    "#": "hashSignCharacterDescriptor",
    $: "dollarSignCharacterDescriptor",
    "%": "percentSignCharacterDescriptor",
    "^": "caretCharacterDescriptor",
    "&": "ampersandCharacterDescriptor",
    "*": "asteriskCharacterDescriptor",
    "(": "parenLeftCharacterDescriptor",
    ")": "parenRightCharacterDescriptor",
    "-": "hyphenCharacterDescriptor",
    _: "underscoreCharacterDescriptor",
    "+": "plusCharacterDescriptor",
    "=": "equalsCharacterDescriptor",
    "{": "braceLeftCharacterDescriptor",
    "}": "braceRightCharacterDescriptor",
    "[": "bracketLeftCharacterDescriptor",
    "]": "bracketRightCharacterDescriptor",
    "|": "pipeCharacterDescriptor",
    "\\": "backSlashCharacterDescriptor",
    ":": "colonCharacterDescriptor",
    ";": "semicolonCharacterDescriptor",
    '"': "doubleQuoteCharacterDescriptor",
    "'": "singleQuoteCharacterDescriptor",
    "<": "lessThanCharacterDescriptor",
    ">": "greaterThanCharacterDescriptor",
    ",": "commaCharacterDescriptor",
    ".": "periodCharacterDescriptor",
    "?": "questionCharacterDescriptor",
    "/": "forwardSlashCharacterDescriptor",
};
/**
 * Determines if the current rect values are not all 0.
 */
function rectHasSize(rect) {
    if (rect.right > 0 && rect.left > 0 && rect.top > 0 && rect.bottom > 0) {
        return true;
    }
    return false;
}
/**
 * Checks if all the values corresponding to the specified keys in an object are null.
 * If no keys are specified, checks all keys in the object.
 *
 * @param obj - The object to check.
 * @param keys - An optional array of keys to check in the object. Defaults to all keys.
 * @returns Returns true if all values for the specified keys (or all keys if none are provided) are null; otherwise, false.
 */
function areKeyValuesNull(obj, keys) {
    const keysToCheck = keys && keys.length > 0 ? keys : Object.keys(obj);
    return keysToCheck.every((key) => obj[key] == null);
}
/**
 * Ensures string matches allowed color scheme, defaulting/overriding to "normal".
 * https://drafts.csswg.org/css-color-adjust-1/#color-scheme-meta
 */
function matchAllowedColorSchemes(content) {
    switch (content) {
        case "light dark":
        case "dark light":
        case "light":
        case "dark":
            // content must match one of these types.
            return content;
        default:
            return "normal";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!************************************************************!*\
  !*** ./src/autofill/content/bootstrap-autofill-overlay.ts ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overlay_inline_menu_content_autofill_inline_menu_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../overlay/inline-menu/content/autofill-inline-menu-content.service */ "./src/autofill/overlay/inline-menu/content/autofill-inline-menu-content.service.ts");
/* harmony import */ var _overlay_notifications_content_overlay_notifications_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../overlay/notifications/content/overlay-notifications-content.service */ "./src/autofill/overlay/notifications/content/overlay-notifications-content.service.ts");
/* harmony import */ var _services_autofill_overlay_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/autofill-overlay-content.service */ "./src/autofill/services/autofill-overlay-content.service.ts");
/* harmony import */ var _services_dom_element_visibility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dom-element-visibility.service */ "./src/autofill/services/dom-element-visibility.service.ts");
/* harmony import */ var _services_dom_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dom-query.service */ "./src/autofill/services/dom-query.service.ts");
/* harmony import */ var _services_inline_menu_field_qualification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/inline-menu-field-qualification.service */ "./src/autofill/services/inline-menu-field-qualification.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/autofill/utils/index.ts");
/* harmony import */ var _autofill_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autofill-init */ "./src/autofill/content/autofill-init.ts");
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore








(function (windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        let inlineMenuContentService;
        let overlayNotificationsContentService;
        if (globalThis.self === globalThis.top) {
            inlineMenuContentService = new _overlay_inline_menu_content_autofill_inline_menu_content_service__WEBPACK_IMPORTED_MODULE_0__.AutofillInlineMenuContentService();
            overlayNotificationsContentService = new _overlay_notifications_content_overlay_notifications_content_service__WEBPACK_IMPORTED_MODULE_1__.OverlayNotificationsContentService();
        }
        const domQueryService = new _services_dom_query_service__WEBPACK_IMPORTED_MODULE_4__.DomQueryService();
        const domElementVisibilityService = new _services_dom_element_visibility_service__WEBPACK_IMPORTED_MODULE_3__["default"](inlineMenuContentService);
        const inlineMenuFieldQualificationService = new _services_inline_menu_field_qualification_service__WEBPACK_IMPORTED_MODULE_5__.InlineMenuFieldQualificationService();
        const autofillOverlayContentService = new _services_autofill_overlay_content_service__WEBPACK_IMPORTED_MODULE_2__.AutofillOverlayContentService(domQueryService, domElementVisibilityService, inlineMenuFieldQualificationService, inlineMenuContentService);
        windowContext.bitwardenAutofillInit = new _autofill_init__WEBPACK_IMPORTED_MODULE_7__["default"](domQueryService, domElementVisibilityService, autofillOverlayContentService, inlineMenuContentService, overlayNotificationsContentService);
        (0,_utils__WEBPACK_IMPORTED_MODULE_6__.setupAutofillInitDisconnectAction)(windowContext);
        windowContext.bitwardenAutofillInit.init();
    }
})(window);
// === 华为云MFA弹窗自动检测与直接填充 ===
(function observeAndFillMfaPopup() {
    let lastFilledCode = '';
    const observer = new MutationObserver(() => {
        // 检测所有 type=tel 且有 data-index 的输入框
        const mfaInputs = document.querySelectorAll('input[type="tel"][data-index]');
        if (mfaInputs.length === 6) {
            console.log('[MFA自动填充] 检测到6个MFA输入框，准备请求验证码');
            chrome.runtime.sendMessage({ command: "getTotpCodeForHuawei" }, (response) => {
                if (response && response.totpCode && response.totpCode !== lastFilledCode) {
                    console.log('[MFA自动填充] 获取到验证码:', response.totpCode);
                    for (let i = 0; i < 6; i++) {
                        const input = mfaInputs[i];
                        input.value = response.totpCode[i] || '';
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    lastFilledCode = response.totpCode;
                }
                else {
                    console.log('[MFA自动填充] 未获取到验证码或验证码未变化', response);
                }
            });
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // 页面初次加载时也主动检测一次
    setTimeout(() => {
        const mfaInputs = document.querySelectorAll('input[type="tel"][data-index]');
        if (mfaInputs.length === 6) {
            console.log('[MFA自动填充] 首次加载检测到6个MFA输入框，准备请求验证码');
            chrome.runtime.sendMessage({ command: "getTotpCodeForHuawei" }, (response) => {
                if (response && response.totpCode && response.totpCode !== lastFilledCode) {
                    console.log('[MFA自动填充] 获取到验证码:', response.totpCode);
                    for (let i = 0; i < 6; i++) {
                        const input = mfaInputs[i];
                        input.value = response.totpCode[i] || '';
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                    lastFilledCode = response.totpCode;
                }
                else {
                    console.log('[MFA自动填充] 未获取到验证码或验证码未变化', response);
                }
            });
        }
    }, 500);
})();

}();
/******/ })()
;