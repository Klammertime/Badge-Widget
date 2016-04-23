(function($) {
    $(document).ready(function() {
        var insigniaList;
        $.fn.insignia = function(usernameTreehouse, usernameCodeschool) {
            this.empty();
            if (usernameCodeschool) {
                getBadges2(usernameCodeschool, this);
            }

            if (usernameTreehouse) {
                getBadges(usernameTreehouse, this);
            }
            return this;
        };

        insigniaList = $('.insignia');

        $.each(insigniaList, function(i, val) {
            var insigniaEntry = insigniaList[i];
            $(val).insignia(insigniaEntry.dataset.codeschool, insigniaEntry.dataset.treehouse);
        });

        function getBadges2(usernameCodeschool, element) {
            $.ajax({
                url: 'https://codeschool.com/users/' + usernameCodeschool + '.json',
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                async: true,
                success: function(dataBack) {
                    $(element).append('<h3>I have taken ' + dataBack.badges.length + ' lessons and scored ' +
                        Number(dataBack.user.total_score).toLocaleString('en') + ' points at Code School!</h3><div class="badges"></div>');
                    var badge = dataBack.courses.completed;
                    badge.forEach(function(badge, i) {
                        if (i < 7) {
                            element.find('.badges').append('<li class="badgeImages"> <img src="' +
                                badge.badge + '" class="masterTooltip" title="' +
                                badge.title + '"/></li>');
                        }
                    });

                    $('.masterTooltip').hover(function() {
                        var title = $(this).attr('title');
                        $(this).data('tipText', title).removeAttr('title');
                        $('<span class="tooltip"></span>')
                            .text(title)
                            .appendTo(element)
                            .fadeIn('slow');
                    }, function() {
                        $(this).attr('title', $(this).data('tipText')); // Hover out
                        $('.tooltip').remove();
                    }).mousemove(function(e) {
                        var mousex = e.pageX + 20,
                            mousey = e.pageY + 10;
                        $('.tooltip')
                            .css({
                                top: mousey,
                                left: mousex
                            });
                    });
                },
                error: function(dataBack) {
                    console.log('Code School is not responding with data.');
                }
            });
        }

        function getBadges(usernameTreehouse, element) {
            $.ajax({
                url: 'https://teamtreehouse.com/' + usernameTreehouse + '.json',
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                async: true,
                success: function(dataBack) {
                    var badges = dataBack.badges.reverse(); // Retrieve most recent badges, so reverse the array
                    $(element).append('<h3>I have taken ' + badges.length + ' lessons and scored ' +
                        Number(dataBack.points.total).toLocaleString('en') + ' points at Treehouse!</h3><div class="badges2"></div>');
                    badges.forEach(function(badge, i) {
                        if (i < 7) {
                            element.find('.badges2').append('<li class="badgeImages"> <img src="' +
                                badge.icon_url + '" class="masterTooltip1" title="' +
                                badge.courses[0].title + '"/></li>');
                        }
                    });

                    $('.masterTooltip1').hover(function() {
                        var title = $(this).attr('title');
                        $(this).data('tipText', title).removeAttr('title');
                        $('<p class="tooltip1"></p>')
                            .text(title)
                            .appendTo('body')
                            .fadeIn('slow');
                    }, function() {
                        $(this).attr('title', $(this).data('tipText'));
                        $('.tooltip1').remove();
                    }).mousemove(function(e) {
                        var mousex = e.pageX + 20,
                            mousey = e.pageY + 10;
                        $('.tooltip1')
                            .css({
                                top: mousey,
                                left: mousex
                            });
                    });
                },
                error: function(dataBack) {
                    console.log('Treehouse is not responding with data.');
                }
            });
        }
    });
}(jQuery));