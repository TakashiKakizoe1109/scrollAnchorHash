scrollAnchorHash
==========

You can add in-page scrolling from the anchor hash.  
If there is a possibility of conflict, it will automatically cancel the event.  

アンカーハッシュから自動ページ内スクロールを追加できます。
競合の可能性がある場合は自動的にイベントを解除します。  

Description
============

By setting javascript options you can add scrolling within the automatic page.  

javascriptでオプションを設定で自動ページ内スクロールを追加できます。  

Usage
===========

### 1. Download this javascript

javascriptファイルをダウンロードしてください

### 2. Require jQuery and this javascript

```
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="scrollAnchorHash.js"></script>
```

Markup Html
===========

#### ■ auto scroll

アンカータグに`#yourID`を記述することで内部リンク自動スクロールとして機能します。  

ex.
```
<a href="#targetElement">auto scroll</a>
<div class="otherElement">OtherElement</div>
<div class="otherElement">OtherElement</div>
<div class="otherElement">OtherElement</div>
<div class="otherElement">OtherElement</div>
<div id="targetElement">TargetElement</div>
```

Create Instance and Set Options
===========

```
$(function(){
  var scroll = new scrollAnchorHash({
    optionName:Value,
    optionName:Value,
    optionName:Value...
  });
  scroll.addScroll();
});
```

Options
===========

| optionName                  | defaultValue                     | Description                               |
| :-------------------------: | :------------------------------: | :---------------------------------------: |
| checkdelay                  | `500`                            | イベント競合２重チェック時の遅延時間      |
| moveSpeed                   | `500`                            | スクロール時の速度                        |
| offset                      | `20`                             | スクロール時のoffset                      |
| easing                      | `'swing'`                        | スクロール時のモーション                  |
| rejectLink                  | `''`                             | イベントを回避する要素を#xxxx,#yyyyで記述 |
| avoid                       | `'__noScroll'`                   | イベントを回避する要素のclass名           |

Updates
===========

#### Version 1.0.0
proto

License
===========

[MIT License](https://raw.githubusercontent.com/TakashiKakizoe1109/scrollAnchorHash/master/LICENSE) © TakashiKakizoe
