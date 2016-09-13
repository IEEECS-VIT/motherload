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
controllers.schedule=function($scope){
    $scope.flag=0;
    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };
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
    };
controllers.organizers = function($scope){
    $scope.organizer=[
    {
        url:'/images/aayush1.jpg',
        name:'AAYUSH',
        committee: 'PNM'
    },
    {
        url:'/images/aayush2.jpg',
        name:'AAYUSH PODDAR',
        committee: ''
    },
    {
        url:'/images/abhishek.jpg',
        name:'ABHISHEK',
        committee: 'SPONSORSHIP'
    },
    {
        url:'/images/akash.jpg',
        name:'AKASH',
        committee: 'EVENTS'
    },
    {
        url:'/images/akhil.jpg',
        name:'AKHIL',
        committee: 'PNM'
    },
    {
        url:'/images/amit.jpg',
        name:'AMIT',
        committee: 'GC'
    },
    {
        url:'/images/ananya.jpg',
        name:'ANANYA',
        committee: 'RNR'
    },
    {
        url:'/images/animesh.jpg',
        name:'ANIMESH',
        committee: 'STALLS'
    },
    {
        url:'/images/anish.jpg',
        name:'ANISH',
        committee: 'PNM'
    },
    {
        url:'/images/anjali1.jpg',
        name:'ANJALI',
        committee: 'DOCUMENTATION'
    },
    {
        url:'/images/anjali2.jpg',
        name:'ANJALI MISHRA',
        committee: 'MEDIA'
    },
    {
        url:'/images/arjun.JPG',
        name:'ARJUN',
        committee: 'PURCHASE'
    },
    {
        url:'/images/arushi.jpg',
        name:'ARUSHI',
        committee: 'RNR'
    },
    {
        url:'/images/aswath.jpg',
        name:'ASWATH',
        committee: 'DOCUMENTATION'
    },
    {
        url:'/images/bhanu.jpg',
        name:'BHANU',
        committee: 'GC'
    },
    {
        url:'/images/bhaskar.jpg',
        name:'BHASKAR',
        committee: 'PNM'
    },
    {
        url:'/images/deboleena.jpg',
        name:'DEBOLEENA',
        committee: 'GC'
    },
    {
        url:'/images/dhiraj.jpg',
        name:'DHIRAJ',
        committee: 'PNM'
    },
    {
        url:'/images/divyaditya.jpg',
        name:'DIVYADITYA',
        committee: 'EVENTS'
    },
    {
        url:'/images/geerthathanna.jpg',
        name:'GEERTHATHANNA',
        committee: 'SGC'
    },
    {
        url:'/images/golcha.jpg',
        name:'GOLCHA',
        committee: 'RNR'
    },
    {
        url:'/images/gopikrishnan.png',
        name:'GOPIKRISHNAN',
        committee: 'PURCHASE'
    },
    {
        url:'/images/harsh.png',
        name:'HARSH CHANDRA',
        committee: 'FINANCE'
    },
    {
        url:'/images/jerowin.jpg',
        name:'JEROWIN',
        committee: 'SPONSORSHIP'
    },
    {
        url:'/images/karan1.jpg',
        name:'KARAN',
        committee: 'EVENTS'
    },
    {
        url:'/images/kartik1.jpg',
        name:'KARTIK',
        committee: 'HALL'
    },
    {
        url:'/images/khushbu.png',
        name:'KHUSHBU',
        committee: 'RNR'
    },
    {
        url:'/images/nishith.jpg',
        name:'NISHITH',
        committee: 'GC'
    },
    {
        url:'/images/nitish.jpg',
        name:'NITISH',
        committee: 'HALL'
    },
    {
        url:'/images/paramita.jpg',
        name:'PARAMITA',
        committee: 'PNM'
    },{
        url:'/images/pavan.jpg',
        name:'PAVAN',
        committee: 'EVENTS'
    },
    {
        url:'/images/pranav.jpg',
        name:'PRANAV',
        committee: 'EVENTS'
    },
    {
        url:'/images/pranjal.jpg',
        name:'PRANJAL',
        committee: 'PNM'
    },
    {
        url:'/images/priyanka.jpg',
        name:'PRIYANKA',
        committee: 'GC'
    },
    {
        url:'/images/rahul.jpg',
        name:'RAHUL',
        committee: 'SPONSORSHIP'
    },
    {
        url:'/images/rama.jpg',
        name:'RAMA CHANDRA GUPTA',
        committee: 'HALL'
    },
    {
        url:'/images/rashmi.jpg',
        name:'RASHMI',
        committee: ''
    },{
        url:'/images/rishav.jpg',
        name:'RISHAV SHAW',
        committee: 'PNM'
    },{
        url:'/images/ritwika.jpg',
        name:'RITWIKA',
        committee: 'MEDIA'
    },
    {
        url:'/images/riya.jpg',
        name:'RIYA',
        committee: 'GC'
    },
    {
        url:'/images/rola.jpg',
        name:'ROLA',
        committee: 'SGC'
    },
    {
        url:'/images/roop.jpg',
        name:'ROOP SAGAR',
        committee: 'SPONSORSHIP'
    },
    {
        url:'/images/sairam.jpg',
        name:'SAIRAM',
        committee: 'RNR'
    },
    {
        url:'/images/sameer.jpg',
        name:'SAMEER',
        committee: 'GC'
    },
    {
        url:'/images/sandeep.jpg',
        name:'SANDEEP',
        committee: 'PNM'
    },
    {
        url:'/images/santosh.jpg',
        name:'SANTOSH VADDI',
        committee: 'EVENTS'
    },
    {
        url:'/images/sarath.jpg',
        name:'SARATH CHANDRA',
        committee: 'GC'
    },
    {
        url:'/images/sarawagi.jpg',
        name:'SARAWAGI',
        committee: 'EVENTS'
    },
    {
        url:'/images/sarthak.jpg',
        name:'SARTHAK',
        committee: 'SGC'
    },
    {
        url:'/images/saumya.jpg',
        name:'SAUMYA',
        committee: 'EVENTS'
    },
    {
        url:'/images/shivangee.jpg',
        name:'SHIVANGEE',
        committee: 'EVENTS'
    },
    {
        url:'/images/shubham1.jpg',
        name:'SHUBHAM NAIR',
        committee: 'MEDIA'
    },
    {
        url:'/images/shubham2.jpg',
        name:'SHUBHAM',
        committee: 'PNM'
    },
    {
        url:'/images/sohini.jpg',
        name:'SOHINI',
        committee: 'GC'
    },

    {
        url:'/images/sonali.jpg',
        name:'SONALI',
        committee: 'RNR'
    },
    {
        url:'/images/syed.jpg',
        name:'SYED',
        committee: 'PNM'
    },
    {
        url:'/images/tarun.jpg',
        name:'TARUN',
        committee: 'RNR'
    },
    {
        url:'/images/vaishali.jpg',
        name:'VAISHALI',
        committee: 'SALES'
    },
    {
        url:'/images/vamsi.jpg',
        name:'VAMSI',
        committee: 'RNR'
    },
    {
        url:'/images/virangna.jpg',
        name:'VIRANGNA',
        committee: 'PNM'
    },
    {
        url:'/images/vishal.jpg',
        name:'VISHAL',
        committee: 'MEDIA'
    },
    {
        url:'/images/yashweer.jpg',
        name:'YASHVEER',
        committee: 'PNM'
    },
    {
        url:'/images/karan2.jpg',
        name:'KARAN',
        committee: 'PNM'
    },
    {
        url:'/images/kartik2.jpg',
        name:'KARTIK',
        committee: 'SPONSORSHIP'
    }



        ]

};

controllers.accommodation = function($scope){};
controllers.papers = function($scope){};

app.controller(controllers);
