import React from 'react';

const PokePlannerContext = React.createContext();

export const PokePlannerProvider = PokePlannerContext.Provider
export const PokePlannerConsumer = PokePlannerContext.Consumer

export default PokePlannerContext;