var controllers = {};
controllers.main =function($scope){};
controllers.contact =function($scope){};
controllers.events =function($scope){
    // add all categories here and use these arrays with ng repeat to genrate page
    $scope.categoriesFlag=true;
    $scope.eventsFlag=false;
    $scope.events=[];
    $scope.categories=[
        {
            'name':"Workshops",
            'url': "https://res.cloudinary.com/events-gravitas/image/upload/v1444243710/prev/ios2.jpg",
            'events':[
            { 'subcat':'Aeromodelling Workshop',
                'club': 'SAE-VIT',
                'description':'The workshop will be organized in partnership with AerotriX, A division of Skyfi EducationLabs Pvt. Ltd.It will be a two days workshop. On the first day a lecture will be given on technical details about fabrication of Quad copter and thereafter fabricationof quad copter will start. On the second day fabricationwill be done, testing of fabricated quad copter will take place.'

            },
            {
                'subcat':'Matlab',
                'club':'ASME VIT, ISTE',
                'description':"MATLAB- The MATLAB platform is optimized for solving engineering and scientific problems. The matrix-based MATLAB language is the world�s most natural way to express computational mathematics.A great resource for the students interested in control design of mechanical systems.Mechanical Engineers of the Design and Manufacturing fields use MATLAB heavily.You can do almost everything in MATLAB, any simulation, plotting, coding, making GUI. That makes it one of the most used software in all graduate schools. Solving assignments, writing codes, plotting graphs, simulating models.MATLAB will be taught according to Mechanical based operations.<br>"+
                "Curriculum<br>"+"Day 1: Details of Matlab tools and hand's on session on Matlab"
            },
            {
                'subcat':'Project X',
                'club':'Computer Society of India- VIT Chapter',
                'description':'Project X is to provide a platform for game developers to come up with games, in a limited amount of time. This is a 3 day Game development workshop. The first two days will be given to all the teams to prototype a game. On the last day we open the floor to gamers.'
            },
            {
                'subcat':'Mozilla Workshop',
                'club':'IEEE-CS',
                'description':'24 Hour continuous workshop-cum-hackathon on web Development taken by the Mozilla Developers, which provides the golden opportunity to the freshers to get the insight knowledge of web dev by the developers. An exposure to vast Mozilla respositories and APIs (of firefox OS). Participants will learn HTML and CSS from basics and will also be exposed to the website development procedures.'
            },
            {
                'subcat':'Cloud Computing',
                'club':'IEEE-WIE',
                'description':"Cloud Computing : Understanding the concepts of cloud computing and it's applications. How to implement this knowledge into projects at college level."
            },
            {
                'subcat':'Kodachrome',
                'club':'Photography Club VIT',
                'description':'Kodachrome is a photography workshop where the basics of nature and wildlife photography will be taught by a workshop on nature and wildlife photography .The expert will teach the participants, from scratch to advanced level of photography. This is to be followed by, an on-spot photography event and to be judged by the expert.'
            },
            {
                'subcat':'CRYPTOGRAPHY WORKSHOP',
                'club':'SIAM(Society for Industrial and Applied Mathematics).',
                'description':"A study on secure communication in the presence of third parties called adversaries.speaker is going to brief and help students code the 'Secret Code'. Major topics will comprise of Micro dots, Crypto scheme comparison, Merging words with images etc to transfer sensitive information and hence has proved a critical factor in success in war and business."
            },
            {
                'subcat':'Ui/UX',
                'club':'VIT ANIMATION CLUB',
                'description':'The workshop aims at educating/empowering the participants with the knowledge of the following software:<br>Adobe Master<br>� Photoshop<br>� Illustrator<br>� After Effects<br>� Indesign'
            },
            {
                'subcat':'Digital image processing',
                'club':'IEEE-WIE, IEEE-SPS',
                'description':'Digital image processing is the processing of image using mathematical operation by using any form of signal processing which is an image a series of images,or a video used in many fields like computer graphics ,pattern recognition,robotics, artificial intelligence etc. So this workshop must interest the student who wants to have a basic knowledge of it.'
            },
            {
                'subcat':'Python and Google App Engine Workshop',
                'club':'ACM VIT',
                'description':'This workshop will begin with the basics of Python. Participants will then be introduced to Google App Engine, and be shown the benefits of GAE. They will be encouraged to develop their own web app and then be shown how to deploy the app on a Google developer console, with a unique URL.'
            },
            {
                'subcat':'Under The Hood',
                'club':'Computer Society of India- VIT Chapter',
                'description':'students will be taught how to assemble their own computers. The students will get to know how to purchase necessary parts, understand how they work together and eventually learn the skills involved in building a Personal Computer. This workshop will be open to students of all branches. The students will also take turns and work with the various components that go into building the computer.'
            },
            {
                'subcat':'Comic Design Workshop',
                'club':'Creativity Club',
                'description':'In this workshop the speaker will demonstrate how to create comic designs from the basics. All the materials will be provided by us and the participants get to design creative cartoons.'
            },
            {
                'subcat':'3-D Printing',
                'club':'SME',
                'description':'The workshop will be taken in the following 4 interfaces<br>1. basics of 3-D Printing and additive manufacturing, processes, materials and printers used in the process, 3-D Printers set up during the workshop will demonstrate the technology to the students live.<br>2. to basics of CAD software designing and slicing technique.<br>3. focuses specifically on Metal RP (Rapid Prototyping).<br>4 .consisting of 3-D scanning, will showcase state of the art 3-D scanners<br>The students will have the hands-on sessions with the scanners and printers. The participants also get their designed models 3-D printed given to them as mementos!'
            },
            {
                'subcat':'Sensor Development',
                'club':'IEEE VIT Student Chapter',
                'description':'The workshop covers everything about sensors. The topics to be covered are: 1)Introduction 2)Types of sensors 3)How sensor works 4)What are sensor modules 5)How to make sensors 6)Hands-on session to make a custom sensor. The workshop will also include session on basics of arduino, so no prior knowledge is required.'
            },
            {
                'subcat':'Java and Problem Solving Algorithm',
                'club':'IEEE-CS',
                'description':'Workshop involving and training participants to program according to provided specifications, preparing them for several organizations who host programming competitions on a regular basis. Focusing on the best programming practices and time complexity of the programs.'
            },
            {
                'subcat':'Augmented Reality',
                'club':'IEEE-PES',
                'description':' Students work on the AR IDE, build modules which include interfacing camera, identifying markers, overlaying text, image, video, 2D & 3D elements on different types of markers. Further students animate the overlaid elements; interact with them by making responsive ARs. To top it off students will end by building a sample projects that can be taken to modify. Each class explains the steps required to solve a problem, or implement a feature, with code snippets and sample code to use within apps.<br>Topic: 3D graphics<br>Students will learn the difference between 2D and 3D graphics<br>To see how 3D rendering can be extremely helpful to explain science, Static images can also be very helpful in your presentations and papers, and are difficult to create with 2D rendering software (like Inkscape or Illustrator).<br>'
            },
            {
                'subcat':'Pov based led display',
                'club':'IETE',
                'description':"Propeller Display is totally based on a moving led row. This led row is rotating at a rate superior to human's eye remanence, making a dot matrix which seems to float in the air. A motor spins the 'propeller' and a small microcontroller keeps track of time and changes the pattern on LEDs with exact timing to simulate array of LEDs. It is an illusion, but it works nicely.Practical1:ProgramforLEDinterfacing.Practical2:MechanicalAssemblingofPropeller Display.Project3:DigitalClock Project4:FlowerPatternProject5:PAC-manGameProject6:AnalogClock"
            },
            {
                'subcat':'CYBER DISEASE',
                'club':'IETE, IET',
                'description':'In this workshop cyber ethics, email hacking & security, malware attacks, windows system attacks,online data Investigation,credit card frauds & Cases will be discussedThis workshop aims to give Technocrats a basic knowledge of hacking and how to protectyour system against hazardous effects.1. Exposure to Ethical Hacking the latest tools and methods being used bycyber criminals & terrorists and how ethical Hackers can fight them.2. How attacks bypass your second step verification security of emailwithin seconds.3. Reset Windows admin password (Include Window 7,8,10 within secondwith the help of guest account without any softwares.4. Some most live shocking cases solved by i3indya team.5. Career guidance and scope of cyber security by experienced faculty.  1.Fundamental of Ethical Hacking  2 Virtualization & System Cloning  3 Windows Hacking & Security (Win 8 & Win 7)  4 Online Cloud Computer Development  5 Data Hiding Techniques & Investigation  6 Hacking By Batch Programming & Scripting  7 Hacking by Viruses, Trojans, Keyloggers & Spywares  8 Google Database Hacking  9 Proxy Server & VPN Technologies  10 Email Hacking & Security Issues  11 Facebook Hacking & Security  12 Website & Database Hacking Attacks  13 Android Hacking & Security14 Credit Card Frauds & Cases15 Case Study ( Live Demo By i3indya Team )'
            },
            {
                'subcat':'Sixth Sense',
                'club':'Indian Society For technical Education (ISTE VIT)',
                'description':'The workshop is a secure platform for students to enter into the field of robotics and work on image processing. It helps the students to learn all the basics and apply them in reality. Lectures, Hands-on sessions and Interactive Session for Problem discussion will take place'
            },
            {
                'subcat':'STOCKGYAAN',
                'club':'Indian Society for Technical Education',
                'description':'Stockgyaan is workshop which provides stock market enthusiasts and management students the knowledge required for getting into the market and being financial advisors, covering all bases including, practicality, feasibility, worldly knowledge etc.'
            },
            {
                'subcat':'Quadcopter workshop',
                'club':'',
                'description':"students in groups of 5, are allowed to fabricate their own quadcopter and fly it after a training session which doesn't last more than 4 hours. This is a two day event, half of the day for theory and remaining for fabrication and flying"
            },
            {
                'subcat':'(Technical /Bio)',
                'club':'IEEE EMBS',
                'description':'On day 1, the participants will be taught the art of streaking and then they will be given media plates and culture for them to streak. After 24 hrs of incubation, the participants with the best streaking done will move to the 2nd round. On day 2, the selected participants will be given media plates and bioluminescent cultures to streak artistically. The 3 best artistic culture plates will be awarded.'
            },
            {
                'subcat':'NANOTECHNOLOGY WORKSHOP',
                'club':'IEEE-EMBS',
                'description':'This workshop aims to gives you a glimpse of how visible nanoparticles can be utilized in detecting invisible biomolecules of interest in healthcare diagnosis. A demonstration on how fiber optics along with nanoparticles can be exploited for biomolecule detection using immunoassays and nucleid acid assays will be held.'
            },
            {
                'subcat':'The Phonegap',
                'club':'IEEE RAS',
                'description':'workshop involves teaching students how to create cross platform applications which can work on android iOS windows and blackberry.'
            },
            {
                'subcat':'ANTENNA DESIGN WORKSHOP',
                'club':'IEEE-MTTS',
                'description':'1day workshop where participants are made aware of basics of antenna and how to design and simulate the antenna using ANSOFT software.'
            },
            {
                'subcat':'Sensored',
                'club':'The Electronics Club',
                'description':"workshop being aims at teaching students about working and applications of various sensors and basic electronics components. We successfully conducted this workshop in Gravitas'15 with the participation of 40 teams(160 students)."
            },
            {
                'subcat':'EAGLE Workshop',
                'club':'TEC-The Electronics Club',
                'description':'A comprehensive, fully hands-on workshop that focuses on the intricacies of PCB Fabrication using softwares such as CadSoft EAGLE(Easily Applicable Graphical Layout Editor ) and NI Ultiboard. Moreover, various approaches to translate the digital sketch to a physical single-layer Printed Circuit Board will be discussed.'
            },
            {
                'subcat':'Internet of things',
                'club':'',
                'description':"IOT has become a major game changer in today's world. Relations with customer and customer satisfaction can be reviewed and enhanced using IOT. It has become more important for entrepreneurs to establish a better relation with customers . The workshop educates a hands on experience on various business applications of IOT for automation and ERP to CRM."
            },
            {
                'subcat':'(Technical/BioInformatics)',
                'club':'',
                'description':'Bio Informatics/ Biomedical /Cancer GenomicsDAY-1The participants are enabled to utilize the data analysis tools and algorithms for analysing biological data specifically involving clustering, association rule mining % modelling followed by tes simulationDAY-2 The participants are provided with unstructured biological data ^ given a NP-based industrial problem to solve. the person/competitor with best/close possible output is awarded & provided with guidance for research & further development.'
            },
            {
                'subcat':'LabVIEW',
                'club':'ISA-VIT',
                'description':'a graphical programming platform that helps engineers scale from design to test and from small to large systems. LabVIEW offers unprecedented integration with all measurement hardware, existing legacy software, and IP while capitalizing on the latest computing technologies. This introductory workshop will be conducted by experts from NATIONAL INSTRUMENTS giving an insight on how LabVIEW works with real-world. The workshop will be followed by a competition in which the students will be given a task. The students will be judged on the basis of the task completion.'
            },
            {
                'subcat':'STAAD or STAAD.Pro',
                'club':'ASME-VIT',
                'description':"Curriculum:Day 1: Introduction to Staad-Pro and tools for staad pro.Day 2:Hand's on session on the software"
            },
            {
                'subcat':'FLOATING CONCRETE',
                'club':'ASCE',
                'description':'This is workshop cum competition, at first participants in a team of 5 will be taught how to make a structure using light weight concrete material, coarse aggregate, rubber scrap etc. which will float on water, then they will be allowed to make a floating structure in a given time constraint and will be given 1 week time for its proper casting. the structure which will bear the maximum load without sinking will be considered as the best structure.'
            },
            {
                'subcat':'(Technical/ Automtive)',
                'club':'SAE-VIT ',
                'description':'This technical workshop will enable the participants to know all they want to about a car. All about inside outs of an automotive vehicle .'
            },
            {
                'subcat':'VLSI DESIGN WORKSHOP',
                'club':'IEEE-SPS, IEEE-CAS',
                'description':"Very-large-scale integration (VLSI) is the process of creating an integrated circuit (IC) by combining thousands of transistors into a single chip. In the workshop we'll be teaching VLSI design using VHDL(a Dataflow language)."
            },
            {
                'subcat':'Catia',
                'club':'ASME/SME VIT',
                'description':' This software is used for simulation of solids. It�s a kind of design software through which an engineer can put forth his ideas in designing of machines.'
            },
            {
                'subcat':'iOS Fusion',
                'club':'APPLE DEVELOPERS GROUP',
                'description':'The focus will be on teaching students the fundamentals behind the application�s code rather than the coding itself. The 2 day event will cover all the necessary aspects of a full fledged working iOS app which students can use as a reference to learn and develop their own apps.'
            }

        ]
        },
        {
            'name':"Builtrix",
            'url':"https://res.cloudinary.com/events-gravitas/image/upload/v1444243708/prev/jenga.jpg",
            'events': [
            {
                'subcat':'Contraption (Bitzer)',
                'club':'ASCE, Creativity Club, Spartans, ESquare',
                'description': 'Think intelligent: Make use of the following objects in this module to the best as possible � CANDLE, SPOON, BOOK, MOBILE, '+'CLOTHESPIN, BRICK etc... Put your basic engineering skills to test with so many twists and turns. And then all you need is planning, innovation,'+ 'efficiency in steps and use of material to stay in the reckoning. '+
                'Remarks: Combine with Crerativity Club, Spartns, Esquare.( 4 clubs). Increase Prize Money. PREMIUM! (MOU should be crisp)'

            },
            {
                'subcat': 'Zenith',
                'club':'ASCE',
                'description':'The participants will be given an arc on which they have to construct a bridge using maximum 30 bricks with gravel, sand and small'+ 'stones for the support. there will also be a time barrier of 30 minutes. after the time is over, the strength of the bridge will be tested using'+ 'weights.'

            },
            {
                'subcat': 'Build to Destroy',
                'club': 'Creativity Club',
                'description': 'in the event the participant has to build a structure with bottles(empty, filled, half filled) and cans. two rival teams will be'+ 'building the structure within 1 min...and then they have to break each others structures with a tennis ball in round one with hand.'

            },
            {
                'subcat': 'Suspendo',
                'club':'Creativity Club, ASCE',
                'description':'In order to make a suspension bridge(using ice cream sticks) which can handle the maximum load.'+
                'Remarks: Include tensigrity (ASCE) '

            },
            {
                'subcat': 'Trafficking',
                'club':'ASCE',
                'description':'A team consisting of a maximum of 2 players will be allowed to design a path on a rectangular 3D model given using the threads'+ 'provided. The main idea is to construct the most effective path using different routes which will differ on the basis of their assigned speed limits'

            },
            {
                'subcat': 'Jenga',
                'club':'ASCE',
                'description':'participants take  turns to remove a block from a tower and balance it on top, creating a taller and increasingly unstable structure'+ 'as the game progresses. '

            }
        ]
        },
        {
            'name':'Applied Engineering',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243740/prev/robotix2.jpg',
            'events': [
            {
                'subcat':'IC drag race',
                'club':'ASME',
                'description':'There will be two stages for this completion.1)Qualification Round: Slalom-and-Sprint Competitions shall be held on one combined' +'track, by individual runs, with Best Elapsed Times determining Seeding for Bracket match-up�s in the Baja Event. 2)Drag round: The drag'+ 'Competition shall be vehicle vs. vehicle, on two lanes of full width and matching lengths to the Finish Line'


            },
            {
                'subcat':'Parachute race ',
                'club':'SMCE, Creativity Club',
                'description':'Make a parachute and release from top of the building '

            },
            {
                'subcat':'Aerodominator ',
                'club':'SAE-VIT',
                'description':'Aeromodelling teams from all institutes across India take part in this competition and perform the required. They fly the planes and'+ 'announce the winners. '


            },
            {
                'subcat':'Apollo ',
                'club':'SEDS-VIT',
                'description':'One is the Kerbal space program. Here the participants are given a problem statement of designing a rocket for a particular purpose,'+ 'like orbiting the moon or a moon landing.'+
                'The other round is the challenger round. This round mainly deals with how creatively can the participants solve a problem which is occurring'+
                'in/on  their ship. This is not on the software but a normal question answer session.'

            },
            {
                'subcat':'Reverse engineering ',
                'club':'ASME',
                'description':'The competition inherent in the modern market structure forces firms to produce only the best; simultaneously keeping in mind the'+ 'customers needs. Reverse Engineering, as many of you might already have heard of involves going back to a concept from the prototype. '
            }

        ]
        },
        {
            'name':'Bits and Bytes',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243709/prev/jumble.jpg',
            'events':[
            {
                'subcat':'Code o poly',
                'club':'IEEE',
                'description':'Monopoly wherein coding elements are sold and traded.Using the bought properties one has to code the given program.    '

            },
            {
                'subcat':'Mashup',
                'club':'ACM VIT',
                'description':'In the first round, participants will be given jumbled lines of code, and will need to frame an executable code out of them. '+
                'In the second round, participants will be given pictures with a problem statement at the back, which they will have to relate to code the required'+ 'program. '

            },
            {
                'subcat':'Cook-Off 2.0',
                'club':'Codechef-VIT',
                'description':'This 12 hour event will be providing the participants with a specific set of questions. Based on one�s speed and ability to complete '+ 'a task in the given time frame correctly winners will be decided. '

            },
            {
                'subcat':'Yuvana',
                'club':'Computer Society of India-VIT Chapter',
                'description':'Yuvana is a multitasking competition which incorporates coding under stress brought about by challenges/tasks'

            },
            {
                'subcat':'Amalgamation of jenga',
                'club':'IEEE-VIT',
                'description':'Each Jenga stick will have a certain time written on it. The coder will get to type for the amount of time the team has.So for'+ 'example, the Jenga guy pulls a stick for 2 mins, the coder gets to code for 2 mins uninterrupted after which he\'ll be paused.'
            },
            {
                'subcat':'CODE_A_THON',
                'club':'Indian Society for Technical Education',
                'description':'Code-a-thon is a 24hour coding event where participants will take part in teams of 2 and will be provided with a portal where they'+ 'will be solving questions. '

            },
            {
                'subcat':'Jumble coding',
                'club':'IEEE-CS',
                'description':'The main part of the event was that the keys of the keyboard were jumbled up, that is, they were mapped according to an algorithm'+ 'which the participants had to detect and then write the correct code for the problem. The concept  introduced in Jumble Coding is that the '+'algorithm used is not constant; it changed depending on certain fixed events.'
            },
            {
                'subcat':'Code - relay ',
                'club':'IEEE-VIT',
                'description':'Each participant will be given the 1st question and will be asked to write a code to simulate the output, on finishing the code the'+ 'participant will be given the next question which used the output from the previous question which will act as a compulsory hint for the next'+ 'question.'

            },
            {
                'subcat':'Crack Jack',
                'club':'IETE',
                'description':'This event is about how tricky, yet accurate coding in C,JAVA and Python language you can make, given a problem statement by'+
                'us.All the participants will be given different programs testing their knowledge in C,JAVA and Python(basics).They will have to write the code'+ 'for given programs.'

            },
            {
                'subcat':'Polyglot 2.0 ',
                'club':'IET VIT ',
                'description':'The event shall test and reward programmers that can code challenging codes fluently in C/C++/JAVA/Python. The event will also test'+ 'the fast thinking abilities and solution solving skill of the participant along with there resource management skills.'

            }


        ]
        },
        {
            'name':'Circuitrix',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243738/prev/robotix1.jpg',
            'events': [
            {
                'subcat':'Electra hunt ',
                'club':'IEEE-PES',
                'desc0ription':'Round 1- Questionnaire (pen and paper round based on networks): 15 questions in 15 minutes. '+
                'Round 2- Candidates would be given an output and they will have to design a '+
                'Round 3- The finalists will have to play a treasure hunt round and using the clues.'

            },
            {
                'subcat':'Electri-city',
                'club':'IETE-ISF',
                'description':'The event electri-City is essentially a technical event which involves breaking codes to debug errors and make a functional '+'electrical circuit. '


            },
            {
                'subcat':'Circuitronics ',
                'club':'IETE',
                'description':'The FIRST ROUND is an aptitude test on the fundamentals of digital and analog electronics.'+
                'SECOND ROUND: circuit is given which'+ 'they need to simulate using any one of the softwares '+
                'THIRD FINAL ROUND In this, the participants will have to race against time as they compete with one another to make the best possible circuit. '

            },
            {
                'subcat':'Greatest  Heist ',
                'club':'IETE',
                'description':'Greatest Heist is an exciting classroom maze event wherein the participants (in teams of 2) make their way through a'+
                'challengingobstacle course �  dodging the lasers, crossing the ropes, avoiding different types of sensors : IR sensors, Piezoelectric sensors,'+ 'PIR sensors and much more. '

            },
            {
                'subcat':'Electropedia',
                'club':'TEC- The Electronics Club of VIT ',
                'description':'Round 1 is a pen and paper based round.12 teams will be selected for round 2.'+
                'Round 2 will consist of total 24 questions with 2 questions for each team. '+
                'Round 3 will be long visual connect round in which the remaining teams will be shown 4 series of pictures in which the teams have to give the'+ 'connection between the picture.'
            }
        ]
        },
        {
            'name':'Quiz',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243725/prev/quiz1.jpg',
            'events':[
                {
                    'subcat':'The SciBizTech Quiz',
                    'club':'The VIT Quiz Club',
                    'description':'Combines the three main essences of any technical fest: Science, Business, and Technology. With questions ranging from Isaac Newton'+
                    'to Apple, this quiz is a mainstay of every Gravitas. You will be able to work out most answers and learn quite a few things to impress friends'+
                    'with. Come for this event in teams of 3 or fewer.'

                },{
                    'subcat':'The Buzzer Quiz',
                    'club':'The VIT Quiz Club',
                    'description':'General quiz that is commonly seen in many fests which involves the usage of a buzzer in the final rounds of the event. Participants'+ 'will be required to appear in teams of 3. The Buzzer Quiz'

                },
                {
                    'subcat':'LIVE QUIZ-UP',
                    'club':'The Creativity Club',
                    'description':'Group of 2'+
                    'Round 1-Normal General quiz will be asked in the first round Round 2-Rapid Fire round will be conducted Round 3-Answer the question based on the'+ 'video shown on the screen the winner will be choosen on based on the three round '

                },
                {
                    'subcat':'B-Quizzed',
                    'club':'IEEE-VIT',
                    'description':'It is a 2 day quiz-based event that will test the knowledge and awareness of the participants in the world of Business and will pit'+ 'them against each other in this battle of grey cells. it has 3 rounds consisting of pen paper round, rapid fire and betting.'

                },
                {
                    'subcat':'The General Quiz',
                    'club':'The VIT Quiz Club',
                    'description':'This is the standard event present at any tech fest in any college. A mixed bag of questions from the fields of India, entertainment, science, Technology etc will be asked. The event will have 2 rounds: written prelims and finals on stage. Prelims will have approximately 25 questions. Pounce and bounce will be used in the finals with about 5 rounds in it, including  theme rounds.'
                },
                {
                    'subcat':'MathBee',
                    'club':'IISE',
                    'description':'Is a mathematics quiz competition organised by Sakshi SpellBee (India SpellBee) Foundation. It comprises of written as well as oral'+ 'maths questions in 3 different rounds. It is a 2 day event and would be conducted during pre-Gravitas events. Participants include maximum of'+ 'school students from whole south India and the internals from VIT. MathBee would be the first of its kind in whole of south indian colleges. The'+ 'winners will be provided with merit certificates from India SpellBee and cash prizes.'

                }
            ]
        },
        {
            'name':'Robotics',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243740/prev/robotix2.jpg',
            'events':[
            {
                'subcat':'roboWARS',
                'club':'roboVITics',
                'description':'Sparks, battles and zest is all what roboWARs is about. The individual team prepares a fighting bot. Then according to the fixtures'+ 'generated matches are done. The whole procedure is round based. A total of 3 rounds are planned with the final round of royal rumble for which only'+'6 bots would qualify. Round two and round three will be knockout rounds. '

            },
            {
                'subcat':'PacMan',
                'club':'ISA',
                'description':'The event will be conducted in a team of two. A gesture controlled robot will be provided to participants (If they want they can'+ 'bring their own robot). It would basically follow the pac-man game. Some balls will be kept in a maze structure that will have to be collected by'+ 'moving the robot. Now for the challenge, organizers will be using the same robots and if they catch the player-bot then the participant gets out'+ 'and the score is calculated on the basis of the number of balls touched. For the second round other team will be the challengers.'

            },
            {
                'subcat':'The Robo Laser Battles',
                'club':'IEEE-RAS',
                'description':'The Robo Laser Battles is basically a fun event in which robots with a laser genrator and a reciever at one end will compete. Each'+ 'team contains 5 players with remote controls controling the robots. The job is to target the recievers installed on the robots of the opponent'+
                'team. Each hit will score points and the team with maximum points wins. The game is a thrilling event and takes place after dark in an arena.'

            },
            {
                'subcat':'Robo Cricket',
                'club':'ISA',
                'description':'This is the robotic form of the game cricket. In each round 2 participating team each consisting of 3 members, will play against each'+'other. For batting team, only 1 bot is allowed in the arena. Participants are welcomed with their own bots. In case of a failure of the above case,'+'the team has to play with what we are providing. For bowling team, 2 fielding bots will be provided by us, which will be handled by 2 mates. For'+ 'bowling, the remaining mate will have to throw the ball through pipes from the area marked in the arena.'

            },
            {
                'subcat':'Hill Climber',
                'club':'IET',
                'description':'The event will be based around a hill like structure on which the participants would race uphill using their mini bots to be titled'+ 'king of the hill. The objective of the event is to design a robotic mini-locomotive that could climb steep slopes with increasing elevation. Most'+ 'of the mobile robot design by the beginners is based on the fact that the robot will at all time be on a level ground. This event encourages the'+ 'participants to design a robot that can conquer the hills as well.'

            },
            {
                'subcat':'Lanka Reloaded',
                'club':'IEEE-RAS',
                'description':'A fun event consisting a person to use a robotics arm to pick up a ball and drop ot after completing an arena of difficulties and'+ 'hurdles. At the secons round the arena will become more complex and the team woth best time will win'

            }
        ]
        },
        {
            'name':'Management',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243707/prev/ios3.jpg',
            'events':[
            {
                'club':'IEYS',
                'subcat':'TOASTMASTERS INTERNATIONAL',
                'description':'India Emerge Youth Summit 2016 is a summit that is going to be conducted for 5th time in VIT, it is a forum where speakers from'+ 'various fields of interest come and deliver their key note add in order to motivate the youth. Along with that we would like to organize a'+ 'competition (month before IEYS), a grand launch for IEYS(a week before IEYS) and a gala dinner for the team IEYS at the end of the event.'
            },
            {
                'subcat':'Social Innovation Debate',
                'club':'Debate Society VIT',
                'description':'In line with the theme of GraVITas 2016, �Social Innovations�, we intend to provide a platform to students across India to debate the'+'most relevant issues in a way that brings out the best of their ideas. We aim to offer them an opportunity to truly explore their personalities and'+'freely engage with the ideas of others, because it is only by examining oneself that an individual can bloom into the seed that generates change in'+'society. We believe that the VIT Debating tournament can provide just the chance all of these motivated young individuals are looking for after all'+'these are the people who will lead these Social Innovations . '

            },
            {
                'subcat':'Shipwrecked',
                'club':'HINDU EPLUS,ELA',
                'description':'The participants will be given a personality to impersonate as they try to convince the judges that they are the best person to be'+ 'saved from the proverbial storm. For example, a participant will be given the character of Barack Obama, and they have to convince the judge why it'+'should be Obama.'

            },{
                'subcat':'STOCKASTIC',
                'club':'Creativity Club, Bulls and Bears',
                'description':'heated debate dicussion on shares and investments where groups of 5 are formed representing the top companies known and debate on'+ 'them ,more like a business debate.'

            },{
                'subcat':'StartUp Street 2.0',
                'club':'Shield and CSED',
                'description':'StartUp Street 2.0 is the successor of the immensely appreciated event of graVITas\'15, StartUp Street. This event makes up for the'+ 'lack of technical knowledge that hindered the chances of participants to get the investment they wanted. The first day of the event involves guest'+ 'lectures and interactive sessions by investors and experts which focus on the essentials required by a startup during the important phase of'+ 'business plan development, presentation and pitching.'

            },
            {
                'subcat':'Advertisement Making',
                'club':'VIT Spartans',
                'description':'It is an advertisement making competition for students who will be judged by the creativity in marketing and services. Participants'+ 'need to design ,script and create an ad in a stipulated time.For example: PUR -water based purification system in collaboration with US center for'+ 'disease control for commercial market, targeting low income customers This competition judges the participant\'s creativity streak and will enhance'+ 'social innovation among them.'

            },
            {
                'subcat':'Social Hub',
                'club':'HINDU EPLUS',
                'description':'3 round on social issues: <br>'+
                'Round 1 writing <br>'+
                'Round 2 debate/ GD <br>'+
                'Round 3 Poster making<br>'

            },
            {
                'subcat':'SELF',
                'club':'Esquare',
                'description':'SELF is Social Entrepreneurship and Leadership forum where we are trying to promote social innovations and budding Entrepreneurs to'+ 'showcase their creativity, and to create awareness among students regarding startups and entrepreneurship. It will be series of guest lectures from'+'five different verticals.'

            },{
                'subcat':'Startup Fair',
                'club':'SHIELD,CSED',
                'description':'Ever thought of a place which offers you Internships, Mentorships, Connections and an Entrepreneurial Exposure? Here we present'+ 'Startup Fair, the perfect place for all of this. A 2 day Premium Event which features various established startups of different sectors from all'+ 'over India. These startups get a chance to publicize themselves to the students as well as connect with them and select some for internships/jobs'+ 'etc.'

            },{
                'subcat':'SUITS',
                'club':'Creativity Club',
                'description':'Teams of 2 will be made to debate in the given Cases They will have to show their talents, convincing skills, etc Judges will give'+ 'points to the teams and only qualified teams will move to next round. 3 rounds will be conducted and winner will be decided '

            },{
                'subcat':'Corporate Innovator',
                'club':'Visual Bloggers Club VIT',
                'description':'Corporate Innovator is a collection of management games to test your business acumen, skills, and knowledge. The game is designed to'+ 'throw the worst at you to bring out the best in you. The participants need to show their caliber, the power of persuasion and the ability to handle'+'pressure. Preparing the participants yourself to withstand the harsh reality of the corporate world.'


            },

            {
                'subcat':'Contender',
                'club':'Visual Bloggers Club VIT',
                'description':'This event is related to the content writing. It will consists of 4 rounds in which the participants will be judged by their writing'+ 'skill. Participant will have to go through the basic theme writing , picture perception test, climax writing, blogging on VBC page. The participant'+ 'will be judged by a faculty and the shortlisted participants of the final round will be judged by the VBC.'


            },{
                'subcat':'Incentivizing speaker',
                'club':'Nature Club',
                'description':'Our young minds have lot of craze for providing solutions to issues faced by our country. Now its time for such minds to socialize'+ 'their conspiracy which could reach the thousands and may incentivize our fellow mates and all others who can hear you. '
            },{
                'subcat':'WOLF of WALL STREET',
                'club':'IEEE-PES',
                'description':'The Wolf of Wall Street is an online virtual stock market game with real time stock exchange from Indian (NSE,BSE) and American'+
                '(NASDAQ,NYSE) stock market. It is your chance to experience and lead the real life market. Event start at the opening of the stock market it is a'+ 'five day event NSE, BSE starts at actual Indian time of share market and NYSE, NASDAQ starts at their actual timing of operation.'

            }
        ]
        },
        {
            'name':'Biotechnology',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243731/prev/random8.jpg',
            'events':[
            {
                'subcat':'Chem e Car',
                'club':'IICHE',
                'description':'An event, which has remained as IIChe\'s premium event for years, chem e car is a platform in which young aspiring minds come'+
                'together to run a car on chemical reactions. A team of 3 people come together with their model of vehicle run solely on chemical reactions. The'+ 'participants are not allowed to use motor or any other conventional sources of primary batteries. '


            },
            {
                'subcat':'Entrepreneurship',
                'club':'IICHE-VIT',
                'description':'Firstly, there will be a session in which we will invite some faculties & entrepreneurs to have some word on the current scenario'+
                'of chemical industry & what is the scope in having a start-up in this particular sector. This will be a team competition having 2 members in a'+
                'team. We will provide them 2 hours to solve any problem in the current scenario of chemical industry by designing a start-up on it. We will provide'+'them internet for having their research done in given time & pitch their ideas in front of judges within time limit of 5 minutes & 1 minute will be'+'a cross questioning round by judges & participants.'

            },
            {
                'subcat':'True Detective',
                'club':'IEEE-WIE',
                'description':'Round-1: 3 clues are given for tracking back the murder on the campus which will lead the team to the location of the crime in the'+ 'major buildings like sjt, smv or tt.<br>'+
                'Round-2: they will be provided with a set of reactions and depending upon the situation they get they have to apply 3 basic reactions based on'+ 'their knowledge from the given list of chemical reactions (related to forensic analysis) to come to the conclusion.<br>'+
                'Round-3: in this round the 5 teams will be given a sheet and a pen and they have to write their observations, conclusion and inference as to who was guilty, why he/she committed the crime and by which means i.e. how he did it�? '
            },
            {
                'subcat':'Lubrislide',
                'club':'AICHE',
                'description':'Slide will be made and the participants will need to slide an object over the slide by accurately measuring the friction and other considerations like weight of the object etc.'

            },
            {
                'subcat':'FORENSICS 4.0',
                'club':'IET',
                'description':'The first round will consist of participants being tested of their logical and analytical skills in a general scenario.<br>'+
                'The second round will consists of participants being divided into teams, after which they�ll be moving in and around the campus to find in the clues for the murder mystery.<br>'+
                'The third round will consist of participants investigating a murder mystery, as they will interview their suspects and work on the case study which will include the forensics clues.<br>'


            }


        ]
        },
        {
            'name':'Science and Technology',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243714/prev/contraptions.jpg',
            'events':[
            {
                'subcat':'Image Processing in Astrography',
                'club':'SEDS-VIT',
                'description':'The theory session consists of 2 hours of image processing, methods and techniques in astrophotography and basics of visual or'+ 'observational astronomy (through naked eyes, binoculars and telescopes)'+
                'The practical session will commence at the TT rooftop/Ground during the night. This will be divided into several zones and the participants will be visiting all the zones in turns.'

            },
            {
                'subcat':'Junkyard Genius 3.0',
                'club':'Codechef-Vit',
                'description':'Junkyard Genius 3.0 is a legacy event. It was organized in Gravitas-14 & 15 and attracted a huge audience. Over 250 participants registered in previous versions of this event. The event is technical and consists of two rounds. It tests the creativity of the participant as well as his/her knowledge in science.'

            },
            {
                'subcat':'Re-assemble parts of a Computer',
                'club':'Creativity Club, IE(I)',
                'description':'Each team should be given disassembled parts of computer and must be asked to assemble them in proper order. The team which assembles all the parts in proper order in least time should be declared the winner. Along with the disassembled parts some unknown parts should be mixed to confuse the participants.'

            },
            {
                'subcat':'M. Md (MASTERS OF MORSE DECODING) ',
                'club':'IEEE-PES',
                'description':'Questions will be asked to participants where they will be encoding and decoding the morse code (written and audio beeps).'+
                'A message will be given to one of the team members. This message is expected to be communicated with the use of a torch to the other member using morse codes.'
            },
            {
                'subcat':'Snakes and Ladder',
                'club':'IEEE-MTTS',
                'description':'Basically, in this event there will be a huge poster of snakes and ladder laid on the ground and a screen displaying numbers . now the participant has to choose a number from the lot . there will be a question behind every number along with the points being displayed on the screen. if the participant answers the question correctly , he/she will move in the snakes and ladder according to the points they earned.'

            },
            {
                'subcat':'Mystery Maze',
                'club':'IEEE-IAS',
                'description':'First round: Quiz Round It will be a quiz round, where teams will be given 20 questions to solve based on general logical thinking.<br>'+
                'Second Round: Mystery Maze Each team will be asked to pick up a card, each card consists of two questions.'

            }

        ]
        },
        {
            'name':'Informals',
            'url':'https://res.cloudinary.com/events-gravitas/image/upload/v1444243677/prev/dynasty.jpg',
            'events':[
            {
                'subcat':'MINUTE TO WIN IT ',
                'club':'Innovators Quest, Creativity Club',
                'description':'COOKIE FACE:Each player places a cookie on their forehead, and the goal is to get the cookie into your mouth using only your facial muscles in under 1 minute. No hands.<br>'+
                'STACK IT UP:Players must stack 25 pennies in under a minute using only one hand. <br>'+
                'SUCK IT UP:Players place a straw in their mouth and use suction to transfer a pile of 25 M&M�s chocolate from one plate to another in under one minute. Only one hand may be used to hold the straw. Everyone gets to eat their candy when the round is finished.<br>'+
                'PONG TAC TOE:In This three trays are required and is assigned one to each of the three players. Each player had one minute to bounce ping pong balls down the length of the table and into their tray � 3 in a row (in any direction) wins!<br>'+
                'SCOOP IT UP:Using nothing but a spoon in your mouth, transfer six ping pong balls from one bowl to another) in less than one minute. <br>'+
                'MOVIN� ON UP: Each player starts with a stack of 25 red cups with one blue cup at the top of the stack. Start by moving the top blue cup to the bottom of the stack, and continue moving cups from the top to the bottom until the blue cup is back at the bottom of the stack again. <br>'+
                'NUTSTACKER:Thread five hex nuts onto a wooden stick. Using only one hand on the stick, stack up all of the nuts in under one minute. Only two players compete per round.<br>'+
                'DEFY GRAVITY:Using only one hand, players must keep two or even three balloons from touching the ground for one minute.<br>'

            },
            {
                'subcat':'THE AMAZING RACE',
                'club':'ISTE',
                'description':'The Amazing Race is inspired by the TV Show, TAR, which will require the participants to race around the campus by solving clues based on their technical knowledge and performing some technical tasks to find the next clue. The event overall is informal, but technical touches will be added to it to match with graVITas\'16 and its theme.'

            },
            {
                'subcat':'Game-a-thon',
                'club':'TAG',
                'description':'Is an e-sport tournament which is organized every year during gravitas. There will be 5 games , namely DOTA 2, Cs Go, COD 4, FIFA 16 and NFS. It will be a full time event in gravitas. Teams and individuals from all over the country take part and few teams from outside the country take part in this tournament online. Prize pool is huge and attractive to attract any good team for this event. VIT students will get chance to unleash there potential in e sport.'

            },
            {
                'subcat':'Beg Borrow Steal',
                'club':'IE(I)',
                'description':'Round 1: Each group will be given a list of things that they have to collect and submit within the given time interval. They can use any means to collect the items. <br>'+
                'Round 2: Each group will be given a list of funny tasks to perform in front of a crowd and they will have submit videos and pictures of the same. Tasks given will be fun like breaking eggs on someone\'s head!<br>'

            },
            {
                'subcat':'Mini Militia',
                'club':'VIT Spartans',
                'description':'Intense multiplayer combat with up to 6 players online or locally in multiplayer mode. Hear the whiz of bullets flying past your face as you tumble for over. Out smart the enemy with a well placed grenade and watch them explode into bloody confetti. '
            },
            {
                'subcat':'The 13 cards Film Festival',
                'club':'VIT FILM SOCIETY',
                'description':'Is an event that we are planning to organise during this gravitas. This is first time that VIT FILM SOCIETY is organising an event in Gravitas. This event basically is a film festival, where teams would be sending their short films from across the country. Out of which, 13 films will be shortlisted and will be judged. They would be judged on the various technical aspects. Prizes of worth 6000 would be given for different categories.'


            },
            {
                'subcat':'Rubik�s Cube Challenge',
                'club':'Creativity club, TLA',
                'description':'Rubik\'s cube will be given to the participants and the person who takes less time wins it would not be a knockout rounds it will be a league .'

            },
            {
                'subcat':'Segway',
                'club':'Creativity Club',
                'description':'A FREEGO is a battery operated two wheel vehicle where a person stands on it and controls it with their body weight and pressure. It�s an EASY-TO-RIDE vehicle which anyone of us can ride without much of a training. <br>'+
                'Firstly, participants will be taught how to ride the vehicle before the start of the game.<br>'+
                'In this event, two arenas (40 m long) on the road will be created. It has two entry points through which participants will be entering the arena. There will be ropes tied overhead around the area. On the ropes, there will be 10 different TAGS are tied, in the path of the participant. '


            },
            {
                'subcat':'Pillow Fight',
                'club':'Creativity Club',
                'description':'One person from each team will be made to sit on a ft high pole.Mattresses will be laid below the pole . Another person has to hit the opponent sitting on the pole with the help of a pillow. The person to fall first loses.'

            },
            {
                'subcat':'VIT Auto Expo',
                'club':'',
                'description':'It is a celebration of innovation in engineering which will attract large number of automotive enthusiasts from both VIT and across India.'

            },
            {
                'subcat':'HUMAN FOOSBALL',
                'club':'ISTE',
                'description':'Human Foosball is the LIFESIZE version of the table game Foosball. Participants will be playing in teams of 5 and it will be a versus match where teams will try to score maximum goals. A knockout tournament will follow on the final day which will decide the winners'

            },
            {
                'subcat':'Go-Karting',
                'club':'SIAM',
                'description':'Go-Karting is a fun event where people will release their stress. Kart away to happiness by sitting on a mechanical kart. Two Go?Karts will be available to the participants at a time. You can drive across the arena showing off your motor skills. All safety precautions will be taken by our team. And skilled drivers will also be present to guide the participants.'
            },
            {
                'subcat':'Dark Room Game',
                'club':'SPARTANS',
                'description':'Teams will be made up of 6 players. Six (6) players will compete on a side. All players must wear alike tournament neon t-shirt and'+
                'a glow stick. Players may not paint or wear anything which will cover or camouflage either. Players would be given neon bands free of cost . '+
                'The game will be played in a dark arena and that is where neon jerseys and glow sticks come into play. The object of the game is to eliminate all opposing players by getting them "OUT". '

            },
            {
                'subcat':'Laser Tag',
                'club':'CSI-VIT',
                'description':'A safe arena will be built to recreate the experience of Laser Tag ! This event has been successful for previous seasons of GraVITas.'

            }
        ]
        },
        {
            'name':'Online',
            'url':'http://res.cloudinary.com/events-gravitas/image/upload/v1444243746/prev/young3.jpg',
            'events':[
            {
                'subcat':'Riddler',
                'club':'CSI',
                'description':'Having been a huge success over its past 5 editions, it would be fun to have a tech spin off of Riddler. Now coding is something we all have to live with for the next ~4 years. So, in Codein, We can have riddles, visual puzzles, limericks, etc pertaining to SOCIAL ISSUES. Now these �questions�, will be scattered all over the campus. All participants will be provided with their first chit with the riddle and from there on, they have to FIND them. Unlocking the riddle directs them to their next destination which gives them their next clue. '

            },
            {
                'subcat':'Gravitas Premier League ',
                'club':'IEEE-CS',
                'description':'Is an online event where the participants are required to make their own cricket team by buying the players using the amount of money they will be given at the start. There are three rounds in this event and for qualifying from one round to the next, the participant has to win a certain number of matches. Winning or losing a match is purely based on an online simulation between the competing teams. The final round will be an online auction among the top ten teams.'

            },
            {
                'subcat':'Dubsmash Competition',
                'club':'IET',
                'description':'When the world goes crazy over the latest trend dubsmash. What if you can win actually by showing your fun side. This is the most unique in-trend competition of 2016, "Dubsmash Competition"'

            }

        ]
        },
        {
            'name':'SSIC',
            'url':'http://res.cloudinary.com/events-gravitas/image/upload/v1444243745/prev/young2.jpg',
            'events':[
            {
                'subcat':'Bioideathon',
                'club':'SABEST-VIT',
                'description':'This is a technical event. In this event participants will be given bio related problem and they need to give an idea to solve it. The team who comes up with the most innovative and feasible solution wins. For this event they will be judged by our faculty."'
            },
            {
                'subcat':'Urbanization Innovation',
                'club':'',
                'description':'This event mainly focuses on the social sustainable innovation on the concept of smart city .'+
                'There will be different problem statements regarding the problems faced by the people on the existing city infrastructure which need to be solved with an innovative idea covering the smart city concept of the government  and also the carbon credit concept.'
            },
            {
                'subcat':'SOCIAL ENTREPRENEURSHIP',
                'club':'AYUDA',
                'description':"The participants will be provided with a social problem, a day before the event via e-mail. The participants have to come up with an innovative and feasible solution of the given problem, and convert it into a startup at their level. They have to pitch their idea in front of the panel of judges and have to answer the questions regarding their idea and it's feasibility in real life. Points will be awarded based on the idea, pitching and question answer session."
            }
        ]
        }
    ];



    $scope.showEvents=function(i){
        $scope.categoriesFlag=false;
        $scope.eventsFlag=true;
        $scope.events=$scope.categories[i].events;

    }
};

controllers.team =function($scope){
    $scope.chief = [
        {
            'name': 'GV',
            'designation': '',
            'img': 'insert url'
        }
    ];
    // follow the above example for the rest
};
controllers.register =function($scope){};
controllers.sponsors =function($scope){
    $scope.major = [
        {
            'name':'Insert name',
            'img': 'img url'
        }
    ];
    //Do same for other sponsors when they turn up
};
controllers.about =function($scope){};

app.controller(controllers);