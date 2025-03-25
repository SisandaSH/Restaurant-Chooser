import React from 'react';


export default function DecisionPage({
  step,
  setStep,
  selections,

  recommendation,

  foodTypes,
  beverages,

  handleFoodTypeSelect,
  handleBeverageSelect,
  handleRestart,
}) {
  return (
    <div className="app">
      <header>
        <img src="logo.png" alt="Logo" width="250px" height="250px" />
        <p>Find your perfect dining experience</p>
      </header>

      <main>
        {step === 1 && (
          <div className="selection-step">
            <h2>Step 1: What type of food would you like?</h2>
            <div className="options-grid">
              {foodTypes.map((food) => (
                <div 
                  key={food.id} 
                  className="option-card"
                  onClick={() => handleFoodTypeSelect(food.id)}
                >
                  <img src={food.image} alt={food.alt} />
                  <h3>{food.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="selection-step">
            <h2>Step 2: What beverage would you prefer?</h2>
            <div className="options-grid">
              {beverages.map((beverage) => (
                <div 
                  key={beverage.id} 
                  className="option-card"
                  onClick={() => handleBeverageSelect(beverage.id)}
                >
                  <img src={beverage.image} alt={beverage.alt} />
                  <h3>{beverage.name}</h3>
                </div>
              ))}
            </div>
            <button variant="outline" className="back-button" onClick={() => setStep(1)}>
              Back to Food Selection
            </button>
          </div>
        )}

        {step === 3 && recommendation && (
          <div className="result-step">
            <h2>Your Perfect Restaurant Match</h2>
            <div className="recommendation-card">
              <h3>{recommendation.name}</h3>
              <p>{recommendation.description}</p>
              <img src={recommendation.image} alt={recommendation.alt} height="200px" width="200px" />
              <div className="selected-items">
                <div>
                  <h4>Food Type</h4>
                  <p>{foodTypes.find(f => f.id === selections.foodType).name}</p>
                </div>
                <div>
                  <h4>Beverage</h4>
                  <p>{beverages.find(b => b.id === selections.beverage).name}</p>
                </div>
              </div>
              <button variant="default" className="action-button">
                Visit Restaurant
              </button>
            </div>
            <Button variant="outline" className="restart-button" onClick={handleRestart}>
              Start Over
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}