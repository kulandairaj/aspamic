/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        if (activeSTT) {
            // do nothing, speech is active
        }
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
                    template: "<a (click)=\"startListening()\" [style.background]=\"'url(' + imageSrc + ')'\" style=\"cursor: pointer;\" title=\"Listen\"> </a>",
                    styles: ["h1{color:#f0f}"]
                }] }
    ];
    MicComponent.propDecorators = {
        apiURL: [{ type: Input }],
        imageSrc: [{ type: Input }],
        micResult: [{ type: Output }]
    };
    return MicComponent;
}());
export { MicComponent };
if (false) {
    /** @type {?} */
    MicComponent.prototype.apiURL;
    /** @type {?} */
    MicComponent.prototype.imageSrc;
    /** @type {?} */
    MicComponent.prototype.micResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FzcGFtaWNsaWIvIiwic291cmNlcyI6WyJtaWMvbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFbkUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQzs7SUFDbkQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEVBQUUsc0JBQXNCO0NBQ3ZDLENBQUM7O0lBQ0UsU0FBUztBQUViO0lBQUE7UUFPVyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBMkNuRSxDQUFDOzs7O0lBekNDLHFDQUFjOzs7SUFBZDtRQUNFLElBQUksU0FBUyxFQUFFO1lBQ2IsK0JBQStCO1NBQ2hDO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDTCxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLFNBQVM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBQ0QsNkJBQU07OztJQUFOOztZQUNNLElBQUksR0FBRyxJQUFJO1FBQ2YsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDeEIsT0FBTzs7O1lBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7WUFDRCxRQUFROzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsZ0VBQWdFO2dCQUNoRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUE7WUFDRCxPQUFPOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7WUFDRCxLQUFLOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsa0lBQTBIOztpQkFFckk7Ozt5QkFHRSxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUEyQ1QsbUJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQS9DWSxZQUFZOzs7SUFFdkIsOEJBQTZCOztJQUM3QixnQ0FBK0I7O0lBQy9CLGlDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnZhciBTcGVlY2ggPSByZXF1aXJlKCd3YXRzb24taHRtbDUtc3BlZWNoLXJlY29nbml0aW9uJyk7XG52YXIgc3BlZWNoID0gbmV3IFNwZWVjaC5TcGVlY2hUb1RleHQoe1xuICB3YXRzb25Ub2tlblVybDogYC9hcGkvc3BlZWNoLXRvLXRleHQvYFxufSk7XG52YXIgYWN0aXZlU1RUO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhc3BhbWljJyxcbiAgdGVtcGxhdGU6IGA8YSAoY2xpY2spPVwic3RhcnRMaXN0ZW5pbmcoKVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIid1cmwoJyArIGltYWdlU3JjICsgJyknXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIgdGl0bGU9XCJMaXN0ZW5cIj4gPC9hPmAsXG4gIHN0eWxlVXJsczogWycuL21pYy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1pY0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgYXBpVVJMOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgaW1hZ2VTcmM6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgbWljUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIGlmIChhY3RpdmVTVFQpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmcsIHNwZWVjaCBpcyBhY3RpdmVcbiAgICB9IGVsc2UgaWYgKHNwZWVjaC5pc1N1cHBvcnRlZCkge1xuICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ3NwZWVjaCBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BMaXN0ZW5pbmcoZmluYWxUZXh0KSB7XG4gICAgY29uc29sZS5sb2coJ3N0b3AnKTtcbiAgICBjb25zb2xlLmxvZyhmaW5hbFRleHQpO1xuICAgIGlmIChhY3RpdmVTVFQpIHtcbiAgICAgIGFjdGl2ZVNUVC5zdG9wKCk7XG4gICAgICBhY3RpdmVTVFQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBsaXN0ZW4oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGFjdGl2ZVNUVCA9IHNwZWVjaC5saXN0ZW4oe1xuICAgICAgb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBvblJlc3VsdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50ZXh0KTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNvZ25pemVkVGV4dFwiKS5pbm5lckhUTUwgPSBlLnRleHQ7XG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICB0aGF0Lm1pY1Jlc3VsdC5lbWl0KGUudGV4dCk7XG4gICAgICAgICAgdGhhdC5zdG9wTGlzdGVuaW5nKGUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlKTtcbiAgICAgIH0sXG4gICAgICBvbkVuZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZCcsIGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==