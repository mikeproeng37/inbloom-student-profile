define(["mustache!templates/userInactivityModal.hbs"],
    function (userInactivityModalTemplate) {
        var GroupSelectionView = Backbone.View.extend({
            el: $('#studentProfileContainer'),
            render: function () {                
                var html = userInactivityModalTemplate();
                this.$el.append(html);
                return this.$el;
            }
        });

        return GroupSelectionView;
    }
);