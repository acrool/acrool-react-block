import './App.css';

import {BlockPortal} from '@acrool/react-block';
import {GridThemeProvider} from '@acrool/react-grid';
import SvgLoader from './assets/loader.svg?react';

import Banner from './components/Banner';
import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <BlockPortal
                    renderLoader={() => <SvgLoader width="auto" height={30}/>}
                    isVisibleQueueKey={true}
                    defaultMessage="Loading..."
                />

            </div>
        </GridThemeProvider>
    );

}

export default App;
