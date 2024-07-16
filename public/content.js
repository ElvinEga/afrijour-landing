// This script is injected into LinkedIn pages to interact with the DOM and extract job details

// Add event listener to communicate with popup.js
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "extract") {
    // Execute your extraction logic here
    // You can use DOM manipulation and querying techniques to extract job details
    // Once extracted, send the data back to popup.js
    const jobDetails = extractJobDetails();
    sendResponse({ jobDetails });
  }
});

function extractJobDetails() {
  const jobDetailsContainer = document.querySelector(
    ".job-details-jobs-unified-top-card__container--two-pane"
  );
  if (!jobDetailsContainer) {
    console.error("Job details container not found");
    return null;
  }

  const titleElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-title"
  );
  const title = titleElement ? titleElement.textContent.trim() : "";

  const companyLocationElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__primary-description-container"
  );
  const companyLocationText = companyLocationElement
    ? companyLocationElement.textContent.trim()
    : "";
  const [companyName, location, datePosted] = companyLocationText.split(" · ");

  const jobDetailsElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-insight.job-details-jobs-unified-top-card__job-insight--highlight"
  );
  const jobDetails = jobDetailsElement
    ? jobDetailsElement.textContent.trim()
    : "";

  const jobDescriptionContainer = document.querySelector(
    ".jobs-description__content"
  );
  const jobDescriptionText = jobDescriptionContainer
    ? jobDescriptionContainer.textContent.trim()
    : "";

  const skillsElement = jobDetailsContainer.querySelector(
    ".job-details-jobs-unified-top-card__job-insight-text-button"
  );
  const skills = skillsElement ? skillsElement.textContent.trim() : "";

  const url = window.location.href;

  const rawProfileData = {
    title,
    companyName,
    location,
    datePosted,
    jobDescriptionText,
    skills,
    jobDetails,
    url,
  };

  const profileData = {
    companyName: getCleanText(rawProfileData.companyName),
    title: getCleanText(rawProfileData.title),
    url: rawProfileData.url,
    location: getCleanText(rawProfileData.location),
    datePosted: getCleanText(rawProfileData.datePosted),
    jobDescriptionText: getCleanText(rawProfileData.jobDescriptionText),
    skills: getCleanText(rawProfileData.skills),
    jobDetails: getCleanText(rawProfileData.jobDetails),
  };

  console.log("Extracted job details:", profileData);
  return profileData;
}
const getCleanText = (text) => {
  const regexRemoveMultipleSpaces = / +/g;
  const regexRemoveLineBreaks = /(\r\n\t|\n|\r\t)/gm;

  if (!text) return null;

  const cleanText = text
    .replace(regexRemoveLineBreaks, "")
    .replace(regexRemoveMultipleSpaces, " ")
    .replace("...", "")
    .replace("See more", "")
    .replace("See less", "")
    .trim();

  return cleanText;
};
