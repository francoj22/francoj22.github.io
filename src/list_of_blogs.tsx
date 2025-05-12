const POSTS = [
  {
    id: "research-methods.html",
    title: "Consciousness. MSCC- Research Methods",
    content: `
        <p>What is the Consciousness, who is talking about it, their interview provides, the interest found about it, all of this you will be able to get started from this article.</p>
        <p>According to the link provided I have chosen “The consciousness”, David Chalmers describes it in his discussion as “being conscious is when there is something it is like to be that being” in other words according to Thomas Nagel defined it in his publication as “is what makes the mind-body problem really intractable”.</p>
        <p>But who is David Chalmers? He is an Australian Philosopher and cognitive scientist specializing in the area of philosophy of mind and philosophy of language. He got an education at Indiana University Bloomington, Lincoln College, Oxford University, and Hofstadter. His famous books include <em>The Conscious Mind</em> published in 1996, <em>Constructing the World</em> in 2012, and <em>The Character of Consciousness</em> in 2010. Right now, he is a professor at New York University and the Australian National University. He gave some conferences about it, explaining that it is a subject of experiences in your mind. Please watch the video <a href="http://www.ted.com/talks/david_chalmers_how_do_you_explain_consciousness">clicking here</a> for more information.</p>
        <p>Thus, consciousness is the way that the mind and body are connected and can define its nature skills by the process of executing it with the finality to find solutions to each problem.</p>
        <p>David also described consciousness in different ways: “easy problems” and “hard problems.” He has defined the easy problems as “abilities to discriminate stimuli or to report information, or to monitor different states, or to control behavior.” On the other hand, the hard problems are defined as “the problem of the experience.” He describes as well that the meaning of his words is “there is something it is like to be them.”</p>
        <p>Therefore, the easy problems could be represented by complex problems where they could be implemented by machines. The author also describes that these problems seem to be no deep problems and one physical system could manage in these senses. However, the complexity of the “hard problems” involves the human experience where he describes that this consciousness includes a mental state and it is associated with a physical system such as the brain.</p>
        <p>The mystery of consciousness looks interesting where the author mentions the hard problems. How do machines take place in these cases? One question provided is how these processes take place in the dark without any state of experience, or clarifying new problems or questions as mentioned by Dr. Howard Gardner.</p>
        <p><strong>Resources:</strong></p>
        <ul>
          <li><a href="https://en.wikipedia.org/wiki/David_Chalmers">Wikipedia: David Chalmers</a></li>
          <li><a href="http://consc.net/chalmers/">Official Website: David Chalmers</a></li>
          <li><a href="http://www.bridgingthegaps.ie/">Bridging the Gaps</a></li>
          <li><a href="http://onlinelibrary.wiley.com/doi/10.1002/9780470998762.ch5/summary">2003: Consciousness and its Place in Nature by David J. Chalmers</a></li>
        </ul>
      `,
    date: "2015",
  },
  {
    id: "english-draughts.html",
    title: "English Draughts. Making a fully working draughts application. MSCC- New and Emerging Technologies ",
    content: `
        <p >The game of draughts is an old game that is still popular to this day. The objective
        of the game is to capture and remove all of the opponent's pieces from the board.
        The game is usually played on an 8x8 board. There are two players red and white.
        Each player has 12 pieces divided divided into three rows of 4. Each piece has rules
        governing how they can move.</p>
        <p><a href="http://www.mastersgames.com/rules/draughts-rules.htm">get more information about the rules here</a></p>

        <p> The next features are taken as consideration:</p>
        <p> ** Force a Custom View to be a square</p>
        <p> ** Add in highlighting to the custom view to show what piece was selected and where it
        can move to</p>
        <p> ** Used Software Development Best Practices with local version control</p>
        
        <p>To accomplish the project the logic was divided in 8 class which are described below </p>
        <p> -Board class : Is where we create the bidimensional board and define the initial positions of the stones/pieces/pion</p>
        <p> -Cell class: which define the cells</p>
        <p> -GameRules class: Here is where all game rules are defined</p>
        <p> -GameStart: Works as the analyser of the board, which do an instance of GameRules</p>
        <p> -GameView: Refers to the View of the application</p>
        <p> -MainActivity: Which is the main class, working as the controller of the app.</p>
        <p> -PlayerEnum and Stone: Which are class helper for the application</p>
        <p><strong>Resources:</strong></p>
        <ul>
          <li><a href="https://developer.android.com/index.html">Official WebSite. Android</a></li>
          <li><a href="http://stackoverflow.com/">Offical WebSite. Stackoverflow</a></li>
        </ul>

      `,
    date: "2015",
  },
  {
    id: "jorney-tracker.html",
    title:
      "Journey-tracker. Building a GPS tracker that will analyse user speed. MSCC- New and Emerging Technologies",
    content: `
        <div class="row">
            <div class="col 12 s6"><img class="responsive-img" src="assets/images/journey1.png" border="0" alt=""></div>
            <div class="col  s6"><img class="responsive-img" src="assets/images/journey2.png" border="0" alt=""></div>
        </div>       
        <p >This project is tasked with building a GPS tracker application where use a custom view and the GPS facilities of an android device</p>
        <p>This application is used to track the user's speed as they travel on a journey.</p>
        <p>In this case the scale used is representative of a car travelling through a city. The speed scale is covered from 0km/h to 60km/h</p>

        <p> The next features are taken as consideration:</p>
        <p> ** As for the graph itself is required to draw two things. First the white lines which 
        denote grades of 10 km/h e.g {10, 20, 30, 40, 50, 60} km/h. </p>
        <p> ** Then the green line that will be a trace detailing the speed of the user
        over the last 100 samples. Note that the line at 100 samples must cover the entire width of the graph<p/>
        <p> ** Enable a mock location.  </p>
        <p> ** Use git repository</p>
        
        
        <p>Well this project was finished sucessfully. However was quick complicate to achieve the average between the route</p>
        <p>PostData: To achieve the mock location was used a mock locations app to generate a route with
        varing speeds. Link Mock Location made by David <a href="https://play.google.com/store/apps/details?id=ru.gavrikov.mocklocations"> Mock Location app</a>  </p>
        <p>&nbsp;</p>
        <!-- .entry-content -->  
        <p><strong>Resources:</strong></p>
        <ul>
          <li><a href="https://www.jayway.com/2012/12/12/creating-custom-android-views-part-4-measuring-and-how-to-force-a-view-to-be-square/">Custom View Sample. Anders Ericsson</a></li>
          <li><a href="http://stackoverflow.com/">Offical WebSite. Stackoverflow</a></li>
        </ul>           
      `,
    date: "2015",
  },
  {
    id: "memetomiaapp.html",
    title:
      "Android App. The company created for entertainment which deliver collections of memes  from different places",
    content: `
  
       
        <div class="row">
            <div class="col s6"><img class="responsive-img" src="assets/images/memetomia1.png" border="0" alt=""></div>
            <div class="col  s6"><img class="responsive-img" src="assets/images/memetomia2.png" border="0" alt=""></div>
        </div>       
        <p>Description : Memetomia allows users to upload and share user-generated content from external social media website. They also can design the content.</p>

        <p><strong>Initial Ideas</strong> :</p>
        <p>The mobile app was focus in the following features:</p>
        <p>Sign up: For keep update your favourite memes and top list by using the facebook sdk</p>
        <p>Sharing it: Which allow to share the most relevant memes with your friends. </p>
        <p>Filters:  It allow to categories it </p>

        <p> 
        My role in this startup was be in charge of study, analyse, design and coding the android mobile app</p>

        <p> I have learnt from this project the following toos: </p>
        <p> Fragments, ListFragments (Changed now by RecyclerView), Volley, How to implement a SDK and Font Desing</p>
        <p> ** Force be with you Memetomia </p>

        <p>&nbsp;</p>

        <p><strong>Resources:</strong></p>
        <ul>
          <li><a href="http://stackoverflow.com/">Offical WebSite. Stackoverflow</a></li>
          <li><a href="https://www.facebook.com/Memetomia/">Offical WebSite. Memetomia</a></li>
        </ul>           
      `,
    date: "2013",
  },
  {
    id: "stream4pro.html",
    title: "Navigation Drawer, Fragment, Login Session",
    content: `
        <a href="https://play.google.com/store/apps/details?id=com.qs.s4p&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="HTML tutorial" alt='Get it on Google Play' style="width:200px;height:100px;border:0;">
        </a>
        <div class="row">
            <div class="col s6"><img class="responsive-img" src="assets/images/stream1.jpg" border="0" alt=""></div>
            <div class="col  s6"><img class="responsive-img" src="assets/images/stream2.jpg" border="0" alt=""></div>
        </div>       
        <p>Stream4Pro was born out of the need for a secure tool utilized by industry professionals for business to manage the increasing amount of content, and to control who sees it.

        The Stream4Pro app allows stream4pro users to:

        - View videos they have received from other stream4pro users 
        - Send streaming and download links for their own videos to other stream4pro users 
        - Share their videos with other stream4pro users</p>
        
        <p>I worked as a team with my colleagues (Juan Diego and Nelson Garcia)</p>
        <p>Worked on a solution envolving navigation bar with video streamming on a core java mobile application, the result were  the creation the first version on Google,  project under the supervision by Roberto Prato.</p>
        <p>The features that we implemented was the sign in, the navigations between the layouts using tabs, fragment, listfragment and navigation drawer.</p> 

        <p><strong>Resources:</strong></p>
        <ul>
          <li><a href="https://developer.android.com/index.html">Official WebSite. Android</a></li>
          <li><a href="http://stackoverflow.com/">Offical WebSite. Stackoverflow</a></li>
        </ul> 
      `,
    date: "2014",
  },
];

export default POSTS;
