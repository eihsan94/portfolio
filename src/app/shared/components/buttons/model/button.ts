import { ThemePalette } from '@angular/material/core';

export class Button {
}

export class ButtonMetaData {
    type: 'fab' | 'miniFab' | 'stroked' | 'flat' | 'raised' | 'icon' | 'basic';
    icon: string;
    color: ThemePalette;
    tooltip: string;
    disabled: boolean;
    matTooltipDisabled: boolean;
    clickEvent: (params: any) => any | void;
}
