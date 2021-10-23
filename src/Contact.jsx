import React from "react";

const Contact = () => {
    return(
         <>                            
        <h1>Contact Us</h1>
        <div class="container animate">
  <div class="row">
    <div class="col align-self-start">
    </div>
    <div class="col align-self-center">
    <form>
  <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label card-body ">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-2">
    <label for="exampleInputPassword1" class="form-label card-body ">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-2">
    <label  class="form-label card-body ">Feedback</label>
    <input type="text" class="form-control" id="text"/>
  </div>
  <div class="mb-2 form-check">
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
    {/* <p class="card-body">Check me out</p> */}
    {/* <label class="form-check-label card-body" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="submit" class="btn btn-primary ">Submit</button>
</form>    </div>
    <div class="col align-self-end">
    </div>
    
  </div>
  
</div>
<footer className="mt-auto text-white-50 footer">
     <br />
            <p>Cover template by <a href="https://twitter.com/" className="text-white">Harshit Shetty</a>.</p>
        </footer>
        
        </>
    );

};

export default Contact;

