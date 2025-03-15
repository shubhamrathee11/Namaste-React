const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

            <p className="text-lg text-center mb-8">
                Welcome to FoodTail, the ultimate destination for food lovers! We bring delicious meals right to your doorstep with just a few clicks.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">
                    At FoodTail, our mission is simple: to provide a seamless and satisfying food ordering experience. We strive to connect our customers with the best local restaurants and deliver high-quality meals quickly and conveniently. Whether you’re at home, at work, or on the go, we make it easy for you to get your favorite dishes with just a tap!
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-lg">
                    Ordering food has never been easier! Here’s how it works:
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Browse through our wide selection of restaurants and menus.</li>
                    <li>Pick your favorite meal or dish and add it to your cart.</li>
                    <li>Enter your delivery details and payment information securely.</li>
                    <li>Wait for your delicious meal to be delivered right to your door!</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="text-lg">
                    We are committed to making your food ordering experience quick, easy, and enjoyable. Here’s why you should choose us:
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Vast selection of local restaurants and cuisines.</li>
                    <li>Fast, reliable, and contactless delivery options.</li>
                    <li>Easy-to-use platform for hassle-free ordering.</li>
                    <li>Secure payment options and great customer support.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Join Us Today!</h2>
                <p className="text-lg">
                    Ready to order? Explore our menu and find your next meal now! Whether you’re craving a quick snack or a full-course meal, we’ve got you covered. If you have any questions or need assistance, feel free to <a href="/contact" className="text-blue-600">contact us</a>.
                </p>
            </section>

            <section className="mb-8 text-center">
                <h3 className="text-xl font-semibold">Our Team</h3>
                <p className="text-lg">
                    We are a passionate team of food enthusiasts dedicated to making your meal ordering experience as easy and enjoyable as possible. Together, we work hard to bring the best food to your doorstep.
                </p>
            </section>
        </div>
    );
};

export default About;
