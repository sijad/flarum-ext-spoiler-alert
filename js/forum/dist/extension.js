+function($){"use strict";var Spoiler=function(el,options){this.options=options;this.$element=$(el);var transition="filter 250ms";this.$element.prop("title",this.options.hintText).css({WebkitTransition:"-webkit-"+transition,transition:transition});this.resetBlurry();this.blurry=true;this.$element.on("click",$.proxy(this.toggle,this));this.$element.on("mouseenter",$.proxy(this.partial,this)).on("mouseleave",$.proxy(this.resetBlurry,this))};Spoiler.DEFAULTS={blurLevel:4,partialBlurLevel:2,hintText:"Click to reveal completely"};Spoiler.prototype.applyBlur=function(level){var filter="blur("+level+"px)";this.$element.css({WebkitFilter:filter,filter:filter})};Spoiler.prototype.toggle=function(){if(this.blurry){this.applyBlur(0)}else{this.applyBlur(this.options.blurLevel)}this.blurry=!this.blurry};Spoiler.prototype.partial=function(){if(this.blurry){this.applyBlur(this.options.partialBlurLevel)}};Spoiler.prototype.resetBlurry=function(){if(this.blurry){this.applyBlur(this.options.blurLevel)}};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("spoiler.alert");var options=$.extend({},Spoiler.DEFAULTS,$this.data(),typeof option=="object"&&option);if(!data)$this.data("spoiler.alert",data=new Spoiler(this,options));if(typeof option=="string")data[option]();else data.resetBlurry()})}var old=$.fn.spoiler;$.fn.spoiler=Plugin;$.fn.spoiler.Constructor=Spoiler;$.fn.spoiler.noConflict=function(){$.fn.spoiler=old;return this}}(jQuery);;
'use strict';

System.register('sijad/spoiler/alert/main', ['flarum/extend', 'flarum/components/Post'], function (_export, _context) {
  var extend, Post;
  return {
    setters: [function (_flarumExtend) {
      /* global s9e */
      /* global $ */
      /* global app */
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPost) {
      Post = _flarumComponentsPost.default;
    }],
    execute: function () {

      app.initializers.add('sijad-spoiler-alert', function (app) {
        extend(Post.prototype, 'config', function (original, isInitialized) {
          this.$('span.spoiler').spoiler();
        });
        extend(s9e.TextFormatter, 'preview', function (original, text, target) {
          var filter = 'blur(8px)';
          $(target).find('span.spoiler').css({
            WebkitFilter: filter,
            filter: filter
          });
        });
      });
    }
  };
});