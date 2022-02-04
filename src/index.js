import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import PostManager from './features/posts/PostManager';
import PostDetails from './features/posts/PostDetails';
import Drag from './features/dnd/Drag';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='postmanager' element={<PostManager/>} >
            <Route path=':id' element={<PostDetails/>}/>
          </Route>
          <Route path='dnd' element={<DndProvider backend={HTML5Backend}><Drag /></DndProvider>} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

