import {
  createElement,
  RefAttributes,
  HTMLAttributes,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle
} from 'rax';
import Canvas from 'rax-canvas';
import barCodes from './barcodes';
import { Options, defaults } from './barcodes/defaultOptions';

export type BarCodeOptions = Omit<Options, 'text' | 'format'>;
export interface BarCodeProps
  extends RefAttributes<HTMLCanvasElement>,
    HTMLAttributes<HTMLCanvasElement> {
  data: string;
  type?: string;
  options: BarCodeOptions;
}

const BarCode: ForwardRefExoticComponent<BarCodeProps> = forwardRef((props, ref) => {
  const { className, style, data, type = 'CODE128', options } = props;
  const canvasRef = useRef(null);
  const { width = 500, height = 200 } = style || {};
  useEffect(() => {
    const Encoder = barCodes[type];
    const barCodeData = new Encoder(data, { ...defaults, ...options });
    const { lineColor = '#000000', width: barWidth = 2 } = options;
    const ctx = canvasRef.current.getContext();
    const binary: string = barCodeData.encode().data;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = lineColor;
    for (let i = 0; i < binary.length; i++) {
      const x = i * barWidth;
      if (binary[i] === '1') {
        ctx.fillRect(x, 0, barWidth, height);
      } else if (binary[i]) {
        ctx.fillRect(x, 0, barWidth, parseInt(height + '', 10) * parseInt(binary[i], 10));
      }
    }
  }, [data]);
  useImperativeHandle(ref, () => canvasRef.current);
  return (
    <Canvas ref={canvasRef} className={className} style={{ width: 500, height: 200, ...style }} />
  );
});

export default BarCode;
