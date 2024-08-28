
    const carData = {
        'Toyota Camry': {
            image: 'Assets/camary.png',
            specs: [
                { label: 'Engine', detail: '2.5L I4' },
                { label: 'Horsepower', detail: '203 hp' },
                { label: 'Fuel Economy', detail: '28 kmpl city / 39 kmpl highway' },
                { label: 'Year', detail: '2019' },
                { label: 'Price', detail: '2500/day' }
            ]
        },
        'Honda Accord': {
            image: 'Assets/accord.png',
            specs: [
                { label: 'Engine', detail: '1.5L I4 Turbo' },
                { label: 'Horsepower', detail: '192 hp' },
                { label: 'Fuel Economy', detail: '30 kmpl city / 38 kmpl highway' },
                { label: 'Year', detail: '2023' },
                { label: 'Price', detail: '2200/day' }
            ]
        },
        'Toyota Innova': {
            image: 'Assets/innova.png',
            specs: [
                { label: 'Engine', detail: '2.4 VX Diseal' },
                { label: 'Horsepower', detail: '120 hp' },
                { label: 'Fuel Economy', detail: '9 kmpl city / 13 kmpl highway' },
                { label: 'Year', detail: '2016' },
                { label: 'Price', detail: '3000/day' }
            ]
        },
        'Toyota Etios': {
            image: 'Assets/etios.png',
            specs: [
                { label: 'Engine', detail: 'D4D Diseal' },
                { label: 'Horsepower', detail: '67 hp' },
                { label: 'Fuel Economy', detail: '24 kmpl city / 36 kmpl highway' },
                { label: 'Year', detail: '2019' },
                { label: 'Price', detail: '2500/day' }
            ]
        },
        'Honda City': {
            image: 'Assets/city.png',
            specs: [
                { label: 'Engine', detail: '1.4L i-VTEC' },
                { label: 'Horsepower', detail: '120 hp' },
                { label: 'Fuel Economy', detail: '17 kmpl city / 20 kmpl highway' },
                { label: 'Year', detail: '2020' },
                { label: 'Price', detail: '2800/day' }
            ]
        },
        'Volkswagen Polo GT': {
            image: 'Assets/polo.png',
            specs: [
                { label: 'Engine', detail: '1.2L TSI' },
                { label: 'Horsepower', detail: '103 hp' },
                { label: 'Fuel Economy', detail: '17 kmpl city / 20 kmpl highway' },
                { label: 'Year', detail: '2020' },
                { label: 'Price', detail: '2700/day' }
            ]
        },
        'Maruti Ertiga': {
            image: 'Assets/ertiga.png',
            specs: [
                { label: 'Engine', detail: 'K15C smart hybrid' },
                { label: 'Horsepower', detail: '110 hp' },
                { label: 'Fuel Economy', detail: '20 kmpl city / 25 kmpl highway' },
                { label: 'Year', detail: '2023' },
                { label: 'Price', detail: '3000/day' }
            ]
        },
    };

    function updateCar(carName) {
        // Update image
        document.getElementById('carImage').innerHTML = `<img src="${carData[carName].image}" alt="${carName}">`;
        
        // Update specifications
        const specs = carData[carName].specs;
        const specsTable = document.getElementById('specifications');
        specsTable.innerHTML = ''; // Clear previous specs

        specs.forEach(spec => {
            const row = `<tr><td>${spec.label}</td><td>${spec.detail}</td></tr>`;
            specsTable.innerHTML += row; // Add new specs
        });
    }





    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 6000); // Change slide every 3 seconds

// Initial display of the first slide
showSlide(currentSlide);
