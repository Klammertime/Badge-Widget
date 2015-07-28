

;(function($) {

    $(document).ready(function() {
        var insigniaList = $('.insignia');
        for(var i = 0; i < insigniaList.length; i++){
            var insigniaEntry = insigniaList[i];
            $(insigniaEntry).insignia(insigniaEntry.dataset.codeschool, insigniaEntry.dataset.treehouse);  
        } 
    });

    $.fn.insignia = function(usernameTreehouse, usernameCodeschool) {
        this.empty();
        if (usernameCodeschool) {
            getBadges2(usernameCodeschool, this);
        }

        if (usernameTreehouse) {
            getBadges(usernameTreehouse, this);
        }

    }

    function getBadges2(usernameCodeschool, element) {
        $.ajax({
            url: "https://codeschool.com/users/" + usernameCodeschool + ".json",
            type: "GET",
            crossDomain: true,
            dataType: "jsonp",
            async: true,
            success: function(dataBack) {
                $(element).append("<h3>I have taken " + dataBack.badges.length + " lessons and scored " + dataBack.user.total_score +
                    " points at Codeschool!</h3><div class=\"badges\"></div>");
                var badge = dataBack.courses.completed;
                badge.forEach(function(badge, i) {
                    if (i < 7) {
                        element.find(".badges").append("<li class=\"badgeImages\"> <img src='" + badge.badge + "' class=\"masterTooltip\" title='" + badge.title + "'/></li>");
                    }
                });

                // Tooltip 
                $('.masterTooltip').hover(function(){
                    // Hover over code
                    var title = $(this).attr('title');
                    $(this).data('tipText', title).removeAttr('title');
                    $('<span class="tooltip"></span>')
                    .text(title)
                    .appendTo(element)
                    .fadeIn('slow');
                }, function() {
                    // Hover out code
                    $(this).attr('title', $(this).data('tipText'));
                    $('.tooltip').remove();
                }).mousemove(function(e) {
                    var mousex = e.pageX + 20; //Get X coordinates
                    var mousey = e.pageY + 10; //Get Y coordinates
                    $('.tooltip')
                    .css({ top: mousey, left: mousex })
                });
            },
            error: function(dataBack) {
                console.log("something went wrong.");
                //this happen when call fails
            }
        });
    }

    function getBadges(usernameTreehouse, element) {
        $.ajax({
            url: "http://teamtreehouse.com/" + usernameTreehouse + ".json",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            async: true,
            success: function(dataBack) {
                var badges = dataBack.badges;
                badges = badges.reverse();
                $(element).append("<h3>I have taken " + badges.length + " lessons and scored " + dataBack.points.total +
                    " points at Treehouse!</h3><div class=\"badges2\"></div>");
                badges.forEach(function(badge, i) {
                    if (i < 7) {
                        element.find(".badges2").append("<li class=\"badgeImages\"> <img src='" + badge.icon_url + "' class=\"masterTooltip1\" title='" + badge.courses[0].title + "'/></li>");
                    }
                });
                // Tooltip 
                $('.masterTooltip1').hover(function(){
                    // Hover over code
                    var title = $(this).attr('title');
                    $(this).data('tipText', title).removeAttr('title');
                    $('<p class="tooltip1"></p>')
                    .text(title)
                    .appendTo('body')
                    .fadeIn('slow');
                }, function() {
                    // Hover out code
                    $(this).attr('title', $(this).data('tipText'));
                    $('.tooltip1').remove();
                }).mousemove(function(e) {
                    var mousex = e.pageX + 20; //Get X coordinates
                    var mousey = e.pageY + 10; //Get Y coordinates
                    $('.tooltip1')
                    .css({ top: mousey, left: mousex })
                });

            },
            error: function(dataBack) {
                console.log("something went wrong.");
                //this happen when call fails
            }
        });
    }

}(jQuery));