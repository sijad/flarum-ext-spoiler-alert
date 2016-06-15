var gulp = require('flarum-gulp')

gulp({
  files: [
    'bower_components/spoiler-alert/spoiler.min.js'
  ],
  modules: {
    'sijad/spoiler/alert': [
      'src/**/*.js'
    ]
  }
})
