export function GetSetupValues()
{
  return {
    startingVolume : { value : 0 , unit: "mL"},
    startingConcentration : { value : 34, unit: "mL"},
    endContision : {type: "volume", value: 0, unit: "mL"},
    diafiltration: {type: "discrete", value: 0, unit: "mL"},
    volumeToDilute : {value: 45, unit: "mL"},
    operatingPressure : {value: 20, unit: "psi"},
    recoveryOfLiquid : "air",
    flowRate : {value: 44, unit: "ml/s"}
  }
}
