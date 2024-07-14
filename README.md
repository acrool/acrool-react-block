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

- Supports queue block list
- Plug and unplug using `@acrool/react-portal` and `framer-motion`

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
            <BlockPortal
                isVisibleQueueKey={false}
                renderLoader={<Loader/>}
                defaultMessage="Loading..."
            />
        </div>
    );
};
```

then in your page

```tsx
import {block} from '@acrool/react-block';
import {useEffect} from "react";

const Example = () => {

    useEffect(() => {
        block.show();
        
        setTimeout(() => {
            block.hidden();
        }, 3000)
    }, []);

    return (
        <div>
            sample page
        </div>
    );
};
```

- block.show
- block.hidden
- toast.hiddenAll


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-block/main/play-in-example-button.svg)](https://acrool-react-block.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
