<x-app-layout>
    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form method="POST" action="{{ route('gymsessions.store') }}">
            @csrf

            <div id="date-section" class="w-fit mx-auto">
                <label for="date" class="mr-4">Date:</label>
                <input required type="date" name="date" id="date-input" value="" class="inline border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
            </div>

            <hr class="my-5">

            <div id="detail-section" class="w-fit mx-auto border border-gray-300 rounded-md">
                <div class="w-fit mx-auto">
                    <label for="exercise-name" class="inline-block align-top mt-2 mr-4">Exercise:</label>
                    <textarea name="exercise-name" class="inline-block w-80 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
                </div>
                <span class="block w-10 mx-auto">Set</span>
                <div class="inline-block w-60 mx-auto my-5">
                    <label for="weight" class="inline-block w-16 mr-4">Weight:</label>
                    <input type="number" name="weight" value="" class="w-28 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <span class="text-slate-300">(kg)</span>
                </div>
                <div class="inline-block w-60 mx-auto my-5">
                    <label for="Reps" class="inline-block w-16 mr-4">Reps:</label>
                    <input type="number" name="reps" value="" class="w-28 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                </div>
            </div>

            <button type="button" onclick="doSesh()">Add</button>

            <div id="completed-exercises">
            </div>

            <hr class="my-5">

            <x-input-error :messages="$errors->get('exercise-name')" class="mt-2" />

            <x-primary-button>Save session</x-primary-button>
            
        </form>
    </div>
    <script src="\js\setdatepicker.js"></script>
    <script src="\js\exercises.js"></script>
</x-app-layout>

<script>

    sesh = new gymSession;

    function doSesh() {
        sesh.addExercise();
    }
</script>