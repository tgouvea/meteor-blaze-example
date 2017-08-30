import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';

Template.body.helpers({

    tasks: function() {
        return Tasks.find({});
    },

});

Template.body.helpers({
    tasks() {
      return Tasks.find({});
    }
  });


Template.body.events({ 
    
    'submit .new-task': function(event, template) { 
        
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Tasks.insert({

            text,
            createdAt: new Date()

        });

        //clear
        target.text.value = '';

    } 
});