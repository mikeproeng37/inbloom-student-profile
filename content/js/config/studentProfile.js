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
                'studentAttendanceView' : 'js/views/studentProfile/studentAttendance',
                'studentTestScoresView' : 'js/views/studentProfile/studentTestScores',
                'studentChartView' : '/js/views/studentProfile/studentChart',
                'viewFactory' : 'js/config/viewFactory',
                
                // plugins
                'jRumble' : 'vendor/jrumble/jquery.jrumble.1.3.min',
                'jQuery.jqplot' : 'vendor/jqplot/js/jquery.jqplot.min',
                'jQuery.jqplot.DonutRenderer' : 'vendor/jqplot/js/jqplot.donutRenderer.min',
                'jQuery.jqplot.PieRenderer' : 'vendor/jqplot/js/jqplot.pieRenderer.min',
                'jQuery.jqplot.BarRenderer' : 'vendor/jqplot/js/jqplot.barRenderer.min',
                'jQuery.jqplot.CategoryAxisRenderer' : 'vendor/jqplot/js/jqplot.categoryAxisRenderer.min',
                'jQuery.jqplot.PointLabels' : 'vendor/jqplot/js/jqplot.pointLabels.min',
            },
            shim: {
            	'jRumble' : [],
                'jQuery.jqplot' : [],
                'jQuery.jqplot.DonutRenderer': ['jQuery.jqplot'],
                'jQuery.jqplot.PieRenderer' : ['jQuery.jqplot'],
                'jQuery.jqplot.BarRenderer' : ['jQuery.jqplot'],
                'jQuery.jqplot.CategoryAxisRenderer' : ['jQuery.jqplot'],
                'jQuery.jqplot.PointLabels' : ['jQuery.jqplot'],
            }
        });

        // initialize the app by calling the main view
        require(["studentProfileMainView"],
            function (StudentProfileMainView, eventBus) {
                // render the main view
                var studentProfileView = new StudentProfileMainView();
            }
        );

    }
);
