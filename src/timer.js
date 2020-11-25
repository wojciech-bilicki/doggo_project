import { format } from 'date-fns'

const DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss"

const startTheTimer = () => {
  const timerSpan = document.querySelector('.timer')

  setInterval(() => {
    timerSpan.textContent = format(Date.now(), DATE_TIME_FORMAT);
  }, 1000)
  
}

export default startTheTimer;