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
                
                // plugins
                'jRumble' : 'vendor/jrumble/jquery.jrumble.1.3.min',
                'jQuery.jqplot' : 'vendor/jqplot/js/jquery.jqplot.min',
                'jQuery.jqplot.DonutRenderer' : 'vendor/jqplot/js/jqplot.donutRenderer.min',
                'jQuery.jqplot.PieRenderer' : 'vendor/jqplot/js/jqplot.pieRenderer.min'
            },
            shim: {
            	'jRumble' : [],
                'jQuery.jqplot' : [],
                'jQuery.jqplot.DonutRenderer': ['jQuery.jqplot'],
                'jQuery.jqplot.PieRenderer' : ['jQuery.jqplot']
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
