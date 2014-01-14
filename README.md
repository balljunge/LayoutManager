jquery-layoutmanager
====================

While css (in specific if using bootstrap) provides excellent tools for splitting the pages into columns there's quite a pain if you need to do the same for the height of an web application.
The jquery-layoutmanager is a javascript tool intended to fix exactly this described problem.

Dependencies
------------

The jquery-layoutmanager only depends on jquery, a jquery plugin to observe elements and two other scripts to fix various problems in some browsers.

Quickstart
----------

jquery-layoutmanager is managed using bower.
Therefore using bower you simply install jquery-layoutmanager by using "bower install jquery-layoutmanager".
Alternatively simply add it to your bower.json file and use "bower install".

### Live Example ###

There's quite an self explaining example available at examples/examples.html.
Just run "bower install" in the root folder of the project before to make sure that dependencies are downloaded.

### Starting ###

Add the following to the bottom of your html side to get started:

```html
<script src="bower_dir/jquery/jquery.js" type="text/javascript"></script>
<script src="bower_dir/jquery.dimensions/index.js" type="text/javascript"></script>
<script src="bower_dir/jquery-observe/jquery-observe.js" type="text/javascript"></script>
<script src="bower_dir/jquery.observerfix/jquery.observerfix.js" type="text/javascript"></script>
<script src="bower_dir/jquery-layoutmanager/jquery-layoutmanager.js" type="text/javascript"></script>
<script type="text/javascript">
    LayoutManager.init();
    $("body").observe('childlist subtree', function (record) {
        LayoutManager.invokeChildrenAdjustment(record.target);
    });
</script>
```

### Layout by CSS ##

For splitting view vertically use the classes "layout vertical".
For splitting view horizontally use the classes "layout horizontal".
Available space will be taken equally by all children.
These classes should work properly on any element with default or custom displaysetting "display:block".

### Tweaks ###

Often it's required to set a child to a specific height/width.
Use the class "fixedWidth" for a fixed width.
Use the class "fixedHeight" for a fixed height.

### Specials ###

If you want to extract a child from the flow by giving a "position:absolute", you have 2 options.

1. Take your child out of the flow. The view won't be redrawn.
2. Take your child out of the flow and manually execute "LayoutManager.invokeChildrenAdjustment()".

   Executing the function without parameter redraws the whole view.
   You can either pass the parent of your child and only the children of this will be redrawn.

License
-------

Lineman is copyright of Test Double and is licensed under the MIT License.

Contact
-------

There are no special mailing lists designated for this project.
Simply use the github issue tracker to get in contact with us if you encounter any problems with this project.

