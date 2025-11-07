/* eslint-disable react/prop-types */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { configuration } from '../../apollo'

const Context = React.createContext({})

// Default configuration for demo/development
const defaultConfiguration = {
  currency: 'VND',
  currencySymbol: '₫',
  deliveryRate: 20000,
  minimumOrder: 50000,
  tax: 0.08,
  tipping: 0.1,
  isPickupEnabled: true,
  isDeliveryEnabled: true,
  restaurantAppSentryUrl: '',
  adminUrl: 'http://localhost:3001'
}

export const Provider = props => {
  const { loading, data, error } = useQuery(
    gql`
      ${configuration}
    `
  )
  
  // Use mock configuration if GraphQL query fails or is loading
  const value = loading || error || !data?.configuration 
    ? defaultConfiguration 
    : { ...defaultConfiguration, ...data.configuration }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}
export default { Context, Provider }
