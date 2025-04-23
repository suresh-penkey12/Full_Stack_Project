import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets_2/assets";
import React from "react";

export const AppContext = createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter,setSearchFilter]=useState({
        title:"",
        location:""
    })

    const [isSearched,setIsSearched]=useState(false)

    const [jobs,setJobs]=useState([])

    const [showRecruiterLogin,setShowRecruiterLogin]=useState(false)

    const [showUserLogin,setShowUserLogin]=useState(false)

    // Function to fetch jobs
    const fetchJobs=async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    })


    const value={
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        jobs,setJobs,
        showRecruiterLogin,setShowRecruiterLogin,
        showUserLogin,setShowUserLogin,
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

