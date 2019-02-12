import { EventEmitter } from '@angular/core';
export declare class MicComponent {
    apiURL: string;
    imageSrc: string;
    micResult: EventEmitter<any>;
    startListening(): void;
    stopListening(finalText: any): void;
    listen(): void;
}
