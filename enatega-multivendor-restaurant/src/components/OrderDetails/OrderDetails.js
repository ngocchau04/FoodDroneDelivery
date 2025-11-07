import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TextDefault } from '..'
import styles from './styles'
import { colors } from '../../utilities'
import { formatVND } from '../../utilities/currencyFormatter'
import { Configuration } from '../../ui/context'
import { useTranslation } from 'react-i18next'

export default function OrderDetails({ orderData }) {
  const { orderId, user, deliveryAddress } = orderData
  const { t } = useTranslation()
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <Text style={styles.heading}>{t('orderNo')}.</Text>
          <Text style={styles.text} selectable>
            {orderId}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>{t('email')}</Text>
          <Text style={styles.text} selectable>
            {user.email}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>{t('contact')}</Text>
          <Text style={styles.text} selectable>
            {user.phone}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>{t('address')}</Text>
          <Text style={styles.text} selectable>
            {deliveryAddress.deliveryAddress}
          </Text>
        </View>
      </View>
      <OrderItems orderData={orderData} />
    </View>
  )
}
function OrderItems({ orderData }) {
  const { t } = useTranslation()
  const {
    items,
    orderAmount,
    tipping = 0,
    deliveryCharges,
    taxationAmount = 0
  } = orderData
  const configuration = useContext(Configuration.Context)
  
  // Calculate subtotal correctly from items
  let subTotal = 0
  if (items) {
    items.forEach(item => {
      subTotal += (item.variation.price || 0) * (item.quantity || 1)
      if (item.addons) {
        item.addons.forEach(addon => {
          subTotal += (addon.price || 0)
        })
      }
    })
  }
  
  return (
    <View style={[styles.cardContainer, { marginTop: 30, marginBottom: 45 }]}>
      {items &&
        items.map((item, index) => {
          const itemTotal = (item.variation.price || 0) * (item.quantity || 1)
          return (
            <View style={styles.itemRowBar} key={index}>
              <TextDefault
                H5
                textColor={colors.fontSecondColor}
                bold>{`${item.quantity}x ${item.title}`}</TextDefault>
              <TextDefault
                bold>{formatVND(itemTotal)}</TextDefault>
              {item.addons &&
                item.addons.map((addon, addonIndex) => (
                  <TextDefault
                    key={addonIndex}
                    H6>{formatVND(addon.price)}</TextDefault>
                ))}
            </View>
          )
        })}
      <View style={styles.itemRow}>
        <TextDefault
          H6
          textColor={colors.fontSecondColor}
          bold
          style={styles.itemHeading}>
          {t('subT')}
        </TextDefault>
        <TextDefault bold style={styles.itemText}>
          {formatVND(subTotal)}
        </TextDefault>
      </View>
      <View style={styles.itemRow}>
        <TextDefault
          H6
          textColor={colors.fontSecondColor}
          bold
          style={styles.itemHeading}>
          {t('tip')}
        </TextDefault>
        <TextDefault bold style={styles.itemText}>
          {formatVND(tipping)}
        </TextDefault>
      </View>
      <View style={styles.itemRow}>
        <TextDefault
          H6
          textColor={colors.fontSecondColor}
          bold
          style={styles.itemHeading}>
          {t('taxCharges')}
        </TextDefault>
        <TextDefault bold style={styles.itemText}>
          {formatVND(taxationAmount)}
        </TextDefault>
      </View>
      <View style={styles.itemRow}>
        <TextDefault
          H6
          textColor={colors.fontSecondColor}
          bold
          style={styles.itemHeading}>
          {t('deliveryCharges')}
        </TextDefault>
        <TextDefault bold style={styles.itemText}>
          {formatVND(deliveryCharges)}
        </TextDefault>
      </View>

      <View style={[styles.itemRow, { marginTop: 30 }]}>
        <TextDefault
          H6
          textColor={colors.fontSecondColor}
          bold
          style={styles.itemHeading}>
          {t('total')}
        </TextDefault>
        <TextDefault bold style={styles.itemText}>
          {formatVND(subTotal + (deliveryCharges || 0) + (tipping || 0) + (taxationAmount || 0))}
        </TextDefault>
      </View>
    </View>
  )
}
