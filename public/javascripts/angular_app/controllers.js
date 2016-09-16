var controllers = {};
controllers.main =function($scope) {};
controllers.speakers=function($scope){
    $scope.speakers=[
        {
            name: 'IEYS',
            speaker_name:'Lalit S. Kanodia',
            photo:'/images/lalit.jpg',
            'designation':'Chairman of Datamatics Group of Companies.\n\nFounder CEO of Tata Consultancy Services (TCS).\n\nRecipient of the Indian Affairs \n\'Indian of the Year\n\' Award for IT, Consulting and BPO services.'
        },{
            name: 'IEYS',
            'speaker_name':'RJ Naved',
            'photo':'/images/rj_naved.jpg',
            'designation':'RJ Naved is a Radio Mirchi host. He has hosted the famous show \'Dilli Ka Don\'. He has won three awards - IRF: Best Sparkler, National Television Award and Indian Icon Award. He is famous for the \'Mirchi Murga\' segment on his radio show.'
        },
        {
            name: 'IEYS',
            'speaker_name':'Benny Prasad',
            'photo':'/images/benny.jpg',
            'designation':'Benny Prasad is an instrumental guitarist from India. He designed the bentar as well as the world\'s first bongo guitar. He has travelled all around the world and has also performed in the Olympics in 2004 and FIFA Football World Cup in 2006.'
        },
        {
            name: 'IEYS',
            'speaker_name':'Mohammed Adeeb',
            'photo':'/images/mohammed_adeeb.jpg',
            'designation':'Former Rajya Sabha MP. Represented India with his statement on \'Necessity of Ending the Economic, Commercial and Financial Blockade against Cuba\' at the 68th session of the United Nations General Assembly.'
        },
        {
            name: 'IEYS',
            'speaker_name':'CK Kumaravel',
            'photo':'/images/ckk.jpg',
            'designation':'CEO and Co-Founder of Naturals. Nationally acknowledged as a leader and trend setter in the Beauty and Hair Salon industry.\n\nHe has taken Naturals to a 200+ crore enterprise, giving rise to over 230 women entrepreneurs and over 500 salons. '
        },
        {
            name: 'IEYS',
            'speaker_name':'Ram Subramanian',
            'photo':'/images/Ram-Subramanian.jpg',
            'designation':'Ram Subramanian is a Mumbai based writer, philosopher, innovator, peace-activist and ad-filmmaker. His ideas and innovations has re-defined dissent and have sparked revolutions, both in the online and real world.'
        },
        {
            name: 'IEYS',
            'speaker_name':'Aseem Trivedi',
            'photo':'/images/aseem.jpg',
            'designation':'Aseem Trivedi (born 17 February 1987) is a political cartoonist and activist, best known for his anti corruption campaign Cartoons Against Corruption. He is a founder member of Save Your Voice, a movement against Internet Censorship in India.'
        },
        {
            name: 'IEYS',
            'speaker_name':"Obadya Ray",
            'photo':"/images/obadya.jpg",
            'designation':"Shaguri Obadya Ray (Born in 1992), is a writer, journalist, corporate communicator and marketer, volunteer for causes and social activist. Born and brought up in India, Obadya is associated with the Indian Student Parliament."
        },
        {
            name: 'IEYS',
            'speaker_name':'Sumit Rajwade',
            'photo':'/images/sumit.jpg',
            'designation':'Sumit Rajwade has been associated with Rediff India for nearly 20 years now. He started his career as a trainee programmer and is now the Vice President Technology for Rediff India.'
        },

        {

            name: 'VIT Rubiks Cube Challenge',
            speaker_name:'Hari Anirudh ',
            photo:'/images/Anirudh.jpg',
            designation:'Candidate delegate at world cube association ' +
            'Assistant Manager at Citicorp Services India Pvt Ltd'
        },
        {
            name:'CRYPTOGRAPHY WORKSHOP',
            speaker_name:'Mr. Somitra Kumar Sanadhya',
            photo:'/images/somitra.png',
            designation:'Assistant Professor at IIIT Delhi since Jan, 2010 and Adjunct Assistant'+
            'Professor at CR Rao AIMSCS, Hyderabad since Oct 2011. Founding member'+
            'of Cryptology Research Group (CRG) at IIIT Delhi.'
        },
        {
            name:'Java And Problem Solving Workshop',
            speaker_name:'Kashish Singhal',
            photo:'/images/Kashish.jpg',
            designation:'Software Development Engineer at Whizdm Innovations Pvt. Ltd'
        },
        {
            name:'Stockgyaan',
            speaker_name:'Mr.Vivek Karwa',
            photo:'/images/vivek.png',
            designation:'Mr. Vivek Karwa is a Certified Personal Financial Planner, Investment Adviser and Trainer. He'+

            'is one of the most reputed and recognized Financial Planner, Investment Advisor and trainer '+

            'across spectrum of clients.'
        }
        /* {
         name:'Do It Yourself',
         speaker_name:'Mr.P Murali',
         photo:'/images/murali.jpg',
         designation:'Director at'+
         'Integrated cellphones technology(ICT),Vellore'

         },*/

    ]

};
controllers.papers=function(scope){};
controllers.accommodation=function(scope){};
controllers.contact =function($scope){};
controllers.events =function($scope, $http) {
    // add all categories here and use these arrays with ng repeat to generate page
    $scope.events = [];
    $scope.myData = [];
    $scope.categories = [];
    $scope.subCategories = [];
    $scope.showCategories = true;
    $scope.categorySelected='';
    $scope.heading='Categories';
    $scope.array=[];
    $scope.showSingleEvent=false;
    $scope.showWorkshops=false;
    $scope.showAllEvents=false;
    $scope.showSubcategories=false;
    $http.get("http://register.vitgravitas.com/api/events/name?q=").then(function (response) {
        $scope.mydata = response.data;
        console.log(response.data);
        $scope.events = $scope.mydata.events;
        for (var i = 0; i < $scope.events.length; i++) {
            var cat = $scope.events[i].category;
            if ($scope.categories.length != 0) {
                var flag = 0;

                for (var j = 0; j < $scope.categories.length; j++) {

                    if (cat == $scope.categories[j]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    $scope.categories.push(cat);
                }
            }
            else {
                $scope.categories.push(cat);
            }

        }
        console.log($scope.categories);
        for (var i = 0; i < $scope.events.length; i++) {
            if ($scope.events[i].subCategory != null) {
                var scat = $scope.events[i].subCategory;
                if ($scope.subCategories.length != 0) {
                    var flag = 0;

                    for (var j = 0; j < $scope.subCategories.length; j++) {

                        if (scat == $scope.subCategories[j]) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 0) {
                        $scope.subCategories.push(scat);
                    }
                }
                else {
                    $scope.subCategories.push(scat);
                }
            }
        }
        console.log($scope.subCategories);

    });
    $scope.showCategory=function(i)
    {
        $scope.categorySelected=$scope.categories[i];
        $scope.showCategories=false;
        $scope.heading=titleCase($scope.categories[i]);
        if(i==0)
        {
            $scope.showWorkshops=true;
            $scope.showAllEvents=false;
            $scope.showSubcategories=false;
        }
        else{
            $scope.showWorkshops=false;
            $scope.showAllEvents=false;
            $scope.showSubcategories=true;
        }
    };
    $scope.showEvent=function(a)
    {
        $scope.singleEvent=a;
        $scope.showSingleEvent=true;
    };
    $scope.showEvents=function(subCatName)
    {
        var i = $scope.subCategories.lastIndexOf(subCatName);
        $scope.showAllEvents=true;
        $scope.showWorkshops=false;
        $scope.showSingleEvent=false;
        $scope.heading=titleCase($scope.subCategories[i]);
        $scope.scat=$scope.subCategories[i];
        $scope.showSubcategories=false;
    };
    $scope.hideEvent=function(){
        $scope.showSingleEvent=false;

    };
    $scope.backToCategories=function(){
        $scope.showWorkshops=false;
        $scope.showCategories=true;
        $scope.showSubcategories=false;
        $scope.heading='Categories';
    };
    $scope.backToSubcategories=function(){
        $scope.showSubcategories=true;
        $scope.showAllEvents=false;
        $scope.heading='Events';
    }
};
function titleCase(x){
    var word = x.charAt(0).toUpperCase()+ x.slice(1);
    return word;
}
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
/*controllers.schedule=function($scope){
    $scope.flag=0;

    $scope.date=
    {
        "tenth": [
            "CODE-A-THON",
            "10:00-16:00",
            "LAB (SJT G17, G18, G19, G20, 216, 217, 218, 219)",
            "",
            "16:00-0:00",
            "LAB (SJT 416, 417, 418, 419",
            "IEYS",
            "8:00-18:00",
            "CHENNA REDDY AUDI (MB G20)",
            "Mozilla Firefox",
            "10:00-0:00",
            "Gallery(SJT 614)",
            "Cloud Computing",
            "8:00-14:00",
            "Kamraj Audi(TT 712,713)",
            "Digital Image Processing",
            "8:00-16:00",
            "SMART CLASS (TT 311, 312)",
            "Cyber Forensic",
            "8:00-16:00",
            "TT GALLERY 1 (TT 28, 29)",
            "Quadcopter",
            "8:00-14:00",
            "TT GALLERY 2 (TT 233, 234)",
            "Floating Concrete",
            "10:00-12:00",
            "SMART(203,204)		",
            "",
            "12:00-16:00",
            "GDN-LAB G07",
            "Speak Up",
            "16:00-20:00",
            "KAMRAJ AUDI (TT 712, 713)	",
            "Antenna Design",
            "8:00-16:00",
            "LAB (TT 232)			",
            "Staad Pro",
            "8:00-14:00",
            "LAB (GDN 153)		",
            "iOS Fusion",
            "14:00-22:00",
            "GALLERY (SJT 412)			",
            "Do it Yourself",
            "8:00-18:00",
            "SMART CLASS (SJT 307, 308)				",
            "UI / UX",
            "14:00-18:00",
            "MB210	"
        ],
        "eleventh": [
            "CODE-A-THON",
            "00:00-10:00",
            "LAB (SJT 216, 217)",
            "IEYS",
            "8:00-18:00",
            "CHENNA REDDY AUDI (MB G20)",
            "Mozilla Firefox",
            "00:00-12:00",
            "GALLERY(SJT 614)",
            "Cryptography",
            "14:00-20:00",
            "GALLERY(SJT 614)",
            "Comic Design",
            "8:00-14:00",
            "CLASS (TT 201, 203)",
            "Sensor Development",
            "16:00-20:00",
            "TT GALLERY 2 (TT 233, 234)",
            "Cyber Forensic",
            "10:00-18:00",
            "Bhagat Singh Gallery SJT 8th floor",
            "Stockgyaan",
            "14:00-18:00",
            "Rajaji Hall MB230",
            "Quadcopter",
            "8:00-14:00",
            "TT GALLERY 2 (TT 233, 234)",
            "Nanotechnology",
            "8:00-12:00",
            "SMART CLASS (SMV 209, 210)",
            "Staad Pro",
            "8:00-14:00",
            "LAB (GDN 153)",
            "Transportation",
            "8:00-16:00",
            "MB210 SMART CLASSROOM",
            "iOS Fusion",
            "14:00-22:00",
            "GALLERY (SJT 412)"
        ],
        "seventeenth": [
            "MATLAB",
            "8:00-10:00",
            "LAB (TT 128, 247)",
            "Under The Hood",
            "16:00-00:00",
            "TT Gallery 2 (TT 233, 234)",
            "Uni Dev",
            "16:00-22:00",
            "SJT 412",
            "Propeller Display",
            "8:00-16:00",
            "KAMRAJ AUDI (TT 712, 713)",
            "RobotiX",
            "10:00-20:00",
            "GALLERY (SJT 614), BHAGAT SINGH GALLERY",
            "Bio Streaking",
            "10:00-14:00",
            "LAB (SMV 216)",
            "Sensored",
            "14:00-22:00",
            "TT GALLERY 1 (TT 28,29)",
            "AERO MODELLING",
            "8:00-12:00",
            "SMART CLASS (CDMM 203)",
            "",
            "12:00-16:00",
            "WORKSHOP ( GDN G04, G05)",
            "3D PRINTING",
            "8:00-16:00",
            "TT GALLERY 2 (TT 233, 234)",
            "MATH BEE",
            "6:00-8:00",
            "CLASSROOM (SJT 401, 402, 403, 404, 405)",
            "",
            "8:00-16:00",
            "GALLERY (SJT 412) CLASSROOM (SJT 401, 402, 403, 404, 405)",
            "GISL",
            "8:00-14:00",
            "CHENNA REDDY (G20)",
            "Prototype",
            "8:00-16:00",
            "TT GALLERY1(TT 28,29)",
            "",
            "16:00-00:00",
            "CS HALL"

        ],
        "eighteenth": [
            "IGTI Conference",
            "10:00-20:00",
            "AMBEDKAR AUDI (TT 18,19)",
            "Python and Google App Engine",
            "16:00-00:00",
            "GALLERY (SJT 412)",
            "Under The Hood",
            "00:00-2:00",
            "TT GALLERY2(TT 223,224)",
            "Propeller Display",
            "10:00-18:00",
            "KAMRAJ AUDI (TT 712, 713)",
            "RobotiX",
            "10:00-18:00",
            "GALLERY (SJT 614), BHAGAT SINGH GALLERY",
            "Bio Streaking",
            "10:00-14:00",
            "LAB SMV 216",
            "AERO MODELLING",
            "8:00-16:00",
            "WORKSHOP ( GDN G04, G05)",
            "Phone Gap",
            "8:00-16:00",
            "TT GALLERY 1 (TT 28, 29)",
            "Sensored",
            "14:00-22:00",
            "TT GALLERY 2 (TT 233,234)",
            "3D Printing",
            "8:00-14:00",
            "TT GALLERY 2 (TT 233,234)",
            "VLSI Lab",
            "12:00-18:00",
            "LAB (TT 238)",
            "MATH BEE",
            "6:00-8:00",
            "CLASSROOM (SJT 401, 402, 403, 404, 405)",
            "",
            "8:00-16:00",
            "GALLERY (SJT 412) CLASSROOM (SJT 401, 402, 403, 404, 405)",
            "GISL",
            "8:00-14:00",
            "CHENNA REDDY (G20)",
            "",
            "18:00-00:00",
            "ANNA AUDI",
            "Prototype",
            "00:00-18:00",
            "CS HALL"
        ],
        "twentieth": [
            "MOKSHA",
            "18:00-00:00",
            "ANNA AUDI"
        ],
        "twentyone": [
            "MOKSHA",
            "18:00-00:00",
            "ANNA AUDI",
            "",
            ""
        ],
        "twentythree": [
            "GISL",
            "18:00-00:00",
            "ANNA AUDI",
            "Shipwrecked",
            "14:00-18:00",
            "CLASS (TT 201, 202)",
            "STOCKASTIC",
            "14:00-18:00",
            "CLASS (TT 205, 206)",

            "Start up street 2.0",
            "10:00-20:00",

            "TT GALLERY 2 (TT 233, 234)",


            "SUITS",
            "14:00-20:00",

            "CLASS (MB 102, 103)",


            "Corporate Innovator",
            "14:00-20:00",

            "CLASS (TT 301, 302, 303)",


            "M. Md",
            "12:00-18:00",
            "CLASS (TT 531,531A)",
            "RC DRAG RACING",
            "12:00-20:00",
            "TT BASKETBALL COURT",

            "BUILD TO DESTROY",
            "14:00-18:00",
            "WOODSTOCK",

            "CAD Modelling",
            "12:00-20:00",
            "LAB (MB 115, 116)",
            "Aerodominator",
            "10:00-16:00",
            "SJT GROUNDS		",
            "SUSPENDO",
            "12:00-18:00",
            "MB BASKETBALL COURT 2		",
            "Jenga Reloaded",
            "12:00-20:00",
            "FOODYS			",
            "Parachute race",
            "12:00-18:00",
            "CLASS (CDMM 302, 303)		",
            "Apollo Infinite",
            "14:00-18:00",
            "CLASS (SJT 503)		",
            "Re-Assemble",
            "12:00-18:00",
            "CLASS (SJT 304, 305)		",
            "Cook off 2.0",
            "12:00-18:00",
            "LAB (SJT 318, 319)		",
            "YUVANA",
            "10:00-18:00",
            "GALLERY (SJT 614)			",
            "Code - relay",
            "12:00-18:00",
            "LAB (SJT 417, 418)		",
            "Electro hunt",
            "14:00-20:00",
            "CLASS (TT 331)		",
            "Greatest  Heist",
            "12:00-20:00",
            "CLASS (TT 415)			",
            "Labomania",
            "10:00-14:00",
            "LAB (SMV G09)	",
            "chem e car",
            "14:00-18:00",
            "MB BASKETBALL COURT	",
            "Chemiclock",
            "12:00-14:00",
            "FOODYS",
            "GAME A THON",
            "00:00-23:59",
            "LAB (SJT G17, G18, G19, G20,  119, 120, 121, 122) (FROM 22-08-26,  22:00 HRS)											",
            "The 13 Cards Fim Festival",
            "12:00-20:00",
            "TT AMPHI			",
            "SEGWAY",
            "12:00-20:00",
            "PARKING LOT INFRONT OF SJT			",
            "PILLOW FIGHT",
            "12:00-20:00",
            "WOODSTOCK			",
            "HUMAN FOOSBALL",
            "10:00-20:00",
            "TT VOLLEYBALL COURT				",
            "Snakes and ladders",
            "14:00-20:00",
            "FOODYS 2		",
            "Laser Tag",
            "12:00-20:00",
            "SJT GROUND			",
            "Dubsmash Competition",
            "10:00-14:00",
            "FOODYS	",
            "INSTA-SHOOTOUT",
            "12:00-20:00",
            "VIT CAMPUS			",
            "Cric-o-bot",
            "14:00-20:00",
            "FOODYS		",
            "Star Party",
            "14:00-20:00",
            "SMART CLASS (TT 311)		",
            "",
            "20:00-2:00",
            "TT ROOFTOP	",
            "VIT DT",
            "10:00-14:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205)	",
            "",
            "14:00-20:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205), SMART CLASS (SJT 107, 108)		",
            "LANKA RELOADED",
            "12:00-18:00",
            "FOODYS 2		",
            "Urbanization Innovation",
            "8:00-16:00",
            "KAMRAJ AUDI (TT 712, 713)			",
            "Java Problem Solving",
            "12:00-20:00",
            "GALLERY (SJT 412)			",
            "PCB Fabrication",
            "12:00-22:00",
            "TT GALLERY 1 (TT 28, 29)				",
            "Asset Creation for Game Development",
            "10:00-22:00",
            "LAB (SJT 219)					",
            "Genesig",
            "10:00-20:00",
            "Ambedkar Audi(TT 18,19)"


        ],
        "twentyfour": [
            "STOCKASTIC",
            "10:00-14:00",
            "CLASS (TT 205, 206)",
            "Start up street 2.0",
            "10:00-20:00",
            "TT GALLERY 1 (TT 28, 29)",
            "Mad-Ad",
            "8:00-12:00",
            "SJT BHAGAT SINGH GALLERY",
            "SUITS",
            "10:00-14:00",

            "CLASS (MB 102, 103)",

            "Corporate Innovator",
            "8:00-14:00",

            "CLASS (TT 301, 302, 303)",
            "ZENITH",
            "8:00-14:00",

            "MB BASKETBALL COURT",

            "BUILD TO DESTROY",
            "14:00-18:00",

            "WOODSTOCK",

            "SUSPENDO",
            "8:00-14:00",

            "MB BASKETBALL COURT",

            "Trafficking",
            "8:00-14:00",

            "MB BASKETBALL COURT 2",

            "Jenga Reloaded",
            "8:00-14:00",

            "FOODYS",

            "RC Drag Racing",
            "10:00-18:00",

            "TT BASKETBALL COURT",

            "Apollo Infinite",
            "10:00-14:00",

            "CLASS (SJT 503)",

            "Ultimate Engineer",
            "10:00-12:00",

            "LAB (SJT 319)",
            "",
            "16:00-18:00",
            "CLASS (SJT 324)",

            "VisualBlog a-thon",
            "16:00-00:00",

            "GALLERY (SJT 412)",

            "Mashup",
            "12:00-16:00",
            "CLASS (SJT 301, 302)",

            "Crack Jack 5.0",
            "12:00-18:00",
            "LAB (SJT 216, 217)",

            "Polyglot 2.0",
            "14:00-18:00",

            "LAB (SJT 319)",

            "Electricity",
            "10:00-14:00",
            "CLASS (TT 504)",
            "Greatest  Heist",
            "10:00-18:00",
            "CLASS (TT 415)",
            "Circuitronix ",
            "10:00-16:00",
            "CLASS (TT 621)",
            "Buzzer quiz",
            "10:00-14:00",

            "CLASS (TT 619)",
            "Live quizup",
            "10:00-16:00",
            "CLASS (SJT 304)",

            "rubik's cube",
            "8:00-20:00",
            "KAMRAJ AUDI (TT 712, 713)",

            "Pitch'-em",
            "10:00-12:00",
            "CLASS (SMV 121)",

            "CHAIN REACTION",
            "10:00-16:00",
            "CLASS (TT 630)",
            "FORENSICS 4.0 ",
            "10:00-18:00",
            "CLASS (TT 524, 523)",


            "Bio-ideathon",
            "8:00-22:00",
            "CLASS (SMV G10)",
            "MINUTE 2 WIN  IT",
            "10:00-18:00",
            "WOODSTOCK",
            "THE AMAZING RACE",
            "10:00-14:00",
            "CLASS (TT 331, 332, 333)",
            "GAME A THON",
            "00:00-00:00",
            "LAB (SJT G17, G18, G19, G20,  119, 120, 121, 122)",
            "MINI MILITIA",
            "10:00-16:00",
            "CLASS (SMV 101, 102)",

            "The 13 Cards Fim Festival",
            "10:00-18:00",
            "TT AMPHI",
            "SEGWAY",
            "10:00-20:00",
            "PARKING LOT INFRONT OF SJT",
            "PILLOW FIGHT",
            "10:00-18:00",
            "WOODSTOCK",
            "HUMAN FOOSBALL",
            "10:00-20:00",
            "TT VOLLEYBALL COURT",
            "Star Party",
            "00:00-4:00",
            "TT ROOFTOP",
            "",
            "14:00-20:00",
            "SMART CLASS (TT 311)",
            "",
            "20:00-00:00",
            "TT ROOFTOP",

            "Snakes and ladders",
            "12:00-18:00",
            "FOODYS 2",
            "Pokemon go",
            "8:00-18:00",
            "VIT CAMPUS",

            "Laser Tag",
            "10:00-18:00",
            "SJT GROUND",
            "Dubsmash Competition",
            "8:00-12:00",
            "FOODYS",
            "INSTA-SHOOTOUT",
            "10:00-18:00",
            "VIT CAMPUS",
            "Robowars",
            "10:00-20:00",
            "FOODYS",
            "Automotive",
            "8:00-16:00",
            "GALLERY (SJT 412)",
            "PAC MAN",
            "8:00-20:00",
            "FOODYS",
            "Cric-o-bot",
            "12:00-18:00",
            "FOODYS ",

            "VIT DT",
            "8:00-14:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205)",
            "",
            "14:00-20:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205), SMART CLASS (SJT 107, 108)",
            "LabVIEW",
            "10:00-16:00",
            "TT GALLERY 1 (TT 28, 29)",
    "Asset Creation for Game Development",
        "12:00-18:00",
    "LAB (SJT 219)",
            "Auto Expo",
            "8:00-22:00",
            "In front of SJT"



        ],
        "twentyfive": [

            "Start up street 2.0",
            "8:00-14:00",

            "TT GALLERY 1 (TT 28, 29)",

            "Social Hub",
            "10:00-14:00",

            "CLASS (TT 205)",

            "Incentivizing speaker",
            "10:00-16:00",
            "CLASS (TT 301)",

            "Mystery Maze",
            "10:00-16:00",
            "SJT GROUNDS",
            "SOCIAL ENTREPRENEURSHIP",
            "10:00-16:00",
            "RAJAJI HALL (MB 230)",
            "ZENITH",
            "8:00-14:00",
            "MB BASKETBALL COURT",
            "BUILD TO DESTROY",
            "14:00-18:00",
            "WOODSTOCK",

            "Trafficking",
            "8:00-14:00",
            "MB BASKETBALL COURT 2",
            "Jenga Reloaded",
            "8:00-14:00",
            "FOODYS",
            "Contraption",
            "8:00-20:00",
            "TT BASKETBALL COURT",
            "Ultimate Engineer",
            "8:00-12:00",
            "CLASS (SJT 324)",
            "Reverse Engineering",
            "12:00-18:00",
            "CLASS (MB 102)",
            "CAD PRO",
            "10:00-16:00",
            "LAB (MB 115, 116)		",
            "Junkyared Genius 2.0",
            "10:00-18:00",
            "CLASS (TT 531, 531A)",
            "Jumble Coding",
            "10:00-16:00",
            "LAB (SJT 318, 319)",
            "Fork The Code",
            "12:00-18:00",
            "CLASS (SJT 304, 305)",
            "Electricity",
            "10:00-14:00",
            "LAB (TT 503)",
            "Circuitronix ",
            "10:00-14:00",
            "CLASS (TT 621)",
            "electropedia",
            "14:00-18:00",
            "CLASS (TT 415)",
            "general QUIZ",
            "8:00-12:00",
            "CLASS (TT 619)",
            "Pitch'-em",
            "10:00-12:00",
            "CLASS (SMV 121)",
            "True Detective",
            "10:00-16:00",
            "CLASS (SMV 130)",
            "Lubrislide",
            "10:00-14:00",
            "FOODYS",
            "THE AMAZING RACE",
            "10:00-16:00",
            "CLASS (TT 331, 332)",

            "GAME A THON",
            "00:00-22:00",
            "LAB (SJT G17, G18, G19, G20,  119, 120, 121, 122)",
            "MINI MILITIA",
            "10:00-16:00",
            "CLASS (SMV 101, 102)",
            "BEG BORROW STEAL",
            "8:00-20:00",
            "TT AMPHI",
            "SEGWAY",
            "10:00-20:00",
            "PARKING LOT INFRONT OF SJT",
            "PILLOW FIGHT",
            "10:00-18:00",
            "WOODSTOCK",
            "HUMAN FOOSBALL",
            "10:00-18:00",
            "TT VOLLEYBALL COURT",
            "Star Party",
            "00:00-4:00",
            "TT ROOFTOP",
            "Snakes and ladders",
            "12:00-18:00",
            "FOODYS 2",

            "rubik's cube",
            "8:00-20:00",
            "KAMRAJ AUDI (TT 712, 713)",
            "Laser Tag",
            "10:00-18:00",
            "SJT GROUND",
            "GravitasPremier League",
            "10:00-16:00",
            "CLASS (TT 414)",
            "INSTA-SHOOTOUT",
            "10:00-18:00",
            "VIT CAMPUS",
            "VIT DT",
            "8:00-12:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205)",
            "",
            "12:00-18:00",
            "CLASS (SJT 101, 102, 103, 104, 105, 109, 118, 124, 125, 126, 127, 201, 202, 203, 204, 205), SMART CLASS (SJT 107, 108)",
            "",
            "18:00-20:00",
            "GALLERY (SJT 412)",
            "Robowars",
            "10:00-20:00",
            "FOODYS",
            "Robo laser battle",
            "14:00-22:00",
            "CLASS SJTG02",
            "Hill climber",
            "12:00-18:00",
            "FOODYS",
            "Photography Workshop",
            "14:00-20:00",
            "SMART CLASS (TT 311)",
            "Automotive",
            "8:00-16:00",
            "GALLERY (SJT 412)",
            "Prototype",
            "12:00-18:00",
            "GALLERY (SJT 614)",
            "Scibiz tech quiz",
            "12:00-18:00",
            "SMART CLASS(TT312)",
            "Best Out Of Waste",
            "10:00-16:00",
            "Woodstock",
            "Management Guru",
            "12:00-18:00",
            "SJT 301"



        ]


    }
    };*/
controllers.organizers = function($scope){
    $scope.teams=[];
    $scope.organizer=[
	{
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798561/organizers16/AKASH_MISHRA_Events.jpg',
        name:'Akash Mishra',
        committee: 'Events'
    },{
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798455/organizers16/Akhil_Ranjan_P___M.jpg',
        name:'Akhil Ranjan',
        committee: 'P & M'
    },{
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798505/organizers16/ANANYA_DAS_R_n_R.jpg',
        name:'Ananya Das',
        committee: 'R & R'
    },
    {
        url:'http://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800389/organizers16/Aayush_media.jpg',
        name:'Aayush Poddar',
        committee: 'Media'
    },
    
    
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798470/organizers16/Amit_Kumar_gc.jpg',
        name:'Amit Kumar',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798464/organizers16/Anant_Goyal_P___M.jpg',
        name:'Anant Goyal',
        committee: 'P & M'
    },
    
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798563/organizers16/Anish_Kumar_P___M.jpg',
        name:'Anish Kumar',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798762/organizers16/ANJALI_Media.jpg',
        name:'Anjali',
        committee: 'Media'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798828/organizers16/Ankur_Jain_R___R.jpg',
        name:'Ankur Jain',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798858/organizers16/ARJUN_C_R_purchase.jpg',
        name:'Arjun C R',
        committee: 'Purchase'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798876/organizers16/Arushi_Jain_R___R.jpg',
        name:'Arushi Jain',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798924/organizers16/ASHWIN_Purchase.jpg',
        name:'Ashwin',
        committee: 'Purchase'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798833/organizers16/ASWATH_media.jpg',
        name:'Aswath Subramanian',
        committee: 'Media'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799095/organizers16/Ayush_Agarwal_web.jpg',
        name:'Ayush Agarwal',
        committee: 'Technical'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799226/organizers16/Ayush_Jain_P___M.jpg',
        name:"Ayush Jain",
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799060/organizers16/Bhanuteja_gc.jpg',
        name:'Bhanuteja',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799155/organizers16/Bhaskar_Chatterjee_P___M.jpg',
        name:'Bhaskar Chaterjee',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799289/organizers16/DBOLEENA_GC.jpg',
        name:'Deboleena',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799273/organizers16/Deepanshu_Dixit_P___M.jpg',
        name:'Deepanshu Dixit',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_center,h_100,w_100/v1473799436/organizers16/Dhiraj_Jhunjhunwala_Design.jpg',
        name:'Dhiraj Jhunjhunwala',
        committee: 'Design'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_center,h_100,w_100/v1473799459/organizers16/Geerththanna_gc.jpg',
        name:'Geerththanna',
        committee: 'SGC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799621/organizers16/GOPI_KRISHNAN_Purchase.jpg',
        name:'Gopi Krishnan',
        committee: 'Purchase'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799525/organizers16/Haarsh_Finance.jpg',
        name:'Haarsh Chandra',
        committee: 'Finance'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799558/organizers16/Hemanth_Varma_S___S.jpg',
        name:'Hemanth Verma',
        committee: 'S & S'
    },

    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798515/organizers16/KARAN_PITTIE_Events.jpg',
        name:'Karan Pittie',
        committee: 'Events'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798629/organizers16/Karan_Sarpal_P___M.jpg',
        name:'Karan Sarpal',
        committee: 'P & M'
    },{
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798697/organizers16/KARTHIK_GOWTHAM_S_n_S.jpg',
        name:'Karthik Gowtham',
        committee: 'S & S'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798697/organizers16/Khushbu_R___R.jpg',
        name:'Khushbu',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798682/organizers16/KUNAL_SANGHVI_Hall.jpg',
        name:'Kunal Sanghvi',
        committee: 'Hall'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798721/organizers16/Nikhil_Mathur_R___R.jpg',
        name:'Nikhil Mathur',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798890/organizers16/Paramita_P___M.jpg',
        name:'Paramita Mazumdar',
        committee: 'P & M'
    },{
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799046/organizers16/PRANAV_ORI_Events.jpg',
        name:'Pranav Ohri',
        committee: 'Events'
    },{
        url:'http://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798989/organizers16/Pranjal_Singh_P___M.jpg',
        name:'Pranjal Singh',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799076/organizers16/PRASOON_GUPTA_R_n_R.jpg',
        name:'Prasoon Gupta',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799148/organizers16/Priyanka_gc.jpg',
        name:'Priyanka',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799230/organizers16/Rashmi_P___M.jpg',
        name:'Rashmi',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799382/organizers16/RITWIKA_CHAKRABORTI_Media.jpg',
        name:'Ritwika Chakraborti',
        committee: 'Media'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799276/organizers16/Riya_Tripathi_sgc.jpg',
        name:'Riya Tripathi',
        committee: 'SGC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799355/organizers16/Rony_P___M.jpg',
        name:'Rony',
        committee: 'Events'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799514/organizers16/Sairam_R___R.jpg',
        name:'Sairam',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799625/organizers16/Sameer_gc.jpg',
        name:'Sameer',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799753/organizers16/SANJU_YAMASANI_Hall.jpg',
        name:'Sanjay Yamasani',
        committee: 'Hall'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799684/organizers16/Sarthak_sgc.jpg',
        name:'Sarthak',
        committee: 'SGC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799804/organizers16/SAUMYA_GUPTA_Events.jpg',
        name:'Saumya Gupta',
        committee: 'Events'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799755/organizers16/Sharath_Chandra_gc.jpg',
        name:'Sharath Chandra',
        committee: 'GC'
    },

    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799925/organizers16/SHIVANGEE_SABHARWAL_Events.jpg',
        name:'Shivangee Sabharwal',
        committee: 'Events'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799859/organizers16/Shrineh_media.jpg',
        name:'Shrineh Namdeo',
        committee: 'Media'
    },
    {
        url:'http://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799881/organizers16/Shubham_Agarwal_P___M.jpg',
        name:'Shubham Agarwal',
        committee: 'P & M'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799987/organizers16/SHUBHAM_NAIR_Media.jpg',
        name:'Shubham Nair',
        committee: 'Media'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799942/organizers16/Shubham_Sarwagi_events.jpg',
        name:'Shubham Sarawagi',
        committee: 'Events'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800027/organizers16/SIDDHANT_GANDHI_R_n_R.jpg',
        name:'Siddhant Gandhi',
        committee: 'R & R'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800036/organizers16/SISTLA_KARTHIK_Hall.jpg',
        name:'Sistla Karthik',
        committee: 'Hall'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800039/organizers16/Sohini_gc.jpg',
        name:'Sohini',
        committee: 'GC'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800067/organizers16/SONALI_R_n_R.jpg',
        name:'Sonali Kashyap',
        committee: 'R & R'
    },

        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800186/organizers16/T_L_R_CH_GUPTA_Hall.jpg',
            name:'T L R CH Gupta',
            committee:'Hall'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800198/organizers16/Tarun_R___R.jpg',
            name:'Tarun Parbhat',
            committee:'R & R'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_center,h_100,w_100/v1473800226/organizers16/Vaishali_Rastogi_Sales.jpg',
            name:'Vaishali Rastogi',
            committee:'Sales'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800272/organizers16/Vamsi_Krishna_R___R.jpg',
            name:'Vamsi Krishna',
            committee:'R & R'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800244/organizers16/VIRANGNA_PAL_P___M.jpg',
            name:'Virangna Pal',
            committee:'P & M'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800371/organizers16/VISHAL_Media.jpg',
            name:'Vishal Tekchandani',
            committee:'Media'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800316/organizers16/Vishwas_Garhwal_sales.jpg',
            name:'Vishwas Garhwal',
            committee:'Sales'
        },
        {
            url:'http://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800419/organizers16/Yash_Prasad_finance.jpg',
            name:'Yash Prasad',
            committee:'Finance'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800357/organizers16/Yashveer_P___M.jpg',
            name:'Yashveer',
            committee:'P & M'
        }


    ];
    /*$scope.arrear = [
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800462/organizers16/Akanksha_M_P___M.jpg',
        name:'Akanksha M',
        committee: 'P & M'
    },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799839/organizers16/Shivam_Mathur_web.jpg',
            name:'Shivam Mathur',
            committee: 'Technical'
        },{
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799700/organizers16/Jerowin_S___S.jpg',
            name:'Jerowin',
            committee: 'S & S'
        },
        {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799634/organizers16/Sandeep_Yadav_P___M.jpg',
            name:'Sandeep Yadav',
            committee: 'P & M'
        }, {
            url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_center,h_100,w_100/v1473799990/organizers16/Syed_Shoeb_P___M.jpg',
            name:'Syed Shoeb',
            committee:'P & M'
        },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799036/organizers16/NITISH_TADIKONDA_Hall.jpg',
        name:'Nitish Tadikonda',
        committee: 'Hall'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800195/organizers16/SREEJITH_Purchase.jpg',
        name:'Sreejith',
        committee: 'Purchase'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473800487/organizers16/ABRAHAM_Purchase.jpg',
        name:'Abraham',
        committee: 'Purchase'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473798677/organizers16/Lakshya_media.jpg',
        name:'Lakshya',
        committee: 'Media'
    },
    {
        url:'https://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799505/organizers16/ROOP_SAGAR_S_n_S.jpg',
        name:'Roop Sagar',
        committee: 'S & S'
    },
    {
        url:'http://res.cloudinary.com/events-gravitas/image/upload/c_thumb,g_north,h_100,w_100/v1473799389/organizers16/Dinesh_Bishnoi_sales.jpg',
        name:'Dinesh Bishnoi',
        committee: 'Sales'
    }
    ];*/
    $scope.formTeam=function(){
        for( var i =0; i<$scope.organizer.length;i++){
            var a=$scope.organizer[i].committee;
            console.log(a);
            var flag=0;
            for(var j=0;j<$scope.teams.length;j++){
                if(a==$scope.teams[j]){
                    flag=1;
                    break;
                }
            }
            if(flag==0)
            {
                $scope.teams.push(a);
            }
        }
        console.log($scope.teams);
    };


};

controllers.schedule=function($scope,$http){
    $scope.schedule=[];
    $scope.selectedDate='10-09-2016';
    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
    console.log('jekt');
    $http.get("http://schedule2016.herokuapp.com/api").then(function (response){
        $scope.mydata=response.data;
        console.log($scope.mydata[0]);
        for(var i=0;i<$scope.mydata.length;i++){
            var x=$scope.mydata[i];

            var y={
                'name': x.name,
                'startDate':x.startDate,
                'startTime': x.startTime[0].split(";"),
                'endTime': x.endTime[0].split(";"),
                'venue': x.venue[0].split(";")
            };
            $scope.schedule.push(y);
        }
        $scope.showSchedule=function(a){
            $scope.selectedDate=a;
        }
    });
};
controllers.accommodation = function($scope){};
controllers.papers = function($scope){};

app.controller(controllers);
