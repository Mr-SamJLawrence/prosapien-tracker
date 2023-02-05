        // Default date picker to today's date, set valid date range from 1 year ago to today 
        const dateInput = document.getElementById("date-input");
        var date = new Date();
        dateInput.valueAsDate = date;
        dateInput.setAttribute("max", date.toISOString().split('T')[0]);
        date.setFullYear(date.getFullYear() - 1);
        dateInput.setAttribute("min", date.toISOString().split('T')[0]);