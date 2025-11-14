import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DroneMap = ({ orderStatus = "PREPARING" }) => {
  const [deliveryProgress, setDeliveryProgress] = useState(0);
  const [dronePosition, setDronePosition] = useState({ x: 50, y: 100 });

  useEffect(() => {
    if (orderStatus === "DELIVERING") {
      const interval = setInterval(() => {
        setDeliveryProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 2;
        });
        
        setDronePosition(prev => ({
          x: Math.min(prev.x + 2, 300),
          y: prev.y + (Math.random() - 0.5) * 4
        }));
      }, 300);

      return () => clearInterval(interval);
    }
  }, [orderStatus]);

  const getStatusColor = () => {
    switch (orderStatus) {
      case "PREPARING": return "#FFA500";
      case "PICKED_UP": return "#00BFFF";
      case "DELIVERING": return "#32CD32";
      case "DELIVERED": return "#228B22";
      default: return "#808080";
    }
  };

  const getStatusText = () => {
    switch (orderStatus) {
      case "PREPARING": return "Đang chuẩn bị món ăn...";
      case "PICKED_UP": return "Drone đã nhận hàng!";
      case "DELIVERING": return "Đang giao hàng bằng drone...";
      case "DELIVERED": return "Giao hàng thành công! ✅";
      default: return "Đang xử lý...";
    }
  };

  return (
    <View style={styles.container}>
      {/* Map Area */}
      <View style={styles.mapContainer}>
        
        {/* Background clouds */}
        <Text style={[styles.cloud, { top: 40, left: 80 }]}>☁️</Text>
        <Text style={[styles.cloud, { top: 60, right: 60 }]}>☁️</Text>
        <Text style={[styles.cloud, { top: 120, left: '50%' }]}>☁️</Text>
        
        {/* Map Icon */}
        <View style={styles.mapCenter}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <Text style={styles.cityName}>Ho Chi Minh City</Text>
        </View>
        
        {/* Animated Drone */}
        <View style={[
          styles.droneContainer,
          {
            left: dronePosition.x,
            top: dronePosition.y,
            transform: [{ scale: orderStatus === "DELIVERING" ? 1.2 : 1 }]
          }
        ]}>
          <Text style={styles.droneIcon}>🛩️</Text>
          {orderStatus === "DELIVERING" && (
            <View style={styles.flyingBadge}>
              <Text style={styles.flyingText}>Flying</Text>
            </View>
          )}
        </View>
        
        {/* Restaurant */}
        <View style={[styles.locationMarker, { bottom: 100, left: 30 }]}>
          <Text style={styles.locationIcon}>🏪</Text>
          <View style={[styles.locationBadge, { backgroundColor: '#22C55E' }]}>
            <Text style={styles.locationText}>QuickBite</Text>
          </View>
        </View>
        
        {/* Customer Location */}
        <View style={[styles.locationMarker, { bottom: 100, right: 30 }]}>
          <Text style={styles.locationIcon}>🏠</Text>
          <View style={[styles.locationBadge, { backgroundColor: '#EF4444' }]}>
            <Text style={styles.locationText}>You</Text>
          </View>
        </View>

        {/* Flight Path */}
        {orderStatus === "DELIVERING" && (
          <View style={styles.flightPath} />
        )}
      </View>

      {/* Status Panel */}
      <View style={styles.statusPanel}>
        {/* Header */}
        <View style={styles.statusHeader}>
          <View>
            <Text style={styles.droneTitle}>🛩️ Falcon Prime</Text>
            <Text style={styles.droneSubtitle}>DJI Delivery Pro X1</Text>
          </View>
          <View style={styles.statusInfo}>
            <Text style={[styles.statusText, { color: getStatusColor() }]}>
              {orderStatus}
            </Text>
            {orderStatus === "DELIVERING" && (
              <Text style={styles.progressText}>
                {deliveryProgress}% hoàn thành
              </Text>
            )}
          </View>
        </View>

        {/* Status Message */}
        <View style={styles.statusMessage}>
          <Text style={[styles.messageText, { color: getStatusColor() }]}>
            {getStatusText()}
          </Text>
        </View>
        
        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>🔋 Pin</Text>
            <Text style={[styles.statValue, { color: '#22C55E' }]}>85%</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>📏 Độ cao</Text>
            <Text style={styles.statValue}>45m</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>⚡ Tốc độ</Text>
            <Text style={styles.statValue}>25 km/h</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>⏰ ETA</Text>
            <Text style={[styles.statValue, { color: '#F97316' }]}>12 phút</Text>
          </View>
        </View>

        {/* Progress Bar */}
        {orderStatus === "DELIVERING" && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[
                styles.progressFill,
                { width: `${deliveryProgress}%` }
              ]} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF'
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  cloud: {
    fontSize: 24,
    position: 'absolute',
    opacity: 0.3
  },
  mapCenter: {
    alignItems: 'center'
  },
  mapIcon: {
    fontSize: 64,
    marginBottom: 8
  },
  cityName: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600'
  },
  droneContainer: {
    position: 'absolute',
    alignItems: 'center'
  },
  droneIcon: {
    fontSize: 40,
    transform: [{ rotate: '-30deg' }], // Xoay nhẹ để bay từ trái-dưới lên phải-dưới
  },
  flyingBadge: {
    position: 'absolute',
    top: -24,
    left: -16,
    backgroundColor: '#22C55E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4
  },
  flyingText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  locationMarker: {
    position: 'absolute',
    alignItems: 'center'
  },
  locationIcon: {
    fontSize: 32
  },
  locationBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4
  },
  locationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  flightPath: {
    position: 'absolute',
    bottom: 112,
    left: 48,
    right: 48,
    height: 2,
    backgroundColor: '#4ADE80',
    opacity: 0.6
  },
  statusPanel: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  droneTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  droneSubtitle: {
    fontSize: 12,
    color: '#6B7280'
  },
  statusInfo: {
    alignItems: 'flex-end'
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  progressText: {
    fontSize: 12,
    color: '#6B7280'
  },
  statusMessage: {
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  messageText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statItem: {
    alignItems: 'center',
    flex: 1
  },
  statLabel: {
    fontSize: 10,
    color: '#6B7280',
    marginBottom: 4
  },
  statValue: {
    fontWeight: '600'
  },
  progressContainer: {
    marginTop: 16
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden'
  },
  progressFill: {
    height: 8,
    backgroundColor: '#22C55E',
    borderRadius: 4
  }
});

export default DroneMap;