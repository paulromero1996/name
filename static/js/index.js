//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor1").innerHTML="Encendido";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	document.getElementById("sensor1").innerHTML="Apagado";
}


function LED2_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor2").innerHTML="Encendido";
	message = new Paho.MQTT.Message("ON2");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	
}
function LED2_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF2");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	document.getElementById("sensor2").innerHTML="Apagado";
}

function LED3_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor3").innerHTML="Encendido";
	message = new Paho.MQTT.Message("ON3");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	
}
function LED3_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF3");
    	message.destinationName = "prromero.fis@unach.edu.ec/test1";
    	client.send(message);
	document.getElementById("sensor3").innerHTML="Apagado";
}





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "prromero.fis@unach.edu.ec",
    password: "123",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("prromero.fis@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "prromero.fis@unach.edu.ec/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("cnt").innerHTML=message.payloadString;
  }
  
