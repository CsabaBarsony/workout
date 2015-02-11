Meteor.publish("exercises", function(){
	return Meteor.exercises.find();
});
