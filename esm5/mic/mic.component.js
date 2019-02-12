/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
export { MicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FzcGFtaWNsaWIvIiwic291cmNlcyI6WyJtaWMvbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFdEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQzs7SUFDbkQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEVBQUUsc0JBQXNCO0NBQ3ZDLENBQUM7O0lBQ0UsU0FBUztBQUViO0lBQUE7SUErQ0EsQ0FBQzs7OztJQXhDQyxxQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLFNBQVMsRUFBRTtZQUNiLCtCQUErQjtTQUNoQzthQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0wsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7OztJQUVELG9DQUFhOzs7O0lBQWIsVUFBYyxTQUFTO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUNELDZCQUFNOzs7SUFBTjs7WUFDTSxJQUFJLEdBQUcsSUFBSTtRQUNmLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3hCLE9BQU87OztZQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFBO1lBQ0QsUUFBUTs7OztZQUFFLFVBQVUsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLGdFQUFnRTtnQkFDaEUsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQTtZQUNELE9BQU87Ozs7WUFBRSxVQUFVLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQTtZQUNELEtBQUs7Ozs7WUFBRSxVQUFVLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxrREFBa0Q7O2lCQUU3RDs7SUEyQ0QsbUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTFDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnZhciBTcGVlY2ggPSByZXF1aXJlKCd3YXRzb24taHRtbDUtc3BlZWNoLXJlY29nbml0aW9uJyk7XG52YXIgc3BlZWNoID0gbmV3IFNwZWVjaC5TcGVlY2hUb1RleHQoe1xuICB3YXRzb25Ub2tlblVybDogYC9hcGkvc3BlZWNoLXRvLXRleHQvYFxufSk7XG52YXIgYWN0aXZlU1RUO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhc3BhbWljJyxcbiAgdGVtcGxhdGU6ICc8YnV0dG9uICAoY2xpY2spPVwic3RhcnRMaXN0ZW5pbmcoKVwiPk1pYzwvYnV0dG9uPicsXG4gIHN0eWxlVXJsczogWycuL21pYy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1pY0NvbXBvbmVudCB7XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKGFjdGl2ZVNUVCkge1xuICAgICAgLy8gZG8gbm90aGluZywgc3BlZWNoIGlzIGFjdGl2ZVxuICAgIH0gZWxzZSBpZiAoc3BlZWNoLmlzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLmxpc3RlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnc3BlZWNoIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICB9XG5cbiAgc3RvcExpc3RlbmluZyhmaW5hbFRleHQpIHtcbiAgICBjb25zb2xlLmxvZygnc3RvcCcpO1xuICAgIGNvbnNvbGUubG9nKGZpbmFsVGV4dCk7XG4gICAgaWYgKGFjdGl2ZVNUVCkge1xuICAgICAgYWN0aXZlU1RULnN0b3AoKTtcbiAgICAgIGFjdGl2ZVNUVCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGxpc3RlbigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgYWN0aXZlU1RUID0gc3BlZWNoLmxpc3Rlbih7XG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZycpO1xuICAgICAgfSxcbiAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRleHQpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY29nbml6ZWRUZXh0XCIpLmlubmVySFRNTCA9IGUudGV4dDtcbiAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgIHRoYXQuc3RvcExpc3RlbmluZyhlLnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZSk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbmQnLCBlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=