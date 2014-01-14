jquery-layoutmanager
====================

While css (in specific if using bootstrap) provides excellent tools for splitting the pages into columns there's quite a pain if you need to do the same for the height of an web application.
The jquery-layoutmanager is a javascript tool intended to fix exactly this described problem.

Dependencies
------------

The jquery-layoutmanager only depends on jquery, a jquery plugin to observe elements and some other scripts from the *jquerypp* project to help with calculations.

Quickstart
----------

jquery-layoutmanager is managed using bower.
Therefore using bower you simply install jquery-layoutmanager by using *bower install jquery-layoutmanager*.
Alternatively simply add it to your bower.json file and use *bower install*.

### Quick Example ###

Just download the latest version of the project.
Then run *bower install* in the root folder of the project before to make sure that dependencies are downloaded.
Then simply open [examples/example.html](./examples/example.html) in your favourite browser.

### Starting ###

Add the following to the bottom of your html side to get started:

```html
<script src="bower_dir/jquery/jquery.js" type="text/javascript"></script>
<script src="bower_dir/jquerypp-release/raw/jquery/dom/styles.js" type="text/javascript"></script>
<script src="bower_dir/jquerypp-release/raw/jquery/dom/dimensions.js" type="text/javascript"></script>
<script src="bower_dir/jquery-observe/jquery-observe.js" type="text/javascript"></script>
<script src="bower_dir/jquery-layoutmanager/jquery-layoutmanager.js" type="text/javascript"></script>
<script type="text/javascript">
    LayoutManager.init();
    $("body").observe('childlist subtree', function (record) {
        LayoutManager.invokeChildrenAdjustment(record.target);
    });
</script>
```

### Layout by CSS ##

For splitting view vertically use the classes *layout vertical*.
For splitting view horizontally use the classes *layout horizontal*.
Available space will be taken equally by all children.
These classes should work properly on any element with default or the custom display setting *display:block*.

### Tweaks ###

Often it's required to set a child to a specific height/width.
Use the class *fixedWidth* for a fixed width and the class *fixedHeight* for a fixed height.
Please remind that in this case you always have to add a specific height or width to the object.
Otherwise a height/width of zero is assumed which kind of destroys your layout.

### Specials ###

If you want to extract a child from the flow by giving a *position:absolute*, you have 2 options.

1. Take your child out of the flow. The view won't be redrawn.
2. Take your child out of the flow and manually execute *LayoutManager.invokeChildrenAdjustment()*.
   Executing the function without parameter redraws the whole view.
   You can either pass the parent of your child and only the children of this will be redrawn.

License
-------

jquery-layoutmanager is copyright of SCHMUTTERER+PARTNER IT GmbH and is licensed under the MIT License.

Contact
-------

There are no special mailing lists designated for this project.
Simply use the github issue tracker to get in contact with us if you encounter any problems with this project.

