interface SubService {
  serviceTitle: string;
  serviceDescription: string;
  stylish: string;
  senior: string;
  director: string;
  lastOne?: Boolean;
}

interface ServiceCategory {
  description: string;
  subServices: SubService[];
}

interface Services {
  [key: string]: ServiceCategory;
}

const servicesData: Services = {
  Cut: {
    description:
      "Our technicians showcase your hair’s unique qualities and embrace your beautiful differences in each cut. We are experts in multiple techniques and personalize the method of cutting for each client. We ensure you will leave your appointment educated and empowered to replicate your custom style at home.",
    subServices: [
      {
        serviceTitle: "Bang Trim",
        stylish: "15",
        senior: "15",
        director: "15",
        serviceDescription: "A clean-up on existing bangs.",
      },
      {
        serviceTitle: "Clean-Up Cut",
        stylish: "30+",
        senior: "35+",
        director: "55+",
        serviceDescription:
          "Tidying up an existing cut around the ears and neck.",
      },
      {
        serviceTitle: "Clipper Cut",
        stylish: "40+",
        senior: "50+",
        director: "62+",
        serviceDescription:
          "The shortest length of cuts. Use of clippers or scissor over comb.",
      },
      {
        serviceTitle: "Haircut",
        stylish: "62+",
        senior: "75+",
        director: "95+",
        serviceDescription:
          "The cut for most, from detailed pixie to long layers. Finished with a blowout.",
      },
      {
        serviceTitle: "Extra Everything Cut",
        stylish: "80+",
        senior: "90+",
        director: "110+",
        serviceDescription:
          "For those with extra density and length that requires a little more time. Finished with a blowout.",
      },
      {
        serviceTitle: "Curly Cut",
        stylish: "75+",
        senior: "85+",
        director: "105+",
        serviceDescription:
          "A specialized cut for naturally wavy to curly hair. Please come with your hair down and in its natural texture.",
      },
      {
        serviceTitle: "Curly Cut Express",
        stylish: "45+",
        senior: "55+",
        director: "75+",
        serviceDescription: "Our Curly Cut with no wash or style.",
      },
      {
        serviceTitle: "Child’s Cut",
        stylish: "37+",
        senior: "45+",
        director: "55+",
        serviceDescription: "12 years old + under.",
      },
      {
        serviceTitle: "Child’s Clipper Cut",
        stylish: "30+",
        senior: "35+",
        director: "40+",
        serviceDescription: "12 years old + under.",
      },
      {
        serviceTitle: "Child’s Curly Cut",
        stylish: "45+",
        senior: "55+",
        director: "70+",
        serviceDescription: "12 years old + under.",
      },
      {
        serviceTitle: "Child’s Curly Cut Express",
        stylish: "35+",
        senior: "40+",
        director: "45+",
        serviceDescription: "12 years old + under.",
        lastOne: true,
      },
    ],
  },
  Style: {
    description:
      "For those times when you don’t want to do your hair yourself, we are here. If you dream of red carpet waves or an effortless chignon, we’d love to create the look you desire. Being a part of your special day is an honor. We pride ourselves on knowledge of trends, yet timeless style, the perfect pair for your wedding hair.",
    subServices: [
      {
        serviceTitle: "Blowout",
        stylish: "50+",
        senior: "55+",
        director: "65+",
        serviceDescription: "Wash and blowout.",
      },
      {
        serviceTitle: "Special Occasion Blowout",
        stylish: "60+",
        senior: "65+",
        director: "75+",
        serviceDescription: "Wash, blowout, and a little extra style.",
      },
      {
        serviceTitle: "Extra Everything Blowout",
        stylish: "60+",
        senior: "65+",
        director: "75+",
        serviceDescription:
          "Wash and blowout. For those with extra density and length that requires a little more time.",
      },
      {
        serviceTitle: "Extra Everything Special Occasion Blowout",
        stylish: "70+",
        senior: "75+",
        director: "85+",
        serviceDescription:
          "Wash, blowout, and a little extra style. For those with extra density and length that requires a little more time.",
      },
      {
        serviceTitle: "Updo",
        stylish: "100+",
        senior: "105+",
        director: "110+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Wedding Trial",
        stylish: "",
        senior: "",
        director: "125",
        serviceDescription: "",
      },
      {
        serviceTitle: "Wedding Style",
        stylish: "",
        senior: "",
        director: "225",
        serviceDescription: "",
        lastOne: true,
      },
    ],
  },
  Color: {
    description:
      "The best way to complement your cut is through your hair color. Every color process is tailored for each client, from thoughtful balayage to the perfect tone. Our highly trained technicians believe beautiful color should fit your lifestyle and require minimal maintenance, while still achieving stunning results.",
    subServices: [
      {
        serviceTitle: "Color Retouch",
        stylish: "80+",
        senior: "90+",
        director: "95+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Hairline Retouch",
        stylish: "45+",
        senior: "50+",
        director: "55+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Full Color",
        stylish: "110+",
        senior: "120+",
        director: "125+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Partial Dimensional Color",
        stylish: "140+",
        senior: "150+",
        director: "170+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Full Dimensional Color",
        stylish: "195+",
        senior: "210+",
        director: "230+",
        serviceDescription: "",
      },
      {
        serviceTitle: "Fashion Colors",
        stylish: "",
        senior: "",
        director: "Consultation",
        serviceDescription: "",
      },
      {
        serviceTitle: "Color Correction",
        stylish: "",
        senior: "",
        director: "Consultation",
        serviceDescription: "",
      },
      {
        serviceTitle: "Toner",
        stylish: "50",
        senior: "50",
        director: "50",
        serviceDescription: "",
      },
      {
        serviceTitle: "Toner Add-on",
        stylish: "35",
        senior: "35",
        director: "35",
        serviceDescription: "",
      },
      {
        serviceTitle: "Brow Tint",
        stylish: "20",
        senior: "20",
        director: "20",
        serviceDescription: "",
      },
      {
        serviceTitle: "Clipper Cut Grey Blending",
        stylish: "50",
        senior: "50",
        director: "50",
        serviceDescription: "",
      },
      {
        serviceTitle: "Color Consultation",
        stylish: "0",
        senior: "0",
        director: "0",
        serviceDescription: "",
      },
      {
        serviceTitle: "Extra Everything Supplies Usage",
        stylish: "",
        senior: "",
        director: "Consultation",
        serviceDescription: "",
        lastOne: true,
      },
    ],
  },
};

export default servicesData;
