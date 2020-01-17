describe('Demo Uber', function() {

    before(browser => browser.url('https://www.uber.com/fr/fr/'));
  
    test('Open Uber Website', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Uber')
        .assert.visible('head')
    });

    test('Check block login in the header wrapper', function (browser) {
        browser
            .waitForElementVisible('body')
            .assert.visible('button aria-label="Inscription"')
            .assert.visible('button aria-label="Connexion"')
    });

    test('Check login block in two sections', function (browser) {
        browser 
            .waitForElementVisible('body')
            .click('button aria-label="Connexion"')
            .assert.visibles('<span as="span" class="al if fp ig ih ii ij ik il im in io ip ir">Connexion chauffeur</span>')
            .assert.visible('<span as="span" class="al if fp ig ih ii ij ik il im in io ip ir">Connexion passager</span>')
    });

    test('Check login chauffeur section', function (browser) {
        browser
            .waitForElementVisible('body')
            .click('button aria-label="Connexion"')
            .click('<span as="span" class="al if fp ig ih ii ij ik il im in io ip ir">Connexion chauffeur</span>')
    });

    test('Check login passager section', function (browser) {
        browser
        .waitForElementVisible('body')
        .click('button aria-label="Connexion"')
        .click('<span as="span" class="al if fp ig ih ii ij ik il im in io ip ir">Connexion passager</span>')
    });

    test('Check Registration block in two sections', function(browser ) {
        browser
            .waitForElementVisible('body')
            .click('button aria-label="Inscription')
            .assert.visible('<span as="span" class="al if gf fp cu ig ih ii ij ik il im in io ip iq ir">Devenez chauffeur</span>')
            .assert.visible('<span as="span" class="al if gf fp cu ig ih ii ij ik il im in io ip iq ir">Commander une course</span>')
    });
  
    after(browser => browser.end());
  });