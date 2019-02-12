/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/** @type {?} */
var Speech = require('watson-html5-speech-recognition');
/** @type {?} */
var speech = new Speech.SpeechToText({
    watsonTokenUrl: `/api/speech-to-text/`
});
/** @type {?} */
var activeSTT;
export class MicComponent {
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
                template: '<button  (click)="startListening()">Mic</button>',
                styles: ["h1{color:#f0f}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FzcGFtaWNsaWIvIiwic291cmNlcyI6WyJtaWMvbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFdEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQzs7SUFDbkQsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEVBQUUsc0JBQXNCO0NBQ3ZDLENBQUM7O0lBQ0UsU0FBUztBQU9iLE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLGNBQWM7UUFDWixJQUFJLFNBQVMsRUFBRTtZQUNiLCtCQUErQjtTQUNoQzthQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0wsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxTQUFTO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUNELE1BQU07O1lBQ0EsSUFBSSxHQUFHLElBQUk7UUFDZixTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN4QixPQUFPOzs7WUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQTtZQUNELFFBQVE7Ozs7WUFBRSxVQUFVLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixnRUFBZ0U7Z0JBQ2hFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDYixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUE7WUFDRCxPQUFPOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUE7WUFDRCxLQUFLOzs7O1lBQUUsVUFBVSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsa0RBQWtEOzthQUU3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG52YXIgU3BlZWNoID0gcmVxdWlyZSgnd2F0c29uLWh0bWw1LXNwZWVjaC1yZWNvZ25pdGlvbicpO1xudmFyIHNwZWVjaCA9IG5ldyBTcGVlY2guU3BlZWNoVG9UZXh0KHtcbiAgd2F0c29uVG9rZW5Vcmw6IGAvYXBpL3NwZWVjaC10by10ZXh0L2Bcbn0pO1xudmFyIGFjdGl2ZVNUVDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXNwYW1pYycsXG4gIHRlbXBsYXRlOiAnPGJ1dHRvbiAgKGNsaWNrKT1cInN0YXJ0TGlzdGVuaW5nKClcIj5NaWM8L2J1dHRvbj4nLFxuICBzdHlsZVVybHM6IFsnLi9taWMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNaWNDb21wb25lbnQge1xuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIGlmIChhY3RpdmVTVFQpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmcsIHNwZWVjaCBpcyBhY3RpdmVcbiAgICB9IGVsc2UgaWYgKHNwZWVjaC5pc1N1cHBvcnRlZCkge1xuICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ3NwZWVjaCBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BMaXN0ZW5pbmcoZmluYWxUZXh0KSB7XG4gICAgY29uc29sZS5sb2coJ3N0b3AnKTtcbiAgICBjb25zb2xlLmxvZyhmaW5hbFRleHQpO1xuICAgIGlmIChhY3RpdmVTVFQpIHtcbiAgICAgIGFjdGl2ZVNUVC5zdG9wKCk7XG4gICAgICBhY3RpdmVTVFQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBsaXN0ZW4oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGFjdGl2ZVNUVCA9IHNwZWVjaC5saXN0ZW4oe1xuICAgICAgb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcnKTtcbiAgICAgIH0sXG4gICAgICBvblJlc3VsdDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50ZXh0KTtcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNvZ25pemVkVGV4dFwiKS5pbm5lckhUTUwgPSBlLnRleHQ7XG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICB0aGF0LnN0b3BMaXN0ZW5pbmcoZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGUpO1xuICAgICAgfSxcbiAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZW5kJywgZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19