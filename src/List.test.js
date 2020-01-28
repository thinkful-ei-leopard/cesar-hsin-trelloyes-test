
/*smoke test
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';



describe('<List />', () => {
    it ('render without crashing', ()=>{
        const div = document.createElement('div');
        
        ReactDOM.render(
            <List 
            id ={10}

            header="check head"
            
            cards={[1,2,3]}
            />, div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
*/

//snapshot test

import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

    it('renders this as expected', ()=> {

        const trial = document.createElement('trial');
     ReactDOM.render(<List cards={[]} />, trial);
     ReactDOM.unmountComponentAtNode(trial);
    });

