import {createRoot} from 'react-dom/client';

import Main from './app/app';

const main = document.getElementById("main");
const root = createRoot(main);
root.render(<Main/>)