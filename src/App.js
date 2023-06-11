import React,{ useState } from 'react'

const UserForm = () => {

    const [userRegistration, setuserRegistratoin] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistratoin({ ...userRegistration, [name] : value});

    }

    
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@gmail\.com$/;
        return emailPattern.test(email);
      };


  
      const handleEmailBlur = (event) => {
          const { name, value } = event.target;
      
          if (name === "email" && !validateEmail(value)) {
            alert("Please enter a valid email address.");
            setuserRegistratoin((prevState) => ({
                ...prevState,
                [name]: ""
              }));
          }
        };

       
    
      
    
    const handleSubmit = (e) =>{
        e.preventDefault();  //prevent data to send somewhere

        if(userRegistration.confirmPassword !== userRegistration.password){
            alert("!!!Both password fields do not match!!!\n Enter password again ");
            return;
        }

    
        const newRecord = { ...userRegistration , id :new Date().getTime().toString() }
        setRecords([ ...records, newRecord]);

        setuserRegistratoin({username:"", email:"", phone:"", password: "", confirmPassword: ""});
    }

    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <div id="main-container">
            <div className="row-containers">
              <label htmlFor="username"> Name </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={userRegistration.username}
                onChange={handleInput}
                name="username"
                id="username"
                required
              />
            </div>

            <div className="row-containers">
              <label htmlFor="email" id="mail">
                {" "}
                Email{" "}
              </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
                onBlur={handleEmailBlur}
                name="email"
                id="email"
                required
              />
            </div>

            <div className="row-containers">
              <label htmlFor="phone"> Phone </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={userRegistration.phone}
                onChange={handleInput}
                name="phone"
                id="phone"
                placeholder="enter 10 digit vaild phone number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="row-containers">
              <label htmlFor="password"> Password </label>
              <br />
              <input
                type="password"
                autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                required
                name="password"
                id="password"
                placeholder="8digit(smallcase+uppercase+number+special)"
              />
            </div>

            <div className="row-containers">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />
              <input
                type="password"
                autoComplete="off"
                value={userRegistration.confirmPassword}
                onChange={handleInput}
                name="confirmPassword"
                id="confirmPassword"
                placeholder='Re-type password'
                required
              />
            </div>

            <button type="submit"> Registration</button>
          </div>
        </form>

        <div className="databox">
          <div className="data">
            <hr />
            <div className="showDataStyle1">
              <div>Name</div>
              <div>Email</div>
              <div>Phone</div>
              <div>Password</div>
            </div>
          </div>
        </div>

        <div className="data">
          {records.map((curElem) => {
            document.querySelector(".databox").style.opacity = 1;
            return (
              <>
                <div className="showDataStyle" key={curElem.id}>
                  <div>{curElem.username}</div>
                  <div>{curElem.email}</div>
                  <div>{curElem.phone}</div>
                  <div>{curElem.password}</div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
}

export default UserForm

