LayoutManager = (function($){
    var lm = {},
        constants = {
            ALIGN_VERTICAL: "vertical",
            ALIGN_HORIZONTAL: "horizontal",
            WIDTH: "width",
            HEIGHT: "height",
            SIZE_MEASUREMENT: "px",
            CLASS_FIXED_WIDTH: "fixedWidth",
            CLASS_FIXED_HEIGHT: "fixedHeight",
            CLASS_LAYOUT: "layout"
        };

    lm.init = function () {
        lm.invokeChildrenAdjustment();

        $(window).resize(function () {
            lm.invokeChildrenAdjustment();
        });
    }

    lm.invokeChildrenAdjustment = function (obj) {
        var deepRefresh = false;
        if (obj == undefined) {
            obj = "." + constants.CLASS_LAYOUT;
        } else {
            deepRefresh = true;
        }

        iterateOverChildrenSelectAdjustment(obj);

        if (deepRefresh) {
            iterateOverChildrenSelectAdjustment($(obj).find("." + constants.CLASS_LAYOUT));
        }
    }

    function iterateOverChildrenSelectAdjustment(obj) {
        $.each($(obj), function () {
            var childCount = $(this).children().length;
            if (childCount != 0 && $(this).hasClass(constants.ALIGN_HORIZONTAL)) {
                adjustChildren($(this), childCount, constants.HEIGHT, constants.CLASS_FIXED_HEIGHT);
            } else if (childCount != 0 && $(this).hasClass(constants.ALIGN_VERTICAL)) {
                adjustChildren($(this), childCount, constants.WIDTH, constants.CLASS_FIXED_WIDTH);
            }
        });
    }

    function adjustChildren(parent, childCount, align, cssClass) {
        var availableSpace = getElementInnerSize(parent,align),
            childrenToAdjust = [],
            fixed = 0;

        //iterate over all children to filter the ones to adjust and count the fixed
        $.each($(parent).children(),function(){
            if($(this).css("position") != "absolute" && $(this).css("display")!="none" && $(this).attr("type") != "hidden"){
                childrenToAdjust.push(this);
                if($(this).hasClass(cssClass)){
                    availableSpace = availableSpace - getElementOuterSize(this,align);
                    fixed = fixed + 1;
                }
            }
        });

        //adjust all non-fixed children
        $.each(childrenToAdjust,function(){
            if(align == constants.WIDTH){
                if(!$(this).hasClass(cssClass)){
                    resizeWidth(this, availableSpace/(childrenToAdjust.length-fixed));
                }
                resizeHeight(this, $(this).parent().height());
                $(this).css("float", "left");
            } else if(align == constants.HEIGHT){
                if(!$(this).hasClass(cssClass)){
                    resizeHeight(this, availableSpace/(childrenToAdjust.length-fixed));
                }
                resizeWidth(this,$(parent).width());
            }
        });
    }

    function getElementOuterSize(elem, align) {
        if (align == constants.HEIGHT) {
            return $(elem).outerHeight(true);
        } else if (align == constants.WIDTH) {
            return $(elem).outerWidth(true);
        }
        return 0;
    }

    function getElementInnerSize(elem, align){
        if (align == constants.HEIGHT) {
            return $(elem).height();
        } else if (align == constants.WIDTH) {
            return $(elem).width();
        }
        return 0;
    }

    function resizeWidth(elem,resizeTo){
        $(elem).outerWidth(resizeTo,true);
    }

    function resizeHeight(elem,resizeTo){
        $(elem).outerHeight(resizeTo,true);
    }

    return lm;
})(jQuery);