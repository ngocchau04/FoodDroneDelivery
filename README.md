# FoodDroneDelivery: React Native Food Delivery App

![Screenshot](./customer/assets/screenshots/ss-main.png)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Description

**FoodDroneDelivery** is a React Native mobile application designed for food delivery. It serves as a clone of popular food delivery services, providing users with a convenient platform to order and receive their favorite meals. While the app is currently in its initial stage, it offers essential functionalities for browsing menus, placing orders, and tracking deliveries.

## Screenshots Group
![Screenshot](./customer/assets/screenshots/first-ss.png) 
![Screenshot](./customer/assets/screenshots/second-ss.png)

### Advanced Features
![Order Basket](./customer/assets/screenshots/OrderBasketApp.png)
*Smart basket with currency conversion and order summary*

![Drone Delivery Map](./customer/assets/screenshots/DroneMap.png)
*Real-time drone delivery tracking with flight simulation*

![Delivery Progress](./customer/assets/screenshots/DeliveryDetails.png)
*Order preparation and delivery status monitoring*

### Restaurant Management System
![New Orders](./customer/assets/screenshots/AcceptOrRejectNewOrder.png)
*Order acceptance and management interface*

![Restaurant Dashboard](./customer/assets/screenshots/Dashboard.png)
*Comprehensive restaurant performance dashboard*

![Menu Management](./customer/assets/screenshots/MenuRestaurant.png)
*Easy-to-use menu and item management*

![Order Processing](./customer/assets/screenshots/ProcessingOrder.png)
*Real-time order processing and status updates*

![Restaurant Profile](./customer/assets/screenshots/ProfileRestaurant.png)
*Restaurant profile and settings management*

### Admin Web Dashboard
![User Management](./customer/assets/screenshots/UserManagement.png)
*Comprehensive user and account management*

![Restaurant Management](./customer/assets/screenshots/RestaurantManagement.png)
*Platform-wide restaurant oversight and control*

![Order Tracking](./customer/assets/screenshots/UserDashboard.png)
*System-wide order monitoring and analytics*


## Features

- Browse menus and select dishes.
- Place orders for delivery.
- Track order status and delivery progress.
- User-friendly and responsive design.
- Easy-to-use interface.

## Technologies Used

**FoodDroneDelivery** is built using the following technologies:

- **React Native** - For building cross-platform mobile applications.
- **JavaScript** - As the primary programming language.
- **Redux** - For state management.
authentication.

## Installation

To run the **FoodDroneDelivery** app locally, follow these steps:

1. Clone the repository to your local machine:

```shell
https://github.com/ngocchau04/FoodDroneDelivery.git
```

2. Navigate to the project directory:

```
cd customer
```

3. Install the required Node.js packages:

```
npm install
```

4. Start the React Native development server:

```
npx expo start --clear
```

## Usage

1. Open the **FoodDroneDelivery** app on your mobile device or emulator.
2. Explore the menu options and select your desired dishes.
3. Place your order and track its progress in real-time.

## Folder Structure
The project structure is organized as follows:

- Categories/ - Contains reusable React Native components.
- screens/ - Defines different app screens and navigation.
- redux/ - Manages state using Redux.
- assets/ - Stores images and other assets used in the app.


## Contributing
We welcome contributions from the community to improve FoodDroneDelivery. If you'd like to contribute, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with clear, concise commit messages.
- Push your changes to your forked repository.
- Create a pull request to the main repository with a detailed description of your changes.

## Acknowledgments

## To run restaurant app

1. Navigate to the project directory:

```
cd enatega-multivendor-restaurant
```

2. Install the required Node.js packages:

```
npm install
```

3. Start the React Native development server:

```
npx expo start --clear
```

4. Chọn emulator thủ công
- Khi Metro server khởi động, KHÔNG nhấn 'a' ngay. Thay vào đó:

- Nhấn 'shift + a' để chọn emulator cụ thể
--> chọn phiên bản **Pixel 4**
Hoặc nhấn '?' để xem tất cả commands
Tìm option "Open on specific Android device"

Tài khoản demo: supermarkethares
Password: yalla0054yalla0054

## To run Admin web

1. Navigate to the project directory:

```
cd enatega-multivendor-admin
```

2. Install the required Node.js packages:

```
npm install
```

3. Start the React Native development server:

```
npm start
```

## To run restaurant app on MOBILE
1. First search on Google "how to turn on USB debugging on android mobile"
2. Turn on USB Debugging like the intruction
3. cd customer (cd enatega-multivendor-restaurant)
4. plug in the cable between laptop (or PC) - which is not only charging
5. run "npx expo run:android"
6. You can turn of USb debugging and plug out the cable and run app to use


