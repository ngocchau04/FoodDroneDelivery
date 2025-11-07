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
      drone: {
        id: "QB-DRONE-001",
        name: "Falcon Prime",
        model: "DJI Delivery Pro X1",
        batteryLevel: 100,
        status: "STANDBY",
        currentLocation: {
          lat: 10.762622,
          lng: 106.660172,
          address: "Warehouse Center - Quận 5"
        },
        estimatedDeliveryTime: 12,
        maxPayload: "5kg",
        flightRange: "15km"
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
      drone: {
        id: "QB-DRONE-002",
        name: "Eagle Swift",
        model: "Parrot Professional V2",
        batteryLevel: 95,
        status: "PREPARING",
        currentLocation: {
          lat: 10.762622,
          lng: 106.660172,
          address: "QuickBite Kitchen - Quận 5"
        },
        estimatedDeliveryTime: 8,
        maxPayload: "3kg",
        flightRange: "12km"
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
      subtotal: 120000,
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
      drone: {
        id: "QB-DRONE-003",
        name: "Hawk Thunder",
        model: "Autel Max Pro",
        batteryLevel: 78,
        status: "EN_ROUTE",
        currentLocation: {
          lat: 10.776889,
          lng: 106.695556,
          address: "Đang bay đến - Quận 3"
        },
        estimatedDeliveryTime: 5,
        maxPayload: "4kg",
        flightRange: "18km",
        flightAltitude: "50m",
        currentSpeed: "25 km/h"
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
      drone: {
        id: "QB-DRONE-004",
        name: "Phoenix Ultra",
        model: "Zipline Medical Drone",
        batteryLevel: 62,
        status: "DELIVERING", 
        currentLocation: {
          lat: 10.777229,
          lng: 106.705028,
          address: "Gần điểm giao hàng - Quận 1"
        },
        estimatedDeliveryTime: 2,
        maxPayload: "2kg",
        flightRange: "20km",
        flightAltitude: "45m",
        currentSpeed: "30 km/h",
        deliveryProgress: "85%"
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
      drone: {
        id: "QB-DRONE-005",
        name: "Storm Ranger",
        model: "Wing Copter Alpha",
        batteryLevel: 45,
        status: "RETURNING",
        currentLocation: {
          lat: 10.762622,
          lng: 106.660172,
          address: "Đang trở về trạm sạc"
        },
        estimatedReturnTime: 6,
        maxPayload: "6kg",
        flightRange: "25km",
        totalFlightTime: "45 phút",
        deliveryCompleted: true
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
      drone: {
        id: "QB-DRONE-006",
        name: "Lightning Express",
        model: "Amazon Prime Air V3",
        batteryLevel: 23,
        status: "CHARGING",
        currentLocation: {
          lat: 10.762622,
          lng: 106.660172,
          address: "Trạm sạc - Hub chính"
        },
        estimatedChargeTime: 25,
        maxPayload: "7kg",
        flightRange: "30km",
        totalFlightTime: "52 phút",
        deliveryCompleted: true,
        chargingProgress: "65%"
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

// Helper functions for drone management
export const getDronesByStatus = (orders, status) => {
  return orders
    .filter(order => order.drone && order.drone.status === status)
    .map(order => order.drone);
};

export const getActiveDrones = (orders) => {
  return orders
    .filter(order => order.drone && ['PREPARING', 'EN_ROUTE', 'DELIVERING'].includes(order.drone.status))
    .map(order => ({
      ...order.drone,
      orderId: order.orderId,
      customerName: order.user.name,
      deliveryAddress: order.deliveryAddress.deliveryAddress
    }));
};

export const getLowBatteryDrones = (orders, threshold = 30) => {
  return orders
    .filter(order => order.drone && order.drone.batteryLevel <= threshold)
    .map(order => ({
      ...order.drone,
      orderId: order.orderId,
      needsCharging: order.drone.batteryLevel <= 20
    }));
};

export const getDroneFleetStatus = (orders) => {
  const drones = orders.filter(order => order.drone).map(order => order.drone);
  
  return {
    total: drones.length,
    active: drones.filter(d => ['PREPARING', 'EN_ROUTE', 'DELIVERING'].includes(d.status)).length,
    standby: drones.filter(d => d.status === 'STANDBY').length,
    charging: drones.filter(d => d.status === 'CHARGING').length,
    returning: drones.filter(d => d.status === 'RETURNING').length,
    averageBattery: Math.round(drones.reduce((sum, d) => sum + d.batteryLevel, 0) / drones.length),
    lowBattery: drones.filter(d => d.batteryLevel <= 30).length
  };
};
