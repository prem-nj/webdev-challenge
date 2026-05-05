import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
const jobDescription=[
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/042/165/816/non_2x/google-logo-transparent-free-png.png",
    "companyName": "Google",
    "datePosted": "3 days ago",
    "post": "Software Engineer - Backend",
    "tag1": "Full Time",
    "tag2": "Mid-Level",
    "pay": "$85/hour",
    "location": "Mountain View, CA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
    "companyName": "Apple",
    "datePosted": "1 week ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$95/hour",
    "location": "Cupertino, CA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s",
    "companyName": "Amazon",
    "datePosted": "5 days ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$110/hour",
    "location": "Seattle, WA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAX_FfM5u0EdC0j5EOWZCT726NG4sI_Sqsg&s",
    "companyName": "Meta (Facebook)",
    "datePosted": "2 weeks ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full Time",
    "tag2": "Mid-Level",
    "pay": "$90/hour",
    "location": "Menlo Park, CA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fowDVVB8gvcfS-mg-MqvlondQSOE3oPKZQ&s",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Azure DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid-Level",
    "pay": "$88/hour",
    "location": "Redmond, WA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hV5BMf1bjQjJfVXUIEAkvljfW9ELi4kzIg&s",
    "companyName": "Netflix",
    "datePosted": "1 day ago",
    "post": "Frontend React Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$75/hour",
    "location": "Los Gatos, CA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGtN85PJ-mHVr-C04pXsBkeeTvq4sG0DIeQ&s",
    "companyName": "Tesla",
    "datePosted": "6 days ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$100/hour",
    "location": "Austin, TX, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3qSNtPPDG1v7-qv8NXSqYAdD1B9zOHFMDw&s",
    "companyName": "Salesforce",
    "datePosted": "10 weeks ago",
    "post": "CRM Integration Specialist",
    "tag1": "Contract",
    "tag2": "Mid-Level",
    "pay": "$80/hour",
    "location": "San Francisco, CA, USA"
  },
  {
    "brandLogo":"https://logowik.com/content/uploads/images/adobe-inc-a878.logowik.com.webp",
    "companyName": "Adobe",
    "datePosted": "2 days ago",
    "post": "UX/UI Designer",
    "tag1": "Full Time",
    "tag2": "Mid-Level",
    "pay": "$70/hour",
    "location": "San Jose, CA, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    "companyName": "Oracle",
    "datePosted": "1 week ago",
    "post": "Database Administrator",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$92/hour",
    "location": "Austin, TX, USA"
  }
]
  return (
    
    <div className='parent'>
     { jobDescription.map(function(elem,indx){
        return (
        <div key={indx}>

          <Card company={elem.companyName} pay={elem.pay} logo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} location={elem.location}/>;

        </div>
      )})}
  

    </div>
    
  )
}

export default App
