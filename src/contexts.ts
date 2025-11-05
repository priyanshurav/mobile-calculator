import React from 'react';
import { CalculatorData, HeightData, HistoryData } from './types';

export const CalculatorDataContext = React.createContext<{
  calculatorData: CalculatorData;
  setCalculatorData: React.Dispatch<React.SetStateAction<CalculatorData>>;
}>({} as any);

export const HeightDataContext = React.createContext<{
  heightData: HeightData;
  setHeightData: React.Dispatch<React.SetStateAction<HeightData>>;
}>({} as any);

export const HistoryContext = React.createContext<{
  historyData: HistoryData;
  setHistoryData: React.Dispatch<React.SetStateAction<HistoryData>>;
}>({} as any);
