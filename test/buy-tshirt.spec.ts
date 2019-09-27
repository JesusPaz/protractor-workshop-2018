import { browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, ProductListPage, OrderSummaryPage,
         SingInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const singInStepPage: SingInStepPage = new SingInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productAddedModalPage.clickAddCartButton();
    await(browser.sleep(3000));
    await productListPage.clickToCheckoutBtn();
    await(browser.sleep(3000));
    await orderSummaryPage.clickToCheckoutBtn();
    await(browser.sleep(3000));

    await singInStepPage.sendEmailKeys();
    await singInStepPage.sendPsswordKeys();
    await singInStepPage.clickSubmitBtn();
    await(browser.sleep(3000));

    await addressStepPage.toCheckoutBtnClick();
    await(browser.sleep(3000));

    await shippingStepPage.agreeTermsCheckClick();
    await(browser.sleep(3000));

    await shippingStepPage.toCheckoutBtnClick();
    await(browser.sleep(3000));
    await paymentStepPage.bankWireBtnClick();
    await(browser.sleep(3000));
    await bankPaymentPage.confirmOrderBtnClick();
    await(browser.sleep(3000));

    await expect(bankPaymentPage.getConfimMsg())
      .toBe('Your order on My Store is complete.');
  });
});
