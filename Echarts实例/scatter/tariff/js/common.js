$(function(){
    //查询下拉框事件
    filter.init();
    //搜索框获取焦点、失去焦点事件
    $(".search-text").focus(function(){
        $(this).val("");
    }).blur(function(){
        var val = $.trim($(this).val());
        if(val==""){
            $(this).val(this.defaultValue);
        }
    });
});

var filter = {
    init:function(){
        var $formItem =$(".formItem");
        //判断是否需要滚动条
        filter.hasScroll();
        $formItem.addClass("hideLayer");
        //筛选框鼠标滑过，弹层下拉列表
        if($formItem.length>0){
            var $formSelect = $formItem.find(".select");
            $formSelect.unbind("click").click(function(){
                var $layer = $(this).siblings(".select-layer");
                var $wrap = $(this).parent(".formItem");
                if($wrap.hasClass("hover")){
                    $wrap.removeClass('hover');
                }else{
                    $wrap.addClass('hover');
                    if($layer.hasClass("select-checkbox")){
                        filter.checkboxF();
                    }
                    if($layer.hasClass("select-radio")){
                        filter.radioF();
                    }
                    //鼠标滑过选择项
                    $wrap.find("p").hover(function(){
                        $(this).addClass("hover");
                    },function(){
                        $(this).removeClass("hover");
                    });

                };
                //确定、清空按钮事件调用
                filter.btnF();
            })
        }

    },
    //单选
    radioF:function(){
        var $filter_items = $(".select-radio").find("p");
        var dom;

        $filter_items.click(function(){
            var _this = $(this);
            var _id = _this.parent().attr('id');
            var val = _this.text();
            var str = '<span id='+_id+'>'+val+'</span>'
            var $valBox = _this.parents(".select-layer").parent("li").find(".select-text");

            _this.addClass("on");
            _this.parent('li').siblings('li').find("p").removeClass("on");
            $valBox.html(str);
            _this.parents(".formItem").removeClass('hover');
        })

    },
    //多选
    checkboxF:function(){
        //下拉列表，二级菜单显示隐藏操作
        var $firstNode = $(".firstNode").find(".icon");
        $firstNode.unbind("click").bind("click",function(){
            var _this = $(this);
            var $firstNode = _this.parent(".firstNode");
            var $pars = _this.parents(".hasChild");
            if($pars.hasClass("show")){
                $pars.removeClass("show");
            }else{
                $pars.addClass("show");
                $pars.siblings(".hasChild").removeClass("show");
            }
        });
        //下来列表选择项点击效果
        var $filter_items = $(".rootNode").find("p").find("input");
        $filter_items.click(function(){
            var _this = $(this);
            var $tree = _this.parents(".tree");
            var $rootNode = _this.parents(".rootNode");
            var $par_p = _this.parents("p");
            var $childNode = $rootNode.find(".childNode");
            var $checkbox = $childNode.find("input:checkbox");
            var checkbox_num = $checkbox.length;


            if(_this.is(":checked")){
                //当一级菜单选中，二级菜单也全部选中，反之
                if($par_p.hasClass("firstNode")){
                    $checkbox.prop("checked",true);

                }
                //如果是全选被选中
                if($rootNode.hasClass("selectAll")){
                    if($tree.hasClass("moreLevel")){
                        var $getItems = _this.parents(".formItem").find(".hasChild:not(.fastNode)").find("input:checkbox");
                        $getItems.prop("checked",true);
                    }else if($tree.hasClass("oneLevel")){
                        var $getItems = _this.parents(".formItem").find("input:checkbox");
                        $getItems.prop("checked",true);
                    }
                }
            }else{
                //一级菜单被取消选中，相应的二级菜单也取消
                if($par_p.hasClass("firstNode")){
                    $checkbox.prop("checked",false);
                }
                //全选按钮被取消
                if($rootNode.hasClass("selectAll")){
                    var $getItems = _this.parents(".formItem").find(".rootNode:not(.fastNode)").find("input:checkbox");
                    $getItems.prop("checked",false);
                }
            };

            var $checked = $childNode.find("input:checked");
            var checked_num = $checked.length;
            //判断二级菜单是否全选
            if($childNode[0]){
                var $firstNode = $rootNode.find("p.firstNode");
                if(checked_num == checkbox_num){
                    $firstNode.find("input:checkbox").prop("checked",true);
                }else{
                    $firstNode.find("input:checkbox").prop("checked",false);
                }
            };
            //判断整个菜单是否全选
            var root_checked_num = $tree.find(".rootNode:not(.selectAll):not(.fastNode)").find("input:checked").length;
            var root_checkbox_num =$tree.find(".rootNode:not(.selectAll):not(.fastNode)").find("input:checkbox").length;
            if(root_checked_num==root_checkbox_num){
                $tree.find(".selectAll").find("input").prop("checked",true);
            }else{
                $tree.find(".selectAll").find("input").prop("checked",false);
            }
            //获取被选中的结果
            filter.fileRes(_this);

        })
    },
    //清空效果
    btnF:function(){
        //清空
        $('.clearBtn').unbind("click").click(function(){
            var _this = $(this);
            var $formItem = _this.parents(".select-layer");
            $formItem.find(".on").removeClass("on");
            $formItem.find("input:checkbox").prop("checked",false);

            filter.fileRes(_this);

        })
        //确定、清空按钮事件
        $(".sureBtn").click(function(){
            var _this = $(this);
            var $layer = $(this).parents(".formItem");
            $layer.removeClass('hover');

        })
    },
    //下拉菜单点击后的结果
    fileRes:function(obj){
        var dom;
        var _this = $(obj);
        var $formItem = _this.parents(".formItem");
        var $valBox = $formItem.find(".select-text");
        var title = $valBox.attr("title")||"请选择"
        var val_num = $valBox.find("span").length;

        //二级菜单点击时，相应的一级菜单是否选中或不选中

        //获取被选中的值
        var $all_checked = $formItem.find(".tree").find('li:not(.selectAll)').find('p:not(.firstNode)').find("input:checked");
        all_checked_num = $all_checked.length;
        if(all_checked_num == 0){
            dom = title;
        }else{
            dom = "";
        }

        for(var i=0;i<all_checked_num;i++){
            var val = $all_checked.eq(i).parent("label").text();
            dom += '<span>'+val+'</span>';
            if(i!==all_checked_num-1){
                dom += ',';
            }
        }
        $valBox.html(dom);
    },
    hasScroll:function(){
        var $tree = $(".tree");
        if($tree.hasClass("oneLevel")){
            $tree.each(function(){
                _this = $(this);
                hasScroll(_this,".rootNode",260,10);
            })
        }
    }
}

//自定义滚动条
function hasScroll(par,item,height,num){
    var $par = $(par);
    var items_num = $par.find(item).length;
    if(items_num>num){
        $par.height(height);
        $par.addClass("mCustomScrollbar");
    }
}

//tab切换
function tabF(tabBtn,box,fn){
    $(tabBtn).each(function(){
        var _this = $(this);
        _this.click(function(){
            var _index = $(tabBtn).index(_this);
            _this.addClass("on").siblings().removeClass("on");
            $(box).css("display","none").eq(_index).css("display","block");
            if(fn){
                fn();
            }
        })
    })
};
/*条件选择(只能选择一个)*/
function selectTab(selectTab,activeClass){
    $(selectTab).click(function () {
        var _this = $(this);
        _this.addClass(activeClass);
        _this.siblings().removeClass(activeClass);
    })
};
