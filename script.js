function calculateVolume() {

    // Get the input values
    const radius = parseFloat(document.getElementById('inRadius').value);
    const height = parseFloat(document.getElementById('inHeight').value);
    const unit = parseFloat(document.getElementById("inUnit").value);
    //console.log(radius, height, unit); // Debugging output

    // Perform the calculation
    const volume = Math.PI * Math.pow(radius, 2) * height / unit; // Perform V = PI * r^2 * h

    // Build output message
    const resultMessage = "Volume = " + volume.toFixed(2) + " cm<sup>3</sup>";

    // Display result
    document.getElementById("result").innerHTML = resultMessage;

    // Prevent form submission
    return false;
};