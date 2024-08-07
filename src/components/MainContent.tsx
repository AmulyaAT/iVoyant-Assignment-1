import React from 'react';
import './MainContent.css';
import DealsOfTheDay from './DealsOfTheDay';
import Sidebar from './SideBar';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">

      <section className="banner">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj-V9bagqz7tVV4f62HMRRQfKCHOeYea3m1vEQxc0PgfVYwuQr" alt="Banner" />
        <div className="banner-text">
          <h1>Biggest Offer Revealed</h1>
          <p>More deals inside, up to 50% off</p>
          <button>Wishlist Now</button>
        </div>
      </section>
      <div className="bottom-icons">
        <div className="icon-box">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkPlzbpvItC_vqVH2S2Cdlj6IhpkJLMWJLf706KxHO7qPzjzku" alt="pink purse" />
          <div className="icon-text">Upto 30% off <br/>On all hand-purses</div>
        </div>
        <div className="icon-box">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkb1vInL-6TWlFofzqV5eQPczNmmuT4SwBej0aoeVs5ijxg1n8" alt="watch" />
          <div className="icon-text">Explore the<br/> biggest discount <br/><strong>Iconic watches</strong></div>
        </div>
        <div className="icon-box">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8nPTSHHsfiOhQ9mMDbRaOnQf0iKtJ3ebPbvz12H_gd4DUsdi1" alt="lamp" />
          <div className="icon-text">Dont miss the<br/>Year-End sale</div>
        </div>
        <div className="icon-box">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzYddSKBsKaPwWpP5nqADd_gSJ7VoNeqx2vQL6ty9-QaU-eOgI" alt="bag black" />
          <div className="icon-text">watch more...</div>


          {/* <div className="right-section">
        <ul>
          <li>
            <img src="https://via.placeholder.com/30" alt="Icon 1" />
            <span>Suggesstions for you...</span>
          </li>
          <li>
            <img src="https://via.placeholder.com/30" alt="Icon 2" />
            <span>Recently Viewed</span>
          </li>
        </ul>
      </div> */}
      

        </div>
        
      </div>
      <DealsOfTheDay />
    </main>
  );
};

export default MainContent;

