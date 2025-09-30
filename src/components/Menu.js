import React from 'react';
import recipes from '../Recipes';
import Swal from 'sweetalert2';

const Menu = () => {
  const handleOrder = (id) => {
    console.log(`Order placed for recipe ID: ${id}`);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Order will be placed in cart!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add to cart!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Done!',
          text: 'Your order has been added to cart.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button className='menu-button'>Online Menu</button>
      </div>

      {/* menu cards */}
      <div className='cards'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt='' />
            <div className='menu-content'>
              <div className='headings'>
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
