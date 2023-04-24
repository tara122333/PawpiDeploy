import BrandIcon from '../../Images/SlideNavbarSmScreen/BrandIcon.png';
import BreedIcon from '../../Images/SlideNavbarSmScreen/BreedIcon.png';
import CatIcon from '../../Images/SlideNavbarSmScreen/CatIcon.png';
import DogIcon from '../../Images/SlideNavbarSmScreen/DogIcon.png';
import LifestageIcon from '../../Images/SlideNavbarSmScreen/LifestageIcon.png';

export const links = [
    {
      name: "Dog",
      submenu: true,
      id : "/dogs",
      icon: DogIcon,
      sublinks: [
        {
          Head: "Food",
          sublinksid : "/dogs/foods",
          sublink: [
            { name: "Dry Food", link: "/" , sublinkid :  "dogdryfood"},            
            { name: "Wet Food", link: "/" , sublinkid :  "Wet Food"},
            { name: "Puppy Food", link: "/" , sublinkid :  "Puppy Food"},            
            { name: "Grain Free Food", link: "/" , sublinkid :  "Grain Free Food"},
            { name: "Protien Rich Food", link: "/" , sublinkid :  "Protien Rich Food"},
            { name: "Supplements", link: "/" , sublinkid :  "Supplements"},
            
          ],
        },
        {
          Head: "Bisc Treats & Chews",
          sublinksid : "bisc treats & chews",
          sublink: [
            { name: "Biscuits", link: "/", sublinkid :  "Biscuits"  },
            { name: "Veg Treats", link: "/" , sublinkid :  "Veg Treats"},
            { name: "Natural Treats", link: "/" , sublinkid :  "Natural Treats"},
            { name: "Puppy Dental", link: "/" , sublinkid :  "Puppy Dental"},
            { name: "Soft & Hard", link: "/" , sublinkid :  "Soft & Hard"},

          ],
        },
        {
          Head: "Walk Essentials",
          sublinksid : "walk essential",
          sublink: [
            { name: "Collars", link: "/", sublinkid :  "Collars"  },
            { name: "Leashes", link: "/" , sublinkid :  "Leashes"},
            { name: "Harness", link: "/" , sublinkid :  "Harness"},
            { name: "Name Tags", link: "/" , sublinkid :  "Name Tags"},
            { name: "Collar & Leash Set", link: "/" , sublinkid :  "Collar & Leash Set"},
            { name: "Personalised", link: "/" , sublinkid :  "Personalised"},

          ],
        },
        {
          Head: "Bedding & Mats",
          sublinksid : "bedding & mats",
          sublink: [
            { name: "Beds", link: "/", sublinkid :  "Beds"  },
            { name: "Mats", link: "/" , sublinkid :  "Mats"},
            { name: "Blankets & Cushion", link: "/" , sublinkid :  "Blankets & Cushion"},
            { name: "Bed Covers", link: "/" , sublinkid :  "Bed Covers"},
            { name: "Personalised Bedding", link: "/" , sublinkid :  "Personalised Bedding"},

          ],
        },
        {
          Head: "Grooming",
          sublinksid : "grooming",
          sublink: [
            { name: "Shampoos", link: "/", sublinkid :  "Shampoos"  },
            { name: "Conditioner", link: "/" , sublinkid :  "Conditioner"},
            { name: "Brushes & Combs", link: "/" , sublinkid :  "Brushes & Combs"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "Tick & Flea"},
            { name: "Paw Care", link: "/" , sublinkid :  "Paw Care"},
            { name: "Dentangling Solutions", link: "/" , sublinkid :  "Dentangling Solutions"},
          ],
        },
        {
          Head: "Toys",
          sublinksid : "toys",
          sublink: [
            { name: "Chew Toys", link: "/", sublinkid :  "Chew Toys"  },
            { name: "Plush Toys", link: "/" , sublinkid :  "Plush Toys"},
            { name: "Balls", link: "/" , sublinkid :  "Balls"},
            { name: "Interactive Toys", link: "/" , sublinkid :  "Interactive Toys"},
            { name: "Tough Chewers", link: "/" , sublinkid :  "Tough Chewers"},
            { name: "Rope Toys", link: "/" , sublinkid :  "Rope Toys"},

            ],
        },
        {
          Head: "Clothing",
          sublinksid : "clothing",
          sublink: [
            { name: "Winter Wear", link: "/", sublinkid :  "Winter Wear"  },
            { name: "Rian Coats", link: "/" , sublinkid :  "Rian Coats"},
            { name: "Tshirts & Shirts", link: "/" , sublinkid :  "Tshirts & Shirts"},
            { name: "Occasional Dresswear", link: "/" , sublinkid :  "Occasional Dresswear"},
            ],
        },
        
        {
          Head: "Bowls & Diner ",
          sublinksid : "bowls & diner",
          sublink: [
            { name: "Steel Bowls", link: "/", sublinkid :  "Steel Bowls"  },
            { name: "Elevated Bowls", link: "/" , sublinkid :  "Elevated Bowls"},
            { name: "Slow Feeders", link: "/" , sublinkid :  "Slow Feeders"},
            { name: "Licki Mats", link: "/" , sublinkid :  "Licki Mats"},
            { name: "Anti Spills Mats", link: "/" , sublinkid :  "Anti Spills Mats"},

            ],
        },
        {
          Head: "Health & Hygiene ",
          sublinksid : "health & hygiene",
          sublink: [
            { name: "Oral Care", link: "/", sublinkid :  "Oral Care"  },
            { name: "Supplements", link: "/" , sublinkid :  "Supplements"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "Tick & Flea"},
            { name: "Stain & Odour", link: "/" , sublinkid :  "Stain & Odour"},
            { name: "Pee Lock Powder", link: "/" , sublinkid :  "Pee Lock Powder"},


            ],
        },
        {
          Head: "Accessories",
          sublinksid : "accessories",
          sublink: [
            { name: "Bow Ties & Bandanas", link: "/", sublinkid :  "Bow Ties & Bandanas"  },
            { name: "Party Accessories", link: "/" , sublinkid :  "Party Accessories"},
            { name: "Shoes & Socks", link: "/" , sublinkid :  "Shoes & Socks"},
            { name: "Personalised Accessories", link: "/" , sublinkid :  "Personalised Accessories"},
            ],
        },
        {
          Head: "Travel",
          sublinksid : "travel",
          sublink: [
            { name: "Ramps & Steps", link: "/", sublinkid :  "Ramps & Steps"  },
            { name: "Crates & Carriers ", link: "/" , sublinkid :  "Crates & Carriers"},
            ],
        },
        
      ],
    },
    {
      name: "Cat",
      submenu: true,
      id : "/cats",
      icon: CatIcon,
      sublinks: [
        {
          Head: "FOOD",
          sublinksid : "food",
          sublink: [
            { name: "Dry Food", link: "/" , sublinkid :  "Dry Food"},            
            { name: "Wet Food", link: "/" , sublinkid :  "Wet Food"},
            { name: "Kitten Food", link: "/" , sublinkid :  "Kitten Food"},
       
          ],
        },
        {
          Head: "Litter & Supplies",
          sublinksid : "litter & supplies",
          sublink: [
            { name: "Litter", link: "/" , sublinkid :  "Litter"},            
            { name: "Toilets & Trays", link: "/" , sublinkid :  "Toilets & Trays"},
            { name: "Scoopers", link: "/" , sublinkid :  "Kitten Food"},
            { name: "Odour", link: "/" , sublinkid :  "Kitten Odour"},
          ],
        },
        {
          Head: "Collars & Accessories",
          sublinksid : "collars & accessories",
          sublink: [
            { name: "Harness", link: "/" , sublinkid :  "Harness"},            
            { name: "Bandanas", link: "/" , sublinkid :  "Bandanas"},
            { name: "", link: "/" , sublinkid :  "Kitten "},
          ],
        },
        {
          Head: "Treats",
          sublinksid : "treats",
          sublink: [
            { name: "Natural Treats", link: "/" , sublinkid :  "Natural Treats"},            
            { name: "Creamy Treats", link: "/" , sublinkid :  "Creamy Treats"},
            { name: "All Treats", link: "/" , sublinkid :  "All Treats"},
            { name: "Medicated Treats", link: "/" , sublinkid :  "Medicated Treats"},

          ],
        },
        {
          Head: "Carriers",
          sublinksid : "carriers",
          sublink: [
            { name: "Crates", link: "/" , sublinkid :  "Crates"},            
            { name: "Carriers", link: "/" , sublinkid :  "Carriers"},
            { name: "Bags", link: "/" , sublinkid :  "Bags"},
          ],
        },
        {
          Head: "Toys",
          sublinksid : "toys",
          sublink: [
            { name: "Plush Toys", link: "/" , sublinkid :  "Plush Toys"},            
            { name: "Interactive Toys", link: "/" , sublinkid :  "Interactive Toys"},
            { name: "Catnip", link: "/" , sublinkid :  "Catnip"},
            { name: "Stretcher", link: "/" , sublinkid :  "Stretcher"},
            { name: "Teasers & Wands", link: "/" , sublinkid :  "Teasers & Wands"},            
          ],
        },
        {
          Head: "Groomings",
          sublinksid : "groomings",
          sublink: [
            { name: "Shampoos", link: "/" , sublinkid :  "Shampoos"},            
            { name: "Towels", link: "/" , sublinkid :  "Towels"},
            { name: "Wipes", link: "/" , sublinkid :  "Wipes"},
            { name: "Stain & Odour", link: "/" , sublinkid :  "Stain & Odour"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "Tick & Flea"},            
            { name: "Brushes", link: "/" , sublinkid :  "Brushes"},            

          ],
        },
        {
          Head: "Groomings",
          sublinksid : "groomings",
          sublink: [
            { name: "Shampoos", link: "/" , sublinkid :  "Shampoos"},            
            { name: "Towels", link: "/" , sublinkid :  "Towels"},
            { name: "Wipes", link: "/" , sublinkid :  "Wipes"},
            { name: "Stain & Odour", link: "/" , sublinkid :  "Stain & Odour"},
            { name: "Tick & Flea", link: "/" , sublinkid :  "Tick & Flea"},            
            { name: "Brushes", link: "/" , sublinkid :  "Brushes"},            

          ],
        },
        {
          Head: "Beddings",
          sublinksid : "beddings",
          sublink: [
            { name: "Tents", link: "/" , sublinkid :  "Tents"},            
            { name: "Beds", link: "/" , sublinkid :  "Beds"},
            { name: "Mattress", link: "/" , sublinkid :  "Mattress"},
            { name: "Couches", link: "/" , sublinkid :  "Couches"},
          ],
        },
        {
          Head: "Dining",
          sublinksid : "dining",
          sublink: [
            { name: "Cat Bowls", link: "/" , sublinkid :  "Cat Bowls"},            
          ],
        },
      ],
    },
    {
      name: "Brands",
      submenu: true,
      id : "brands",
      icon: BrandIcon,
      sublinks: [
        {
          Head: "A",
          sublinksid : "a",
          sublink: [
            { name: "ALL4PET", link: "/" , sublinkid :  "ALL4PET"},            
            { name: "ARDEN GRANGE", link: "/" , sublinkid :  "ARDEN GRANGE"},
       
          ],
        },
        {
          Head: "B",
          sublinksid : "b",
          sublink: [
             { name: "Bark Out Loud", link: "/" , sublinkid :  "Bark Out Loud"},            
             { name: "Basil", link: "/" , sublinkid :  "Basil"},            
             { name: "Bio Pet Active", link: "/" , sublinkid :  "Bio Pet Active"},            
             { name: "BOW", link: "/" , sublinkid :  "BOW"},            
          ],
        },
        {
          Head: "C",
          sublinksid : "c",
          sublink: [
             { name: "Chelsea", link: "/" , sublinkid :  "Chelsea"},            
             { name: "Chip Chop", link: "/" , sublinkid :  "Chip Chop"},            
             { name: "Cuddle", link: "/" , sublinkid :  "Cuddle"},            
             { name: "Dental Bites", link: "/" , sublinkid :  "Dental Bites"},   
             { name: "Dogaholic", link: "/" , sublinkid :  "Dogaholic"},   
             { name: "DR PETS", link: "/" , sublinkid :  "DR PETS"},   
             { name: "Dr.Pet", link: "/" , sublinkid :  "Dr.Pet"},   
             { name: "Drools", link: "/" , sublinkid :  "Drools"},   
             { name: "DUX", link: "/" , sublinkid :  "DUX"},   
          ],
        },
        {
          Head: "D",
          sublinksid : "d",
          sublink: [
             { name: "Farmina N&D", link: "/" , sublinkid :  "Farmina N&D"},            
             { name: "FEEDO", link: "/" , sublinkid :  "FEEDO"},            
             { name: "FIDELE", link: "/" , sublinkid :  "FIDELE"},            
             { name: "Fido", link: "/" , sublinkid :  "Fido"},   
             { name: "First Meow", link: "/" , sublinkid :  "First Meow"},   
             { name: "Fofos", link: "/" , sublinkid :  "Dr.Pet"},   
             { name: "Fresh For Paws", link: "/" , sublinkid :  "Fresh For Paws"},   
             { name: "Gnawlers", link: "/" , sublinkid :  "Gnawlers"},   
             { name: "Go Pets", link: "/" , sublinkid :  "Go Pets"},   
             { name: "Goodies", link: "/" , sublinkid :  "Goodies"},   
          ],
        },
        {
          Head: "H",
          sublinksid : "h",
          sublink: [
             { name: "Healthy Bites", link: "/" , sublinkid :  "Healthy Bites"},            
          ],
        },
        {
          Head: "J",
          sublinksid : "j",
          sublink: [
             { name: "Jinny", link: "/" , sublinkid :  "Jinny"},            
          ],
        },
        {
          Head: "K",
          sublinksid : "k",
          sublink: [
             { name: "KIT KAT", link: "/" , sublinkid :  "KIT KAT"}, 
             { name: "Kittos", link: "/" , sublinkid :  "Kittos"}, 
             { name: "Kitty Licks", link: "/" , sublinkid :  "Kitty Licks"},            
             { name: "Krrispy Bites", link: "/" , sublinkid :  "Krrispy Bites"},
          ],
        },
        {
          Head: "L",
          sublinksid : "l",
          sublink: [
             { name: "LARA", link: "/" , sublinkid :  "LARA"}, 
             { name: "Lozalo", link: "/" , sublinkid :  "Lozalo"}, 
          ],
        },
        {
          Head: "M",
          sublinksid : "m",
          sublink: [
             { name: "Mera Dog", link: "/" , sublinkid :  "Mera Dog"}, 
             { name: "MYBEAU", link: "/" , sublinkid :  "MYBEAU"}, 
          ],
        },
        {
          Head: "N",
          sublinksid : "n",
          sublink: [
             { name: "Natural Remedies", link: "/" , sublinkid :  "Natural Remedies"}, 
          ],
        },
        {
          Head: "P",
          sublinksid : "p",
          sublink: [
             { name: "Pawpaya", link: "/" , sublinkid :  "Pawpaya"}, 
             { name: "Pet Perfect", link: "/" , sublinkid :  "Pet Perfect"}, 
             { name: "Pet Toy", link: "/" , sublinkid :  "Pet Toy"}, 
             { name: "Petaholic", link: "/" , sublinkid :  "Petaholic"}, 
             { name: "Petcare", link: "/" , sublinkid :  "Petcare"}, 
             { name: "Petspoon", link: "/" , sublinkid :  "Petspoon"}, 
             { name: "Procott", link: "/" , sublinkid :  "Procott"}, 
             { name: "PRODIET", link: "/" , sublinkid :  "PRODIET"}, 
             { name: "Purina Felix", link: "/" , sublinkid :  "Purina Felix"}, 
         ],
        },
        {
          Head: "R",
          sublinksid : "r",
          sublink: [
             { name: "Rena", link: "/" , sublinkid :  "Rena"}, 
            
      ],
        },
        {
          Head: "S",
          sublinksid : "s",
          sublink: [
             { name: "SNIFFY", link: "/" , sublinkid :  "SNIFFY"}, 
             { name: "Superpet", link: "/" , sublinkid :  "Superpet"},   
      ],
        },
        {
          Head: "T",
          sublinksid : "t",
          sublink: [
             { name: "Trixie", link: "/" , sublinkid :  "Trixie"}, 
      ],
        },
        {
          Head: "V",
          sublinksid : "v",
          sublink: [
             { name: "Venworld", link: "/" , sublinkid :  "Venworld"}, 
             { name: "Vibrac", link: "/" , sublinkid :  "Vibrac"},
      ],
        },
        {
          Head: "W",
          sublinksid : "w",
          sublink: [
             { name: "Waggy Zone", link: "/" , sublinkid :  "Waggy Zone"}, 
             { name: "Whoof Whoof", link: "/" , sublinkid :  "Whoof Whoof"},
             { name: "Wiggles.in", link: "/" , sublinkid :  "Wiggles.in"}, 
       ],
        },
      ],
    },
    {
      name: "Shop By Breed",
      submenu: true,
      id : "dog",
      icon: BreedIcon,
      sublinks: [
        {
          Head: "DOG",
          sublinksid : "dogbreed",
          sublink: [
            { name: "German Shepherd", link: "/" , sublinkid :  "German Shepherd"},            
            { name: "Golden Retriever", link: "/" , sublinkid :  "Golden Retriever"},
            { name: "Pug", link: "/" , sublinkid :  "Pug"},            
            { name: "Beagle", link: "/" , sublinkid :  "Beagle"},
            { name: "Husky", link: "/" , sublinkid :  "Husky"},
            { name: "Dalmatians", link: "/" , sublinkid :  "Dalmatians"},
            { name: "Pitbull", link: "/" , sublinkid :  "Pitbull"},            
            { name: "Pomeranian", link: "/" , sublinkid :  "Pomeranian"},
            { name: "Chihuahua", link: "/" , sublinkid :  "Chihuahua"},            
            { name: "Shih-Tzu", link: "/" , sublinkid :  "Shih-Tzu"},
            { name: "Labrador Retriever", link: "/" , sublinkid :  "Labrador Retriever"},
            { name: "Border Collie", link: "/" , sublinkid :  "Border Collie"},
            { name: "Rotwielier", link: "/" , sublinkid :  "Rotwielier"},            
            { name: "Cocker-Spaniel", link: "/" , sublinkid :  "Cocker-Spaniel"},
            { name: "Saint-Bernard", link: "/" , sublinkid :  "Saint-Bernard"},            
            { name: "Bulldog", link: "/" , sublinkid :  "Beagle"},
          ],
        },
        {
          Head: "Cat",
          sublinksid : "cat breed",
          sublink: [
            { name: "Bengal Cats", link: "/" , sublinkid :  "Bengal Cats"},            
            { name: "Persian Cats", link: "/" , sublinkid :  "Persian Cats"},
            { name: "Siamese Cats", link: "/" , sublinkid :  "Siamese Cats"},            
            { name: "The Maine Coon", link: "/" , sublinkid :  "The Maine Coon"},
            { name: "The Bombay Cats", link: "/" , sublinkid :  "The Bombay Cats"},
            { name: "Himalayan Cats", link: "/" , sublinkid :  "Himalayan Cats"},
            { name: "Exotic Short hair", link: "/" , sublinkid :  "Exotic Short hair"},            
            { name: "American Bobtail", link: "/" , sublinkid :  "American Bobtail"},
            { name: "Munchkin", link: "/" , sublinkid :  "Munchkin"},            
            { name: "Ragdoll", link: "/" , sublinkid :  "Ragdoll"},
            { name: "British Shorthair", link: "/" , sublinkid :  "British Shorthair"},

          ],
        },
     ],
    },

    {
      name: "Shop By Lifestages",
      submenu: true,
      id : "lifestages",
      icon: LifestageIcon,
      sublinks: [
        {
          Head: "DOG",
          sublinksid : "doglifestages",
          sublink: [
            { name: "Starter", link: "/" , sublinkid :  "Starter"},            
            { name: "Puppy", link: "/" , sublinkid :  "Puppy"},
            { name: "Adult", link: "/" , sublinkid :  "z"},            
          ],
        },
        {
          Head: "CAT",
          sublinksid : "catlifestages",
          sublink: [
            { name: "Kitten", link: "/" , sublinkid :  "Kitten"},            
            { name: "Adult Cat", link: "/" , sublinkid :  "Puppy"},
          ],
        },
      ]
    },
  ]
  