document.getElementById("volumeCalculator").addEventListener("submit", function(event) {
   
    // Prevent form submission
    event.preventDefault(); 

    // Get the input values
    const radius = parseFloat(document.getElementById("inRadius").value);
    const height = parseFloat(document.getElementById("inHeight").value);
    const unit = parseFloat(document.getElementById("inUnit").value);
    //console.log(radius, height, unit); // Debugging output

    // Perform the calculation
    const volume = Math.PI * Math.pow(radius, 2) * height / unit; // Perform V = PI * r^2 * h

    // Display result in disabled input
    document.getElementById("result").value = volume.toFixed(2);
});  
