import React from 'react';
import './DealsOfTheDay.css';
import ProductCard from './ProductCard';

const DealsOfTheDay: React.FC = () => {
    return (
        <section className="deals-of-the-day">
            <h2>Deals of the Day</h2>
            <div className="countdown">20:45:12 Left</div>
            <div className="products">
                <ProductCard
                    imgSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDMWENA36E1KDlycUlXkjJr-C5d0cNA13CYG2YA7MA7eFfuRE_"
                    title="Red leather GUCCI bag"
                    price="4500 Bdt"
                    oldPrice="7300 Bdt"
                />
                <ProductCard
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnjkKg-dfLdBCqhCUgQ1ThRt-idzYpCJvhyoPDBCMXyCyfe7E"
                    title="LEXRX face cream"
                    price="300 Bdt"
                    oldPrice="740 Bdt"
                />
                <ProductCard
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5jVA4DRI-RqW5u7dtpqcyS3rcvNpqMETOZgqImqzN_dL82ek"
                    title="Fuji Film DSLR camera"
                    price="35,000 Bdt"
                    oldPrice="43,990 Bdt"
                />
                <ProductCard
                    imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUFyky2tIaluYF-0ilettogQlnfnJ9G7tkU5xa-trD3ge_espe"
                    title="Sky blue kids shoe"
                    price="910 Bdt"
                    oldPrice="1390 Bdt"
                />
                <ProductCard
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlLVn9nLNR-o5zuSwS49nXjyPuyburwPIeCzO9IQIKVe5QezA"
                    title="Brown leather wallet"
                    price="600 Bdt"
                    oldPrice="980 Bdt"
                />
                <ProductCard
                    imgSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJeKs0J-NuihBuro7EdhPEq25iBwsDg0f6KuSlRXK4KJtfQqa7"
                    title="Black watch"
                    price="990 Bdt"
                    oldPrice="1200 Bdt"
                />
            </div>
        </section>
    );
}

export default DealsOfTheDay;