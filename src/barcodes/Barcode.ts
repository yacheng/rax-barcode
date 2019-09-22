import { Options } from './defaultOptions';

class Barcode {
  public data: string;
  public text: string;
  public options: Options;
  public constructor(data: string, options: Options) {
    this.data = data;
    this.text = options.text || data;
    this.options = options;
  }
}

export default Barcode;
