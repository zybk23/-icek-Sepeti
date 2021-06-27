import React from "react";
import { useSelector } from "react-redux";
import Footer_company_info from "../subComponents/Footer_company_info";

const Footer = () => {
  const companyInfoRigtSideItem = useSelector(
    (state) => state.reducer.companyInfoRigtSideItem
  );
  const socialMediaIcons = useSelector(
    (state) => state.reducer.socialMediaIcons
  );
  return (
    <div className="footer  ">
      <div className="container">
        <div className="footer_download_info">
          <div className="footer_download_info_card">
            <div className="footer_download_info_card_phone">
              <img src="images/iphone.png" alt="" />
            </div>
            <div className="footer_download_info_card_link">
              <div className="footer_download_info_card_link_topSide">
                <img src="images/karekod.png" alt="" />
                <div className="footer_download_info_card_link_topSide_text">
                  <p>Çiçek Sepeti Mobil Uygulamayı İndirin</p>
                  <span>Mobil Uygulamayı QR Kod ile İndirin.</span>
                </div>
              </div>
              <div className="footer_download_info_card_link_bottomSide">
                <img src="images/google_play.png" alt="" />
                <img src="images/app_store.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_company_info">
          <div className="footer_company_info_leftSide">
            <div className="footer_company_info_leftSide_ciceksepeti_icon">
              <img src="images/ciceksepeti_icon.png" alt="" />
            </div>
            <div className="footer_company_info_leftSide_socialMedia">
              {socialMediaIcons.map((item) => (
                <img key={item.id} src={item.src} alt="" />
              ))}
            </div>
            <p>
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında oluşturduğumuz aydınlatma metnine{" "}
              <a href="#"> buradan </a>
              ulaşabilirsiniz.
            </p>
          </div>
          <div className="footer_company_info_rightSide">
            {companyInfoRigtSideItem.map((item) => (
              <ul key={item.id}>
                <Footer_company_info data={item.children} />
              </ul>
            ))}
          </div>
        </div>
        <div className="footer_company_portfoy">
          <p className="footer_company_portfoytext">
            {" "}
            Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile
            sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu
            etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online
            çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek
            siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde
            gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek
            aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde
            online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü
            gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız
            gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
            Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
            lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz.
            Çünkü mutlu etmenin adresi; ÇiçekSepeti.
          </p>
        </div>
      </div>

      <div className="footer_company_copyright">
        <div className="footer_company_copyright_freearea"></div>
        <p className="footer_company_copyright_textarea">
          Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
        </p>
      </div>
    </div>
  );
};

export default Footer;
