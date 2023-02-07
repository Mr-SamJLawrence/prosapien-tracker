const completed =       document.getElementById("completed-exercises");
const exercise =        document.querySelector("[name='exercise-name']");
const weight =          document.querySelector("[name='weight']");
const reps =            document.querySelector("[name='reps']");
const newExercise =     document.createElement("div");
var exerciseCount =     0;
var exerciseString =    "";

function addExercise() {
    if (exercise.value && weight.value && reps.value) {
        exerciseCount++;
        newExercise.setAttribute("data-exercise-count",exerciseCount);
        exerciseString = exercise.value + ", " + weight.value.toString() + "kg, " + reps.value.toString() + " reps.";
        exerciseString = document.createTextNode(exerciseString);
        newExercise.appendChild(exerciseString);
        completed.appendChild(newExercise);
    }
}