function showDashboard() {
	const accountNumber = document.getElementById("account_number").value;
	const password = document.getElementById("password").value;
	
	// For demonstration purposes, a fixed account number and password are used
	if (accountNumber === "123456" && password === "password") {
		document.getElementById("login-form").style.display = "none";
		document.getElementById("dashboard").style.display = "flex";
	} else {
		alert("Incorrect account number or password. Please try again.");
	}
}
