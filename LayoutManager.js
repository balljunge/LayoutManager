var LayoutManager = {
    init:function () {
        LayoutManager.invokeChildrenAdjustment();

        $(window).resize(function () {
            LayoutManager.invokeChildrenAdjustment();
        });
    },

    invokeChildrenAdjustment:function (obj) {
        var deepRefresh = false;
        if (obj == undefined) {
            obj = "." + LayoutManager.constants.CLASS_LAYOUT;
        } else {
            deepRefresh = true;
        }

        LayoutManager.iterateOverChildrenSelectAdjustment($(obj));

        if (deepRefresh) {
            LayoutManager.iterateOverChildrenSelectAdjustment($(obj).find("." + LayoutManager.constants.CLASS_LAYOUT));
        }
    },

    iterateOverChildrenSelectAdjustment:function (obj) {
        $.each($(obj), function () {
            var childCount = $(this).children().length;
            if (childCount != 0 && $(this).hasClass(LayoutManager.constants.ALIGN_HORIZONTAL)) {
                LayoutManager.adjustChildren($(this), childCount, LayoutManager.constants.HEIGHT, LayoutManager.constants.CLASS_FIXED_HEIGHT);
            } else if (childCount != 0 && $(this).hasClass(LayoutManager.constants.ALIGN_VERTICAL)) {
                LayoutManager.adjustChildren($(this), childCount, LayoutManager.constants.WIDTH, LayoutManager.constants.CLASS_FIXED_WIDTH);
            }
        });
    },

    adjustChildren:function (parent, childCount, align, cssClass) {
        var size = LayoutManager.stripPx($(parent).css(align));
        $.each($(parent).children(), function () {
            if ($(this).css("position") == "absolute") {
                childCount = childCount - 1;
            }
        });
        $.each($(parent).children("." + cssClass), function () {
            if ($(this).css("position") != "absolute") {
                size = size - LayoutManager.stripPx($(this).css(align));
                size = size - LayoutManager.getTotalBorderWidth(this, align);
                childCount = childCount - 1;
            }
        });
        $.each($(parent).children(), function () {
            if ($(this).css("position") != "absolute") {
                if (!$(this).hasClass(cssClass)) {
                    var border = LayoutManager.getTotalBorderWidth($(this), align);

                    $(this).css(align, size / childCount - border);
                }
            }
            if (align == LayoutManager.constants.WIDTH) {
                var borderHeight = LayoutManager.getTotalBorderWidth(this, LayoutManager.constants.WIDTH);
                $(this).css(LayoutManager.constants.HEIGHT,
                    parseInt(LayoutManager.stripPx($(this).parent().css(LayoutManager.constants.HEIGHT))) - borderHeight);
                $(this).css("float", "left");
            }
        });
    },

    getTotalBorderWidth:function (elem, align) {
        var borderTopWidth = parseInt(LayoutManager.stripPx($(elem).css("border-top-width")));
        var borderBottomWidth = parseInt(LayoutManager.stripPx($(elem).css("border-bottom-width")));
        var borderLeftWidth = parseInt(LayoutManager.stripPx($(elem).css("border-left-width")));
        var borderRightWidth = parseInt(LayoutManager.stripPx($(elem).css("border-right-width")));

        if (align == LayoutManager.constants.HEIGHT) {
            return borderTopWidth + borderBottomWidth;
        } else if (align == LayoutManager.constants.WIDTH) {
            return borderLeftWidth + borderRightWidth;
        }

        return 0;
    },

    stripPx:function (string) {
        return string.replace(LayoutManager.constants.SIZE_MEASUREMENT, "");
    }
};

LayoutManager.constants = {
    ALIGN_VERTICAL:"vertical",
    ALIGN_HORIZONTAL:"horizontal",
    WIDTH:"width",
    HEIGHT:"height",
    SIZE_MEASUREMENT:"px",
    CLASS_FIXED_WIDTH:"fixedWidth",
    CLASS_FIXED_HEIGHT:"fixedHeight",
    CLASS_LAYOUT:"layout"
};