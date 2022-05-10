import React, { useEffect } from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';
import { useRootStore } from '.';


  function App() {
    const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])
    return (
        <>
          <LayoutCustom/>
        </>
    );
  }
  
  export default App;