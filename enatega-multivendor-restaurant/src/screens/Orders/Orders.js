import { View, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextError, Spinner, TextDefault } from '../../components'
import { useOrders, useAcceptOrder } from '../../ui/hooks'
import { colors } from '../../utilities'
import { Image } from 'react-native-elements/dist/image/Image'
import { TabBars } from '../../components/TabBars'
import { HomeOrderDetails } from '../../components/HomeOrderDetails'
import LottieView from 'lottie-react-native'
import {useTranslation} from 'react-i18next'
import { mockOrdersData, getActiveOrders, getProcessingOrders, getDeliveredOrders } from '../../data/mockOrders'
const { width, height } = Dimensions.get('window')
import i18next from '../../../i18n'
const Orders = props => {
  const [active, setActive] = useState(0)
  
  // Use mock data instead of real API
  const mockData = mockOrdersData
  const mockActiveOrders = getActiveOrders(mockData.restaurantOrders)
  const mockProcessingOrders = getProcessingOrders(mockData.restaurantOrders)
  const mockDeliveredOrders = getDeliveredOrders(mockData.restaurantOrders)
  
  // Keep original API call as fallback
  const {
    loading,
    error,
    data,
    activeOrders,
    processingOrders, 
    deliveredOrders,
    refetch
  } = useOrders()

  const { loading: mutateLoading } = useAcceptOrder()
  const {t} = useTranslation()
  
  // Use mock data for demo
  const displayData = mockData
  const displayActiveOrders = mockActiveOrders.length
  const displayProcessingOrders = mockProcessingOrders.length
  const displayDeliveredOrders = mockDeliveredOrders.length
  if (error) return <TextError text={error.message} />
  return (
    <>
      {mutateLoading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.topContainer}>
            <Image
              source={require('../../assets/orders.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={{ width: 250, height: 100 }}
            />
          </View>
          <View
            style={[
              styles.lowerContainer,
              {
                backgroundColor:
                  active === 0
                    ? colors.green
                    : active === 1
                    ? colors.white
                    : colors.white
              }
            ]}>
            <TabBars
              newAmount={displayActiveOrders}
              processingAmount={displayProcessingOrders}
              activeBar={active}
              setActiveBar={setActive}
              refetch={refetch}
              orders={mockActiveOrders}
            />
            {loading ? (
              <View style={{ marginTop: height * 0.25 }}>
                <Spinner spinnerColor={colors.fontSecondColor} />
              </View>
            ) : (
              <ScrollView style={styles.scrollView}>
                <View style={{ marginBottom: 30 }}>
                  {active === 0 && displayActiveOrders > 0
                    ? mockActiveOrders.map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 0 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                            {t('unReadOrders')}
                          </TextDefault>
                          <LottieView
                            style={{
                              width: width - 100,
                              height: 250
                            }}
                            source={require('../../assets/loader.json')}
                            autoPlay
                            loop
                          />
                        </View>
                      )}
                  {active === 1 && displayProcessingOrders > 0
                    ? mockProcessingOrders.map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 1 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                          {t('unReadOrders')}
                          </TextDefault>
                          <LottieView
                            style={{
                              width: width - 100,
                              height: 250
                            }}
                            source={require('../../assets/loader.json')}
                            autoPlay
                            loop
                          />
                        </View>
                      )}
                  {active === 2 && displayDeliveredOrders > 0
                    ? mockDeliveredOrders.map((order, index) => {
                          return (
                            <HomeOrderDetails
                              key={index}
                              activeBar={active}
                              setActiveBar={setActive}
                              navigation={props.navigation}
                              order={order}
                            />
                          )
                        })
                    : active === 2 && (
                        <View
                          style={{
                            minHeight: height - height * 0.45,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                          <TextDefault H2 bold>
                          {t('unReadOrders')}
                          </TextDefault>
                          <LottieView
                            style={{
                              width: width - 100,
                              height: 250
                            }}
                            source={require('../../assets/loader.json')}
                            autoPlay
                            loop
                          />
                        </View>
                      )}
                </View>
              </ScrollView>
            )}
          </View>
        </>
      )}
    </>
  )
}

export default Orders
