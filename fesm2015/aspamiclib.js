import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Speech = require('watson-html5-speech-recognition');
/** @type {?} */
var speech = new Speech.SpeechToText({
    watsonTokenUrl: `/api/speech-to-text/`
});
/** @type {?} */
var activeSTT;
class MicComponent {
    constructor() {
        this.apiURL = '';
        this.imageSrc = '';
        this.micResult = new EventEmitter();
    }
    /**
     * @return {?}
     */
    startListening() {
        if (activeSTT) ;
        else if (speech.isSupported) {
            this.listen();
        }
        else {
            alert('speech not supported by this browser');
        }
    }
    /**
     * @param {?} finalText
     * @return {?}
     */
    stopListening(finalText) {
        console.log('stop');
        console.log(finalText);
        if (activeSTT) {
            activeSTT.stop();
            activeSTT = null;
        }
    }
    /**
     * @return {?}
     */
    listen() {
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
                    that.micResult.emit(e.text);
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
    }
}
MicComponent.decorators = [
    { type: Component, args: [{
                selector: 'aspamic',
                template: `<button  (click)="startListening()" [style.background]="'url(' + imageSrc + ')'">Mic</button>`,
                styles: ["h1{color:#f0f}"]
            }] }
];
MicComponent.propDecorators = {
    apiURL: [{ type: Input }],
    imageSrc: [{ type: Input }],
    micResult: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { BarService } from './bar/bar.service';
class MyMicModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MyMicModule,
            providers: [
            // BarService
            ]
        };
    }
}
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