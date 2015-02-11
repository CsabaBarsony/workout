Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound"
});

Router.route("/exercises", {
	name: "exercises",
	waitOn: function(){
		return [
			Meteor.subscribe("exercises")
		];
	}
});
