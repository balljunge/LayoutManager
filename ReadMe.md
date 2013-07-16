Required:

jquery.js<br/>
jquery.observe.js -> https://github.com/kapetan/jquery-observe <br/>
LayoutManager.js

---------------------------------------------------------------------------

As seen in the neighbored example take this to your document ready function:

LayoutManager.init();<br/>
$("body").observe('childlist subtree', function (record) {<br/>
    LayoutManager.invokeChildrenAdjustment(record.target);<br/>
});<br/>

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
   
   
----------------------------------------------------------------------------

Example "Horizontal":

´<body class="layout horizontal">´
´    <div class="fixedHeight" style="height:20px">This Div keeps its 20px in height</div>´
´    <div>This Div takes the rest of the remaining height of its parent.</div>´
´</body>´
   
----------------------------------------------------------------------------

Example "Vertical":

´<body class="layout vertical">
    <div class="fixedVertical" style="width:20px">This Div keeps its 20px in width</div>
    <div>This Div takes the rest of the remaining width of its parent.</div>
</body>´

----------------------------------------------------------------------------

Example "Complex":

´<body class="layout vertical">
    <div class="fixedVertical" style="width:20px">This Div keeps its 20px in width</div>
    <div class="layout horizontal"> <!-- the nested containers of this DIV take the remaining width of the body -->
        <div class="fixedHeight" style="height:20px">This Div keeps its 20px in height</div>
        <div>This Div takes the rest of the remaining height of its parent.</div>
    </div>
</body>´
