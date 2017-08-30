import {Template} from 'meteor/templating';

import './body.html';

Template.body.helpers({

    tasks: [
        {text: 'Task 1', desc: 'Task 1 desc'},
        {text: 'Task 2'},
        {text: 'Task 3'}      
    ]

});