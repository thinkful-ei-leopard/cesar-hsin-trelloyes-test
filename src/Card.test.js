
/*smoke test
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


 describe ('<Card />', () =>{
    it ('renders without crashing' , () => {
        const div = document.createElement('div');
    
    ReactDOM.render(
        <Card  
        title="Example title" 
        content="Example content"
        id={10} />, 
        div);
        ReactDOM.unmountComponentAtNode(div);
    })

})*/

//Snapshot test

import React from 'react';
import  ReactDOM from 'react-dom';

import Card from './Card';

describe('<Card />', ()=>{
  it('render this as expected', ()=> {
      const test = document.createElement('div');

      ReactDOM.render(<Card />, test);
      ReactDOM.unmountComponentAtNode(test);

  });
});
