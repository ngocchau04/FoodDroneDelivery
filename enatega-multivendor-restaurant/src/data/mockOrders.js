// Mock orders data for demo purposes
export const mockOrdersData = {
  restaurantOrders: [
    {
      _id: "order_001",
      orderId: "QB001",
      orderStatus: "PENDING", 
      createdAt: new Date().toISOString(),
      orderDate: new Date(Date.now() + 5 * 60000).toISOString(), // 5 minutes from now
      preparationTime: new Date(Date.now() + 15 * 60000).toISOString(), // 15 minutes from now
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM"
      },
      user: {
        name: "Nguyễn Văn An",
        phone: "0901234567"
      },
      items: [
        {
          _id: "item_001",
          title: "Phở Bò Tái",
          description: "Phở bò truyền thống với thịt tái",
          quantity: 2,
          variation: {
            title: "Size Lớn"
          }
        },
        {
          _id: "item_002", 
          title: "Trà Đá",
          description: "Trà đá truyền thống",
          quantity: 1,
          variation: {
            title: "Size Nhỏ"
          }
        }
      ],
      orderAmount: 150000,
      deliveryCharges: 20000,
      total: 170000,
      paymentMethod: "COD"
    },
    {
      _id: "order_002",
      orderId: "QB002", 
      orderStatus: "ACCEPTED",
      createdAt: new Date(Date.now() - 30 * 60000).toISOString(),
      orderDate: new Date(Date.now() - 25 * 60000).toISOString(),
      preparationTime: new Date(Date.now() + 10 * 60000).toISOString(),
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "456 Lê Lợi, Quận 1, TP.HCM"
      },
      user: {
        name: "Trần Thị Bình",
        phone: "0912345678"
      },
      items: [
        {
          _id: "item_003",
          title: "Cơm Gà Hainanese", 
          description: "Cơm gà theo phong cách Hainan",
          quantity: 1,
          variation: {
            title: "Bình thường"
          }
        },
        {
          _id: "item_004",
          title: "Nước Cam Ép",
          description: "Nước cam tươi ép",
          quantity: 2,
          variation: {
            title: "Size Vừa"
          }
        }
      ],
      orderAmount: 120000,
      deliveryCharges: 15000,
      total: 135000,
      paymentMethod: "CARD"
    },
    {
      _id: "order_003",
      orderId: "QB003",
      orderStatus: "ASSIGNED",
      createdAt: new Date(Date.now() - 60 * 60000).toISOString(),
      orderDate: new Date(Date.now() - 55 * 60000).toISOString(),
      preparationTime: new Date(Date.now() + 5 * 60000).toISOString(),
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "789 Võ Văn Tần, Quận 3, TP.HCM"
      },
      user: {
        name: "Lê Minh Cường",
        phone: "0923456789"
      },
      items: [
        {
          _id: "item_005",
          title: "Bánh Mì Thịt Nướng",
          description: "Bánh mì kẹp thịt nướng đặc biệt",
          quantity: 3,
          variation: {
            title: "Đầy đủ"
          }
        }
      ],
      orderAmount: 90000,
      deliveryCharges: 12000,
      total: 102000,
      paymentMethod: "COD"
    },
    {
      _id: "order_004",
      orderId: "QB004",
      orderStatus: "PICKED",
      createdAt: new Date(Date.now() - 90 * 60000).toISOString(),
      orderDate: new Date(Date.now() - 85 * 60000).toISOString(),
      preparationTime: new Date(Date.now() - 5 * 60000).toISOString(),
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "101 Pasteur, Quận 1, TP.HCM"
      },
      user: {
        name: "Phạm Thị Diệu",
        phone: "0934567890"
      },
      items: [
        {
          _id: "item_006",
          title: "Bún Bò Huế",
          description: "Bún bò Huế cay truyền thống",
          quantity: 1,
          variation: {
            title: "Cay vừa"
          }
        },
        {
          _id: "item_007",
          title: "Chả Cá",
          description: "Chả cá thêm",
          quantity: 1,
          variation: {
            title: "Phần nhỏ"
          }
        }
      ],
      orderAmount: 85000,
      deliveryCharges: 10000,
      total: 95000,
      paymentMethod: "CARD"
    },
    {
      _id: "order_005",
      orderId: "QB005",
      orderStatus: "DELIVERED",
      createdAt: new Date(Date.now() - 2 * 60 * 60000).toISOString(),
      orderDate: new Date(Date.now() - 2 * 60 * 60000 + 5 * 60000).toISOString(),
      preparationTime: new Date(Date.now() - 2 * 60 * 60000 + 20 * 60000).toISOString(),
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "234 Nguyễn Thị Minh Khai, Quận 3, TP.HCM"
      },
      user: {
        name: "Hoàng Văn Em",
        phone: "0945678901"
      },
      items: [
        {
          _id: "item_008",
          title: "Cà Phê Sữa Đá",
          description: "Cà phê sữa đá đậm đà",
          quantity: 2,
          variation: {
            title: "Đậm"
          }
        },
        {
          _id: "item_009",
          title: "Bánh Flan",
          description: "Bánh flan caramel",
          quantity: 1,
          variation: {
            title: "Bình thường"
          }
        }
      ],
      orderAmount: 65000,
      deliveryCharges: 8000,
      total: 73000,
      paymentMethod: "COD"
    },
    {
      _id: "order_006",
      orderId: "QB006",
      orderStatus: "DELIVERED",
      createdAt: new Date(Date.now() - 3 * 60 * 60000).toISOString(),
      orderDate: new Date(Date.now() - 3 * 60 * 60000 + 5 * 60000).toISOString(),
      preparationTime: new Date(Date.now() - 3 * 60 * 60000 + 25 * 60000).toISOString(),
      isRinged: false,
      deliveryAddress: {
        deliveryAddress: "567 Cách Mạng Tháng 8, Quận 10, TP.HCM"
      },
      user: {
        name: "Đỗ Thị Phương",
        phone: "0956789012"
      },
      items: [
        {
          _id: "item_010",
          title: "Gỏi Cuốn Tôm Thịt",
          description: "Gỏi cuốn tươi với tôm thịt",
          quantity: 4,
          variation: {
            title: "Combo"
          }
        },
        {
          _id: "item_011",
          title: "Nước Dừa Tươi",
          description: "Nước dừa tươi mát",
          quantity: 2,
          variation: {
            title: "Trái to"
          }
        }
      ],
      orderAmount: 140000,
      deliveryCharges: 18000,
      total: 158000,
      paymentMethod: "CARD"
    }
  ]
};

// Helper functions to categorize orders
export const getActiveOrders = (orders) => {
  return orders.filter(order => order.orderStatus === 'PENDING');
};

export const getProcessingOrders = (orders) => {
  return orders.filter(order => 
    ['ACCEPTED', 'ASSIGNED', 'PICKED'].includes(order.orderStatus)
  );
};

export const getDeliveredOrders = (orders) => {
  return orders.filter(order => order.orderStatus === 'DELIVERED');
};
