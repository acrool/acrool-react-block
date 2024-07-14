import './App.css';

import {BlockPortal} from '@acrool/react-block';
import {GridThemeProvider} from '@acrool/react-grid';

import Banner from './components/Banner';
import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <BlockPortal
                    defaultMessage="Loading..."
                />

            </div>
        </GridThemeProvider>
    );

}

export default App;
