// import the main config file
require(["main"],
    function (mainConfig) {
        require.config({
            baseUrl: "content/",
            paths: {
                // group selection specific
            }
        });

        // initialize the app by calling the main view
        require(["js/views/groupSelection"],
            function (GroupSelectionView) {
                // render the main view
                var groupSelectionView = new GroupSelectionView();
                groupSelectionView.render();
            }
        );

    }
);
