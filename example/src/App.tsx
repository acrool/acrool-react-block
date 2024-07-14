import {BlockPortal} from '@acrool/react-block';

import './App.css';
import Example from './views/Example';
import Banner from './components/Banner';
import {GridThemeProvider} from '@acrool/react-grid';
import Button from './components/Button';
import TextField from './components/TextField';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <BlockPortal
                    renderButton={(args) => {
                        return <Button
                            className={args.className}
                            children={args.children}
                            color={args.color}
                            onClick={args.onClick}
                            isBlock
                            size="md"
                        />;
                    }}
                    renderTextField={(args) => {
                        return <TextField
                            {...args}
                            isAutoFocus
                        />;
                    }}
                />

            </div>
        </GridThemeProvider>
    );

}

export default App;
