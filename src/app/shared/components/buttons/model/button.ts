export class Button {
}

export class ButtonMetaData {
    type: 'fab' | 'miniFab' | 'stroked' | 'flat' | 'raised' | 'icon' | 'basic';
    icon: string;
    color: 'basic' | 'primary'| 'accent' | 'warn' | 'danger';
    tooltip: string;
    disabled: boolean;
    matTooltipDisabled: boolean;
    clickEvent: (params: any) => any | void;
}
