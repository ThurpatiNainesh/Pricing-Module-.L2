exports.calculatePrice = ({ distance, time, waitTime, config }) => {
    const Dn = Math.max(0, distance - config.baseDistanceKm);
    const DBP = config.basePrice;
    const DAP = config.additionalPricePerKm;
  
    let TMF = 1;
    for (let t of config.timeMultiplier) {
      if (time > t.from && time <= t.to) TMF = t.multiplier;
    }
  
    const waitingMinutes = Math.max(0, waitTime - config.initialFreeWaitMins);
    const WC = Math.ceil(waitingMinutes / 3) * config.waitingChargePer3Min;
  
    return (DBP + (Dn * DAP)) + (time * TMF) + WC;
  };
  