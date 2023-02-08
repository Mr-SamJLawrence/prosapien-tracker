class gymSession {
    
    constructor() {
        this.exercNameInput = document.querySelector('textarea[name="exercise-name"]');
        this.weightInput = document.querySelector('input[name="weight"]');
        this.repsInput = document.querySelector('input[name="reps"]');
        this.completedExercContainer = document.getElementById('completed-exercises');
    }

    addExercise() {
        if (this.exercNameInput.value && this.weightInput.value && this.repsInput.value) {
            var exercToAdd = this.createExercElem();
            document.getElementById('completed-exercises').appendChild(exercToAdd);
            this.exercNameInput.value = "";
            this.weightInput.value = "";
            this.repsInput.value = "";
        }
    }

    createExercElem() {
        var exercElem = document.createElement("div");
        exercElem.innerHTML = '<span class="exerc-name">' + this.exercNameInput.value + '</span>, ';
        exercElem.innerHTML += 'weight: <span class="weight">' + this.weightInput.value + '</span>(kg), ';
        exercElem.innerHTML += 'reps: <span class="reps">' + this.repsInput.value + '</span>';
        exercElem.innerHTML += '<span class="delete-exercise">x</span>';
        return exercElem;
    }

    removeExercElem() {

    }

    exercsToJson() {
        if (this.completedExercContainer.children.length > 0) {

        }
    }

    submitSession() {

    }
}