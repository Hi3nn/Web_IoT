const firebaseConfig = {
    apiKey: "AIzaSyAxR8nweIZ-xB-7MW6n1nDiNoq2d-VXsMQ",
    authDomain: "smarthome-55278.firebaseapp.com",
    databaseURL: "https://smarthome-55278-default-rtdb.firebaseio.com",
    projectId: "smarthome-55278",
    storageBucket: "smarthome-55278.appspot.com",
    messagingSenderId: "1076507315555",
    appId: "1:1076507315555:web:5ec531d61a8ec190065756",
    measurementId: "G-L3L4HN80DQ"
  };



firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref("/smarthome/Nhiệt độ").on("value", function(snapshot){
	var nhietdo = snapshot.val();
	document.getElementById("nhietdo").innerHTML = nhietdo;
});

database.ref("/smarthome/Độ ẩm").on("value", function(snapshot){
	var doam = snapshot.val();
	document.getElementById("doam").innerHTML = doam;
});

database.ref("/smarthome/Ánh sáng").on("value", function(snapshot){
	var anhsang = snapshot.val();
	document.getElementById("anhsang").innerHTML = anhsang;
});

database.ref("/smarthome/Khí gas").on("value", function(snapshot){
	var khigas = snapshot.val();
	document.getElementById("khigas").innerHTML = khigas;
});


var btnOn1 = document.getElementById("dentran_on");
var btnOff1 = document.getElementById("dentran_off");

btnOn1.onclick = function() {
	database.ref("/smarthome").update({
		"Đèn trần" : 1
	});
}
btnOff1.onclick = function(){
	database.ref("/smarthome").update({
		"Đèn trần" : 0
	});
}

database.ref("/smarthome/Đèn trần").on("value", function(snapshot){
	var ss1 = snapshot.val();
	if(ss1==1)
	    document.getElementById("dentran").src = "https://cdn-icons-png.flaticon.com/512/5417/5417532.png"
    else
    	document.getElementById("dentran").src = "https://cdn-icons-png.flaticon.com/512/5418/5418315.png"
});


var btnOn2 = document.getElementById("tv_on");
var btnOff2 = document.getElementById("tv_off");

btnOn2.onclick = function() {
	database.ref("/smarthome").update({
		"TV" : 1
	});
}
btnOff2.onclick = function(){
	database.ref("/smarthome").update({
		"TV" : 0
	});
}

database.ref("/smarthome/TV").on("value", function(snapshot){
	var ss2 = snapshot.val();
	if(ss2==1)
	    document.getElementById("tv").src = "https://png.pngtree.com/png-vector/20220219/ourlarge/pngtree-modern-smart-tv-screen-png-png-image_4403081.png"
    else
    	document.getElementById("tv").src = "https://png.pngtree.com/png-vector/20230116/ourmid/pngtree-lcd-tv-screen-isolated-png-image_6565328.png"
});


var btnOn3 = document.getElementById("dieuhoa_on");
var btnOff3 = document.getElementById("dieuhoa_off");

btnOn3.onclick = function() {
	database.ref("/smarthome").update({
		"Điều hòa" : 1
	});
}
btnOff3.onclick = function(){
	database.ref("/smarthome").update({
		"Điều hòa" : 0
	});
}

database.ref("/smarthome/Điều hòa").on("value", function(snapshot){
	var ss3 = snapshot.val();
	if(ss3==1)
	    document.getElementById("dieuhoa").src = "https://thumbs.dreamstime.com/b/air-conditioner-mode-vector-icon-filled-flat-sign-mobile-concept-web-design-cooling-system-control-glyph-icon-symbol-184432796.jpg"
    else
    	document.getElementById("dieuhoa").src = "https://thumbs.dreamstime.com/b/air-conditioner-off-mode-line-icon-air-conditioner-off-mode-line-icon-linear-style-sign-mobile-concept-web-design-cooling-184039746.jpg"
});


var btnOn4 = document.getElementById("robot_on");
var btnOff4 = document.getElementById("robot_off");

btnOn4.onclick = function() {
	database.ref("/smarthome").update({
		"Robot Hút bụi" : 1
	});
}
btnOff4.onclick = function(){
	database.ref("/smarthome").update({
		"Robot Hút bụi" : 0
	});
}

database.ref("/smarthome/Robot Hút bụi").on("value", function(snapshot){
	var ss4 = snapshot.val();
	if(ss4==1)
	    document.getElementById("robot").src = "https://www.shutterstock.com/image-illustration/top-view-robot-vacuum-cleaner-260nw-1165570927.jpg"
    else
    	document.getElementById("robot").src = "https://www.shutterstock.com/image-illustration/top-view-robot-vacuum-cleaner-260nw-1165570840.jpg"
});


var btnOn5 = document.getElementById("quattran_on");
var btnOff5 = document.getElementById("quattran_off");

btnOn5.onclick = function() {
	database.ref("/smarthome").update({
		"Quạt trần" : 1
	});
}
btnOff5.onclick = function(){
	database.ref("/smarthome").update({
		"Quạt trần" : 0
	});
}

database.ref("/smarthome/Quạt trần").on("value", function(snapshot){
	var ss5 = snapshot.val();
	if(ss5==1)
	    document.getElementById("quattran").src = "https://cdn2.iconfinder.com/data/icons/electrical-and-electronic-home-appliances-problem-/207/electrical-home-problem-1-512.png"
    else
    	document.getElementById("quattran").src = "https://cdn0.iconfinder.com/data/icons/appliance-1-1-1/1024/ceiling_fan3-512.png"
});


var btnOn6 = document.getElementById("ghe_on");
var btnOff6 = document.getElementById("ghe_off");

btnOn6.onclick = function() {
	database.ref("/smarthome").update({
		"Ghế Massage" : 1
	});
}
btnOff6.onclick = function(){
	database.ref("/smarthome").update({
		"Ghế Massage" : 0
	});
}

database.ref("/smarthome/Ghế Massage").on("value", function(snapshot){
	var ss6 = snapshot.val();
	if(ss6==1)
	    document.getElementById("ghe").src = "https://cdn2.vectorstock.com/i/1000x1000/93/51/massage-chair-icon-on-white-background-vector-18149351.jpg"
// }"
    else
    	document.getElementById("ghe").src = "https://cdn4.vectorstock.com/i/1000x1000/93/58/massage-chair-icon-on-white-background-vector-18149358.jpg"
});
