const ieltsDatabase = {
  readingTests: [
    {
      id: "r1",
      title: "Academic Reading Test 1: The History and Evolution of Tea",
      passage: "Tea is the world's most consumed drink, after water. Tension between the historical origins of tea in China and its later global expansion shaped modern trade routes. Legend states that Emperor Shen Nong discovered tea in 2737 BC when wild leaves drifted into his boiling water pot. Over centuries, consumption spread from medicinal use in Asian courts to a massive global commodity driving empires and global commerce.",
      questions: [
        { id: 1, type: "tfng", q: "Tea is consumed more than any other drink in the world.", answer: "False" },
        { id: 2, type: "mcq", q: "Where did tea originate?", options: ["India", "China", "Britain", "Japan"], answer: "China" },
        { id: 3, type: "tfng", q: "Emperor Shen Nong discovered tea in the 28th century BC.", answer: "True" }
      ]
    },
    {
      id: "r2",
      title: "Academic Reading Test 2: Urbanization and Smart Cities",
      passage: "Modern cities are undergoing rapid transformation as populations shift toward metropolitan centers. Smart cities utilize IoT sensors, data analytics, and automated infrastructure to manage traffic flows, energy consumption, and waste management efficiently. Proponents argue this technology drastically cuts carbon footprints, while critics raise concerns about data privacy and digital surveillance.",
      questions: [
        { id: 1, type: "tfng", q: "Smart cities rely entirely on manual traffic management.", answer: "False" },
        { id: 2, type: "mcq", q: "What technology helps manage city energy consumption?", options: ["IoT sensors", "Paper logs", "Manual switches", "Telegraphs"], answer: "IoT sensors" }
      ]
    }
  ],
  writingPrompts: [
    {
      id: "w1",
      task: "Task 2: Some people think that universities should focus exclusively on practical job skills. Others believe higher education's true purpose is to provide knowledge for its own sake. Discuss both views and give your opinion.",
      modelAnswer: "In recent years, the debate over the primary purpose of higher education has intensified..."
    },
    {
      id: "w2",
      task: "Task 1: The chart below shows global renewable energy growth from 2010 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
      modelAnswer: "The provided bar chart illustrates the upward trend in global renewable energy generation over a decade..."
    }
  ],
  speakingCueCards: [
    {
      id: "s1",
      topic: "Describe a time you helped someone in need.",
      bulletPoints: ["When it happened", "Who you helped", "Why you helped them", "And explain how you felt about the experience."]
    },
    {
      id: "s2",
      topic: "Describe a place you love to visit for relaxation.",
      bulletPoints: ["Where this place is located", "How often you go there", "What activities you do there", "And explain why it helps you relax."]
    }
  ],
  listeningModules: [
    {
      id: "l1",
      title: "Listening Test 1: Section 1 - Booking Hotel Accommodation",
      audioDescription: "Audio simulation: Conversation between a customer and a hotel receptionist regarding room reservations and amenities.",
      questions: [
        { id: 1, q: "Name of guest:", answer: "Mr. Harrison" },
        { id: 2, q: "Type of room requested:", answer: "Double room with sea view" }
      ]
    }
  ]
};
