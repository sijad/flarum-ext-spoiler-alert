/* global s9e */
/* global $ */
/* global app */
import { extend } from 'flarum/extend'
import Post from 'flarum/components/Post'

app.initializers.add('sijad-spoiler-alert', app => {
  extend(Post.prototype, 'config', function (original, isInitialized) {
    this.$('.spoiler').spoiler()
  })
  extend(s9e.TextFormatter, 'preview', function (original, text, target) {
    const filter = 'blur(8px)'
    $(target).find('.spoiler').css({
      WebkitFilter: filter,
      filter: filter
    })
  })
})
