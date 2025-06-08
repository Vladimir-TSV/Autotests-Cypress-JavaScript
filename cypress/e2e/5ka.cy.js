
// Пред условия
beforeEach('Начало теста', function () {
    Cypress.on('uncaught:exception', (err) => {
         if (err.message.includes('process is not defined')) {return false;}
    });
    cy.visit('https://5ka.ru/');
    cy.get('.headerMenu_text__9ICIG').click();
    cy.get('[href="/packet/"] > .chakra-text').click();
           });

// Тесты
it('Нажатие кнопки "Каталог"', function () {
    cy.visit('https://5ka.ru/');
    cy.get('[data-qa="search-panel-catalog-button"]').click();
    cy.get('.sidebar_categoriesContainer__ODiDD > .chakra-heading').should('contain','Категории');
});

it('Переход на стрианцу "Пакет"', function () {  
    cy.url().should('contain','https://5ka.ru/packet/'); 
});

it('Первый блок', function () {
    cy.get('.packet_headerTitle__ZvXGq').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim();
    expect(normalizedText).to.include('Прокачайтесвоё приложение «Пятёрочка»');
  });
    
    cy.get('.packet_headerSubtitle__KBwdh').should('be.visible').and('contain','Бесплатные доставки, больше кешбэка и особые условия у партнёров с сервисом «Пакет»');

    cy.get('.packet_headerText__bDH7t > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy?bundle=standard199?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth_0524&utm_content=tc5-web_our-page_full-price"] > div').should('be.visible').and('contain','Подключить за 199₽/мес.');

    cy.get('.packet_headerText__bDH7t > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy_promo?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth-promo_0524&utm_content=tc5-web_our-page_price-1rub"] > div').should('be.visible').and('contain','Ввести промокод');

    cy.get('.packet_headerText__bDH7t > .packet_buttonGroup___x0Tf > .packet_buttonGroupLegalNotice__6RJlu').should('be.visible').and('contain','Нажимая на кнопку, вы принимаете пользовательское соглашение и политику конфиденциальности'); 
});

it('Второй блок', function () {
    cy.get('.packet_headerImage__2kbvK').should('be.visible').and('have.attr','src').and('include','header-image.png');

    cy.get('.packet_earnPoints__sxsoh').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');

    cy.get('.packet_earnPointsImage__25svU').should('be.visible').and('have.attr','src').and('include','earn-points.png');

    cy.get('.packet_earnPointsText__aRDRv > .packet_textBlockHeader__f_k7a').should('be.visible').and('contain','До 50% кешбэка с сервисом «Пакет»');

    cy.get('.packet_earnPointsText__aRDRv > div').should('be.visible').and('contain','С сервисом «Пакет» базовый кешбэк программы лояльности увеличивается до 5%. Апельсинки начисляются за каждую покупку на карту «X5 Клуба».'); 
});

it('Третий блок', function () {
    cy.get('.packet_connectHeader___WBkO').should('be.visible').and('contain','Ого! А как?');

    cy.get('.packet_connectContainerText__ORF_y > .packet_textBlockHeader__f_k7a').should('be.visible').and('contain','Подключите сервис «Пакет»');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(1) > img').should('be.visible').and('have.attr','src').and('include','check.png');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(2) > img').should('be.visible').and('have.attr','src').and('include','check.png');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(3) > img').should('be.visible').and('have.attr','src').and('include','check.png');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(1) > div').should('be.visible').and('contain','Нажмите на кнопку «Подключить», если есть промокод — «Ввести промокод»');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(2) > div').and('contain','Авторизуйтесь в X5ID и оплатите сервис');

    cy.get('.packet_connectContainerTextList__QYcjW > :nth-child(3) > div').and('contain','Сервис «Пакет» появится в мобильном приложении «Пятёрочка»');

    cy.get('.packet_connectContainerText__ORF_y > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy?bundle=standard199?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth_0524&utm_content=tc5-web_our-page_full-price"] > div').should('be.visible').and('contain','Подключить за 199₽/мес.');

    cy.get('.packet_connectContainerText__ORF_y > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy_promo?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth-promo_0524&utm_content=tc5-web_our-page_price-1rub"] > div').should('be.visible').and('contain','Ввести промокод');

    cy.get('.packet_connectContainerText__ORF_y > .packet_buttonGroup___x0Tf > .packet_buttonGroupLegalNotice__6RJlu').should('be.visible').and('contain','Нажимая на кнопку, вы принимаете пользовательское соглашение и политику конфиденциальности'); 

    cy.get('.packet_connectContainerImage__2_jtw').should('be.visible').and('have.attr','src').and('include','connect-image.png'); 
});

it('Четвертый блок', function () {
    cy.get('.packet_scanCard__08h3J > .packet_cardImage__I_NEl').should('be.visible').and('have.attr','src').and('include','scan-card.png');

    cy.get('.packet_scanCardText__U7KDp > .packet_textBlockHeader__f_k7a').should('be.visible').and('contain','Сканируйте карту из приложения и получайте кешбэк');

    cy.get('.packet_scanCardText__U7KDp > div').should('be.visible').and('contain','Сервис «Пакет» привязывается к вашей карте «X5 Клуба». Обязательно сканируйте её перед покупкой. Следить за балансом Апельсинок можно в приложении «Пятёрочка».');

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(1)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(1) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','5%');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(1) > .packet_scanCardTileText__FVrdl').should('be.visible').and('contain','кешбэк на покупки и заказы');

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(2)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(2) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','5');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(2) > .packet_scanCardTileText__FVrdl').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('любимыхкатегорий') });

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(3)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(3) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','до 100%');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(3) > .packet_scanCardTileText__FVrdl').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('списания кешбэкана покупки') });

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(4)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(4) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','3');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(4) > .packet_scanCardTileText__FVrdl').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('бесплатные доставкив «Пятёрочке»') });

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(5)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(5) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','20%');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(5) > .packet_scanCardTileText__FVrdl').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('кешбэк на выпечкуи готовую еду') });

    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(6)').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(6) > .packet_scanCardTileDigit__ZY6VW').should('be.visible').and('contain','50%');
    cy.get('.packet_scanCardRightColumn__5JJPB > .packet_scanCardTiles__s6quZ > :nth-child(6) > .packet_scanCardTileText__FVrdl').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('кешбэкна кофе или чай') }); 
});

it('Пятый блок', function () {
    cy.get('.packet_spendPointsText__U_3j5 > .packet_textBlockHeader__f_k7a').should('be.visible').and('contain','Списывайте кэшбек, когда захочется');

    cy.get('.packet_spendPointsTextContent__yBuRp').should('be.visible').and('contain','Хочется чего-то особенного или конкретного? Решайте сами на что потратить накопленные Апельсинки. Списывайте их при любой покупке. 10 Апельсинок = 1₽');

    cy.get('.packet_spendPointsText__U_3j5 > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy?bundle=standard199?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth_0524&utm_content=tc5-web_our-page_full-price"] > div').should('be.visible').and('contain','Подключить за 199₽/мес.');

    cy.get('.packet_spendPointsText__U_3j5 > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy_promo?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth-promo_0524&utm_content=tc5-web_our-page_price-1rub"] > div').should('be.visible').and('contain','Ввести промокод');

    cy.get('.packet_spendPointsText__U_3j5 > .packet_buttonGroup___x0Tf > .packet_buttonGroupLegalNotice__6RJlu').should('be.visible').and('contain','Нажимая на кнопку, вы принимаете пользовательское соглашение и политику конфиденциальности');

    cy.get('.packet_spendPointsImage__thX39').should('be.visible').and('have.attr','src').and('include','spend-points.png') 
});

it('Шестой блок', function () {
    cy.get('.packet_partners__BN6QH').should('be.visible').should('have.css', 'background-image').and('match', /linear-gradient\(275.3deg, (#8cc400|rgb\(140, 196, 0\)) 0.3%, (#00963b|rgb\(0, 150, 59\)) 99.51%\)/i);

    cy.get('.packet_partnerTilesHeader__G9xrM').should('be.visible').invoke('text').then((text)=>{const normalizedText = text.replace(/\s+/g, ' ').trim(); expect(normalizedText).to.include('А еще промокоды на скидки от партнеров ~4 343 ₽ каждый месяц') });

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(1) > img').should('be.visible').and('have.attr','src').and('include','invitro.png');
    cy.get(':nth-child(1) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-20%');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(2) > img').should('be.visible').and('have.attr','src').and('include','rigla.png');
    cy.get(':nth-child(2) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-300 ₽');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(3) > img').should('be.visible').and('have.attr','src').and('include','be-healthy.png');
    cy.get(':nth-child(3) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-300 ₽');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(4) > img').should('be.visible').and('have.attr','src').and('include','read-city.png');
    cy.get(':nth-child(4) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-23%');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(5) > img').should('be.visible').and('have.attr','src').and('include','kari.png');
    cy.get(':nth-child(5) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-1500 ₽');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(6) > img').should('be.visible').and('have.attr','src').and('include','kari-kids.png');
    cy.get(':nth-child(6) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-1500 ₽');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(7) > img').should('be.visible').and('have.attr','src').and('include','litres.png');
    cy.get(':nth-child(7) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-20%');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(8) > img').should('be.visible').and('have.attr','src').and('include','onetwotrip.png');
    cy.get(':nth-child(8) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-10%');

    cy.get('.packet_partnersTiles__xNsW5 > :nth-child(9) > img').should('be.visible').and('have.attr','src').and('include','x5.png');
    cy.get(':nth-child(9) > .packet_tileLabel__MOvlW').should('be.visible').and('contain','-5%');

    cy.get('.packet_partnersLegalNotice__lsX59').should('be.visible').and('contain','Расчёт носит информационный характер и не является публичной офертой'); 
});

it('Седьмой блок', function () {
    cy.get('.packet_moreValue__J0IkG').should('be.visible').and('have.css', 'background-color', 'rgb(246, 245, 247)');

    cy.get('.packet_moreValueText__T3Cmo > .packet_textBlockHeader__f_k7a').should('be.visible').and('contain','Ещё больше выгоды в приложении Пятёрочка');
    
    cy.get('.packet_moreValueText__T3Cmo > :nth-child(2)').should('be.visible').and('contain','Подключите сервис Пакет и получайте скидку 10% на 5 заказов с доставкой из приложения Пятёрочка каждый месяц');

    cy.get('.packet_moreValueText__T3Cmo > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy?bundle=standard199?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth_0524&utm_content=tc5-web_our-page_full-price"] > div').should('be.visible').and('contain','Подключить за 199₽/мес.');

    cy.get('.packet_moreValueText__T3Cmo > .packet_buttonGroup___x0Tf > [href="https://x5paket.ru/fastbuy_promo?utm_source=5ka_site&utm_medium=marketing&utm_campaign=x5_tc5-web_auth-promo_0524&utm_content=tc5-web_our-page_price-1rub"] > div').should('be.visible').and('contain','Ввести промокод');

    cy.get('.packet_moreValueText__T3Cmo > .packet_buttonGroup___x0Tf > .packet_buttonGroupLegalNotice__6RJlu').should('be.visible').and('contain','Промокод можно активировать после подключения сервиса «Пакет». Не суммируется со скидками и товарами первой цены. Только для новых пользователей');

    cy.get('.packet_moreValueImage__bj2l5').should('be.visible').and('have.attr','src').and('include','more-value.png'); 
});