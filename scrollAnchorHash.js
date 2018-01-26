/*!
 * ScrollAnchorHash
 * Avoid elements that have already registered events and set scrolling to anchor tags starting with href=#
 *
 * @author: TakashiKakizoe
 * @author url: https://github.com/TakashiKakizoe1109
 * @version: 1.0.0
 *
 * Open source under the MIT License.
 * License url: https://raw.githubusercontent.com/TakashiKakizoe1109/scrollAnchorHash/master/LICENSE
 *
 */

var scrollAnchorHash = function (op, element) {

  /** set options or default params */
  this.op = {} ;
  this.op.checkdelay = op.checkdelay || 500 ;
  this.op.moveSpeed  = op.moveSpeed  || 500 ;
  this.op.offset     = op.offset     || 0 ;
  this.op.rejectLink = op.rejectLink || '' ;
  this.op.easing     = op.easing     || 'swing' ;
  this.op.avoid      = op.avoid      || '.__noScroll' ;

  /** target anchor tags */
  this.anchors            = '' ;

  /** target parent */
  this.element   = element || $('body,html');
  if (element instanceof jQuery) {
  } else {
    this.element = $('body,html');
  }
};

scrollAnchorHash.prototype.addScroll = function() {
  this.anchors = this.element.find('a[href^="#"]').not('[href="#"]').not(this.op.avoid) ;
  if (this.anchors.length > 0) {
    this.anchors.each(this.add());
    setTimeout(this.checkAll, this.op.checkdelay, this);
  }
}

scrollAnchorHash.prototype.add = function () {
  var obj = this ;
  return function(){
    var _f = true;
    /** console.log(Object.keys($(this).data())); */
    if (Object.keys($(this).data()).length) {
      _f = false ;
    }
    var _h = $(this).attr('href');
    if (obj.op.rejectLink != '') {
      var _r = obj.op.rejectLink.split(',');
      _r.forEach(function(v, i, a) {
        if ('#' + v == _h) _f = false;
      });
    }
    if (_f) {
      $(this).on('click.ScrollAnchorHash', {obj:obj}, function(e) {
        var _h = $(this).attr('href');
        var top = $(_h).offset().top-e.data.obj.op.offset ;
        e.data.obj.element.stop().animate(
          {scrollTop: top},
          e.data.obj.op.moveSpeed ,
          e.data.obj.op.easing
        );
        return false;
      });
    }
  };
};

scrollAnchorHash.prototype.checkAll = function (obj) {
  obj.anchors.each(obj.check(obj));
}

scrollAnchorHash.prototype.check = function (obj) {
  return function(i,ele){
    if (Object.keys($(this).data()).length) {
      $(this).off('click.ScrollAnchorHash');
    }
  };
}
