var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('init', this.onInit, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onInit: function() {
        app.receivedEvent('init');
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	switch (id) {
    //test firebase
		case 'deviceready':
			window.FirebasePlugin.getValue("liveStatus", function(value) {
				alert(value);
				console.log(value);
			}, function(error) {
				alert(error);
			    console.error(error);
			});
			break;
    //load data
		case 'init':
			var page = event.target;    	
	    	  // Each page calls its own initialization controller.
	    	  if (myApp.controllers.hasOwnProperty(page.id)) {
	    	    myApp.controllers[page.id](page);
	    	  }
	    	
	    	  // Fill the lists with initial data when the pages we need are ready.
	    	  // This only happens once at the beginning of the app.
	    	  if (page.id === 'menuPage' || page.id === 'pendingTasksPage') {
	    	    if (document.querySelector('#menuPage')
	    	      && document.querySelector('#pendingTasksPage')
	    	      && !document.querySelector('#pendingTasksPage ons-list-item')
	    	    ) {
	    	      myApp.services.fixtures.forEach(function(data) {
	    	        myApp.services.tasks.create(data);
	    	      });
	    	    }
	    	  }
			break;
		default:
			break;
		}    	
    }
};

app.initialize();
// App logic.
window.myApp = {};
