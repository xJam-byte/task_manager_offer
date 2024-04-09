import React from "react";

function Footer() {
  return (
    <footer>
      <div className="wrapper footer">
        <div className="lorem block-footer">
          <div className="title">Тапсырмалар менеджері</div>
          <br />
          <p className="description">
            Сәлеметсіз бе, бұл шынымен де ұстану қиын. Мамандар Таңдау үшін
            басқа уақыт бар ма? Қателер мен азаптар сәулетші үшін, бұл заттардың
            ешқайсысының еңбегінің ешқайсысы кішкентай?
          </p>
        </div>
        <div className="information block-footer">
          <div className="title">ақпарат</div>
          <br />
          <p>Біз туралы</p>
          <p>Жиі қойылатын сұрақтар</p>
          <p>Шарттар мен талаптар</p>
          <p>Контактілер</p>
          <p>Көмек</p>
        </div>
        <div className="get_in_touch block-footer">
          <div className="title">Байланыста болу</div>
          <br />
          <p>Шәмші Қалдаяқов 70</p>
          <p>Қазақстан, Астана</p>
          <p>example@gmail.com</p>
          <p>+7-777-555-0000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
