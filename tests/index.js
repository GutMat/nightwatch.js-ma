module.exports = {
  // Rejestracja nowego użytkownika
  "Gdy Jestem na stronie startowej aplikacji": function (browser) {
    browser.url("http://localhost:3000/").waitForElementVisible("body");
  },
  "Kiedy Wybiorę opcję założenia nowego konta": function (browser) {
    browser
      .waitForElementVisible("a[data-test=signup]")
      .assert.containsText(
        "a[data-test=signup]",
        "Don't have an account? Sign Up"
      )
      .click("a[data-test=signup]");
  },
  "Wtedy Powinienem zobaczyć formularz rejestracji nowego użytkownika":
    function (browser) {
      browser
        .waitForElementVisible("h1[data-test=signup-title]")
        .assert.containsText("h1[data-test=signup-title]", "Sign Up");
    },
  "Kiedy Wprowadzę moje imię": function (browser) {
    browser.setValue("input#firstName", "Mateusz");
  },
  "Oraz Wprowadze moje nazwisko": function (browser) {
    browser.setValue("input#lastName", "Gut");
  },
  "Oraz Wprowadze moją nazwę użytkownika": function (browser) {
    browser.setValue("input#username", "GutMat");
  },
  "Oraz Wprowadze moje hasło użytkownika": function (browser) {
    browser.setValue("input#password", "Test123$%");
  },
  "Oraz Wprowadze powtórnie moje hasło": function (browser) {
    browser.setValue("input#confirmPassword", "Test123$%");
  },
  "Wtedy Powinienem móc założyć nowe konto": function (browser) {
    browser.isEnabled("button[data-test=signup-submit]");
  },
  "Kiedy Założę nowe konto": function (browser) {
    browser.click("button[data-test=signup-submit]");
  },
  "Wtedy Powinienem zobaczyć ekran startowy": function (browser) {
    browser.waitForElementVisible("h1").assert.containsText("h1", "Sign in");
  },
  // Logowanie nowo założonego użytkownika do aplikacji
  "Kiedy Wprowadzę moją nazwę użytkownika": function (browser) {
    browser.setValue("input#username", "GutMat");
  },
  "Oraz Wprowadze moje hasło": function (browser) {
    browser.setValue("input#password", "Test123$%");
  },
  "Wtedy Powinienem móc zalogować się do aplikacji": function (browser) {
    browser.isEnabled("button[data-test=signin-submit]");
  },
  "Kiedy Zaloguje się do aplikacji": function (browser) {
    browser.click("button[data-test=signin-submit]");
  },
  // Wprowadzenie danych nowego użytkownika na ekranie startowym
  "Kiedy Loguje się po raz pierwszy": function (browser) {
    browser.waitForElementVisible("div[data-test=user-onboarding-dialog]");
  },
  "Wtedy Powinienem zobaczyć formularz startowy": function (browser) {
    browser.assert.containsText(
      "div[data-test=user-onboarding-dialog-title]",
      "Get Started with Real World App"
    );
  },
  "Kiedy Rozpocznę wypełnianie formularza": function (browser) {
    browser.click("button[data-test=user-onboarding-next]");
    browser.assert.containsText(
      "div[data-test=user-onboarding-dialog-title]",
      "Create Bank Account"
    );
  },
  "Oraz Wprowadze nazwę mojego banku": function (browser) {
    browser.setValue(
      "input#bankaccount-bankName-input",
      "Narodowy Bank Polski"
    );
  },
  "Oraz Wprowadze numer identyfikacyjny banku": function (browser) {
    browser.setValue("input#bankaccount-routingNumber-input", "123456789");
  },
  "Oraz Wprowadze numer konta bankowego": function (browser) {
    browser.setValue("input#bankaccount-accountNumber-input", "987654321");
  },
  "Oraz Potwierdzę wprowadzone dane": function (browser) {
    browser.assert
      .containsText("button[data-test=bankaccount-submit]", "SAVE")
      .click("button[data-test=bankaccount-submit]");
  },
  "Wtedy Powinienem móc zakończyć wypełnianie formularza": function (browser) {
    browser.assert.containsText(
      "div[data-test=user-onboarding-dialog-title]",
      "Finished"
    );
    browser.assert
      .containsText("button[data-test=user-onboarding-next]", "DONE")
      .click("button[data-test=user-onboarding-next]");
    browser.expect.element("div[data-test=user-onboarding-dialog]").to.not.be
      .present;
  },
  "Gdy Jestem zalogowany i wypełniłem formularz startowy": function (browser) {
    browser.assert.containsText("h6[data-test=sidenav-username]", "GutMat");
    browser.elements("css selector", "li.MuiListItem-root", (result) => {
      browser.assert.ok(result.value.length > 1);
    });
  },
  // Dodanie nowej transakcji
  "Wtedy Powinienem móc dodać nową transakcję": function (browser) {
    browser.assert
      .containsText("a[data-test=nav-top-new-transaction]", "NEW")
      .click("a[data-test=nav-top-new-transaction]");
    browser.assert.urlContains("/transaction/new");
  },
  "Kiedy Wybiorę drugą osobę do wykonania transakcji": function (browser) {
    browser.click("li.MuiListItem-root");
  },
  "Oraz Wprowadze kwotę transakcji": function (browser) {
    browser.setValue("input#amount", "100");
  },
  "Oraz Wprowadze tytuł transakcji": function (browser) {
    browser.setValue("input#transaction-create-description-input", "Pożyczka");
  },
  "Wtedy Mogę wykonać daną transakcję": function (browser) {
    browser.isEnabled("button[data-test=transaction-create-submit-request]");
    browser.click("button[data-test=transaction-create-submit-request]");
    browser.waitForElementVisible("div[data-test=alert-bar-success]");
    browser.assert.containsText(
      "div[data-test=alert-bar-success]",
      "Transaction Submitted!"
    );
  },
};
