## Vanilla JS implementation of a stand-alone ZPL (Zebra Programming Language) to SVG converter.
#### It is a work in progress and is not yet complete.

#### You can try it out here: [ZPL to SVG Converter](https://jozo132.github.io/zpl2svg/)

![image](https://github.com/user-attachments/assets/33841a00-f7b7-4deb-ac3d-811db46edce3)

The goal is to be able to convert from ZPL to SVG and possibly vice verse. 
The conversion speed is decently fast with under 10ms from current testing. 
There are still a lot of bugs and missing features.

## Contributors
- Jože Vovk ([jozo132](https://github.com/Jozo132)) - original author and maintainer
- Marcus Förster ([xerc](https://github.com/xerc)) - contributor, including `^FT`, `^BD`, `^GF` plain HEX support, field orientation/alignment work, and typography adjustments

#### Dependencies: 
- [bwip-js](https://www.npmjs.com/package/bwip-js) for barcode rendering
- [pako](https://github.com/nodeca/pako) for Z64 graphic encoding
- [canvas](https://www.npmjs.com/package/canvas) for graphic fields (only for Node.JS)

## Practical usage
#### Node.JS first install:
```sh
npm i zpl2svg
```
#### CJS Browser import via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/zpl2svg/dist/zpl2svg.min.js"></script>
```
#### ESM Browser import via CDN:
```html
<script type="module">
  import { zpl2svg } from 'https://cdn.jsdelivr.net/npm/zpl2svg/dist/zpl2svg.mjs';
</script>
```

#### Node.JS import:
```js
// ESM
import { zpl2svg, zpl2png } from 'zpl2svg';
// CJS
const { zpl2svg, zpl2png } = require('zpl2svg');
```

#### Example:
```js
const zpl_content = `
  ^XA
  ^CF0,32
  ^FO20,20^GB330,220,3^FS
  ^FO120,40^A0N,30,30^FDHello ZPL!^FS
  ^FO40,100^BY2^B3N,N,100,Y,N^FD1234567^FS
  ^XZ
`
const svg_content = zpl2svg(zpl_content, {
  scale: 1,
  width: 370,
  height: 260
})
```

##### ZPL command coverage

The list below is derived from the current parser implementation in `zpl2svg.js`.

###### Supported
| Command | Notes |
| --- | --- |
| `^XA` | Start label |
| `^XZ` | End label |
| `^FS` | End field |
| `^FX` | Comment |
| `^CF` | Default font selection |
| `^A<font>` | Built-in font selection such as `^A0`, `^AA`, `^AB`, ... |
| `^FO`, `^F0` | Field origin |
| `^LH` | Label home |
| `^LL` | Label length |
| `^PW` | Print width |
| `^FH` | Field hexadecimal indicator |
| `^FR` | Field reverse print |
| `^FD`, `^FV` | Field data / field variable data |
| `^BY` | Barcode defaults |
| `^GB` | Graphic box |
| `^GC` | Graphic circle |
| `^GD` | Graphic diagonal line |
| `^GE` | Graphic ellipse |
| `^B1` | Code 11 |
| `^B2` | Interleaved 2 of 5 |
| `^B3` | Code 39 |
| `^B4` | Code 49 |
| `^B5` | PLANET |
| `^B7` | PDF417 |
| `^B8` | EAN-8 |
| `^B9` | UPC-E |
| `^BA` | Code 93 |
| `^BB` | CODABLOCK |
| `^BC` | Code 128 rendering |

###### Partially Supported
| Command | Current limitations |
| --- | --- |
| `^A@` | Parsed, but custom downloaded font lookup is not implemented; it only works within the converter's existing font mapping |
| `^FB` | Text wrapping works, but hanging indent is not applied and justified text is not implemented |
| `^FW` | Orientation works, but alignment support is limited and `J` falls back to normal left-aligned text behavior |
| `^FT` | Typeset positioning works, but only left and right justification values are handled |
| `^PO` | Parses inverted / mirrored intent, but mirrored label output is not implemented |
| `^B0`, `^BO` | Aztec is wired through to rendering, but the implementation is explicitly incomplete |
| `^BD` | MaxiCode is wired through to rendering, but only basic setup is implemented |
| `^GF` | Supports `A` format data with RLE, plain hex, and Z64; `B` compression is not implemented |

###### Parsed But Currently Ignored
| Command | Notes |
| --- | --- |
| `^PR` | Accepted, no rendering effect |
| `^MD` | Accepted, no rendering effect |
| `^CI` | Character-set command is parsed, but custom mapping is not implemented |
