import './App.css';

import {BlockPortal} from '@acrool/react-block';
import {GridThemeProvider} from '@acrool/react-grid';
import {createElement} from 'react';

import Banner from './components/Banner';
import Loader from './components/Loader';
import Example from './views/Example';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <BlockPortal
                    renderLoader={() => createElement(Loader, {width: '30px', height: '30px'}, null)}
                    isVisibleQueueKey={true}
                    defaultMessage="Loading..."
                />

            </div>
        </GridThemeProvider>
    );

}

export default App;
