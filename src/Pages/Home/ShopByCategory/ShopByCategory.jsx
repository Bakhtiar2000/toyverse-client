import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        try {
            const response = await fetch('http://localhost:5000/toys');
            const data = await response.json();
            setToys(data);
        } catch (error) {
            console.error('Error fetching toys:', error);
        }
    };

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    const renderTabList = (categories) => {
        return (
            <TabList className="flex mb-4">
                {categories.map((category, index) => (
                    <Tab
                        key={category}
                        className={`px-4 py-2 mr-2 cursor-pointer ${activeTabIndex === index ? 'bg-gray-200' : ''
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {category}
                    </Tab>
                ))}
            </TabList>
        );
    };

    const renderTabPanel = (category) => {
        const filteredToys = toys.filter((toy) => toy.category === category);

        return (
            <TabPanel key={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredToys.map((toy) => (
                        <div
                            key={toy._id}
                            className="p-4 border rounded-lg flex justify-evenly lg:justify-between items-center gap-4"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <img
                                src={toy.picture}
                                alt={toy.name}
                                className="mb-2 rounded-lg"
                                style={{ maxWidth: '200px' }}
                            />
                            <div>
                                <h2 className="text-2xl font-semibold text-orange-700 mb-5">{toy.name}</h2>
                                <p className="mb-1"><span className='font-semibold'>Price:</span> ${toy.price}</p>
                                <p className="mb-1"><span className='font-semibold'>Rating: </span>{toy.rating}</p>
                                <Link to={`/singleToyDetails/${toy._id}`}><div className="btn bg-orange-500 border-0 mt-5">View Details</div></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </TabPanel>
        );
    };

    return (
        <div className="container mx-auto py-8 max-w-7xl">
            <h1 className="font-semibold text-5xl mb-4 text-center">Shop by category</h1>
            {toys.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <Tabs>
                    {renderTabList(['Marvel', 'DC', 'Star Wars'])}
                    {renderTabPanel('Marvel')}
                    {renderTabPanel('DC')}
                    {renderTabPanel('Star Wars')}
                </Tabs>
            )}
        </div>
    );
};

export default ShopByCategory;