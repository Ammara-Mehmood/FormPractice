import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Style.css';

function About() {
    const [user,setUser]=useState([
        {
          class1: "rec-card11",
         class2: "first-row11",
         class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
         civic:"Addision Tx",
         class6: "blue-text11",
         civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
        class8: "btns11",
         class9: "danger-btn11",
         civic4:"Scaramento CA",
          class10:"success-btn11",
         civic5:"Clerical",
         class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },  {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required....."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
        {
          class1: "rec-card11",
          class2: "first-row11",
          class3: "rec-txt11",
          class4: "Displaying",
          class5: "blue-text11",
          civic:"Addision Tx",
          class6: "blue-text11",
          civic2:"TxDevo",
          class7: "blue-text11",
          civic3:"01/03/2022",
          class8: "btns11",
          class9: "danger-btn11",
          civic4:"Scaramento CA",
          class10:"success-btn11",
          civic5:"Clerical",
          class11:"rec-txt11",
          p3: " Marathon Staffing is seeking a detail oriented and problem solving Desk Clerk for our client in SacaramentoThis position required.."
    
    
        },
       
      ])
      const [pageNumber,setPageNumber]=useState(0)
      const UsersPerPage = 6;
      const pageVisted = pageNumber * UsersPerPage;
      const DisplayUser = user.slice(pageVisted, pageVisted + UsersPerPage).map((e)=>{
        return <div>
        <div className={e.class1}>
        <div className={e.class2}>
          <p className={e.class3}>
         Receptionist
          </p>
          <div className={e.class4}>
            <a className={e.class5} href="">{e.civic}</a>
            <a className={e.class6} href="">{e.civic2}</a>
            <a className={e.class7} href="">{e.civic3}</a>
          </div>
        </div>
        <div className={e.class8}>
          <button className={e.class9}>{e.civic4}</button>
          <button className={e.class10}>{e.civic5}</button>
        </div>
        <p className={e.class11}>
        {e.p3}
        </p>
      </div>
    </div>
      })
      const pageCount = Math.ceil(user.length / UsersPerPage)
      const PageHandle = ({ selected }) => {
        setPageNumber(selected);
      }
      
  return (
    <div>
    <div>
    </div>
      <div className="secondinput">
        <input type="text" placeholder="Job Title & Keywords" className="newclass"></input>
        <input type="text" placeholder="Any Job Categories" className="newclass" ></input>
      </div>
      <div className="secondinputpart2">
        <input type="text" placeholder="Loaction"></input>
        <input type="text" placeholder="Distance"></input>
        <input type="text" placeholder="Posted Any Data"></input>
      </div>
      <div className="Searching-btn">
        <button className="searchbtn1">Search Now</button>
        <button className="searchbtn">Reset</button>
      </div>
      <div class="job-cata11">
        <div className="jobbbb">
          <h1 className="job-title" style={{ fontWeight: 200 }}> Job Title</h1>
          <div className="location-post">
            <p className="Location">Location Office</p>
            <p className="dateposted">Office</p>
            <p>Date Posted</p>
          </div>
        </div>
      <div className="App">
       {DisplayUser}
      <ReactPaginate
        PreviousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={PageHandle}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
       </div>
       <div>
       <ReactPaginate/>
       </div>
      <div className="footer">
        <p>
          Copyright © 2019 Marathon taffing
        </p>
      </div>
    </div>
  )
}

export default About