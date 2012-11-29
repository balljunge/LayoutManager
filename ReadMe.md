Required:

jquery.js
jquery.observe.js
LayoutManager.js

---------------------------------------------------------------------------

As seen in the neighbored example take this to your document ready function:

LayoutManager.init();
$("body").observe('childlist subtree', function (record) {
    LayoutManager.invokeChildrenAdjustment(record.target);
});

---------------------------------------------------------------------------

Classes:

For splitting view vertically use the classes "layout vertical".
For splitting view horizontally use the classes "layout horizontal".
Available space will be taken equally by all children.

---------------------------------------------------------------------------

CSS-Requirements:

These classes should work properly on any element with default or custom
displaysetting "display:block".

---------------------------------------------------------------------------

Tweaks:

Often it's required to set a child to a specific height/width.
Use the class "fixedWidth" for a fixed width.
Use the class "fixedHeight" for a fixed height.

---------------------------------------------------------------------------

Specials:

If you want to extract a child from the flow by giving a "position:absolute",
you have 2 options.

1. Take your child out of the flow. The view won't be redrawn.
2. Take your child out of the flow and manually execute
   "LayoutManager.invokeChildrenAdjustment()".

   Executing the function without parameter redraws the whole view.
   You can either pass the parent of your child and only the children of this
   will be redrawn.
