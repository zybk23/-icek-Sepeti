import React from "react";

const activities = [
  {
    id: 1,
    image: "images/teslimat_kategori.png",
    title: "75 TL Üzerine Teslimat Ücreti Bizden",
    buttonText: "Detaylı Bilgi",
    bgColor: "#FFEAE8",
  },
  {
    id: 2,
    image: "images/hediye_kategori.png",
    title: "Hediye Kategorisi için Sepette %15 İndirim",
    buttonText: "Hediye Ürünleri",
    bgColor: "#E8F1FF",
  },
  {
    id: 3,
    image: "images/kirtasiye_kategori.png",
    title: "Kırtasiye Kategorisi için Sepette %15 İndirim",
    buttonText: "Detaylı Bilgi",
    bgColor: "#E2F7E1",
  },
];

const Aktivites = () => {
  return (
    <div className="activities container ">
      {activities.map((item) => (
        <div
          style={{ backgroundColor: item.bgColor }}
          key={item.id}
          className="activities_activityCard"
        >
          <div className="activities_activity_image">
            <img src={item.image} alt="" />
          </div>
          <div className="activities_activity_info">
            <p>{item.title}</p>
            <button>
              <span>{item.buttonText}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aktivites;
