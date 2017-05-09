/// Business Logic
function BankAccount(name, initialDeposit) {
  this.name   = name;
  this.amount = initialDeposit;
}

/// User Interface Logic ///
$(function() {
  var account;
  function update() {
    $("#info h2").text(account.name);
    $("#info h3").text(account.amount);
  }

  $("form#signup-form").submit(function(event) {
    event.preventDefault();
    account = new BankAccount(
        $("input[name=name]").val(),
        $("input[name=initial]").val()
    )

    update();
  });
  // $("form#transaction-form").submit(function(event) {
  //   event.preventDefault();
  //
  // });
});
