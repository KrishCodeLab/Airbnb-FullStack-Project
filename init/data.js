const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "A peaceful cottage near the Arabian Sea, perfect for a relaxing vacation.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 6500,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "A stylish apartment close to restaurants, shopping and major attractions.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 5500,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Luxury Mountain Villa",
    description: "A beautiful villa surrounded by mountains with comfortable rooms and great views.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 7200,
    location: "Manali",
    country: "India"
  },
  {
    title: "Heritage Stay",
    description: "Experience traditional architecture and local culture in this charming property.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 4200,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Lake View Home",
    description: "A comfortable home offering beautiful views of the surrounding lake and city.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 5800,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Modern Tech City Apartment",
    description: "A comfortable apartment located close to business districts and restaurants.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 4500,
    location: "Bengaluru",
    country: "India"
  },
  {
    title: "Cozy Nashik Home",
    description: "A peaceful home surrounded by vineyards and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 2800,
    location: "Nashik",
    country: "India"
  },
  {
    title: "Riverside Retreat",
    description: "A peaceful stay near the Ganges, ideal for relaxation and adventure.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3500,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Traditional Houseboat",
    description: "Stay in a traditional houseboat and enjoy the beautiful surroundings of Dal Lake.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 5500,
    location: "Srinagar",
    country: "India"
  },
  {
    title: "Himalayan Retreat",
    description: "A cozy mountain retreat with beautiful Himalayan views and peaceful surroundings.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
    price: 4800,
    location: "Shimla",
    country: "India"
  },

  {
    title: "Luxury City Apartment",
    description: "A modern apartment with excellent views and convenient access to city attractions.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: 12000,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Downtown Luxury Loft",
    description: "A stylish loft located in the heart of the city near restaurants and attractions.",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
    price: 15000,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Oceanfront Beach House",
    description: "A spacious beach house close to the beautiful beaches of Miami.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 18000,
    location: "Miami",
    country: "United States"
  },
  {
    title: "Paris City Apartment",
    description: "A charming apartment close to famous Paris attractions and restaurants.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 14000,
    location: "Paris",
    country: "France"
  },
  {
    title: "Tropical Bali Villa",
    description: "A peaceful tropical villa surrounded by greenery and natural beauty.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 7500,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Barcelona Seaside Apartment",
    description: "A modern apartment near the Mediterranean coast and city attractions.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    price: 11000,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Swiss Alpine Cabin",
    description: "A cozy cabin surrounded by the Swiss Alps and beautiful mountain scenery.",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0",
    price: 16000,
    location: "Interlaken",
    country: "Switzerland"
  },
  {
    title: "Singapore City Stay",
    description: "A modern apartment close to shopping areas, restaurants and attractions.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    price: 9500,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "London Countryside Cottage",
    description: "A charming cottage offering a peaceful escape near London.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 13000,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "Sydney Ocean View Home",
    description: "A comfortable coastal home with beautiful ocean views.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 12500,
    location: "Sydney",
    country: "Australia"
  },

  {
    title: "Modern Apartment",
    description: "A comfortable modern apartment located near the city center.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 4800,
    location: "Pune",
    country: "India"
  },
  {
    title: "Luxury Villa",
    description: "A spacious villa with modern facilities and beautiful surroundings.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 7500,
    location: "Alibaug",
    country: "India"
  },
  {
    title: "Hill View Cottage",
    description: "A quiet cottage surrounded by green hills and fresh mountain air.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 4200,
    location: "Mahabaleshwar",
    country: "India"
  },
  {
    title: "Lake Side Cottage",
    description: "A relaxing cottage located close to beautiful lakes and nature trails.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 3900,
    location: "Lonavala",
    country: "India"
  },
  {
    title: "Royal Heritage Stay",
    description: "A traditional stay inspired by the rich history and architecture of Rajasthan.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 4500,
    location: "Jodhpur",
    country: "India"
  },
  {
    title: "Historic City Apartment",
    description: "A comfortable apartment near historic landmarks and popular city attractions.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 3200,
    location: "Agra",
    country: "India"
  },
  {
    title: "Ganga View Guest House",
    description: "A peaceful guest house near the Ganges with a relaxing atmosphere.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Temple City Guest House",
    description: "A convenient stay close to important temples and cultural attractions.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 2700,
    location: "Varanasi",
    country: "India"
  },
  {
    title: "Royal City Apartment",
    description: "A modern stay close to markets, historical buildings and restaurants.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 3500,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Kerala Backwater Villa",
    description: "A peaceful villa near the famous Kerala backwaters.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    price: 5000,
    location: "Alappuzha",
    country: "India"
  },

  {
    title: "Beach Resort Home",
    description: "A comfortable home close to the beach and popular tourist attractions.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 6200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Candolim Beach Villa",
    description: "A beautiful villa near Candolim Beach with comfortable rooms.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 8500,
    location: "Candolim",
    country: "India"
  },
  {
    title: "Baga Beach Apartment",
    description: "A convenient apartment located near Baga Beach and local restaurants.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 5800,
    location: "Baga",
    country: "India"
  },
  {
    title: "Calangute Holiday Home",
    description: "A comfortable holiday home close to Calangute Beach.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 6500,
    location: "Calangute",
    country: "India"
  },
  {
    title: "Panjim City Apartment",
    description: "A modern apartment close to markets, restaurants and city attractions.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 4200,
    location: "Panaji",
    country: "India"
  },
  {
    title: "North Goa Villa",
    description: "A spacious villa surrounded by greenery and located close to beaches.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 7800,
    location: "North Goa",
    country: "India"
  },
  {
    title: "South Goa Retreat",
    description: "A peaceful retreat away from busy tourist areas and close to nature.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 7000,
    location: "South Goa",
    country: "India"
  },
  {
    title: "Mumbai Sea View Apartment",
    description: "A modern apartment offering beautiful views of the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 8500,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "South Mumbai Heritage Home",
    description: "A stylish heritage property located close to historic landmarks.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 7000,
    location: "South Mumbai",
    country: "India"
  },
  {
    title: "Bandra Luxury Apartment",
    description: "A modern luxury apartment close to restaurants, cafes and shopping areas.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 9000,
    location: "Bandra",
    country: "India"
  },

  {
    title: "Pune Heritage House",
    description: "A comfortable house close to historical places and local markets.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 4000,
    location: "Pune",
    country: "India"
  },
  {
    title: "Koregaon Park Apartment",
    description: "A stylish apartment near cafes, restaurants and entertainment areas.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 5200,
    location: "Koregaon Park",
    country: "India"
  },
  {
    title: "Hinjewadi Business Stay",
    description: "A convenient apartment for professionals visiting Pune's technology hub.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 3600,
    location: "Hinjewadi",
    country: "India"
  },
  {
    title: "Lonavala Mountain Villa",
    description: "A spacious villa surrounded by hills and greenery.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 8500,
    location: "Lonavala",
    country: "India"
  },
  {
    title: "Khandala Hill House",
    description: "A peaceful hill house with scenic views and fresh air.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 7500,
    location: "Khandala",
    country: "India"
  },
  {
    title: "Nashik Vineyard Cottage",
    description: "A peaceful cottage near vineyards and scenic countryside.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 3500,
    location: "Nashik",
    country: "India"
  },
  {
    title: "Trimbakeshwar Guest House",
    description: "A comfortable guest house close to the famous temple and surrounding hills.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 2500,
    location: "Trimbakeshwar",
    country: "India"
  },
  {
    title: "Igatpuri Mountain Retreat",
    description: "A scenic retreat surrounded by mountains and greenery.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 4000,
    location: "Igatpuri",
    country: "India"
  },
  {
    title: "Bengaluru City Home",
    description: "A comfortable home located near technology parks and restaurants.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 4300,
    location: "Bengaluru",
    country: "India"
  },
  {
    title: "Whitefield Modern Apartment",
    description: "A modern apartment near offices, shopping centers and restaurants.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 4700,
    location: "Whitefield",
    country: "India"
  },

  {
    title: "Hyderabad Heritage Stay",
    description: "A comfortable stay close to historic landmarks and famous food areas.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 3600,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Banjara Hills Apartment",
    description: "A modern apartment close to restaurants, cafes and shopping centers.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 5000,
    location: "Banjara Hills",
    country: "India"
  },
  {
    title: "Chennai Beach Home",
    description: "A comfortable home located close to the Bay of Bengal coastline.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 4500,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Kochi Backwater Cottage",
    description: "A peaceful cottage close to Kerala's famous backwaters.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    price: 4200,
    location: "Kochi",
    country: "India"
  },
  {
    title: "Munnar Mountain Villa",
    description: "A scenic villa surrounded by tea plantations and green hills.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 5000,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Ooty Hill Cottage",
    description: "A cozy cottage surrounded by beautiful hills and gardens.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 3800,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Mysuru Palace Area Home",
    description: "A comfortable home near the famous Mysuru Palace and city center.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 3000,
    location: "Mysuru",
    country: "India"
  },
  {
    title: "Kolkata Cultural Apartment",
    description: "A city apartment close to museums, markets and cultural landmarks.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 3500,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Darjeeling Tea Estate Stay",
    description: "A peaceful stay surrounded by tea gardens and mountain scenery.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 4500,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Ahmedabad City Apartment",
    description: "A modern apartment close to markets, restaurants and business areas.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 3200,
    location: "Ahmedabad",
    country: "India"
  },

  {
    title: "Surat Business Apartment",
    description: "A convenient apartment suitable for business travelers and families.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 3000,
    location: "Surat",
    country: "India"
  },
  {
    title: "Bhopal Lake View Home",
    description: "A comfortable home near the beautiful lakes and green spaces of Bhopal.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 2800,
    location: "Bhopal",
    country: "India"
  },
  {
    title: "Indore City Stay",
    description: "A modern stay near popular food streets, markets and business areas.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 3100,
    location: "Indore",
    country: "India"
  },
  {
    title: "Amritsar Golden Temple Stay",
    description: "A comfortable guest house located close to the Golden Temple.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 3200,
    location: "Amritsar",
    country: "India"
  },
  {
    title: "Delhi City Apartment",
    description: "A convenient apartment close to markets, restaurants and historic landmarks.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 4800,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "Connaught Place Apartment",
    description: "A modern apartment in a central area close to shops and restaurants.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 5500,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "Mussoorie Hill Retreat",
    description: "A peaceful mountain retreat with scenic Himalayan views.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 4800,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Nainital Lake Cottage",
    description: "A cozy cottage near the famous Naini Lake.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 4200,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Jim Corbett Forest Retreat",
    description: "A peaceful retreat surrounded by nature near Jim Corbett National Park.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 4500,
    location: "Ramnagar",
    country: "India"
  },
  {
    title: "Kashmir Valley Home",
    description: "A beautiful home surrounded by the scenic landscapes of Kashmir.",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0",
    price: 5500,
    location: "Srinagar",
    country: "India"
  },

  {
    title: "Dubai Marina Apartment",
    description: "A modern apartment with excellent city and waterfront views.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: 14000,
    location: "Dubai Marina",
    country: "United Arab Emirates"
  },
  {
    title: "Burj Khalifa City Stay",
    description: "A luxury apartment near Downtown Dubai and major attractions.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: 16000,
    location: "Downtown Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Abu Dhabi Luxury Home",
    description: "A comfortable luxury home close to beaches and city attractions.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    price: 12500,
    location: "Abu Dhabi",
    country: "United Arab Emirates"
  },
  {
    title: "Singapore Marina Stay",
    description: "A modern stay close to Marina Bay and major city attractions.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    price: 10500,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Bangkok City Apartment",
    description: "A comfortable apartment close to markets, restaurants and temples.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    price: 6500,
    location: "Bangkok",
    country: "Thailand"
  },
  {
    title: "Phuket Beach Villa",
    description: "A tropical villa close to beautiful beaches and island attractions.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 8500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Tokyo Modern Apartment",
    description: "A compact modern apartment close to public transport and city attractions.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    price: 14000,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Kyoto Traditional Home",
    description: "A traditional-style home close to temples, gardens and cultural attractions.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 12000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "London Central Apartment",
    description: "A stylish apartment close to London's major landmarks and transport.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: 15000,
    location: "London",
    country: "United Kingdom"
  },
  {
    title: "London Riverside Home",
    description: "A comfortable home with easy access to London's attractions and riverside areas.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 13500,
    location: "London",
    country: "United Kingdom"
  },

  {
    title: "Paris Eiffel Tower Stay",
    description: "A charming apartment close to the Eiffel Tower and central Paris.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 14500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Paris Riverside Apartment",
    description: "A comfortable apartment near the Seine and famous Paris attractions.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 13500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Rome Historic Apartment",
    description: "A beautiful apartment close to historic landmarks and Italian restaurants.",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
    price: 10500,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Rome City Guest House",
    description: "A comfortable guest house near the Colosseum and city center.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: 9500,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Barcelona Beach Apartment",
    description: "A modern apartment close to beaches, restaurants and city attractions.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    price: 11500,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Madrid City Apartment",
    description: "A comfortable apartment close to museums, parks and restaurants.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    price: 10000,
    location: "Madrid",
    country: "Spain"
  },
  {
    title: "Bali Tropical Villa",
    description: "A peaceful tropical villa surrounded by palm trees and greenery.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 8000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Ubud Jungle Retreat",
    description: "A relaxing retreat surrounded by forests, rice fields and nature.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 7000,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "New York Downtown Loft",
    description: "A stylish loft in downtown Manhattan close to restaurants and attractions.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 16000,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Manhattan Luxury Apartment",
    description: "A modern luxury apartment with excellent city views.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 18000,
    location: "New York City",
    country: "United States"
  },

  {
    title: "Los Angeles Hillside Home",
    description: "A stylish home with beautiful views of Los Angeles.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 15000,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Hollywood City Apartment",
    description: "A comfortable apartment close to Hollywood attractions and restaurants.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 13500,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "San Francisco Bay Apartment",
    description: "A modern apartment close to the waterfront and city attractions.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 17000,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "California Coastal Home",
    description: "A beautiful coastal home with relaxing ocean views.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 15500,
    location: "San Diego",
    country: "United States"
  },
  {
    title: "Toronto Downtown Stay",
    description: "A modern apartment close to shopping, restaurants and city attractions.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 12000,
    location: "Toronto",
    country: "Canada"
  },
  {
    title: "Vancouver Mountain Home",
    description: "A comfortable home surrounded by mountains and beautiful scenery.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 13000,
    location: "Vancouver",
    country: "Canada"
  },
  {
    title: "Sydney Harbour Apartment",
    description: "A modern apartment close to Sydney Harbour and famous landmarks.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 13500,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Melbourne City Home",
    description: "A comfortable city home close to cafes, restaurants and shopping.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 11500,
    location: "Melbourne",
    country: "Australia"
  },
  {
    title: "Swiss Alpine Retreat",
    description: "A peaceful mountain retreat surrounded by the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1520984032042-162d526883e0",
    price: 16500,
    location: "Interlaken",
    country: "Switzerland"
  },
  {
    title: "Zurich City Apartment",
    description: "A modern apartment close to restaurants, shopping and public transport.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 15000,
    location: "Zurich",
    country: "Switzerland"
  },

  {
    title: "Swiss Lake House",
    description: "A beautiful house near a lake with stunning mountain surroundings.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 17500,
    location: "Lucerne",
    country: "Switzerland"
  },
  {
    title: "Amsterdam Canal Apartment",
    description: "A charming apartment close to canals, museums and city attractions.",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
    price: 12500,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Berlin Modern Loft",
    description: "A modern loft close to cultural attractions, restaurants and public transport.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 9500,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Munich City Apartment",
    description: "A comfortable apartment close to parks, restaurants and city attractions.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 10500,
    location: "Munich",
    country: "Germany"
  },
  {
    title: "Vienna Heritage Apartment",
    description: "An elegant apartment near historic buildings, museums and cafes.",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af",
    price: 10000,
    location: "Vienna",
    country: "Austria"
  },
  {
    title: "Prague Old Town Home",
    description: "A charming home close to Prague's historic center and famous landmarks.",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    price: 8500,
    location: "Prague",
    country: "Czech Republic"
  },
  {
    title: "Santorini Sea View Villa",
    description: "A beautiful villa with stunning views of the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: 18000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Athens Historic Apartment",
    description: "A comfortable apartment close to historic Greek landmarks and restaurants.",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
    price: 9000,
    location: "Athens",
    country: "Greece"
  },
  {
    title: "Lisbon City Apartment",
    description: "A stylish apartment close to historic streets, restaurants and viewpoints.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
    price: 8500,
    location: "Lisbon",
    country: "Portugal"
  },
  {
    title: "Istanbul Bosphorus Home",
    description: "A comfortable home with convenient access to the Bosphorus and historic areas.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    price: 7500,
    location: "Istanbul",
    country: "Turkey"
  },

  {
    title: "Cape Town Ocean View Home",
    description: "A beautiful home with coastal views and easy access to city attractions.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 8000,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Marrakech Traditional Riad",
    description: "A traditional riad offering a peaceful stay close to markets and historic sites.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: 6500,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Cairo City Apartment",
    description: "A comfortable apartment close to museums, markets and historic attractions.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    price: 5500,
    location: "Cairo",
    country: "Egypt"
  },
  {
    title: "Rio Beach Apartment",
    description: "A modern apartment close to famous beaches and lively city areas.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    price: 7000,
    location: "Rio de Janeiro",
    country: "Brazil"
  },
  {
    title: "Buenos Aires City Home",
    description: "A stylish home close to restaurants, parks and cultural attractions.",
    image: "https://images.unsplash.com/photo-1612294037637-2c7f27e2e6b7",
    price: 6000,
    location: "Buenos Aires",
    country: "Argentina"
  },
  {
    title: "Mexico City Apartment",
    description: "A modern apartment close to museums, restaurants and cultural attractions.",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a",
    price: 6500,
    location: "Mexico City",
    country: "Mexico"
  },
  {
    title: "Seoul Modern Apartment",
    description: "A stylish apartment close to shopping districts, restaurants and public transport.",
    image: "https://images.unsplash.com/photo-1538485399081-7c8970d6a9a4",
    price: 9500,
    location: "Seoul",
    country: "South Korea"
  },
  {
    title: "Busan Beach Home",
    description: "A comfortable coastal home close to the beach and local attractions.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 8000,
    location: "Busan",
    country: "South Korea"
  },
  {
    title: "Hong Kong Skyline Apartment",
    description: "A modern apartment with easy access to shopping and city attractions.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1",
    price: 13000,
    location: "Hong Kong",
    country: "China"
  },
  {
    title: "Kuala Lumpur City Stay",
    description: "A modern apartment close to shopping centers and famous city landmarks.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
    price: 6000,
    location: "Kuala Lumpur",
    country: "Malaysia"
  },

  {
    title: "Maldives Island Villa",
    description: "A beautiful tropical villa surrounded by clear water and peaceful beaches.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: 22000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Maldives Beach Cottage",
    description: "A relaxing beach cottage with beautiful ocean views and peaceful surroundings.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 19000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Bali Beach House",
    description: "A tropical beach house surrounded by palm trees and beautiful coastal scenery.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 8500,
    location: "Seminyak",
    country: "Indonesia"
  },
  {
    title: "Phuket Island Villa",
    description: "A comfortable tropical villa close to beaches and local attractions.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 9000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Kandy Hill Retreat",
    description: "A peaceful retreat surrounded by green hills and natural scenery.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 5000,
    location: "Kandy",
    country: "Sri Lanka"
  },
  {
    title: "Colombo City Apartment",
    description: "A modern apartment close to restaurants, shopping and the coastline.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 4500,
    location: "Colombo",
    country: "Sri Lanka"
  },
  {
    title: "Kathmandu Mountain Home",
    description: "A comfortable home with access to historic sites and Himalayan views.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 3500,
    location: "Kathmandu",
    country: "Nepal"
  },
  {
    title: "Pokhara Lake Retreat",
    description: "A peaceful retreat near Phewa Lake with beautiful mountain surroundings.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: 4000,
    location: "Pokhara",
    country: "Nepal"
  },
  {
    title: "Bhutan Mountain Lodge",
    description: "A peaceful mountain lodge surrounded by beautiful Himalayan landscapes.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 5000,
    location: "Thimphu",
    country: "Bhutan"
  },
  {
    title: "Paro Valley Cottage",
    description: "A cozy cottage surrounded by mountains, forests and traditional villages.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    price: 4500,
    location: "Paro",
    country: "Bhutan"
  }
];

module.exports = { data: sampleListings };