import dayjs from 'dayjs';
import 'dayjs/locale/es';

// Load styles.
import '../scss/style.scss';

// Register service worker.
import './registerServiceWorker';
import { setInterval } from 'timers';

dayjs.locale('es');
const container = document.getElementById('container');

const timer = document.createElement('div');
timer.setAttribute('class', 'clock-ui');

const timerHour = document.createElement('p');
const timerMinute = document.createElement('p');
timerMinute.setAttribute('class', 'ticker-ui');
const timerState = document.createElement('p');

// Format time.
let actualHour = dayjs().format('h');
let actualMinute = dayjs().format('mm');
let actualState = dayjs().format('a');

timerHour.innerHTML = actualHour;
timerMinute.innerHTML = actualMinute;
timerState.innerHTML = actualState;

timer.appendChild(timerHour);
timer.appendChild(timerMinute);
timer.appendChild(timerState);

// Update time and add new time.
setInterval(() => {
  timerHour.innerHTML = '';
  timerMinute.innerHTML = '';
  timerState.innerHTML = '';

  actualHour = dayjs().format('h');
  actualMinute = dayjs().format('mm');
  actualState = dayjs().format('a');

  timerHour.innerHTML = actualHour;
  timerMinute.innerHTML = actualMinute;
  timerState.innerHTML = actualState;

  timer.appendChild(timerHour);
  timer.appendChild(timerMinute);
  timer.appendChild(timerState);
}, 1000);

container.appendChild(timer);
