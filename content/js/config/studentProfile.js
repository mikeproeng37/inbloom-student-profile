// import the main config file
require(["main"],
    function (mainConfig) {
        require.config({
            baseUrl: "/",
            paths: {
                // student profile specific
                'studentModel' : 'js/models/student',
                'studentProfileMainView' : 'js/views/studentProfile/studentProfileMain',
                'studentInfoBoxView' : 'js/views/studentProfile/studentInfoBox',
                'jqplot' : 'vendor/jqplot/js/jquery.jqplot.min',
                'jqPlotDonut' : 'vendor/jqplot/js/jqplot.donutRenderer.min',
                'jqPlotPie' : 'vendor/jqplot/js/jqplot.pieRenderer.min'
            },
            shim: {
                'jqplot' : {
                    deps: ['jqplotDonut', 'jqplotPie']
                }
            }
        });

        // initialize the app by calling the main view
        require(["studentProfileMainView"],
            function (StudentProfileMainView) {
                // render the main view
                var studentProfileView = new StudentProfileMainView();
            }
        );

    }
);
