export interface MeetingDetails {
  title: string
  description: string
  startTime: Date
  endTime: Date
  attendeeEmail: string
  organizerEmail: string
  meetingLink?: string
}

export const generateGoogleMeetLink = (): string => {
  // Generate a random meeting ID for Google Meet
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  
  const randomString = (length: number, chars: string) => {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  const part1 = randomString(3, characters)
  const part2 = randomString(4, characters + numbers)
  const part3 = randomString(3, characters)
  
  return `https://meet.google.com/${part1}-${part2}-${part3}`
}

export const createGoogleCalendarUrl = (details: MeetingDetails): string => {
  const formatDateTime = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: details.title,
    dates: `${formatDateTime(details.startTime)}/${formatDateTime(details.endTime)}`,
    details: details.description,
    location: details.meetingLink || '',
    add: details.attendeeEmail
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export const createWhatsAppMessage = (
  recipientName: string,
  meetingDetails: MeetingDetails,
  isForClient: boolean = true
): string => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  if (isForClient) {
    return `Hi ${recipientName}! 

Your consultation call has been scheduled successfully! 🎉

📅 Date: ${formatDate(meetingDetails.startTime)}
⏰ Time: ${formatTime(meetingDetails.startTime)} (IST)
👨‍💻 With: Atul Maurya - Full Stack Developer

📋 Meeting Details:
${meetingDetails.description}

🔗 Meeting Link: ${meetingDetails.meetingLink}

📌 Please save this information:
- Join the meeting 5 minutes early
- Have your project requirements ready
- The meeting link will be active 15 minutes before the scheduled time

Looking forward to discussing your project! If you need to reschedule, please let me know at least 24 hours in advance.

Best regards,
Atul Maurya
📧 ${meetingDetails.organizerEmail}`
  } else {
    return `🔔 NEW CONSULTATION SCHEDULED

📅 Date: ${formatDate(meetingDetails.startTime)}
⏰ Time: ${formatTime(meetingDetails.startTime)} (IST)

👤 Client: ${recipientName}
📧 Email: ${meetingDetails.attendeeEmail}

📋 Meeting: ${meetingDetails.title}
💬 Details: ${meetingDetails.description}

🔗 Meeting Link: ${meetingDetails.meetingLink}

Please confirm this meeting and prepare for the consultation.`
  }
}

export const sendMeetingNotifications = async (
  meetingDetails: MeetingDetails,
  clientPhone?: string
): Promise<void> => {
  const organizerPhone = '919084997180' // Atul's WhatsApp number
  
  // Create messages
  const clientMessage = createWhatsAppMessage('Client', meetingDetails, true)
  const organizerMessage = createWhatsAppMessage('Atul', meetingDetails, false)
  
  // Create calendar URL
  const calendarUrl = createGoogleCalendarUrl(meetingDetails)
  
  // Send to organizer (Atul)
  setTimeout(() => {
    window.open(`https://wa.me/${organizerPhone}?text=${encodeURIComponent(organizerMessage)}`, '_blank')
  }, 1000)
  
  // Send to client if phone provided
  if (clientPhone) {
    const cleanPhone = clientPhone.replace(/\D/g, '')
    setTimeout(() => {
      window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(clientMessage)}`, '_blank')
    }, 2000)
  }
  
  // Open calendar
  setTimeout(() => {
    window.open(calendarUrl, '_blank')
  }, 3000)
}