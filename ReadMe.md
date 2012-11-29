Required:

jquery.js<br/>
jquery.observe.js -> https://github.com/kapetan/jquery-observe <br/>
LayoutManager.js

---------------------------------------------------------------------------

As seen in the neighbored example take this to your document ready function:

LayoutManager.init();
$("body").observe('childlist subtree', function (record) {
    LayoutManager.invokeChildrenAdjustment(record.target);
});

---------------------------------------------------------------------------

Classes:

For splitting view vertically use the classes "layout vertical".<br/>
For splitting view horizontally use the classes "layout horizontal".<br/>
Available space will be taken equally by all children.<br/>

---------------------------------------------------------------------------

CSS-Requirements:

These classes should work properly on any element with default or custom<br/>
displaysetting "display:block".

---------------------------------------------------------------------------

Tweaks:

Often it's required to set a child to a specific height/width.<br/>
Use the class "fixedWidth" for a fixed width.<br/>
Use the class "fixedHeight" for a fixed height.<br/>

---------------------------------------------------------------------------

Specials:

If you want to extract a child from the flow by giving a "position:absolute",<br/>
you have 2 options.

1. Take your child out of the flow. The view won't be redrawn.<br/>
2. Take your child out of the flow and manually execute<br/>
   "LayoutManager.invokeChildrenAdjustment()".<br/>

   Executing the function without parameter redraws the whole view.<br/>
   You can either pass the parent of your child and only the children of this<br/>
   will be redrawn.<br/>
