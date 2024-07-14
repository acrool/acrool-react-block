# Acrool React Block

<a href="https://acrool-react-block.pages.dev/" title="Acrool React Block - This is a block function for React development loading block">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-block/main/example/public/og.webp" alt="Acrool React Block Logo"/>
</a>

<p align="center">
    This is a toast message function for React development notifications
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-block.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-block)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-block?style=for-the-badge)](https://github.com/acrool/@acrool/react-block/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-block?style=for-the-badge)](https://github.com/acrool/react-block/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-block.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-block)
[![npm](https://img.shields.io/npm/dt/@acrool/react-block.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-block)

</div>




## Features

- Supports 5 status colors: default, success, info, warning, danger
- Call via global method
- Configurable disappearance delay seconds

## Install

```bash
yarn add @acrool/react-block
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-block/dist/index.css";
```

add in your App.tsx

```tsx
import {BlockPortal} from "@acrool/react-block";

const App = () => {
    return (
        <div>
            <BaseUsed/>
            <BlockPortal timeout={3000}/>
        </div>
    );
};
```

then in your page
```tsx
import {EStatus, toast} from '@acrool/react-block';

const Example = () => {
    return (
        <div>
            <button type="button" onClick={() => toast({message: 'useBlock message'})}>
                useBlock message
            </button>
        </div>
    );
};
```

- toast
- toast.success
- toast.info
- toast.warning
- toast.error


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-block/main/play-in-example-button.svg)](https://acrool-react-block.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
