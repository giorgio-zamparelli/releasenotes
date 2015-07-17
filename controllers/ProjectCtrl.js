app.controller('ProjectCtrl', function ($scope) {
                
    $scope.types = ['ADDED', 'CHANGED', 'FIXED'];

    $scope.release = {

        'version' : '0.0.1',
        'notes' : [{'type': 'ADDED'}]

    };

    $scope.$watch('release.notes', function(value, oldValue) {

        var containsAddedNotes = false;
        var containsChangedNotes = false;
        var containsFixedNotes = false;

        var i = 0;
        while (i < $scope.release.notes.length && (!containsAddedNotes || !containsChangedNotes || !containsFixedNotes) ) {

            if ($scope.release.notes[i].type == 'ADDED') {
                containsAddedNotes = true;
            } else if ($scope.release.notes[i].type == 'CHANGED') {
                containsChangedNotes = true;
            } else if ($scope.release.notes[i].type == 'FIXED') {
                containsFixedNotes = true;
            }

            i++;

        };


        $scope.containsAddedNotes = containsAddedNotes;
        $scope.containsChangedNotes = containsChangedNotes;
        $scope.containsFixedNotes = containsFixedNotes;

    }, true);

    /*

    $scope.release = {

        'version' : '0.16.0',
        'notes' : [

            {
                'type': 'ADDED',
                'title': 'Private repository list and detailed view added to web UI',
                'description': 'manage your private repositories from Tutum\'s Registry; this includes repositories added to Tutum from other registries (ie. Quay.io or DockerHub).'
            },

            {
                'type': 'ADDED',
                'title': 'Tutum Build',
                'description': 'build Docker images from your Github repos on your own infrastructure right from within Tutum. No more unpredictable build times or waiting forever in a queue; you\’re in full control of your own Docker builds.'
            },

            {
                'type': 'CHANGED',
                'title': 'Autorestart',
                'description': 'the UI now offers a 1:1 match to the more flexible API implementation. Select from the following options: off, always, on failure.'
            }

        ]

    };

    */

    $scope.addNote = function() {

        $scope.release.notes.push({'type':'ADDED'});

    }

    var client = new ZeroClipboard($("#copyButton"));

    client.on( "copy", function (event) {
        var clipboard = event.clipboardData;
        clipboard.setData( "text/plain", document.getElementById("emailDiv").innerHTML );
    });

});