import React from 'react'

import Tag from './Tag'

const JobListing = (props) => {
const jobListing = props.jobListing

// accumulating filtering properties
const tags = [jobListing.role,jobListing.level,...jobListing.languages,...jobListing.tools]
  return (
    <div className={`joblisting ${jobListing.new && `new-border`}`}>
        <div className="joblisting-info">
            <img className='joblisting-logo' src={jobListing.logo} alt={jobListing.company} />
            <div className='joblisting-details'>
                <div className='joblisting-badges'>
                    <div className="joblisting-company">{jobListing.company}</div>
                    {jobListing.new && <div className="new-badge">new!</div>}
                    {jobListing.featured && <div className="featured-badge">featured</div>}
                </div>
                <div className='joblisting-position'>{jobListing.position}</div>
                <div className='joblisting-extra'>
                    <div className='joblisting-posted-at'>{jobListing.postedAt}</div>
                    <div className="circle"></div>
                    <div className="joblisting-contract">{jobListing.contract}</div>
                    <div className="circle"></div>
                    <div className="joblisting-location">{jobListing.location}</div>
                </div>
            </div>
        </div>
        <div className="separator"></div>
        <div className="job-listing-tags-container">
            {tags.map((tag,index) => <Tag key={index} tag={tag} addFilterTag={props.addFilterTag}/>)}
        </div>
    </div>
  )
}

export default JobListing