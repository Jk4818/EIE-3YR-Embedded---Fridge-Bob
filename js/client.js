window.onload =startConnect()

var d = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

y = d.getFullYear();
m = monthNames[d.getMonth()];
d = d.getDate();
document.getElementById("date").innerHTML = m + " " + d + ", " + y;
document.getElementById("msg-date").innerHTML = m + " " + d + ", " + y;


var time_array = document.getElementsByClassName("msg-time");


// Called after form input is processed
function startConnect() {
    // Generate a random client ID
    clientID = "clientID-" + parseInt(Math.random() * 100);

    // Fetch the hostname/IP address and port number from the form
    host = "test.mosquitto.org";
    port = "8080";

    // Print output for the user in the messages div
    // document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    // document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port),clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client, if successful, call onConnect function
    client.connect({ 
        onSuccess: onConnect,
    });
}

// Called when the client connects
function onConnect() {
    // Fetch the MQTT topic from the form
    topic_readings = "IC.embedded/jhat/sensors/readings";
    topic_connection = "IC.embedded/jhat/sensors/connect_ack";

    // Print output for the user in the messages div
    // document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic_readings + '</span><br/>';
   

    // Subscribe to the requested topic
    client.subscribe(topic_readings);
    client.subscribe(topic_connection);

    client.send("IC.embedded/jhat/sensors/connect_req", "Connected", 1, true)
    
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    // document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        // document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
    }
}

function addData(chart, label, data) {
    if(chart.data.labels.length > 19) {
        chart.data.labels.splice(0, 1);
        chart.data.datasets[0].data.splice(0,1);
    }

    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function message_board(err, time_all, health){
    if(err == "1"){
        // temp too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting warm!</p></div>')
    }
    else if(err == "2"){
        // temp too low
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting a bit chilly!</p></div>')
    }
    else if(err == "3"){
        // Fridge humidity too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')
    }
    else if(err == "4"){
        // Fridge TVOC/CO2 too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
    }
    if(err == "5"){
        // temp too high + fridge humidity
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting warm!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')

    }
    else if(err == "6"){
        // temp too low + fridge humidity
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting a bit chilly!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')

    }
    else if(err == "7"){
        // temp high + CO2 high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting warm!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
    }
    else if(err == "8"){
        // Fridge TVOC/CO2 too high + temp too low 
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting a bit chilly!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
    }
    else if(err == "9"){
        //  CO2 high + humidity too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
    }
    else if(err == "10"){
        // temp high + CO2 high + humidity too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting warm!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
    
    }
    else if(err == "11"){
        // Fridge TVOC/CO2 too high + temp too low + humidity too high
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Your fridge is getting a bit chilly!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>The air quality is pretty crap in here!</p></div>')
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message alert"><strong><p>Alert!</p></strong><p>Fridge humidity too high!</p></div>')

    }

    if(health < 40){
        document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="message danger"><strong><p>Danger!</p></strong><p>Fridge Bob is dying!</p></div>')
    }
    document.getElementById("messaging").insertAdjacentHTML('afterbegin','<div class="current-date"><p class="msg-time"></p></div>')
    time_array[0].innerHTML = time_all;
}

// Called when a message arrives
function onMessageArrived(message) {

    
    console.log("onMessageArrived: " + message.payloadString);

    if(message.destinationName == "IC.embedded/jhat/sensors/readings"){
        var split_data = message.payloadString.split(",");

        
        var d = new Date();
        var h = 0;
        var m = 0;
        if(d.getHours() < 10){
            h = '0'+d.getHours();
        }
        else{
            h = d.getHours();
        }
        if(d.getMinutes() < 10){
            m = '0'+d.getMinutes();
        }
        else{
            m = d.getMinutes();
        }
        time = h + ':' + m;
        time_all = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        addData(LineChart0, time, parseInt(split_data[0]));
        addData(LineChart1, time, parseInt(split_data[1]));
        addData(LineChart2, time, parseInt(split_data[2]));
        addData(LineChart3, time, parseInt(split_data[3]));
        
        $('.circle .bar').circleProgress('value', parseFloat(split_data[5])/100);
        
        // document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
        document.getElementById("live-temp").innerHTML =  split_data[0] + '°';
        document.getElementById("live-hum").innerHTML =  split_data[1] + '%';
        document.getElementById("live-air").innerHTML =  split_data[3] + ' ppb';


        
        message_board(split_data[4], time, split_data[5])
    } 
    else if(message.destinationName == "IC.embedded/jhat/sensors/connect_ack"){
        var split_data = message.payloadString.split(",");

        for(i=0; i<split_data.length; i=i+7){
            time = split_data[i+6]
            addData(LineChart0, time, parseInt(split_data[i]));
            addData(LineChart1, time, parseInt(split_data[i+1]));
            addData(LineChart2, time, parseInt(split_data[i+2]));
            addData(LineChart3, time, parseInt(split_data[i+3]));
            message_board(split_data[i+4], time, split_data[i+5])
        }

        $('.circle .bar').circleProgress('value', parseFloat(split_data[split_data.length-2])/100)

        document.getElementById("live-temp").innerHTML =  split_data[split_data.length-7] + '°';
        document.getElementById("live-hum").innerHTML =  split_data[split_data.length-6] + '%';
        document.getElementById("live-air").innerHTML =  split_data[split_data.length-4] + ' ppb';
    }
}

// Send data when calibration settings are changed
function onCalibrate(){
    var slider = document.getElementById("myRange");
    var toSend = JSON.stringify(slider.value)
    client.send("IC.embedded/jhat/sensors/calibration", toSend, 1, true)
}

// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    // document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
}