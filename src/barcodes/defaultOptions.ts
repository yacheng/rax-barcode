export interface Options {
  lastChar?: string;
  mod43?: boolean;
  ean128?: boolean | string;
  width?: number; // the width of a single bar
  height?: number; // The height of the barcode.
  format?:
    | 'auto'
    | 'CODE39'
    | 'CODE128'
    | 'CODE128A'
    | 'CODE128B'
    | 'CODE128C'
    | 'EAN13'
    | 'EAN8'
    | 'EAN5'
    | 'EAN2'
    | 'UPC'
    | 'UPCE'
    | 'ITF14'
    | 'ITF'
    | 'MSI'
    | 'MSI10'
    | 'MSI11'
    | 'MSI1010'
    | 'MSI1110'
    | 'pharmacode'
    | 'codabar'
    | 'GenericBarcode';
  displayValue?: boolean;
  fontOptions?: string; // With fontOptions you can add bold or italic text to the barcode.
  font?: string; // Define the font used for the text in the generated barcode. This can be any default font or a font defined by a @font-face rule.
  text?: string; // Overide the text that is diplayed
  textAlign?: 'left' | 'center' | 'right';
  textPosition?: 'bottom' | 'top';
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  flat?: boolean; // Only for EAN8/EAN13
  valid?: (content: string) => void;
}

export const defaults: Options = {
  width: 2,
  height: 100,
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  text: '',
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  flat: true,
  valid: function() {}
};
