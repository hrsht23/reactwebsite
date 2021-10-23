import React from "react";
// import images from "public";

const Home = () => {
    return(
    
        <> 
        <h1>The world’s 3 highest-paid football players in 2021</h1>                           
      <div class="container">
  <div class="row align-items-start">
    <div class="bordar col">
  <img  height="300" width="300" src="data:image/jpeg;base64,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" alt="CR7" />
   </div>
    <div class="bordar col">
<img src="https://c.tenor.com/kSFJhORZMTAAAAAC/cristiano-ronaldo-real-madrid.gif" height="300" width="400" alt="" />    </div>
    <div class=" col">
    <div class="card text-center homeanimate">
  <div class="card-header">
    Ranked as No. 1
  </div>
  <div class="card-body homeanimate">
    <h5 class="card-title">Cristiano Ronaldo</h5>
    <p class="card-text">Manchester United and Portugal (US$125 million)</p>
    <p class="card-text">Endorsements: US$35 million</p>
    <p class="card-text">Age: 34</p>
    <p class="card-text">Salary: US$75 million</p>
    <a href="https://winnersstory.com/cristiano-ronaldo-story/" class="btn btn-primary">Ronaldo's Life Journey</a>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>    </div>
  </div>
  <div class="row align-items-center">
    <div class="bordar col">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBZzg3bcyiKFFt3cfbjVTO6Ftzg4uZD81-g&usqp=CAU" height="300" width="300" alt="" />    </div>
    <div class="bordar col">
<img src="https://i.pinimg.com/originals/43/08/63/43086350644467b02d6ee1d45e4410b4.gif" height="300" width="400" alt="" />    </div>
    <div class=" col">
    <div class="card text-center homeanimate">
  <div class="card-header">
    Ranked as No. 2
  </div>
  <div class="card-body homeanimate">
    <h5 class="card-title"> Lionel Messi</h5>
    <p class="card-text">Paris Saint-Germain and Argentina (US$110 million)</p>
    <p class="card-text">Endorsements: US$20 million</p>
    <p class="card-text">Age: 29</p>
    <p class="card-text">Salary: US$75 million
</p>


    <a href="https://www.barcelona.com/barcelona_tickets/fc_barcelona_football_tickets/players/lionel_messi" class="btn btn-primary">Messi's Life Journey</a>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>    </div>
  </div>
  <div class="row align-items-end">
    <div class="bordar col">
<img src="https://i.pinimg.com/originals/a3/2c/b5/a32cb59ef340073a0aa91bfc90912597.jpg" height="300" width="300" alt="" />    </div>
    <div class="bordar col">
<img src="https://c.tenor.com/iglAUJ9K4_8AAAAC/neymar-brazil.gif" height="300" width="400" alt="" />    </div>
    <div class=" col">
    <div class="card text-center homeanimate">
  <div class="card-header">
    Ranked as No. 3
  </div>
  

  <div class="card-body homeanimate">
    <h5 class="card-title">Neymar Da Silva Santos Júnior</h5>
    <p class="card-text">Paris Saint-Germain and Brazil (US$95 million)</p>
    <p class="card-text">Endorsements: US$15 million</p>
    <p class="card-text">Age: 22</p>
    <p class="card-text">Salary: US$28 million</p>



    <a href="https://www.thefamouspeople.com/profiles/neymar-6840.php" class="btn btn-primary">Neymar's Life Journey</a>
  </div>
  <div class="card-footer text-muted">
  </div>
  
</div>   

 </div>
 <footer className="mt-auto text-white-50 footer">
     <br />
            <p>Cover template by <a href="https://twitter.com/" className="text-white">Harshit Shetty</a>.</p>
        </footer>
  </div>
  
</div>

       
       
</>
    );

};

export default Home;

