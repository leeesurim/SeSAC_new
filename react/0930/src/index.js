import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HookEffect';
import Reducer from './2HookReducer'
import Memo from './3HookMemo';
import Origin from './4Origin';
import UseSass from './5UseSass';
import CSSModule from './6CSSModule';
import StyledComponent from './7StyleComponent';
import LarvaSass from './65LarvaSass';
import AnimationSass from './66AnimationSass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook/>
    <hr />
    <Reducer />
    <hr />
    <Memo />
    <hr />
    <Origin />
    <hr />
    <UseSass />
    <hr />
    <CSSModule />
    <hr />
    <StyledComponent />
    <hr />
    <LarvaSass />
    <hr />
    <AnimationSass />
  </React.StrictMode>
);
