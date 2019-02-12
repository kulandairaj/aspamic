/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/** @type {?} */
var Speech = require('watson-html5-speech-recognition');
/** @type {?} */
var speech = new Speech.SpeechToText({
    watsonTokenUrl: `/api/speech-to-text/`
});
/** @type {?} */
var activeSTT;
export class MicComponent {
    constructor() {
        this.apiURL = '';
        this.imageSrc = '';
        this.micResult = new EventEmitter();
    }
    /**
     * @return {?}
     */
    startListening() {
        if (activeSTT) {
            // do nothing, speech is active
        }
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
if (false) {
    /** @type {?} */
    MicComponent.prototype.apiURL;
    /** @type {?} */
    MicComponent.prototype.imageSrc;
    /** @type {?} */
    MicComponent.prototype.micResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FzcGFtaWNsaWIvIiwic291cmNlcyI6WyJtaWMvbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFbkUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQzs7SUFDbkQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEVBQUUsc0JBQXNCO0NBQ3ZDLENBQUM7O0lBQ0UsU0FBUztBQU9iLE1BQU0sT0FBTyxZQUFZO0lBTHpCO1FBT1csV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQTJDbkUsQ0FBQzs7OztJQXpDQyxjQUFjO1FBQ1osSUFBSSxTQUFTLEVBQUU7WUFDYiwrQkFBK0I7U0FDaEM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsU0FBUztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsU0FBUyxHQUFHLElBQUksQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFDRCxNQUFNOztZQUNBLElBQUksR0FBRyxJQUFJO1FBQ2YsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDeEIsT0FBTzs7O1lBQUU7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7WUFDRCxRQUFROzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsZ0VBQWdFO2dCQUNoRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUE7WUFDRCxPQUFPOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7WUFDRCxLQUFLOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsK0ZBQStGOzthQUUxRzs7O3FCQUdFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxNQUFNOzs7O0lBRlAsOEJBQTZCOztJQUM3QixnQ0FBK0I7O0lBQy9CLGlDQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnZhciBTcGVlY2ggPSByZXF1aXJlKCd3YXRzb24taHRtbDUtc3BlZWNoLXJlY29nbml0aW9uJyk7XG52YXIgc3BlZWNoID0gbmV3IFNwZWVjaC5TcGVlY2hUb1RleHQoe1xuICB3YXRzb25Ub2tlblVybDogYC9hcGkvc3BlZWNoLXRvLXRleHQvYFxufSk7XG52YXIgYWN0aXZlU1RUO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhc3BhbWljJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uICAoY2xpY2spPVwic3RhcnRMaXN0ZW5pbmcoKVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIid1cmwoJyArIGltYWdlU3JjICsgJyknXCI+TWljPC9idXR0b24+YCxcbiAgc3R5bGVVcmxzOiBbJy4vbWljLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWljQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBhcGlVUkw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBpbWFnZVNyYzogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKSBtaWNSZXN1bHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKGFjdGl2ZVNUVCkge1xuICAgICAgLy8gZG8gbm90aGluZywgc3BlZWNoIGlzIGFjdGl2ZVxuICAgIH0gZWxzZSBpZiAoc3BlZWNoLmlzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLmxpc3RlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnc3BlZWNoIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyJyk7XG4gICAgfVxuICB9XG5cbiAgc3RvcExpc3RlbmluZyhmaW5hbFRleHQpIHtcbiAgICBjb25zb2xlLmxvZygnc3RvcCcpO1xuICAgIGNvbnNvbGUubG9nKGZpbmFsVGV4dCk7XG4gICAgaWYgKGFjdGl2ZVNUVCkge1xuICAgICAgYWN0aXZlU1RULnN0b3AoKTtcbiAgICAgIGFjdGl2ZVNUVCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGxpc3RlbigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgYWN0aXZlU1RUID0gc3BlZWNoLmxpc3Rlbih7XG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZycpO1xuICAgICAgfSxcbiAgICAgIG9uUmVzdWx0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRleHQpO1xuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY29nbml6ZWRUZXh0XCIpLmlubmVySFRNTCA9IGUudGV4dDtcbiAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgIHRoYXQubWljUmVzdWx0LmVtaXQoZS50ZXh0KTtcbiAgICAgICAgICB0aGF0LnN0b3BMaXN0ZW5pbmcoZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUpO1xuICAgICAgfSxcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZW5kJywgZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19