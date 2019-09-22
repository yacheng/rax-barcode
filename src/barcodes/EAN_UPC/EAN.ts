import { SIDE_BIN, MIDDLE_BIN } from './constants';
import encode from './encoder';
import Barcode from '../Barcode';
import { Options } from '../defaultOptions';

// Base class for EAN8 & EAN13
class EAN extends Barcode {
  public fontSize: number;
  public guardHeight: number;
  public constructor(data: string, options: Options) {
    super(data, options);

    // Make sure the font is not bigger than the space between the guard bars
    this.fontSize =
      !options.flat && options.fontSize > options.width * 10
        ? options.width * 10
        : options.fontSize;

    // Make the guard bars go down half the way of the text
    this.guardHeight = options.height + this.fontSize / 2 + options.textMargin;
  }

  public encode() {
    return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
  }

  public leftText(from: number = 0, to?: number) {
    return this.text.substr(from, to);
  }

  public leftEncode(data = '', structure?: string | string[]) {
    return encode(data, structure);
  }

  public rightText(from: number = 0, to?: number) {
    return this.text.substr(from, to);
  }

  public rightEncode(data?: string, structure?: string | string[]) {
    return encode(data, structure);
  }

  public encodeGuarded(): Array<{
    data: string;
    text?: string;
    options?: Options;
  }> {
    const textOptions = { fontSize: this.fontSize };
    const guardOptions = { height: this.guardHeight };

    return [
      { data: SIDE_BIN, options: guardOptions },
      { data: this.leftEncode(), text: this.leftText(), options: textOptions },
      { data: MIDDLE_BIN, options: guardOptions },
      { data: this.rightEncode(), text: this.rightText(), options: textOptions },
      { data: SIDE_BIN, options: guardOptions }
    ];
  }

  public encodeFlat() {
    const data = [SIDE_BIN, this.leftEncode(), MIDDLE_BIN, this.rightEncode(), SIDE_BIN];

    return {
      data: data.join(''),
      text: this.text
    };
  }
}

export default EAN;
