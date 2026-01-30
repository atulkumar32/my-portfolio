export const downloadResume = () => {
  const resumeUrl = '/Atul-Maurya-Resume.pdf'
  const fileName = 'Atul-Maurya-Resume.pdf'
  
  // Create a temporary anchor element for download
  const link = document.createElement('a')
  link.href = resumeUrl
  link.download = fileName
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  
  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  // Also open in new tab as fallback
  setTimeout(() => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  }, 100)
}

export const openResumeInNewTab = () => {
  const resumeUrl = '/Atul-Maurya-Resume.pdf'
  window.open(resumeUrl, '_blank', 'noopener,noreferrer')
}

// Alternative download method for better browser compatibility
export const forceDownloadResume = async () => {
  try {
    const resumeUrl = '/Atul-Maurya-Resume.pdf'
    const response = await fetch(resumeUrl)
    const blob = await response.blob()
    
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Atul-Maurya-Resume.pdf'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up the URL object
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Download failed:', error)
    // Fallback to opening in new tab
    openResumeInNewTab()
  }
}