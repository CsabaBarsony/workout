if(Exercises.find().count() === 0){
	var exercises = [
		{ name: "pushups" },
		{ name: "pullups"},
		{ name: "squat" },
		{ name: "deadlift" }
	];

	_.map(exercises, function(exercise){
		Exercises.insert(exercise);
	});
}
