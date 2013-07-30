function onLoad() 
{
	
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() 
{
    // Register the event listener
    navigator.splashscreen.show();
    document.addEventListener("menubutton", onMenuKeyDown, false);

}

// Handle the menu button
//
function onMenuKeyDown() 
{
	window.location.assign("#W_Menu");
}

function onPlaySeq()
{
	alert("Hola...");
}

function CloseApp()
{
	if(navigator.app)
	{
        navigator.app.exitApp();
	}
	else 
		if(navigator.device)
		{
        	navigator.device.exitApp();
		}
}
function AddItem(id)
{
	var ListSender = document.getElementById(id);
	
	ListSender.innerHTML += "<li data-theme='c' class='ui-li ui-li-static ui-btn-up-c'>3</li>";
}

