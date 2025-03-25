import React, { useState } from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  // State to track the current step in the selection process
  const [step, setStep] = useState(1);
  // State to store user selections
  const [selections, setSelections] = useState({
    foodType: null,
    beverage: null,
  });
  // State to store the final recommendation
  const [recommendation, setRecommendation] = useState(null);

  // Food type options
  const foodTypes = [
    { id: 'pizza', name: 'Pizza', image: 'pizza.png', alt: 'Pizza' },
    { id: 'fish', name: 'Fish', image: 'fish.png', alt: 'Fish' },
    { id: 'chicken', name: 'Chicken', image: 'chicken.png', alt: 'Chicken' },
    { id: 'dessert', name: 'Dessert', image: 'dessert.png', alt: 'Dessert' },
    { id: 'burger', name: 'Burger', image: 'burger.png', alt: 'Burger' },
    { id: 'pasta', name: 'Pasta', image: 'spaghetti.png', alt: 'Pasta' },
    { id: 'salad', name: 'Salad', image: 'salad.png', alt: 'Salad' },
    { id: 'sushi', name: 'Sushi', image: 'sushi.png', alt: 'Sushi' },
    { id: 'steak', name: 'Steak', image: 'steak.png', alt: 'Steak' },
    { id: 'sandwich', name: 'Sandwich', image: 'sandwhich.jpg', alt: 'Sandwich' },
    { id: 'tacos', name: 'Tacos', image: 'tacos.jpg', alt: 'Tacos' },
  ];

  // Beverage options
  const beverages = [
    { id: 'soda', name: 'Soda', image: 'soda.png', alt: 'Soda' },
    { id: 'beer', name: 'Beer', image: 'beer.png', alt: 'Beer' },
    { id: 'wine', name: 'Wine', image: 'wine.png', alt: 'Wine' },
    { id: 'cocktail', name: 'Cocktail', image: 'cocktail.png', alt: 'Cocktail' },
    { id: 'juice', name: 'Juice', image: 'juice.png', alt: 'Juice' },
    { id: 'coffee', name: 'Coffee', image: 'coffee.png', alt: 'Coffee' },
    { id: 'tea', name: 'Tea', image: 'tea.png', alt: 'Tea' },
    { id: 'water', name: 'Water', image: 'water.png', alt: 'Water' },
    { id: 'milkshake', name: 'Milkshake', image: 'milkshake.png', alt: 'Milkshake' },
    { id: 'smoothie', name: 'Smoothie', image: 'smoothie.png', alt: 'Smoothie' },
    { id: 'energy_drink', name: 'Energy Drink', image: 'energy.png', alt: 'Energy Drink' },
    { id: 'hot_chocolate', name: 'Hot Chocolate', image: 'hotchocolate.png', alt: 'Hot Chocolate' }
  ];

  // Restaurant recommendations based on food type and beverage
  const restaurantRecommendations = {
    pizza: {
      soda: { name: 'Pizza Palace', image: 'pizzaandbrew.png', alt: 'Pizza & Brew', description: 'Authentic Italian pizza with refreshing sodas.' },
      beer: { name: 'Pizza & Brew', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Delicious pizzas paired with craft beers.' },
      wine: { name: 'Vino & Slice', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Gourmet pizza with fine wine selection.' },
      cocktail: { name: 'Pizza Mixology', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Creative pizzas and signature cocktails.' },
      juice: { name: 'Fresh Slice', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Healthy pizza options with fresh-squeezed juices.' },
      coffee: { name: 'Morning Pizza', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Breakfast pizzas with premium coffee.' },
      tea: { name: 'Pizza & Steep', image: 'pizzanadbrew.png', alt: 'Pizza & Brew', description: 'Artisanal pizza with organic tea options.' },
    },
    fish: {
      soda: { name: 'Fish Shack', image: 'fishshack.png', alt: 'Fish Shack', description: 'Fresh seafood with ice-cold sodas.' },
      beer: { name: 'Catch & Brew', image: 'catchandbrew.png', alt: 'Catch & Brew', description: 'Daily caught fish with local craft beers.' },
      wine: { name: 'Seafood & Vino', image: 'seafoodandvino.png', alt: 'Seafood & Vino', description: 'Elegant seafood dining with curated wines.' },
      cocktail: { name: 'Ocean Mixology', image: 'oceanmixology.png', alt: 'Ocean Mixology', description: 'Seafood specialties with tropical cocktails.' },
      juice: { name: 'Fresh Catch', image: 'freshcatch.png', alt: 'Fresh Catch', description: 'Grilled fish with freshly squeezed juices.' },
      coffee: { name: 'Harbor Cafe', image: 'harborcafe.png', alt: 'Harbor Cafe', description: 'Seafood brunch with specialty coffees.' },
      tea: { name: 'Sea & Steep', image: 'seaandsteep.png', alt: 'Sea & Steep', description: 'Asian-inspired seafood with premium teas.' },
    },
    chicken: {
      soda: { name: 'Chicken Joint', image: 'chickenjoint.png', alt: 'Chicken Joint', description: 'Crispy fried chicken with fountain sodas.' },
      beer: { name: 'Wings & Brew', image: 'wingsandbrew.png', alt: 'Wings & Brew', description: 'Spicy wings and cold beers.' },
      wine: { name: 'Roast & Pour', image: 'roastandpour.png', alt: 'Roast & Pour', description: 'Rotisserie chicken with wine pairings.' },
      cocktail: { name: 'Chicken & Spirits', image: 'chickenandspirits.png', alt: 'Chicken & Spirits', description: 'Gourmet chicken dishes with craft cocktails.' },
      juice: { name: 'Healthy Bird', image: 'healthybird.png', alt: 'Healthy Bird', description: 'Grilled chicken with fresh fruit juices.' },
      coffee: { name: 'Early Bird', image: 'earlybird.png', alt: 'Early Bird', description: 'Chicken breakfast options with premium coffee.' },
      tea: { name: 'Poultry & Leaf', image: 'poultryandleaf.png', alt: 'Poultry & Leaf', description: 'Asian-style chicken with herbal teas.' },
    },
    dessert: {
      soda: { name: 'Sweet Fizz', image: 'sweetfizz.png', alt: 'Sweet Fizz', description: 'Decadent desserts with classic sodas.' },
      beer: { name: 'Sweet & Hoppy', image: 'sweetandhoppy.png', alt: 'Sweet & Hoppy', description: 'Dessert and beer pairings.' },
      wine: { name: 'Sweet Pour', image: 'sweetpour.png', alt: 'Sweet Pour', description: 'Dessert and wine pairings.' },
      cocktail: { name: 'Sugar & Spirits', image: 'sugarandspirits.png', alt: 'Sugar & Spirits', description: 'Desserts with dessert cocktails.' },
      juice: { name: 'Fruit & Sweet', image: 'fruitandsweet.png', alt: 'Fruit & Sweet', description: 'Fruit-based desserts with fresh juices.' },
      coffee: { name: 'Cafe Dulce', image: 'cafedulce.png', alt: 'Cafe Dulce', description: 'Coffee and dessert specialties.' },
      tea: { name: 'Tea & Sweets', image: 'teaandsweets.png', alt: 'Tea & Sweets', description: 'Tea shop with delicious pastries.' },
    },
    burger: {
      soda: { name: 'Burger Joint', image: 'burgerjoint.png', alt: 'Burger Joint', description: 'Classic burgers with fountain sodas.' },
      beer: { name: 'Burgers & Brews', image: 'burgersandbrews.png', alt: 'Burgers & Brews', description: 'Gourmet burgers with craft beer selection.' },
      wine: { name: 'Upscale Burger Bar', image: 'upscaleburgerbar.png', alt: 'Upscale Burger Bar', description: 'Gourmet burgers with wine pairings.' },
      cocktail: { name: 'Burger & Shake', image: 'burgerandshake.png', alt: 'Burger & Shake', description: 'Creative burgers with boozy shakes.' },
      juice: { name: 'Healthy Burger', image: 'healthyburger.png', alt: 'Healthy Burger', description: 'Lean burgers with fresh-squeezed juices.' },
      coffee: { name: 'Morning Burger', image: 'morningburger.png', alt: 'Morning Burger', description: 'Breakfast burgers with premium coffee.' },
      tea: { name: 'Burger & Steep', image: 'burgerandsteep.png', alt: 'Burger & Steep', description: 'Asian-fusion burgers with hot teas.' },
    },
  };

  // Handler for selecting food type
  const handleFoodTypeSelect = (foodType) => {
    setSelections({ ...selections, foodType });
    setStep(2);
  };

  // Handler for selecting beverage
  const handleBeverageSelect = (beverage) => {
    const updatedSelections = { ...selections, beverage };
    setSelections(updatedSelections);
    
    // Generate recommendation based on selections
    if (updatedSelections.foodType && beverage) {
      const recommended = restaurantRecommendations[updatedSelections.foodType][beverage];
      setRecommendation(recommended);
      setStep(3);
    }
  };

  // Handler for restarting the selection process
  const handleRestart = () => {
    setSelections({ foodType: null, beverage: null });
    setRecommendation(null);
    setStep(1);
  };

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
              <button className="back-button" onClick={() => setStep(1)}>Back to Food Selection</button>
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
                <button className="action-button">Visit Restaurant</button>
              </div>
              <button className="restart-button" onClick={handleRestart}>Start Over</button>
            </div>
          )}
        </main>
      </div>

  );
}

export default App;