interface TabContent {
  Bio?: string;
  Education?: string[];
  Expertise?: string[];
  "Fav. Product"?: string;
  "Pro Tip"?: string;
  "Around Town"?: string;
}

interface Person {
  fullName: string;
  role: string;
  img: string;
  tabs: TabContent[];
}

export const peoples: Person[] = [
  {
    fullName: "Nicole Calta",
    role: "Founder + Creative Director",
    img: "/img/Nikki.jpg",
    tabs: [
      {
        Bio: "Nicole graduated from Carsten Institute of Cosmetology in New York City and started her career at Frederic Fekkai’s Fifth Avenue flagship salon. There, Nicole mastered the French haircutting technique training under top celebrity stylists and Frederic Fekkai himself. She was then recruited by two Fekkai alum to join their brand new salon, Brush, in the Flatiron District. After eight years in the City, Nicole returned to her hometown of Lancaster and began her local career at Bristle and Prim. Her work has been featured on The Oprah Winfrey Show, and The Today Show. Nicole styled the cover of Women’s Wear Daily and worked backstage during New York Fashion Week for prestigious designers. Getting to know each client with thorough consultations and precisely sculpting their hair to give effortless movement are key components to Nicole’s signature style. Nicole believes in working with the hair’s natural texture to give each client a personalized look that can be easily replicated at home.",
        Education: [
          "Carsten Institute of Cosmetology; New York, NY",
          "Frederic Fekkai Training Program; New York, NY",
          "Devacurl Academy; New York, NY",
          "Oribe Hair Care Education Styling Workshop; New York, NY",
          "Halo Extensions certification; Reading, PA",
        ],
        Expertise: [
          "Precision cutting",
          "Clipper cuts",
          "Devacurl certified",
          "Blowouts",
          "Event styling",
        ],
        "Fav. Product":
          "I absolutely love anything from Davines' NaturalTech line. Each NaturalTech family focuses on a specific scalp or hair issue. My current go-tos are their Detoxifying Scrub Shampoo followed by the Renewing Conditioning Treatment.",
        "Pro Tip":
          "Beautiful hair is healthy hair, and the health of your hair starts at the scalp. I like to do an at-home detoxifying scalp scrub followed by a hair mask at least once a month. It removes buildup from products and pollution, and allows your hair to absorb all the key ingredients in your hair mask and products!",
        "Around Town":
          "My family loves going out for breakfast on the weekend at one of downtown’s wonderful restaurants. We usually head to a park or the Lancaster Science Factory afterwards to get out some energy. Being able to enjoy and connect with other local businesses in our free time is what makes Lancaster so special!",
      },
    ],
  },
  {
    fullName: "Lauren Breese",
    role: "Color Director",
    img: "/img/Lauren.jpg",
    tabs: [
      {
        Bio: "Lauren graduated from Jean Madeline Aveda Institute in Philadelphia and began her career at the prestigious Studio CL in Rittenhouse Square. There, she studied Sahag’s signature dry cutting technique and also attended intensive color training at L'Oreal Professional Academy in Manhattan and Goldwell Education Academy. Lauren has styled for Philadelphia Fashion Week and Neiman Marcus’ private designer shows, working with top designers including Carolina Herrera. After a decade long career in Philadelphia, she returned to Lancaster, starting at Bristle and Prim in 2016.  Lauren believes in keeping the integrity of the hair during the color process and specializes in lived in hair color, grey blending, and natural looking color. She has been an essential part of THE CHARLEE’s team since day one and as Color Director, Lauren oversees the salon’s skilled color department. Her philosophy is simple, she listens to her clients and believes the right hair color and cut can be transformative",
        Education: [
          "Jean Madeline Aveda Institute; Philadelphia, PA",
          "L'Oreal Professional Academy color training; New York, NY",
          "Goldwell Education Academy; Baltimore, MD",
          "Halo Extensions certification; Reading, PA",
        ],

        Expertise: [
          "Balayage",
          "Lived-in hair color",
          "Natural grey blending",
          "Dry cutting",
        ],

        "Fav. Product":
          "Oribe’s Hair Alchemy Heatless Styling Balm. It works for all hair types and gives light texture and hold. Try it for an amazing, natural air dried look.",

        "Pro Tip":
          "I love that hair color can also solve texture issues. Need more volume? Add a few highlights. Va-va-voom!",

        "Around Town":
          "When my family and I are not at our cabin, you can find us riding our bikes on local trails, or checking out local breweries!",
      },
    ],
  },
  {
    fullName: "Elly Papadopoulos",
    role: "Associate Color Director",
    img: "/img/Elly.jpg",
    tabs: [
      {
        Bio: "Elly graduated from Pulse Beauty Academy in 2008, where she participated in the Phase II Advanced Education Program. With over 10 years in the industry, Elly has become a sought after colorist in the area. Her love for color has led her to further education at the Wella Master Color Expert program in New York. There, she gained extensive knowledge of the Wella color line and advanced techniques. Having naturally curly hair, Elly loves customizing cuts and educating clients on their curly hair needs. Being certified in Hot Heads Hair Extensions provides Elly the knowledge to transform her clients hair even more, giving them the hair they’ve always dreamed of. Elly prides herself in developing a look to make her clients feel confident and beautiful!",

        Education: [
          "Pulse Beauty Academy; Downington, PA",
          "Devacurl Academy; New York, NY",
          "Wella Academy- Master Color Expert; New York, NY",
          "Hot Heads Hair Extensions; West Chester, NY",
        ],

        Expertise: [
          "Dimensional color",
          "Balayage",
          "Wella Master Color Expert",
          "Devacurl certified",
          "Hot Head extensions certified",
          "Keratin treatments",
        ],

        "Fav. Product": `“I love how versatile Featherbalm is. Use it on wet or dry hair to tame, smooth and hydrate!”`,

        "Pro Tip": `“Extensions can be used for much more than just that extra length. I like to add them to a clients hair to create more volume or to give them a style that would be hard to achieve with their natural hair.”`,

        "Around Town": `“I enjoy date nights at the Belvedere or Pressroom with my husband. We also love to spend nights in with our son or barbecuing with our big Greek family!”`,
      },
    ],
  },
  {
    fullName: "Jennifer Hess",
    role: "Stylist",
    img: "/img/Jennifer.jpg",
    tabs: [
      {
        Bio: "Prior to officially beginning her career in cosmetology, Jennifer worked as a makeup artist for non-profit theatre companies. It was here that she discovered a passion for self expression through appearance and decided to pursue cosmetology full time. She graduated from Empire Beauty School in Lebanon, Pennsylvania before seeking further training at Lords and Ladies Salon and Medical Spa in Sinking Spring. There, she completed their graduate program and went on to work as a stylist for over two years, specializing in bridal styling, French balayage, dimensional blonding, and textured cuts. Jennifer’s focus is enhancing hair’s natural texture and color to showcase each client's unique personality and style.",

        Education: [
          "Empire Beauty School; Lebanon, PA",
          "Lords and Ladies Graduate Program; Sinking Spring, PA",
        ],

        Expertise: [
          "Event styling",
          "French balayage",
          "Specialty foiling",
          "Dimensional color",
          "Textured haircuts",
        ],

        "Fav. Product": `"This is a Texturizing Serum by Davines is unique because it not only texturizes, but also provides lightweight hydration. It’s soft and workable so it avoids that gritty feeling that some texturizers give. It works with air drying as well as blow drying and can be layered with other products as needed. It’s a must have for undone texture volume."`,

        "Pro Tip": `"When shaking out curls, natural or not, put just a dab of Davines' Oi Oil on your hands and rub it in like a lotion. That super thin coat of oil will prevent frizz when while breaking up curls while also giving some extra shine."`,

        "Around Town": `"I live in downtown Lancaster with my cats, Fennec and Freya. We love cozy days at home playing music and reading but I also love exploring the city in search of the best cup of coffee. My current favorites are Square One and Mean Cup. I’m also kind of a nerd so I love hanging out at Troll Market or Farbo."`,
      },
    ],
  },
  {
    fullName: "Anya Fisher",
    role: "Apprentice",
    img: "/img/Anya.jpg",
    tabs: [
      {
        Bio: "Anya graduated from the Lancaster School of Cosmetology and started her career at THE CHARLEE as an apprentice. She loves to express her creativity through hair, and is looking forward to gaining experience and learning from the talented team at THE CHARLEE! In her spare time, Anya is a volleyball coach and enjoys spending time with family and friends, her soon-to-be husband, and her dog, Arlo. Fun fact—Anya lives on a farm and has cows, goats and would love to get a miniature donkey!",

        Education: ["Lancaster School of Cosmetology"],

        "Fav. Product": `"Davines' Curl Moisture Mousse. I finally found a curl mousse that gives my curls definition but keeps them nice and soft!"`,

        "Pro Tip": `"Make sure you are using a shampoo and conditioner that works for your hair type. Davines’ Heart of Glass is perfect for my hair since it keeps my blonde nice and bright while maintaining the health of my hair."`,

        "Around Town": `"I love to do affordable activities in Lancaster! Some of my favorites are going to The PotteryWorks or Beadworks to make jewelry. One of my favorite places to eat is at Issei Noodle—I recommend the Haru Warm Ramen!"`,
      },
    ],
  },
  {
    fullName: "Grace Hawthorne",
    role: "APPrentice",
    img: "/img/Grace.jpg",
    tabs: [
      {
        Bio: "Before perusing  career in Cosmetology, Grace was working in many different industries but always craved being in a creative environment. She found her way to THE CHARLEE by applying for the Salon Coordinator position. After working here for a year and a half, Grace fell in love with the salon scene and decided to take the plunge into industry. Grace is currently enrolled in LSC for a license in Cosmetology.",

        Education: [
          "Currently enrolled in the Lancaster School of Cosmetology. Graduating in December 2024.",
        ],
        Expertise: ["Mullets", "Blowouts", "Color Retouch + Full Color"],

        "Fav. Product": `"I love the Davines’ More Inside This is a Curl Building Serum. Adds so much structure and hold to my curls. Bonus points if you use it with the Davines’ LOVE Curl line."`,

        "Pro Tip": `"If I don’t have the time or energy to do my hair, I’ll throw it into two messy space buns. It’s the perfect style for a lazy girl beauty routine and gets compliments every time."`,

        "Around Town": `"You can find me at a show downtown; Lancaster has a great music scene! Or ice cream…always getting ice cream."`,
      },
    ],
  },
  {
    fullName: "Marie Kojitani",
    role: "Salon Manager",
    img: "/img/Marie.jpg",
    tabs: [
      {
        Bio: "Marie graduated from Fashion Institute of Technology in New York City with a Bachelor’s degree in Fashion Merchandising Management. She began pursuing her career in wardrobe styling and worked for television shows like TLC’s What Not to Wear and NBC’s The Today Show. After fours years in The Big Apple, she moved to Las Vegas and worked for Zappos.com and eventually ended up in Los Angeles. There, she began working as Kelly Clarkson’s assistant stylist, as well as on campaigns for Corona, Samsung, and Reebok. Marie decided to move back to her hometown of Lancaster and is excited to be a part of THE CHARLEE team!",

        Education: ["Fashion Institute of Technology"],

        "Fav. Product": `"I love Oribe's Desertland fragrance—the scent is subtle but still lasts all day!"`,

        "Pro Tip": `"Davines' DEDE Hair Mist has been a game changer for my daughter's hair. It's great for getting tangles and knots out, and for second day hair!"`,

        "Around Town": `"I love walking around downtown with my family—the library, The Fridge, and West Art is where you'll usually find us!"`,
      },
    ],
  },
  {
    fullName: "Meg Miller",
    role: "Salon Coordinator",
    img: "/img/Meg.jpg",
    tabs: [
      {
        Bio: "Prior to coming to THE CHARLEE, Meg worked for the activewear company Lululemon for 5 years. During her time with the company she worked at various store locations including Suburban Square in Ardmore, PA as well as the flagship store in Chicago, IL and most recently back in her hometown of Lancaster at the Lancaster Local location. Working for Lululemon cultivated her love of working in the customer service industry and building connections within the community and those around her. After being a client at THE CHARLEE for a number of years she’s excited to join the team and it’s amazing community it’s built here in Lancaster!",

        Education: ["University of Massachusetts Amherst"],

        "Fav. Product": `"Oribe's Matte Waves Texture Lotion. I try to use as little heat on my hair as possible so I love to throw this on damp hair and let it work it’s magic to bring out my hair’s natural waves while still feeling soft and not stiff."`,

        "Around Town": `"If I’m not at home with my husband binging something on Netflix or reading a book from my ever-growing pile of “to be read” books, my husband and I love to take our two dogs Huxley and Lucy to Buchanan Dog Park followed by some donuts from Beiler’s or burgers from Cabalar (depending on the time of day)."`,
      },
    ],
  },
];
