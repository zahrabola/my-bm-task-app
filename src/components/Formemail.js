

const Formemail = () => {
    return(
        <section>
            <div className="container mt-2">
            <form>
                <div className="form-group formname">
                 <label id="fn-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Full Name"
                      />
                </div>
                <div className="form-group">
                 <label id="e-label">Email address</label>  
                   <input
                     type="email"
                     className="form-control" 
                     name="user_email"
                     id="emailform" 
                     placeholder="Email"
                     required
                     />
                </div>
                <div className="form-group">
                    <label id="sub-label">Subject:</label>
                      <input 
                       type="text"
                       name="subject"
                       className="form-control"
                       id="subject"
                       placeholder="Subject"
                       required
                      />
                </div>
               <div className="form-group">
                <label>Disabled Textarea</label>
                 <textarea 
                  className="form-control"
                  name="message"
                  cols="30" 
                  row="50" 
                  id="message"
                  required
                >

                 </textarea>
                </div>
            </form>

            </div>
        </section>
    )
}

export default Formemail