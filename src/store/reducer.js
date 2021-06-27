const initialState = {
  name: "taha zeybek ",
  searchText: "",
  cartOrderCount: 0,
  selectedCategoryId: 1,
  cartOrderTotalPrice: 0,
  allProducts: [
    {
      id: 1,
      image: "images/saat.png",
      name: "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Beluetooth",
      isDeliveryFree: true,
      orderCount: 0,
      price: 399.9,
      categoryId: [1, 2, 9, 10],
    },
    {
      id: 2,
      image: "images/parfum.png",
      name: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
      isDeliveryFree: false,
      orderCount: 0,
      price: 145.61,
      categoryId: [3, 9, 10, 12, 13],
    },
    {
      id: 3,
      image: "images/vazo.png",
      name: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
      isDeliveryFree: true,
      orderCount: 0,
      price: 249.9,
      categoryId: [3, 8, 9],
    },
    {
      id: 4,
      image: "images/bileklik.png",
      name: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
      isDeliveryFree: false,
      orderCount: 0,
      price: 329.9,
      categoryId: [9, 10],
    },
    {
      id: 5,
      image: "images/sirtcanta.png",
      name: "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
      isDeliveryFree: true,
      orderCount: 0,
      price: 499.9,
      categoryId: [3, 7, 10],
    },
    {
      id: 6,
      image: "images/santranc.png",
      name: "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
      isDeliveryFree: true,
      orderCount: 0,
      price: 19.9,
      categoryId: [3, 9],
    },
    {
      id: 7,
      image: "images/ayi.png",
      name: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
      isDeliveryFree: true,
      orderCount: 0,
      price: 89.9,
      categoryId: [3, 6, 9],
    },
    {
      id: 8,
      image: "images/igne.png",
      name: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
      isDeliveryFree: true,
      orderCount: 0,
      price: 24.9,
      categoryId: [9, 10],
    },
    {
      id: 9,
      image: "images/cikolata.png",
      name: "Özel Tatlar Çikolata Kutusu 300 gr",
      isDeliveryFree: true,
      orderCount: 0,
      price: 59.9,
      categoryId: [6, 9, 11],
    },
    {
      id: 10,
      image: "images/guldemeti.png",
      name: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
      isDeliveryFree: false,
      orderCount: 0,
      price: 199.9,
      categoryId: [8, 9, 10],
    },
    {
      id: 11,
      image: "images/saat.png",
      name: "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Beluetooth",
      isDeliveryFree: true,
      orderCount: 0,
      price: 399.9,
      categoryId: [1, 2, 9, 10],
    },
    {
      id: 12,
      image: "images/parfum.png",
      name: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
      isDeliveryFree: false,
      orderCount: 0,
      price: 145.61,
      categoryId: [3, 9, 10, 12, 13],
    },
    {
      id: 13,
      image: "images/vazo.png",
      name: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
      isDeliveryFree: true,
      orderCount: 0,
      price: 249.9,
      categoryId: [3, 8, 9],
    },
    {
      id: 14,
      image: "images/bileklik.png",
      name: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
      isDeliveryFree: false,
      orderCount: 0,
      price: 329.9,
      categoryId: [9, 10],
    },
    {
      id: 15,
      image: "images/sirtcanta.png",
      name: "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
      isDeliveryFree: true,
      orderCount: 0,
      price: 499.9,
      categoryId: [3, 7, 10],
    },
    {
      id: 16,
      image: "images/santranc.png",
      name: "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
      isDeliveryFree: true,
      orderCount: 0,
      price: 19.9,
      categoryId: [3, 9],
    },
    {
      id: 17,
      image: "images/ayi.png",
      name: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
      isDeliveryFree: true,
      orderCount: 0,
      price: 89.9,
      categoryId: [3, 6, 9],
    },
    {
      id: 18,
      image: "images/igne.png",
      name: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
      isDeliveryFree: true,
      orderCount: 0,
      price: 24.9,
      categoryId: [9, 10],
    },
    {
      id: 19,
      image: "images/cikolata.png",
      name: "Özel Tatlar Çikolata Kutusu 300 gr",
      isDeliveryFree: true,
      orderCount: 0,
      price: 59.9,
      categoryId: [6, 9, 11],
    },
    {
      id: 20,
      image: "images/guldemeti.png",
      name: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
      isDeliveryFree: false,
      orderCount: 0,
      price: 199.9,
      categoryId: [8, 9, 10],
    },
  ],
  companyInfoRigtSideItem: [
    {
      id: 1,
      children: [
        {
          id: 1,
          name: "Faydalı Bilgiler",
        },
        {
          id: 2,
          name: "Çiçek Bakımı",
        },
        {
          id: 3,
          name: "Çiçek Eşliğinde Notlar",
        },
        {
          id: 4,
          name: "Özel Günler",
        },
        {
          id: 5,
          name: "Mevsimlere Göre Çiçekler",
        },
        {
          id: 6,
          name: "BonnyFood Saklama Koşulları",
        },
        {
          id: 7,
          name: "Site Haritası",
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          id: 1,
          name: "Kurumsal",
        },
        {
          id: 2,
          name: "Hakkımızda",
        },
        {
          id: 3,
          name: "Kariyer",
        },
        {
          id: 4,
          name: "ÇiçekSepetin'de Satış Yap",
        },
        {
          id: 5,
          name: "Kurumsal Müşterilerimiz",
        },
        {
          id: 6,
          name: "Reklamlarımız",
        },
        {
          id: 7,
          name: "Basında Biz",
        },
        {
          id: 8,
          name: "Kampanyalar",
        },
        {
          id: 9,
          name: "Vizyonumuz",
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 1,
          name: "Gizlilik Sözleşmesi",
        },
        {
          id: 2,
          name: "Mesafelik Satış Sözleşmesi",
        },
        {
          id: 3,
          name: "Bilgi Toplumu Hizmetleri",
        },
        {
          id: 4,
          name: "Gizlilik Sözleşmesi",
        },
        {
          id: 5,
          name: "Ödeme Seçenekleri",
        },
        {
          id: 6,
          name: "Hesap Bilgileri",
        },
      ],
    },
    {
      id: 4,
      children: [
        {
          id: 1,
          name: "İletişim",
        },
        {
          id: 2,
          name: "Bize Ulaşın",
        },
        {
          id: 3,
          name: "Sıkça Sorulan Sorular",
        },
      ],
    },
  ],
  socialMediaIcons: [
    {
      id: 1,
      src: "images/facebook.png",
    },
    {
      id: 2,
      src: "images/twitter.png",
    },
    {
      id: 3,
      src: "images/instagram.png",
    },
    {
      id: 4,
      src: "images/youtube.png",
    },
    {
      id: 5,
      src: "images/edit.png",
    },
  ],
  products: [
    {
      id: 1,
      image: "images/saat.png",
      name: "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Beluetooth",
      isDeliveryFree: true,
      orderCount: 0,
      price: 399.9,
      categoryId: [1, 2, 9, 10],
    },
    {
      id: 2,
      image: "images/parfum.png",
      name: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
      isDeliveryFree: false,
      orderCount: 0,
      price: 145.61,
      categoryId: [3, 9, 10, 12, 13],
    },
    {
      id: 3,
      image: "images/vazo.png",
      name: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
      isDeliveryFree: true,
      orderCount: 0,
      price: 249.9,
      categoryId: [3, 8, 9],
    },
    {
      id: 4,
      image: "images/bileklik.png",
      name: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
      isDeliveryFree: false,
      orderCount: 0,
      price: 329.9,
      categoryId: [9, 10],
    },
    {
      id: 5,
      image: "images/sirtcanta.png",
      name: "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
      isDeliveryFree: true,
      orderCount: 0,
      price: 499.9,
      categoryId: [3, 7, 10],
    },
    {
      id: 6,
      image: "images/santranc.png",
      name: "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
      isDeliveryFree: true,
      orderCount: 0,
      price: 19.9,
      categoryId: [3, 9],
    },
    {
      id: 7,
      image: "images/ayi.png",
      name: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
      isDeliveryFree: true,
      orderCount: 0,
      price: 89.9,
      categoryId: [3, 6, 9],
    },
    {
      id: 8,
      image: "images/igne.png",
      name: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
      isDeliveryFree: true,
      orderCount: 0,
      price: 24.9,
      categoryId: [9, 10],
    },
    {
      id: 9,
      image: "images/cikolata.png",
      name: "Özel Tatlar Çikolata Kutusu 300 gr",
      isDeliveryFree: true,
      orderCount: 0,
      price: 59.9,
      categoryId: [6, 9, 11],
    },
    {
      id: 10,
      image: "images/guldemeti.png",
      name: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
      isDeliveryFree: false,
      orderCount: 0,
      price: 199.9,
      categoryId: [8, 9, 10],
    },
    {
      id: 11,
      image: "images/saat.png",
      name: "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Beluetooth",
      isDeliveryFree: true,
      orderCount: 0,
      price: 399.9,
      categoryId: [1, 2, 9, 10],
    },
    {
      id: 12,
      image: "images/parfum.png",
      name: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
      isDeliveryFree: false,
      orderCount: 0,
      price: 145.61,
      categoryId: [3, 9, 10, 12, 13],
    },
    {
      id: 13,
      image: "images/vazo.png",
      name: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
      isDeliveryFree: true,
      orderCount: 0,
      price: 249.9,
      categoryId: [3, 8, 9],
    },
    {
      id: 14,
      image: "images/bileklik.png",
      name: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
      isDeliveryFree: false,
      orderCount: 0,
      price: 329.9,
      categoryId: [9, 10],
    },
    {
      id: 15,
      image: "images/sirtcanta.png",
      name: "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
      isDeliveryFree: true,
      orderCount: 0,
      price: 499.9,
      categoryId: [3, 7, 10],
    },
    {
      id: 16,
      image: "images/santranc.png",
      name: "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
      isDeliveryFree: true,
      orderCount: 0,
      price: 19.9,
      categoryId: [3, 9],
    },
    {
      id: 17,
      image: "images/ayi.png",
      name: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
      isDeliveryFree: true,
      orderCount: 0,
      price: 89.9,
      categoryId: [3, 6, 9],
    },
    {
      id: 18,
      image: "images/igne.png",
      name: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
      isDeliveryFree: true,
      orderCount: 0,
      price: 24.9,
      categoryId: [9, 10],
    },
    {
      id: 19,
      image: "images/cikolata.png",
      name: "Özel Tatlar Çikolata Kutusu 300 gr",
      isDeliveryFree: true,
      orderCount: 0,
      price: 59.9,
      categoryId: [6, 9, 11],
    },
    {
      id: 20,
      image: "images/guldemeti.png",
      name: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
      isDeliveryFree: false,
      orderCount: 0,
      price: 199.9,
      categoryId: [8, 9, 10],
    },
  ],
  categories: [
    {
      id: 1,
      name: "Tüm Kategoriler",
    },
    {
      id: 2,
      name: "Elektronik",
    },
    {
      id: 3,
      name: "Ev ve Yaşam",
    },
    {
      id: 4,
      name: "Evcil Hayvan",
    },
    {
      id: 5,
      name: "Kitap",
    },
    {
      id: 6,
      name: "Oyuncak",
    },
    {
      id: 7,
      name: "Spor",
    },
    {
      id: 8,
      name: "Çiçek",
    },
    {
      id: 9,
      name: "Hediye",
    },
    {
      id: 10,
      name: "Mode,Aksesuar",
    },
    {
      id: 11,
      name: "Ofis,Kırtasiye",
    },
    {
      id: 12,
      name: "Parfüm",
    },
    {
      id: 13,
      name: "Kişisel Bakım",
    },
    {
      id: 14,
      name: "Petshop",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return {
        ...state,
        searchText: action.payload,
      };
    case "INCREASE_COUNT":
      let modifiedIncreaseProducts = [...state.products];
      const objIndex = modifiedIncreaseProducts.findIndex(
        (obj) => obj.id === action.payload
      );

      modifiedIncreaseProducts[objIndex].orderCount += 1;

      const cartIncreasedProductCount = [];

      modifiedIncreaseProducts.map((item) => {
        if (item.orderCount > 0) {
          cartIncreasedProductCount.push(item);
        }
      });

      return {
        ...state,
        products: modifiedIncreaseProducts,
        cartOrderCount: cartIncreasedProductCount.length,
      };

    case "REDUCE_COUNT":
      let modifiedDecreaseProducts = [...state.products];
      const objDecreaseIndex = modifiedDecreaseProducts.findIndex(
        (obj) => obj.id === action.payload
      );
      if (!(modifiedDecreaseProducts[objDecreaseIndex].orderCount === 0)) {
        modifiedDecreaseProducts[objDecreaseIndex].orderCount -= 1;
      }
      const cartReducedProductCount = [];

      modifiedDecreaseProducts.map((item) => {
        if (item.orderCount > 0) {
          cartReducedProductCount.push(item);
        }
      });
      return {
        ...state,
        products: modifiedDecreaseProducts,
        cartOrderCount: cartReducedProductCount.length,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        selectedCategoryId: action.payload,
      };

    case "SEARCH_PRODUCTS":
      const searchText = action.payload;
      let filteredProducts = [];
      filteredProducts = state.products.filter((item) => {
        return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
      });
      return {
        ...state,
        products: searchText.length > 3 ? filteredProducts : state.allProducts,
      };

    case "PLUS_SELECTED_PRODUCT_PRICE":
      let total = state.cartOrderTotalPrice;
      total += action.payload;
      return {
        ...state,
        cartOrderTotalPrice: total,
      };

    case "MINUS_SELECTED_PRODUCT_PRICE": {
      const { price, orderCount } = action.payload;
      let total = state.cartOrderTotalPrice;
      if (orderCount > 0) {
        if (total > 0) {
          total -= price;
        }
      }
      return {
        ...state,
        cartOrderTotalPrice: total < 0 ? 0 : total,
      };
    }
    default:
      return state;
  }
};
