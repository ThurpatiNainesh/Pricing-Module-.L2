exports.validatePricingInput = ({ distance, time, waitTime, day }) => {
    if (typeof distance !== "number" || typeof time !== "number" || typeof waitTime !== "number" || !day) {
      throw new Error("Invalid pricing input");
    }
  };
  