import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utilities/colors'; // Change this line

const DroneManagement = () => {
  const navigation = useNavigation();
  const [drones, setDrones] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    loadDrones();
    loadPendingOrders();
  }, []);

  const loadDrones = async () => {
    try {
      const mockDrones = [
        {
          id: 'drone_001',
          name: 'Drone Alpha',
          status: 'Standby',
          batteryLevel: 85,
          location: 'Station A'
        },
        {
          id: 'drone_002',
          name: 'Drone Beta',
          status: 'Delivering',
          batteryLevel: 65,
          location: 'En route',
          assignedOrder: 'ORD123',
          eta: '15 mins'
        },
        {
          id: 'drone_003',
          name: 'Drone Gamma',
          status: 'Standby',
          batteryLevel: 20,
          location: 'Station B'
        },
        {
          id: 'drone_004',
          name: 'Drone Delta',
          status: 'Charging',
          batteryLevel: 45,
          location: 'Charging Station'
        }
      ];
      setDrones(mockDrones);
    } catch (error) {
      Alert.alert('Error', 'Không thể tải danh sách drone');
    }
  };

  const loadPendingOrders = async () => {
    try {
      const mockOrders = [
        {
          id: 'ORD456',
          customerName: 'Nguyễn Văn A',
          address: '123 Đường ABC, Quận 1',
          distance: '2.5 km',
          priority: 'High'
        },
        {
          id: 'ORD789',
          customerName: 'Trần Thị B',
          address: '456 Đường XYZ, Quận 3',
          distance: '1.8 km',
          priority: 'Normal'
        }
      ];
      setOrders(mockOrders);
    } catch (error) {
      Alert.alert('Error', 'Không thể tải danh sách đơn hàng');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDrones();
    await loadPendingOrders();
    setRefreshing(false);
  };

  const getBatteryColor = (level) => {
    if (level <= 20) return '#FF6B6B';
    if (level <= 50) return '#FFD93D';
    return '#6BCF7F';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Standby': return '#6BCF7F';
      case 'Delivering': return '#4DABF7';
      case 'Charging': return '#FFD93D';
      default: return '#CED4DA';
    }
  };

  const handleDroneSelect = (drone) => {
    if (drone.batteryLevel <= 20) {
      Alert.alert(
        'Cảnh báo',
        'Drone này có pin thấp và không thể gán đơn hàng!',
        [{ text: 'OK' }]
      );
      return;
    }

    if (drone.status !== 'Standby') {
      Alert.alert(
        'Thông báo',
        'Chỉ có thể gán đơn hàng cho drone đang ở trạng thái Standby!',
        [{ text: 'OK' }]
      );
      return;
    }

    setSelectedDrone(drone);
    setShowOrderModal(true);
  };

  const assignOrder = async (orderId) => {
    try {
      const updatedDrones = drones.map(drone => {
        if (drone.id === selectedDrone.id) {
          return {
            ...drone,
            status: 'Delivering',
            assignedOrder: orderId,
            eta: '20 mins'
          };
        }
        return drone;
      });

      setDrones(updatedDrones);
      setOrders(orders.filter(order => order.id !== orderId));
      setShowOrderModal(false);
      setSelectedDrone(null);

      Alert.alert('Thành công', 'Đã gán drone cho đơn hàng!');
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể gán drone. Vui lòng thử lại!');
    }
  };

  const renderDroneItem = ({ item }) => (
    <TouchableOpacity
      style={styles.droneCard}
      onPress={() => handleDroneSelect(item)}
    >
      <View style={styles.droneHeader}>
        <Text style={styles.droneName}>{item.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.droneInfo}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Pin:</Text>
          <View style={styles.batteryContainer}>
            <View style={[styles.batteryBar, { backgroundColor: getBatteryColor(item.batteryLevel) }]}>
              <Text style={styles.batteryText}>{item.batteryLevel}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Vị trí:</Text>
          <Text style={styles.infoValue}>{item.location}</Text>
        </View>

        {item.assignedOrder && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Đơn hàng:</Text>
            <Text style={styles.infoValue}>{item.assignedOrder}</Text>
          </View>
        )}

        {item.eta && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ETA:</Text>
            <Text style={styles.infoValue}>{item.eta}</Text>
          </View>
        )}
      </View>

      {item.batteryLevel <= 20 && (
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>⚠️ Pin thấp - Không thể gán đơn</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() => assignOrder(item.id)}
    >
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>#{item.id}</Text>
        <View style={[styles.priorityBadge, { 
          backgroundColor: item.priority === 'High' ? '#FF6B6B' : '#6BCF7F' 
        }]}>
          <Text style={styles.priorityText}>{item.priority}</Text>
        </View>
      </View>
      
      <Text style={styles.customerName}>{item.customerName}</Text>
      <Text style={styles.address}>{item.address}</Text>
      <Text style={styles.distance}>Khoảng cách: {item.distance}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quản lý Drone</Text>
      </View>

      <FlatList
        data={drones}
        renderItem={renderDroneItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <Modal
        visible={showOrderModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowOrderModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Gán đơn hàng cho {selectedDrone?.name}</Text>
              <TouchableOpacity
                onPress={() => setShowOrderModal(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={orders}
              renderItem={renderOrderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.orderList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: colors.green, // Use colors from utilities
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
  droneCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  droneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  droneName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  droneInfo: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    width: 80,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  batteryContainer: {
    flex: 1,
  },
  batteryBar: {
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
  },
  batteryText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  warningContainer: {
    backgroundColor: '#FFF3CD',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  warningText: {
    color: '#856404',
    fontSize: 14,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#666',
  },
  orderList: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priorityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  customerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 4,
  },
  address: {
    fontSize: 13,
    color: '#6C757D',
    marginBottom: 4,
  },
  distance: {
    fontSize: 12,
    color: '#6C757D',
    fontStyle: 'italic',
  },
});

export default DroneManagement;