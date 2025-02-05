'use client'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'
import { fetchProducts } from '@/lib/api'


interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const PopularProduct: React.FC<Props> = ({data:initialData, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('vegetables');
    const [data, setData] = useState<ProductType[]>(initialData);

    useEffect(() => {
        const getData = async () => {
            const products = await fetchProducts();
            console.log('Fetched products:', products); // Hata ayıklama için ekleyin
            setData(products);
        };

        getData();
    }, []);
    

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'organic'));

    console.log('filteredProducts', filteredProducts);

    return (
        <div className="whate-new-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    <div className="heading3">Popular Product</div>
                    <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl md:mt-8 mt-6">
                        {['meat', 'vegetables', 'fruit'].map((type) => (
                            <button
                                key={type}
                                className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === type ? 'active' : ''}`}
                                onClick={() => handleTabClick(type)}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleTabClick(type); }}
                                role="tab"
                            >
                                {activeTab === type && (
                                    <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
                                )}
                                <span className='relative text-button-uppercase z-[1]'>
                                    {type}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    {filteredProducts.slice(start, limit).map((prd) => (
                        <Product data={prd} type='grid' key={prd.id} style='style-1' />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default PopularProduct