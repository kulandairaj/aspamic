import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Speech = require('watson-html5-speech-recognition');
/** @type {?} */
var speech = new Speech.SpeechToText({
    watsonTokenUrl: "/api/speech-to-text/"
});
/** @type {?} */
var activeSTT;
var MicComponent = /** @class */ (function () {
    function MicComponent() {
    }
    /**
     * @return {?}
     */
    MicComponent.prototype.startListening = /**
     * @return {?}
     */
    function () {
        if (activeSTT) ;
        else if (speech.isSupported) {
            this.listen();
        }
        else {
            alert('speech not supported by this browser');
        }
    };
    /**
     * @param {?} finalText
     * @return {?}
     */
    MicComponent.prototype.stopListening = /**
     * @param {?} finalText
     * @return {?}
     */
    function (finalText) {
        console.log('stop');
        console.log(finalText);
        if (activeSTT) {
            activeSTT.stop();
            activeSTT = null;
        }
    };
    /**
     * @return {?}
     */
    MicComponent.prototype.listen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        activeSTT = speech.listen({
            onStart: (/**
             * @return {?}
             */
            function () {
                console.log('starting');
            }),
            onResult: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                console.log(e.text);
                // document.getElementById("recognizedText").innerHTML = e.text;
                if (e.isFinal) {
                    that.stopListening(e.text);
                }
            }),
            onError: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                console.log('error', e);
            }),
            onEnd: (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                console.log('end', e);
            })
        });
    };
    MicComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aspamic',
                    template: '<button  (click)="startListening()">Mic</button>',
                    styles: ["h1{color:#f0f}"]
                }] }
    ];
    return MicComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { BarService } from './bar/bar.service';
var MyMicModule = /** @class */ (function () {
    function MyMicModule() {
    }
    /**
     * @return {?}
     */
    MyMicModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MyMicModule,
            providers: [
            // BarService
            ]
        };
    };
    MyMicModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        MicComponent
                    ],
                    exports: [
                        MicComponent
                    ]
                },] }
    ];
    return MyMicModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MicComponent, MyMicModule };

//# sourceMappingURL=aspamiclib.js.map