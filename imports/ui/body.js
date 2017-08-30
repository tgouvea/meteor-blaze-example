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