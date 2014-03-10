'use strict';

var Marionette = require('backbone.marionette');

require('../../../../helpers/handlebars');

var tmpl = require('../templates/index.hbs');

var View = Marionette.ItemView.extend({
  template: tmpl,

  initialize: function () {
    //Backbone.Validation.bind(this);
  },

  events: {
    'click #submit' : 'submit',
    'keydown input' : 'submitOnEnter'
  },

  invalid: function () { },

  valid: function () {
  },

  modelEvents: {
    'validated:invalid': 'invalid'
  },

  submitOnEnter: function (e) {
    var key = e.keyCode || e.which;

    if (key === 13) {
      e.preventDefault();
      this.submit();
    }
  },

  submit: function () {
    //var self = this;
    //var data = Syphon.serialize(this);

    //self.model.signIn(data.username, data.password)
    //.done(self.valid())
    //.fail(self.invalid());
  }

});

module.exports = View;
