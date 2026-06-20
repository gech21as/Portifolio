// Different background options for your home page

export const backgroundOptions = {
  // Time-based gradients (currently used)
  timeBased: {
    morning: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    afternoon: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    evening: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    night: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
  },

  // Professional gradients
  professional: {
    blue: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    purple: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    teal: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    dark: "linear-gradient(135deg, #232526 0%, #414345 100%)"
  },

  // Modern gradients
  modern: {
    sunset: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
    ocean: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    forest: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
    candy: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)"
  },

  // Dark themes
  darkThemes: {
    midnight: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    space: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    galaxy: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    volcano: "linear-gradient(135deg, #360033 0%, #0b8793 100%)"
  },

  // Animated backgrounds (CSS animations)
  animated: {
    wave: "linear-gradient(45deg, #667eea 25%, #764ba2 25%, #764ba2 50%, #667eea 50%, #667eea 75%, #764ba2 75%, #764ba2)",
    pulse: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    northern: "linear-gradient(45deg, #00c6ff, #0072ff, #00c6ff, #0072ff)"
  }
};

// Function to get background by type and theme
export const getBackground = (type = 'timeBased', theme = null) => {
  if (type === 'timeBased') {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return backgroundOptions.timeBased.morning;
    if (hour >= 12 && hour < 18) return backgroundOptions.timeBased.afternoon;
    if (hour >= 18 && hour < 22) return backgroundOptions.timeBased.evening;
    return backgroundOptions.timeBased.night;
  }
  
  if (theme && backgroundOptions[type] && backgroundOptions[type][theme]) {
    return backgroundOptions[type][theme];
  }
  
  return backgroundOptions.professional.blue; // fallback
};
