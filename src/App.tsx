import React from 'react';
import { useState } from 'react'

import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';

function App() {

return (
        <div>
              <Header firstname="Nithikon" lastname="Jansanitsri" student_id={630612102} ></Header>
          <Todo/>

          <Footer copyright = "Copyright © 2021 Minimal todo List by Nithikon Jansanitsri"></Footer>
        </div> 
  );
}

export default App;