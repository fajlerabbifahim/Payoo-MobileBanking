const addMoneyBtn = document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyNumber = document.getElementById("add-money-number").value;
    const addMoneyAmount = document.getElementById("add-money-amount").value;
    const inputMoneyAmount = parseFloat(addMoneyAmount);
    const addMoneyPin = document.getElementById("add-money-pin").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    let updateBalance = parseFloat(mainBalance);
    if (addMoneyPin === "1234") {
      updateBalance += inputMoneyAmount;
    } else {
      alert("Murubi Murubi Umm ummm Apnar Input Bhul");
    }
    document.getElementById("main-balance").innerText = updateBalance;
    document.getElementById("add-money-number").value = "";
    document.getElementById("add-money-amount").value = "";
    document.getElementById("add-money-pin").value = "";
  });
