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
    watsonTokenUrl: "/api/speech-to-text/"
});
/** @type {?} */
var activeSTT;
var MicComponent = /** @class */ (function () {
    function MicComponent() {
        this.apiURL = '';
        this.imageSrc = '';
        this.micResult = new EventEmitter();
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
    };
    MicComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aspamic',
                    template: "<a (click)=\"startListening()\" class=\"micSize\" [style.background]=\"'url(' + imageSrc + ')'\" style=\"cursor: pointer;\" title=\"Listen\"> </a>",
                    styles: ["h1{color:#f0f}.micSize{width:30px;height:30px;display:flex}"]
                }] }
    ];
    MicComponent.propDecorators = {
        apiURL: [{ type: Input }],
        imageSrc: [{ type: Input }],
        micResult: [{ type: Output }]
    };
    return MicComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { BarService } from './bar/bar.service';
var AspaMicModule = /** @class */ (function () {
    function AspaMicModule() {
    }
    /**
     * @return {?}
     */
    AspaMicModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AspaMicModule,
            providers: [
            // BarService
            ]
        };
    };
    AspaMicModule.decorators = [
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
    return AspaMicModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MicComponent, AspaMicModule };

//# sourceMappingURL=aspamiclib.js.map